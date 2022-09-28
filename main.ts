basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    for (let index = 0; index <= 3; index++) {
        led.unplot(0, index)
        led.unplot(index, 0)
        basic.pause(1000)
    }
    led.plot(1, 3)
    led.plot(3, 1)
    basic.pause(1000)
    led.plot(2, 2)
    basic.pause(1000)
    led.unplot(2, 2)
    basic.pause(1000)
    led.unplot(1, 3)
    led.unplot(3, 1)
    basic.pause(1000)
    for (let index = 0; index <= 3; index++) {
        led.unplot(index, 4)
        led.unplot(4, index)
        basic.pause(1000)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
})
