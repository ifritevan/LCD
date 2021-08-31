item = 0

def on_forever():
    global item
    item = sonar.ping(DigitalPin.P2, DigitalPin.P1, PingUnit.CENTIMETERS)
    basic.show_number(item)
    basic.pause(100)
basic.forever(on_forever)
