var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',

	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/client/entry'
	],

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
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

	proxy: {
		'/api/*': {
			target: 'http://localhost:5000',
			secure: false,
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
			test: /\.jsx$/,
			loader: 'react-hot!babel?stage=0',
			include: path.join(__dirname, 'src')
		}, {
			test: /\.js$/,
			loader: 'babel?stage=0',
			include: path.join(__dirname, 'src')
		}, {
			test: /\.scss?$/,
			loader: 'style!css!sass',
			include: path.join(__dirname, 'src')
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'url?limit=25000&name=[name].[ext]?[hash]',
			include: path.join(__dirname, 'src/client/static')
		}]
	}
}
