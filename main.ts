let nop = 0
let stable = 0
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 200) {
        nop += 1
        if (stable == 0) {
            stable += 1
        }
    }
    if (pins.analogReadPin(AnalogPin.P1) < 200) {
        nop += 1
        if (stable != 2) {
            stable += 1
        }
    }
    basic.showNumber(stable)
    if (stable == 1 || stable == 2) {
        stable = 0
    }
    nop = 0
})
