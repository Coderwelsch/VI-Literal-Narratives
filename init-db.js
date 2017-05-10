let LowDb = require( "lowdb" ),
	db = LowDb( "./server/database/db.json" );

db.defaults( { dict: {} } ).write();