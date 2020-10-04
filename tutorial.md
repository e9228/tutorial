#　うごかしてみよう！


```ghost
basic.pause(100)
ブロック.うしろすすめ()
ブロック.まえすすめ()
basic.clearScreen()
input.onButtonPressed(Button.A, function () {
})

```

```template
input.onButtonPressed(Button.A, function () {
})
```


## Step 1
まずはじめにまっすぐ進ませてみよう！！
『ブロック』から「まえすすめ」を取り出して、「Aボタンが押されたとき」に入れてみよう！

micro:bitに読み込んでみよう！

```blocks
ブロック.まえすすめ()
```

## Step 2

次はうしろに歩かせてみよう！
『ブロック』から「うしろすすめ」をいれてみよう！
 


## Step 3

次は5秒間まえにすすんだあとに動きを止めてみよう！

今回は停止時間というブロックを使うよ！
まえすすめのブロックの後に停止時間のブロックを入れて、最後に止まれのブロックをいれてみよう！

```utorialhint
単位がミリ秒だね！見たことない単位だ！！

1second=1秒だよ！
そうしたら5秒はどうすればいいかな？？
```