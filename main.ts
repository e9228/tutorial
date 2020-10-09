input.onButtonPressed(Button.A, function () {
    どうさ.まえすすむじかん(5000)
})
basic.forever(function () {
    どうさ.まえすすめ()
    どうさ.うしろすすめ()
    どうさ.みぎカニあるき()
    どうさ.ひだりカニあるき()
    while (どうさ.センサーまえ()) {
    	
    }
})
