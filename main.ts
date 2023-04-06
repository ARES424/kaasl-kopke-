input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.House)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("barlas cayci")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Tortoise)
})
input.onGesture(Gesture.Shake, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # . # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # . . # .
        # # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.showLeds(`
        # # # # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # # .
        . . . # .
        # # # # .
        `)
})
