const path = require('path');
const moduleExports = {};

moduleExports.staticRootDir = path.resolve(__dirname, '../../');

moduleExports.srcDir = path.resolve(moduleExports.staticRootDir, './src');

moduleExports.distDir = path.resolve(moduleExports.staticRootDir, './dist');

module.exports = moduleExports;
