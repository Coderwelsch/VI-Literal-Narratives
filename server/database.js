// modules
const
	LowDB = require( "lowdb" ),
	Path = require( "path" );


module.exports = class Database {
	constructor () {
		this.db = LowDB( Path.resolve( __dirname, "./database/db.json" ) );
	}

	exists ( word ) {
		if ( this.db.get( "dict." + word ).value() ) {
			return true;
		}

		return false;
	}

	get ( word ) {
		return this.db.get( "dict" )[ word ];
	}

	set ( word, data ) {
		this.db.set( "dict." + word, data ).write();
	}
};