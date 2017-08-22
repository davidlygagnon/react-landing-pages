var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

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
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendors.js'
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		extractSass
	],

	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
		alias: {
			jquery: path.join(__dirname, 'node_modules/jquery/src/jquery.js')
		}
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
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
          	loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
			{
				test: /\.(png|gif|jpg)$/,
				loader: 'url-loader',
				options: { limit: '25000' }
			}
		]
	}
}
