input.onButtonPressed(Button.A, function () {
    座號 += 1
    最後數 += 1
    if (最後數 > 30) {
        座號 = 1
        最後數 = 最後數 - 31
    }
    I2C_LCD1602.ShowNumber(最後數, 5, 0)
})
input.onButtonPressed(Button.B, function () {
    班級 += 1
    最後數 += 100
    if (班級 > 16) {
        班級 = 1
        最後數 = 最後數 - 1600
    }
    I2C_LCD1602.ShowNumber(最後數, 5, 0)
})
let 最後數 = 0
let 座號 = 0
let 班級 = 0
let 年級 = 7
班級 = 1
座號 = 0
I2C_LCD1602.LcdInit(39)
最後數 = 70100
I2C_LCD1602.ShowNumber(最後數, 5, 0)
