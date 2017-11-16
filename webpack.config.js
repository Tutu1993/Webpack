const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: require('./webpack-config/entry.config.js'),
	output: require('./webpack-config/output.config.js'),
	module: require('./webpack-config/module.prod.config.js'),
	plugins: require('./webpack-config/plugins.prod.config.js'),
	devtool: 'source-map'
};
