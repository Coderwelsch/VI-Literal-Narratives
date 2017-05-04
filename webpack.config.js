const Path = require( "path" );


module.exports = {
	entry: [
		Path.resolve( __dirname, "./src/js/main.js" )
	],
	output: {
		path: "built/files/js/",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.txt$/,
				use: "raw-loader"
			}
		]
	},
	stats: {
		colors: true
	}
};