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
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			jquery: path.join(__dirname, 'node_modules/jquery/src/jquery.js')
		}
	},

	devServer: {
		proxy: {
 	 		'/api/*': 'http://localhost:3000'
		},
		contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
		compress: true, // enable gzip compression
		historyApiFallback: true, // true for index.html upon 404, object for multiple paths
		hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
		https: false, // true for self-signed, object for cert authority
		noInfo: true, // only errors & warns on hot reload
		// ...
 	},

	module: {
		rules: [
			{
				test: /node_modules\/jquery\/src\/selector-sizzle\.js$/,
				loader: 'string-replace',
				query: {
					search: '../external/sizzle/dist/sizzle',
					replace: 'sizzle'
				}
			},
			{
				test: /\.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['react', 'es2015', 'stage-0']
					}
				}
			},
			{
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
			{
				test: /\.(png|gif|jpg)$/,
				loader: 'url-loader',
				options: { limit: '25000' }
			}
		]
	}
}
