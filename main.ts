input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    for (let index = 0; index < 3; index++) {
        pins.analogWritePin(AnalogPin.P1, Vd)
        pins.analogWritePin(AnalogPin.P2, Vg)
        Vg += 254
        Vg += 254
        basic.pause(100)
    }
    Vg = 1023
    Vd = 1023
})
input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(87)
    basic.pause(500)
    servos.P0.setAngle(24)
})
let Vd = 0
let Vg = 0
servos.P0.setAngle(35)
Vg = 254
Vd = 254
