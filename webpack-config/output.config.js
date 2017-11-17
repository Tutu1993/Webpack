const dirVars = require('./base/dirVars.config.js');

module.exports = {
	path: dirVars.distDir,
	publicPath: '/',
	filename: '[name]/entry.[chunkhash:16].js'
};
