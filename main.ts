let stage = 0
function stage2 () {
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # . .
        . . # # #
        . . # . .
        `)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
}
input.onGesture(Gesture.LogoDown, function () {
    if (stage == 4) {
        stage5()
        stage = 5
    }
})
function stage3 () {
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        # # # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.showLeds(`
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
}
input.onGesture(Gesture.TiltRight, function () {
    if (stage == 0) {
        stage1()
        stage = 1
    }
})
input.onGesture(Gesture.LogoUp, function () {
    if (stage == 1) {
        stage2()
        stage = 2
    } else if (stage == 3) {
        stage4()
        stage = 4
    }
})
function stage1 () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . # #
        # . . . .
        # . # # .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . # . # #
        . # . . .
        . # . # #
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . # . .
        . . # . .
        `)
}
function stage5 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . # # #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # # #
        # . # . #
        # . # # #
        `)
    basic.showLeds(`
        . . . . .
        # . # # #
        # . # . #
        # . # # #
        # # # # .
        `)
}
function stage6 () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . .
        # . # . .
        # # # . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . # . . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function stage4 () {
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onGesture(Gesture.TiltLeft, function () {
    if (stage == 2) {
        stage3()
        stage = 3
    } else if (stage == 5) {
        stage6()
        stage = 0
    }
})
