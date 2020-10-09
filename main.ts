input.onButtonPressed(Button.A, function () {
    どうさ.まえすすむじかん(5000)
})
basic.forever(function () {
    どうさ.まえすすめ()
    while (どうさ.センサーまえ()) {
        どうさ.うしろすすめ()
    }
})
