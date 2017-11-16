const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: require('./webpack-config/entry.config.js'),
	output: require('./webpack-config/output.config.js'),
	module: require('./webpack-config/module.dev.config.js'),
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		new CleanWebpackPlugin(['dist']),
		new ManifestPlugin(),
		new HtmlWebpackPlugin({
			title: 'Caching',
			template: 'src/index.html'
		}),
		new webpack.ProvidePlugin({
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime'
		}),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify('development')
		    }
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};
