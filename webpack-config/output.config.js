const dirVars = require('./base/dirVars.config.js')
const outputConfig = {
	path: dirVars.distDir,
	publicPath: '/',
	filename: '[name]/entry.[chunkhash:8].js',
}

module.exports = outputConfig
