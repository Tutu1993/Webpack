const dirVars = require('./base/dirVars.config.js')
const moduleExports = {
	alias: {
		componentDir: dirVars.componentDir,
		cssDir: dirVars.cssDir,
		imgsDir: dirVars.imgsDir,
		jsDir: dirVars.jsDir,
		jsonDir: dirVars.jsonDir,
		reducerDir: dirVars.reducerDir,
	},
}

module.exports = moduleExports
