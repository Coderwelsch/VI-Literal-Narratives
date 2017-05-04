// imports
import $ from "../../../../../Sites/plugins.coderwelsch.com/js/es6/com.coderwelsch.Query.js";
import Text from "./text.js";


export default class App {
	constructor () {
		this.settings = {
			classes: {

			},
			selectors: {

			}
		};

		// module variables
		this.selectors = this.settings.selectors;
		this.classes = this.settings.classes;

		this.text = new Text();

		// init
		this.initText();
	}

	initText () {
		console.log( this.text.wordList.length, this.text.wordDictArray.length );

		this.text.enricheWords( ( data ) => {
			let $dom = new $( "<div id='images'></div>" ).appendTo( "body" );

			for ( let item of data ) {
				if ( item && item.value ) {
					$dom.append( `
						<div class="image" style="background-image: url( '${ item.value[ 0 ].contentUrl }' );">${ item.searchString }</div>
					` );
				} else {
					console.log( "ERROR" );
				}
			}
		} );
	}
}
