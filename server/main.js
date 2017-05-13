// modules
const
	TextAnalyzer = require( "./text.js" );


// variables
let analyzer = new TextAnalyzer();


//
console.log( "Analyzing Text" );
console.log( "--------------" );

analyzer.enrichWords().then( ( data ) => {
	console.log( data.length + " WORD(S) LOADED" );
} );