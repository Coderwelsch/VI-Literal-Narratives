// modules
const
	DudenSearchApi = require( "duden-search-api" ),
	Database = require( "./database.js" ),
	FileSystem = require( "fs" ),
	Path = require( "path" ),
	NarrativeText = FileSystem.readFileSync( Path.resolve( __dirname, "text/text.txt" ), "utf8" ),
	StopWords = JSON.parse( FileSystem.readFileSync( Path.resolve( __dirname, "json/stop-words.json" ), "utf8" ) );


// constants
const RegExWordSplitting = /[^a-zA-Z_öäüÖÄÜ]+/i;


module.exports = class TextAnalyzer {
	constructor ( baseText = NarrativeText ) {
		this.baseText = baseText;
		this.wordList = null;
		this.wordDict = null;
		this.wordDictArray = null;

		this.db = null;

		this.init();
	}

	init () {
		let splittedText;

		splittedText = this.splitText( this.baseText );
		splittedText = this.removeStopWords( splittedText );

		this.wordList = splittedText;
		this.wordDict = this.generateDict( this.wordList );
		this.wordDictArray = this.generateDict( this.wordList, true );
		this.wordDictArray = this.removeNumbers( this.wordDictArray );

		this.db = new Database();
		this.dudenApi = new DudenSearchApi();
	}

	generateDict ( wordList, convertToArray = false ) {
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

	removeNumbers ( array ) {
		let preparedArray = [];

		for ( let value of array ) {
			if ( !value.match( /[0-9]+/g ) ) {
				preparedArray.push( value );
			}
		}

		return preparedArray;
	}

	enrichWords ( callback ) {
		let foundEntries = [],
			notFound = [];

		if ( this.wordDictArray.length ) {
			for ( let word of this.wordDictArray ) {
				if ( this.db.exists( word ) ) {
					foundEntries.push( this.db.get( word ) );
				} else {
					notFound.push( word );
				}
			}
		}

		if ( !notFound.length ) {
			callback( foundEntries );
			return;
		}

		let cloneObj = ( obj ) => JSON.parse( JSON.stringify( obj ) );

		this.dudenApi.searchWordList( notFound, ( data ) => {
			callback( data.concat( foundEntries ) );
		}, ( word, data, current, total, error ) => {
			if ( !error ) {
				let similarWords = [],
					preparedData;

				for ( let item of data ) {
					let preparedItem = cloneObj( item );

					delete preparedItem.text;

					similarWords.push( item.text );

					if ( item.text && !this.db.exists( item.text ) ) {
						this.db.set( item.text, preparedItem );
					}

					if ( item.text === word ) {
						preparedData = preparedItem;
					}
				}

				if ( preparedData && !preparedData.similarWords ) {
					preparedData.similarWords = similarWords;
				} else {
					preparedData = {
						similarWords: similarWords
					};
				}

				console.log( "ADDED WORD, WORD: %s, SIMILAR: %s", word, similarWords.length );
				this.db.set( word, preparedData );
			}
		} );
	}

	getNarrativeText () {
		return NarrativeText;
	}

	splitText ( text ) {
		let splittedWords = text.split( RegExWordSplitting ),
			preparedWords = [];

		for ( let word of splittedWords ) {
			if ( word.trim() !== "" ) {
				preparedWords.push( word );
			}
		}

		return preparedWords;
	}

	removeStopWords ( wordList ) {
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