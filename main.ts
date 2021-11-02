input.onButtonPressed(Button.A, function () {
    basic.showString("SERVO TIME")
    basic.pause(500)
    servos.P1.setAngle(0)
    basic.showNumber(0)
    basic.pause(500)
    servos.P1.setAngle(90)
    basic.showNumber(90)
    basic.pause(500)
    servos.P1.setAngle(180)
    basic.showNumber(180)
    servos.P1.stop()
})
65
basic.showLeds(`
    # # . # #
    # # . # #
    . . # . .
    # . . . #
    . # # # .
    `)
