const Glob = require('glob').Glob;
const dirVars = require('./dirVars.config.js');
const options = {
	cwd: dirVars.htmlDir,
	sync: true
};
const primaryEntry = new Glob('*/*.art', options).found;
const multipleEntry = new Glob('!(_)*/!(*.*)/*.art', options).found;

primaryEntry.forEach((value, index) => {
	primaryEntry[index] = value.split('/')[0];
});
multipleEntry.forEach((value, index) => {
	const mArray = value.split('/');
	mArray.pop();
	multipleEntry[index] = mArray.join('/');
});

module.exports = primaryEntry.concat(multipleEntry);
