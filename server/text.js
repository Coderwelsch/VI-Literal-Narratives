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

	findWordsInDB () {
		return new Promise( ( resolve, reject ) => {
            if ( this.wordDictArray.length ) {
            	let promises = new Array( this.wordDictArray.length ),
					word;

                for ( let i = 0;  i < this.wordDictArray.length; i++ ) {
                	word = this.wordDictArray[ i ];
                	promises[ i ] = this.db.exists( word );
                }

				Promise.all( promises ).then( ( data ) => {
					resolve( data );
				} ).catch( ( error ) => {
                    reject( error );
				} );
            } else {
                reject( new Error( "No words to check" ) );
            }
		} );
	}

    getExistingWords ( words ) {
        let promises = [];

        for ( let word of words ) {
            promises.push( this.db.get( word ) );
        }

        return new Promise( ( resolve, reject ) => {
            Promise.all( promises ).then( ( data ) => {
            	resolve( data.map( ( item ) => {
            		return {
            			word: item[ 0 ].word,
						data: item[ 0 ]
					};
				} ) );
			} ).catch( reject );
        } );
	}

    cloneObj ( obj ) {
		return JSON.parse( JSON.stringify( obj ) );
	}

    filterDuplicates ( list ) {
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
            this.dudenApi.searchWordList( words, ( data ) => {
                resolve( data );
            }, ( word, data, current, total, error ) => {
                if ( !error ) {
                    let similarWords = [],
                        preparedData;

                    for ( let item of data ) {
                        let preparedItem = this.cloneObj( item );

                        delete preparedItem.text;

                        if ( item.text !== word ) {
                            similarWords.push( item.text );
                        }

                        /* if ( item.text ) {
                            this.db.set( item.text, preparedItem );
                        } */

                        if ( item.text === word && !preparedData ) {
                            preparedData = preparedItem;
                        }
                    }

                    similarWords = this.filterDuplicates( similarWords );

                    if ( preparedData && !preparedData.similarWords ) {
                        preparedData.similarWords = similarWords;
                    } else {
                        preparedData = {
                            similarWords: similarWords
                        };
                    }

                    console.log( "Added word: [%s], similar: %s", word, similarWords.length );
                    this.db.set( word, preparedData );

                    return {
                    	word: word,
						data: preparedData
					};
                }
            } );
		} );
	}

	enrichWords () {
		return new Promise( ( resolve, reject ) => {
            let foundEntries = [],
                notFoundEntries = [];

            this.findWordsInDB().then( ( data ) => {
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
						if ( promises.length === 2 ) {
						    data = data.map( item => item[ 0 ] );
						}

						resolve( data );
					} ).catch( ( error ) => {
                        reject( error );
					} );
				}
			} ).catch( reject );
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