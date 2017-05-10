// modules
const
	TextAnalyzer = require( "./text.js" );


let analyzer = new TextAnalyzer();


analyzer.enrichWords( ( data ) => {
	console.log( "WORDS LOADED" );
} );