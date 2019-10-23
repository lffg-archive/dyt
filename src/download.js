const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');
const { OUT_DIR } = require('./config');

function download(videoId, fileName) {
  const uri = `https://www.youtube.com/watch?v=${videoId}`;
  const out = path.join(OUT_DIR, fileName);

  return new Promise((resolve, reject) => {
    const video = ytdl(uri);
    video.pipe(fs.createWriteStream(out));

    video.on('end', () => resolve());
    video.on('error', reject);
  });
}

module.exports = {
  download
};
