// modules
const
	MongoClient = require( "mongodb" ).MongoClient;


class Database {
	constructor ( dbUrl = "mongodb://localhost:27017/vi-literal-narratives" ) {
		this.dbUrl = dbUrl;

		this.connected = false;
		this.db = null;
	}

	set ( word, data ) {
		return new Promise( ( resolve, reject ) => {
			if ( !this.connected ) {
				this.connect().then( () => {
					this.insert( word, data ).then( () => {
						resolve();
					} ).catch( reject );
				} ).catch( reject );
			} else {
				this.insert( word, data ).then( () => {
					resolve();
				} ).catch( reject );
			}
		} );
	}

	exists ( word ) {
		return new Promise( ( resolve) => {
			this.get( word ).then( () => {
				resolve( true );
			} ).catch( () => {
				resolve( false );
			} );
		} );
	}

	get ( word ) {
		return new Promise( ( resolve, reject ) => {
			if ( !this.connected ) {
				this.connect().then( () => {
					this.collection.find( { word: word } ).toArray( ( error, data ) => {
						if ( error !== null || !data.length ) {
							reject( error );
						}

						resolve( data );
					} );
				} ).catch( reject );
			} else {
				this.collection.find( { word: word } ).toArray( ( error, data ) => {
					if ( error !== null ) {
						reject( error );
					}

					resolve( data );
				} );
			}
		} );
	}

	insert ( word, data ) {
		return new Promise( ( resolve, reject ) => {
			this.collection.insertOne( {
				word: word,
				data: data
			}, ( error ) => {
				if ( error !== null ) {
					reject( error );
				} else {
					resolve();
				}
			} );
		} );
	}

	connect () {
		return new Promise( ( resolve, reject ) => {
			MongoClient.connect( this.dbUrl, ( error, db ) => {
				if ( error !== null ) {
					reject( error );
				} else {
                    this.db = db;
                    this.connected = true;
                    this.collection = this.db.collection( "documents" );

                    resolve();
				}
			} );
		} );
	}
}

module.exports = Database;


new Database().exists( "leck mich" ).then( ( exists ) => {
	console.log( exists );
} ).catch( ( error ) => {
	console.log( "Error:", error );
} );
