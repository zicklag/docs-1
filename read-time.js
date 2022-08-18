const fs = require('fs');
const glob = require('glob');
// const readingTime = require('reading-time');

const getFiles = (src, callback) => glob(src + '/**/*.md', callback);
getFiles('docs', function (err, res) {
    if (err) return console.log('Error', err);
    for (const filePath of res) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            // const readTime = readingTime(content);
            console.log(`[${filePath}] ${content.split(' ').length}`);
            // if (content.indexOf('readTime:') > 0) {
            //     fs.writeFileSync(filePath, content.replace(/^readTime:\s?.+$/gm, `readTime: ${readTime.text}`));
            // }
            // console.log(filePath, readTime);
        } catch (err) {
            // console.error(err);
        }
    }
});