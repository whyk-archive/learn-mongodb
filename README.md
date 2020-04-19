# learn-mongodb
Node.jsでMongoDB使ってみる巻

## Setup（feat. macOS Mojave）
### MongoDB
ホームディレクトリ（`~/`）でMongoDBをインストール
``` bash
$ brew tap mongodb/brew
$ brew install mongodb-community@4.2
```

MongoDBを起動
``` bash
$ mongod --config /usr/local/etc/mongod.conf
$ mongo #　別タブで実行
```

#### Alias
Macの場合、コマンドのエイリアス登録が可能なので、`~/.bash_profile`に以下のように登録しておくと起動に便利
``` bash
alias mongostart='mongod --config /usr/local/etc/mongod.conf'
```

### Node.js（feat. Yarn）
プロジェクトを作成し、Node.js環境の構築
``` bash
$ mkdir learn-mongodb
$ cd learn-mongodb
$ yarn init -y
```
`mongodb`モジュールをインストール。
``` bash
$ yarn add mongodb
```
`index.js`を作成
``` bash
$ touch index.js
```
あとはコード書くだけ

## References
- [【2019年版】Node.js + MongoDBでデータベース接続をする【Mac環境】](https://qiita.com/johnmackay150/items/df69fa05731ceb1af61c)
- [Connect to a MongoDB Database Using Node.js](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database)
