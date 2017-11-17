const entryConfig = require('./webpack-config/entry.config.js');
const outputConfig = require('./webpack-config/output.config.js');
const moduleConfig = require('./webpack-config/module.dev.config.js');
const pluginsConfig = require('./webpack-config/plugins.dev.config.js');

outputConfig.filename = '[name].js';
outputConfig.chunkFilename = '[name].js';

module.exports = {
	entry: entryConfig,
	output: outputConfig,
	module: moduleConfig,
	plugins: pluginsConfig,
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true,
		inline: true,
		progress: true
	},
};
