// imports
import BingImageSearch from "./bing-image-search";

import NarrativeText from "../../txt/text.txt";
import StopWords from "../../json/stop-words.json";


// constants
const RegExWordSplitting = /\W+/;


export default class Text {
	constructor ( baseText = NarrativeText ) {
		this.baseText = baseText;
		this.wordList = null;
		this.wordDict = null;
		this.wordDictArray = null;

		this.imageSearch = new BingImageSearch();

		this.init();
	}

	init () {
		let splittedText = null;

		this.baseText = this.replaceUmlauts( this.baseText );

		splittedText = this.splitText( this.baseText );
		splittedText = this.removeStopWords( splittedText );

		this.wordList = splittedText;
		this.wordDict = this.generateDict( this.wordList );
		this.wordDictArray = this.generateDict( this.wordList, true );
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

	enricheWords ( callback ) {
		this.imageSearch.searchList( this.wordDictArray, callback );
	}

	replaceUmlauts ( text ) {
		return (
			text
				.replace( /ä/g, "ae" )
				.replace( /ö/g, "oe" )
				.replace( /ü/g, "ue" )
				.replace( /ß/g, "ss" )

				.replace( /Ä/g, "Ae" )
				.replace( /Ö/g, "Oe" )
				.replace( /Ü/g, "Ue" )
		);
	}

	getNarrativeText () {
		return NarrativeText;
	}

	splitText ( text ) {
		return text.split( RegExWordSplitting );
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
}