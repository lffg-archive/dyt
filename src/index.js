const { LIST_PATH } = require('./config');
const { download } = require('./download');
const { parseList } = require('./parse-list');

async function main() {
  const list = await parseList(LIST_PATH);

  const start = Date.now();

  for (const id of list) {
    await download(id, `${id}.mp4`);
  }

  // const promises = list.map((id) => download(id, `${id}.mp4`));
  // await Promise.all(promises);

  console.log(Date.now() - start);
}

main().then(() => process.exit(0));
