const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pluginsConfig = [
	new HtmlWebpackPlugin({
		title: 'Caching',
		template: 'src/index.html'
	}),
	new ExtractTextPlugin('styles.css'),
	new webpack.ProvidePlugin({
		React: 'react',
		ReactDOM: 'react-dom'
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'vendor'
	}),
	new webpack.optimize.CommonsChunkPlugin({
		name: 'runtime'
	})
];

module.exports = pluginsConfig;
