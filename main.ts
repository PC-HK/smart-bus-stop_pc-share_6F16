let nop = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        nop += 1
    }
    if (pins.analogReadPin(AnalogPin.P1) < 200) {
        nop += 1
    }
    basic.showNumber(nop)
    basic.pause(200)
    nop = 0
})
basic.forever(function () {
    basic.pause(1000)
})
