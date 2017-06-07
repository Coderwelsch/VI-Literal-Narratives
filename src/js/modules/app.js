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
		let html = Data.text,
			wordDef;


		html = html.replace( /([^\W]|[äöü\-_])+/gi, ( string ) => {
			for ( let word of Data.splittedWords ) {
				if ( string === word ) {
					wordDef = this.getWordDef( word );

					return `<def data-type="${ wordDef.wordProperties ? wordDef.wordProperties.type : "none" }">${ word }</def>`;
				}
			}

			return string;
		} );

		this.$text.html( html );
	}

	getWordDef ( word ) {
		let data = Data.wordDefs[ word ].data.data;

		return data;
	}
}
