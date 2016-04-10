var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',

	entry: {
		app: './src/client/entry',
		vendor: ['react']
	},

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/'
	},

	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendors.js'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],

	resolve: {
		extensions: ['', '.js', '.jsx', '.scss'],
		alias: {
			jquery: path.join(__dirname, 'node_modules/jquery/src/jquery.js')
		}
	},

	module: {
		preLoaders: [{
			test: /node_modules\/jquery\/src\/selector-sizzle\.js$/,
			loader: 'string-replace',
			query: {
				search: '../external/sizzle/dist/sizzle',
				replace: 'sizzle'
			}
		}],
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel?stage=0',
			include: path.join(__dirname, 'src')
		}, {
			test: /\.js?$/,
			loader: 'babel?stage=0',
			exclude: /node_modules/
		}, {
			test: /\.scss?$/,
			loader: 'style!css!sass',
			include: path.join(__dirname, 'src')
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url?limit=25000&name=[name].[ext]?[hash]',
			include: path.join(__dirname, 'src/client/static')
		}]
	}
}
