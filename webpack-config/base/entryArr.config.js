const Glob = require('glob').Glob;
const dirVars = require('./dirVars.config.js');
const options = {
	cwd: dirVars.htmlDir,
	sync: true
};
const globInstance = new Glob('!(_)*/!(_)*', options);

module.exports = globInstance.found;
