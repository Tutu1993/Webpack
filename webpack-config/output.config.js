const dirVars = require('./base/dirVars.config.js');

module.exports = {
	path: dirVars.distDir,
	filename: '[name].[chunkhash].js',
	chunkFilename: '[name].[chunkhash].js',
};
