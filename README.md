# MapsJavascript と Geocoder を使用したお天気アプリケーション

## 概要

マップをクリックするとその場所の情報、天気を表示する

## 環境

```shell
npm init vite@latest google-map-api-app --template vanilla-ts
```

## 設計

> [参考にした設計](https://github.com/alan2207/bulletproof-react)

```sh
src
|
+-- feature # 機能
|
+-- lib # アプリケーション用のライブラリ
|
+-- types # アプリケーション全体で使用する型
|
+-- config # 環境変数等を定義
|
+- main.ts # index.htmlで呼び出すtsファイル
|
+- style.css # スタイリング
```

### 主な設計の変更点

#### utils

index.ts で各モジュールを再エクスポートするように変更

```js
// 呼び出し側

// 変更前
import { hogeAction } from '@/utils/hogeAction'

// 変更後
import { hogeAction } from '@/utils'
```

**感想**

変更後の形の方が呼び出しやすくて良いかなと思ってたけどそもそも`utils`の関数だったりを沢山呼び出すことがないのでは？と感じた。  
結構雑に`utils`の関数を作成していたが`utils`外での参照が 0 のもの、頻度が少ないものを作成してしまった。  
原因はおそらく、呼び出し側が容易に呼び出せるという意識から「とりあえず細かい粒度で`utils`に入れよう」となったのだと思う。

**結果**

変更前の形で良い気がした。  
ただ 1 つの module 内でのコード量が多くなり、処理を別ファイルに分けたいケースを想定すると  
1 module : **1 directroy**  
**1 directory** : n file  
こうするとディレクトリの中で細かい粒度に分けることができるため。1 階層しかない設計では、export しているもの、utils 内でしか参照されていないものの区別がしにくそう。

> とはいえ utils に定義する module 内の処理を別ファイルに分けたいケースがあるのかといった疑問
