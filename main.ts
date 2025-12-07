/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Dec 2025
 * This program moves a sprite around the outside of a square
*/
let loopCounter = 0
let loopCounter2 = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)

input.onButtonPressed(Button.A, function () {
    for (let loopCounter2 = 0; loopCounter2 < 4; loopCounter2++) {
        for (let loopCounter = 0; loopCounter < 5; loopCounter++) {
            sprite.move(1)
            basic.pause(500)
        }
        sprite.turn(Direction.Right, 90)
        basic.pause(500)
    }
})

