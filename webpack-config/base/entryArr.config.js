const Glob = require('glob').Glob;
const dirVars = require('./dirVars.config.js');
const options = {
	cwd: dirVars.htmlDir,
	sync: true
};
const primaryEntry = new Glob('*/*.*', options).found;
const multipleEntry = new Glob('!(_)*/!(*.*)', options).found;

primaryEntry.forEach((value, index) => {
	primaryEntry[index] = value.split('/')[0];
});

module.exports = primaryEntry.concat(multipleEntry);
