const dirVars = require('./base/dirVars.config.js');
const moduleExports = {
	alias: {
		jsDir: dirVars.jsDir,
		cssDir: dirVars.cssDir,
		imgsDir: dirVars.imgsDir,
		componentDir: dirVars.componentDir
	}
};

module.exports = moduleExports;
