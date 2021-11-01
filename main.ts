let distance = 0
qbit.qbitInit()
basic.forever(function () {
    distance = qbit.Ultrasonic()
    if (distance > 0 && distance <= 20) {
        qbit.setPixelRGB(Lights.Light1, QbitRGBColors.Red)
        qbit.setPixelRGB(Lights.Light2, QbitRGBColors.Red)
        qbit.showLight()
        qbit.setQbitRunSpeed(60, qbit.OrientionType.TURN_LEFT)
        basic.pause(1000)
    } else {
        qbit.clearLight()
        qbit.setQbitRunSpeed(30, qbit.OrientionType.GO_AHEAD)
    }
})
