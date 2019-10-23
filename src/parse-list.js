const fs = require('fs');
const { promisify } = require('util');
const videoId = require('get-youtube-id');

const readFile = promisify(fs.readFile);

async function parseList(listPath) {
  const contents = await readFile(listPath, 'utf8');

  const ids = contents
    .split(/\r?\n/)
    .map((uri) => uri.trim())
    .filter(Boolean)
    .map((uri) => videoId(uri, { fuzzy: false }));

  // Remove duplicates:
  return [...new Set(ids).values()];
}

module.exports = {
  parseList
};
