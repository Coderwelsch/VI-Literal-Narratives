// constants
const SearchUrl = "https://api.cognitive.microsoft.com/bing/v5.0/images/search?count=1&q=",
	ApiKey = "1f84837bf1bd4112b20705311dcca0c6";


export default class BingImageSearch {
	constructor () {

	}

	searchList ( wordList, callback ) {
		let promiseIndex = 0,
			timeout = 0,
			promises = wordList.map( ( word ) => {
				let promise = this.getSearchPromise( word, promiseIndex * timeout, promiseIndex );
				promiseIndex++;
				return promise;
			} );

		Promise.all( promises ).then( callback );
	}

	getSearchPromise ( word, timeout = 0 ) {
		return new Promise( function ( resolve ) {
			let headers = new Headers();

			headers.append( "Ocp-Apim-Subscription-Key", ApiKey );
			headers.set( "Content-Type", "application/json" );

			window.setTimeout( () => {
				fetch( SearchUrl + word, {
					method: "GET",
					headers: headers,
					mode: "cors",
					cache: "default"
				} ).then( ( response ) => {
					response.json().then( ( data ) => {
						data.searchString = word;
						resolve( data );
					} );
				} );
			}, timeout );
		} );
	}
}