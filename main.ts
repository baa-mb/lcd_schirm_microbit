input.onButtonPressed(Button.A, function () {
    for (let Index3 = 0; Index3 <= 1; Index3++) {
        f1()
        f2()
    }
})
function init () {
    LCD1IN8.LCD_Init()
    LCD1IN8.LCD_Clear()
    LCD1IN8.LCD_SetBL(10)
    LCD1IN8.DrawPoint(
    20,
    31,
    190,
    DOT_PIXEL.DOT_PIXEL_1
    )
    LCD1IN8.DisString(
    16,
    4,
    "Alois Bachinger",
    LCD1IN8.Get_Color(LCD_COLOR.MAGENTA)
    )
    LCD1IN8.DisString(
    16,
    18,
    "Bahnhofstrasse 33",
    LCD1IN8.Get_Color(LCD_COLOR.BLUE)
    )
    LCD1IN8.DisString(
    16,
    32,
    "4710 Grieskirchen",
    LCD1IN8.Get_Color(LCD_COLOR.RED)
    )
    LCD1IN8.DisString(
    2,
    64,
    "Ich bin ein richtiger Bildschirm mit Aufloesung 160 x 128 Punkten - Taste A oder B bitte!",
    LCD1IN8.Get_Color(LCD_COLOR.RED)
    )
    LCD1IN8.LCD_Display()
    basic.showLeds(`
        . . . . .
        . # . # .
        # # . # #
        . # . # .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    Platzhalter = input.lightLevel()
    for (let Index2 = 0; Index2 <= 4; Index2++) {
        basic.clearScreen()
        basic.showNumber(Index2)
        LCD1IN8.LCD_Clear()
        LCD1IN8.DisString(
        30,
        64,
        "Temperatur:" + input.temperature() + "     Lichtstaerke:" + input.lightLevel() + "   Rotation: " + input.rotation(Rotation.Pitch),
        LCD1IN8.Get_Color(LCD_COLOR.RED)
        )
        LCD1IN8.LCD_Display()
    }
})
function f2 () {
    LCD1IN8.DrawRectangle(
    1,
    64,
    160,
    128,
    LCD1IN8.Get_Color(LCD_COLOR.RED),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_2
    )
    LCD1IN8.DisString(
    37,
    80,
    "4020 Linz",
    LCD1IN8.Get_Color(LCD_COLOR.WHITE)
    )
    LCD1IN8.LCD_Display()
    LCD1IN8.DisString(
    37,
    110,
    "4020 Linz",
    LCD1IN8.Get_Color(LCD_COLOR.BLACK)
    )
    LCD1IN8.LCD_Display()
}
function f1 () {
    LCD1IN8.DrawRectangle(
    1,
    64,
    160,
    104,
    LCD1IN8.Get_Color(LCD_COLOR.GREEN),
    DRAW_FILL.DRAW_FULL,
    DOT_PIXEL.DOT_PIXEL_2
    )
    LCD1IN8.DisString(
    14,
    80,
    "Taste A gedrueckt!",
    LCD1IN8.Get_Color(LCD_COLOR.RED)
    )
    LCD1IN8.LCD_Display()
}
let Platzhalter = 0
let Index = 0
init()
