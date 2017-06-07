// modules
const
	DudenSearchApi = require( "../../duden-search-api" ),
	Database = require( "./database.js" ),
	FileSystem = require( "fs" ),
	Path = require( "path" ),
	NarrativeText = FileSystem.readFileSync( Path.resolve( __dirname, "text/text.txt" ), "utf8" ),
	StopWords = JSON.parse( FileSystem.readFileSync( Path.resolve( __dirname, "json/stop-words.json" ), "utf8" ) );


// constants
const RegExWordSplitting = /[^a-zA-Z_öäüß]+/i;


module.exports = class TextAnalyzer {
	constructor ( baseText = NarrativeText ) {
		this.baseText = baseText;
		this.wordList = null;
		this.wordDictArray = null;

		this.db = null;

		this.init();
	}

	init () {
		let splittedText;

		splittedText = TextAnalyzer.splitText( this.baseText );
		splittedText = TextAnalyzer.removeStopWords( splittedText );

		this.wordList = splittedText;
		this.wordDictArray = TextAnalyzer.generateDict( this.wordList, true );
		this.wordDictArray = TextAnalyzer.removeNumbers( this.wordDictArray );

		this.db = new Database();
		this.dudenApi = new DudenSearchApi();
	}

	static generateDict ( wordList, convertToArray = false ) {
		let dict = {};

		for ( let word of wordList ) {
			if ( !dict[ word ] ) {
				dict[ word ] = 1;
			} else {
				dict[ word ]++;
			}
		}

		if ( convertToArray ) {
			return Object.keys( dict );
		}

		return dict;
	}

	static removeNumbers ( array ) {
		let preparedArray = [];

		for ( let value of array ) {
			if ( !value.match( /[0-9]+/g ) ) {
				preparedArray.push( value );
			}
		}

		return preparedArray;
	}

	findWordsInDB ( words ) {
		let wordList = words.slice( 0 ),
			wordsData = [];

		return new Promise( ( resolve ) => {
			let doesExists = () => {
				if ( wordList.length ) {
					let word = wordList.pop();

					this.db.exists( word ).then( ( exists ) => {
						wordsData.push( exists );
						doesExists();
					} ).catch( ( error ) => {
						wordsData.push( { exists: false, word: word } );
						doesExists();
					} );
				} else {
					resolve( wordsData );
				}
			};

			doesExists();
		} );
	}

	getExistingWords ( words ) {
		let wordList = words.slice( 0 ),
			wordsData = [];

		return new Promise( ( resolve, reject ) => {
			let get = () => {
				if ( wordList.length ) {
					let word = wordList.pop();

					this.db.get( word ).then( ( data ) => {
						wordsData.push( data );

						get();
					} ).catch( reject );
				} else {
					resolve( wordsData );
				}
			};

			get();
		} );
	}

	static cloneObj ( obj ) {
		return JSON.parse( JSON.stringify( obj ) );
	}

	static filterDuplicates ( list ) {
		let newList = [];

		for ( let item of list ) {
			if ( newList.indexOf( item ) === -1 ) {
				newList.push( item );
			}
		}

		return newList;
	}

	searchForWords ( words ) {
		return new Promise( ( resolve ) => {
			let wordIndex = 0;

			this.dudenApi.searchWordList( words, ( data ) => {
				resolve( data );
			}, ( word, data, current, total, error ) => {
				if ( !error && data !== null ) {
					return new Promise( ( resolve, reject ) => {
						this.db.set( word, data ).then( () => {
							wordIndex++;

							console.log( "[%s of %s] Added word: [%s]", wordIndex, words.length, word );

							resolve( data );
						} ).catch( reject );
					} );
				}
			} );
		} );
	}

	enrichWords () {
		return new Promise( ( resolve, reject ) => {
			let foundEntries = [],
				notFoundEntries = [];

			this.findWordsInDB( this.wordDictArray ).then( ( data ) => {
				data.map( ( item ) => {
					if ( item.exists ) {
						foundEntries.push( item.word );
					} else {
						notFoundEntries.push( item.word );
					}
				} );

				if ( !notFoundEntries.length ) {
					this.getExistingWords( foundEntries ).then( resolve ).catch( reject );
				} else {
					let promises = [ this.searchForWords( notFoundEntries ) ];

					if ( foundEntries.length ) {
						promises.push( this.getExistingWords( foundEntries ) );
					}

					Promise.all( promises ).then( ( data ) => {
						console.log( data );
						resolve( TextAnalyzer.flattenArray( data ) );
					} ).catch( ( error ) => {
						reject( error );
					} );
				}
			} ).catch( reject );
		} );
	}

	static flattenArray ( array ) {
		return array.reduce( ( flat, toFlatten ) => {
			return flat.concat( Array.isArray( toFlatten ) ? TextAnalyzer.flattenArray( toFlatten ) : toFlatten );
		}, [] );
	}

	static splitText ( text ) {
		let splittedWords = text.split( RegExWordSplitting ),
			preparedWords = [];

		for ( let word of splittedWords ) {
			if ( word.trim() !== "" ) {
				preparedWords.push( word );
			}
		}

		return preparedWords;
	}

	static removeStopWords ( wordList ) {
		for ( let stopWord of StopWords ) {
			for ( let i = 0; i < wordList.length; i++ ) {
				if ( stopWord === wordList[ i ].toLowerCase() ) {
					wordList.splice( i, 1 );
				}
			}
		}

		return wordList;
	}
};
