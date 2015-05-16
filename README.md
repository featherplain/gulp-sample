gulp-sample
============

## gulp-sample について

[English](https://github.com/featherplain/gulp-sample/blob/master/en-README.md)

gulp-sample は[ビルドシステム gulp を試してみる【すぐに動かせるサンプル付き】](http://office7f.com/2014/12/19/megumi201412/)におけるサンプル用の gulpfile.js です。

この gulpfile.js では以下のことができます。

- Sass を CSS にコンパイルする(sass-globbing オプション必須)
- JS ファイルの結合と圧縮
- CSS スプライト画像の生成
- BrowserSync でブラウザのライブリロード

この gulpfile.js では gulp-ruby-sass を採用していますが、最新版ではありません。`package.json` にてバージョンを 0.7.0 に固定しています。

## 必要なもの

* Node.js
* npm
* Ruby
* Sass over3.1
* sass-globbing

## ディレクトリ構造

編集用のファイルは `src` ディレクトリの中に格納されており、gulp のタスクを実行すると `dist` に出力されます。

~~~~
.
├── README.md
├── dist
│   ├── css
│   │   └── style.css
│   ├── img
│   │   └── sprite.png
│   └── js
│       └── lib.min.js
├── gulpfile.js
├── index.html
├── node_modules
├── package.json
└── src
    ├── img
    │   └── sprite
    │       ├── icon_star-red.png
    │       ├── icon_star-yellow.png
    │       └── icon_star_blue.png
    ├── js
    │   └── lib
    │       ├── jquery.bxslider.js
    │       └── jquery.magnific-popup.js
    └── scss
        ├── core
        │   ├── _config.scss
        │   ├── _mixins.scss
        │   └── _normalize.scss
        ├── layout
        │   ├── _layout-common.scss
        │   ├── _layout-footer.scss
        │   └── _layout-header.scss
        ├── module
        │   ├── _module-buttons.scss
        │   └── _module-sprite.scss
        └── style.scss

~~~~ 

## 使い方

1.  gulp をインストールします。

        $ npm install -g gulp

2.  必要な gulp のプラグインは `package.json` に記述しているので、それらを `npm install` で一括インストールします。
    お使いの環境によっては `sudo` を付ける必要があります。

        $ cd path/to/directory ; npm install
    
3.  sass-globbing が入っていない人はインストールしてください。

        $ gem install sass-globbing

4.  gulp を実行します。

        $ gulp

### autoprefix

autoprefix のブラウザを指定する場合は、`gulpfile.js` の `.pipe(autoprefixer())` を編集してください。

>
    .pipe($.autoprefixer("last 2 version"))


参考 : [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)


### ローカルサーバーとの接続

BrowserSync をローカルサーバと接続する場合、`gulpfile.js` を以下のように編集して下さい。

1. 23行目にホスト名を記述します。

    >
        'vhost': 'example.dev'

2. 下記の記述のコメントアウトを解除してください。

    >
        // Local server
        // gulp.task('browser-sync', function() {
        //      browserSync({
        //          proxy: paths.vhost,
        //          open: 'external'
        //      });
        // });

参考 : [http://www.browsersync.io/](http://www.browsersync.io/) 