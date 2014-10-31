ardrone-dev
===========
Need! [Parrot AR Drone 2.0](http://www.amazon.co.jp/gp/product/B00HYO158Q?ie=UTF8&camp=1207&creative=8411&creativeASIN=B00HYO158Q&linkCode=shr&tag=senyoltw-22&qid=1414738801&sr=8-3&keywords=AR+Drone+2)  
Install! [node.js](http://ja.wikipedia.org/wiki/Node.js)

### Introduction
AR Drone 2.0の実行環境とプログラム  
いろいろ試してみたプログラムを詰め合わせしたもの  
#### プログラム説明
* repl.js 
	コマンドにて操作するプログラム
* camera.js
	メインカメラから画像を取得するプログラム
* video.js
	メインカメラから動画をストリーミングするプログラム
* auto.js
	自動操縦のプログラム。

### How to install
```bash
git clone https://github.com/senyoltw/ardrone-dev.git
cd ardrone-dev

npm install
# accses Wi-Fi AR Drone
npm test
```

### AR Drone 2.0について
AR Drone 2.0を起動すると自動的にアクセスポイントが発生。  
PCで接続すると'192.168.1.1'がAR Drone 2.0となっている  
下記nodeパッケージはWifi越しにドローンを操作したりするパッケージとなる

### 各種nodeパッケージについて
[node-ar-drone](https://github.com/felixge/node-ar-drone)
AR Droneをnode.jsで操作するパッケージ  
[node-dronestream](https://github.com/bkw/node-dronestream)
AR Droneのメインカメラをストリーミングするパッケージ。レスポンスが小さく綺麗。  

### 注意事項
node-ar-droneにて設定されているclient.animateについては注意が必要。  
ドローンに事前にプログラミングされているアニメーションが実行されるが、狭い部屋なので実行すると壁にぶつかり破損する恐れがある。  

参考動画1 http://instagram.com/p/t9H9ZUFbHU/  
参考動画2 http://instagram.com/p/t7g8JXlbFQ/