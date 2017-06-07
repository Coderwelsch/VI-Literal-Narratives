// modules
const
	TextAnalyzer = require( "./text.js" ),
	Path = require( "path" ),
	FileSystem = require( "fs" );


// variables
let analyzer = new TextAnalyzer(),
	exportPathJson = Path.resolve( __dirname, "../src/json/text-data.json" );


//
console.log( "Analyzing Text" );
console.log( "--------------" );

analyzer.enrichWords().then( ( data ) => {
	let flattened,
		exportData = {
			wordDefs: {},
			text: analyzer.baseText,
			splittedWords: analyzer.wordDictArray
		};

	console.log( data );
	return;
	console.log( data.length + " word(s) loaded" );

	flattened = data.map( ( item ) => {
		return item[ 0 ];
	} );

	for ( let item of flattened ) {
		exportData.wordDefs[ item.word ] = item;
	}

	FileSystem.writeFileSync( exportPathJson, JSON.stringify( exportData, null, 4 ), { encoding: "utf8", flag: "w+" } );
	console.log( "Exported data to %s", exportPathJson );
} ).catch( ( error ) => {
	console.log( error );
} );
