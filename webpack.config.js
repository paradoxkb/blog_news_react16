// https://gist.github.com/BiosBoy/8b45ef3fec246813ecb05ce1ae11bfde?source=post_page---------------------------
const path = require('path');

// !!!WEBPACK CONFIGURATION!!!
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const debug = require('debug')('app:webpack:config');

// ------------------------------------
// RULES INJECTION!
// ------------------------------------
const rules = [
	// JAVASCRIPT/JSON
	{
		test: /\.(js|jsx|ts|tsx)?$/,
		use: ['babel-loader']
	},
	{
		type: 'javascript/auto',
		test: /\.json$/,
		loader: 'json-loader'
	},
	// STYLES
	{
		test: /\.scss$/,
		use: [{
			loader: "style-loader"
		}, {
			loader: "css-loader"
		}, {
			loader: "sass-loader"
		}]
	}
];

// ------------------------------------
// BUNDLES OPTIMIZATION
// ------------------------------------
const optimization = {
	optimization: {
		splitChunks: {
			chunks: 'all',
			minChunks: 2
		},
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						unused: true,
						dead_code: true
					}
				},
				sourceMap: true
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	performance: {
		hints: false
	}
};

module.exports = {
	entry: './src/index.js',
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js',
		path: path.resolve(__dirname, 'public/js')
	},
	module: {
		rules
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
	},
	...optimization
};
