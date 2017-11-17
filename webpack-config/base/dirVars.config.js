const path = require('path');
const moduleExports = {};

moduleExports.staticRootDir = path.resolve(__dirname, '../../'); // 根目录

moduleExports.srcDir = path.resolve(moduleExports.staticRootDir, './src'); // src 目录

moduleExports.htmlDir = path.resolve(moduleExports.srcDir, './html'); // html 目录

moduleExports.resourceDir = path.resolve(moduleExports.srcDir, './resource'); // resource 目录

moduleExports.imgsDir = path.resolve(moduleExports.resourceDir, './imgs'); // imgs 目录

moduleExports.jsDir = path.resolve(moduleExports.resourceDir, './js'); // js 目录

moduleExports.distDir = path.resolve(moduleExports.staticRootDir, './dist'); // dist 目录

console.log(moduleExports);
module.exports = moduleExports;
