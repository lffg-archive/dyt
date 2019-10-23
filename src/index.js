const { LIST_PATH } = require('./config');
const { download } = require('./download');
const { parseList } = require('./parse-list');

async function main() {
  const list = await parseList(LIST_PATH);

  const promises = list.map((id) =>
    download(id, `${id}.mp4`).then(() =>
      console.log(`Downloaded "${id}" video.`)
    )
  );

  await Promise.all(promises);
}

main().then(() => process.exit(0));
