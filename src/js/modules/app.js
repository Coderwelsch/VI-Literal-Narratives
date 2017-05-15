// imports
import $ from "../../../../../Sites/plugins.coderwelsch.com/js/es6/com.coderwelsch.Query.js";
import Data from "../../json/text-data.json";


export default class App {
	constructor () {
		this.settings = {
			classes: {

			},
			selectors: {
				content: "#content"
			}
		};

		// module variables
		this.selectors = this.settings.selectors;
		this.classes = this.settings.classes;

		this.$text = new $( this.selectors.content );

		// init
		this.initText();
	}

	initText () {
		this.createNodes();
	}

	createNodes () {
		let html = Data.text;

		for ( let word of Data.splittedWords ) {
			console.log( ( new RegExp( `[ ](${word})[^(\w|<|>)]`, "gi" ) ).exec( html ) );

			html = html.replace( new RegExp( `([ ]${word}[^(\w|<|>)])`, "gi" ), `<def>$1</def>` );
		}
		
		this.$text.html( html );
	}

	generateHtml ( word ) {
		let def = Data.wordDefs[ word ];

		if ( def && def.data.data.wordProperties ) {
			let item = def.data.data.wordProperties.type;

			return "<def>$1</def>";
		}

		return word;
	}
}
