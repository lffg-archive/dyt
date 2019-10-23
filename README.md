# `dyt`

Download a list of YouTube videos! 🎬

> This project is in its early stage. In the future, a graphical interface (GUI) will be created for better usability. For now, a Node.js script has been made.

## ℹ️ How to use

Download this repository.

```shell
git clone https://github.com/lffg/dyt.git
```

Move to its directory and install the dependencies.  
<sup>[Node.js](https://nodejs.org/en/) is required; [Yarn](https://yarnpkg.com/lang/en/) is optional. You may use NPM if you don't want to use Yarn.</sup>

Add the video URLs that you want to download to the `list.txt` file, at the root of the project.

Start the download process:

```shell
yarn start
```


```
cd dyt && yarn install
```

## ⚠️ Disclaimer

Downloading videos from YouTube is against the YouTube Policy. The only videos that your allowed to download is your own which you can already do using YouTube Studio.

## Other Information

Created by [Luiz Felipe Gonçalves](https://luizfelipe.dev). The awesome [`node-ytdl-core`](https://github.com/fent/node-ytdl-core#readme) was used to download the YouTube videos.  

Released under the terms of the [MIT license](https://github.com/lffg/dyt/blob/master/LICENSE).
