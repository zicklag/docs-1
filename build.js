/**
 * This currently is a BAD workaround for compatibility with the current build process.
 * When this branch goes live we want to update the netlify "publish directory"
 */
const fse = require('fs-extra');

// TODO: remove when going live!!
console.log('Moving docs...');
fse.ensureDirSync('.vuepress/dist');

const srcDir = `docs/.vitepress/dist`;
const destDir = `.vuepress/dist`;
fse.copySync(srcDir, destDir, { overwrite: true });

console.log('Done... don\'t let this get to production!');