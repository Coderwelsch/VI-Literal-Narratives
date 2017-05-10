// modules
const
	FileSystem = require( "fs" ),
	Path = require( "path" );


// variables
let jsonPath = Path.resolve( __dirname, "./server/database/" );


// 
function mkdirp( filepath ) {
	let dirname = Path.dirname( filepath );

	if ( !FileSystem.existsSync( dirname ) ) {
		mkdirp( dirname );
	}

	FileSystem.mkdirSync( filepath );
}

if ( !FileSystem.existsSync( jsonPath ) ) {
	mkdirp( jsonPath );

	FileSystem.writeFileSync( Path.resolve( jsonPath, "db.json" ), JSON.stringify( {
		dict: {}
	}, null, 4 ), { flag: "w+" } );
}

console.log( "database initialized" );