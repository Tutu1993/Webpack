const path = require('path');
const dirVars = require('./base/dirVars.config.js');
const entryArr = require('./base/entryArr.config.js');
const entryConfig = {};

entryConfig.vendor = ['react', 'react-dom', 'redux'];

entryArr.forEach(entry => {
	entryConfig[entry] = path.resolve(dirVars.htmlDir, `${entry}/index.js`);
});

module.exports = entryConfig;
