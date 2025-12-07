/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Caleb Campbell
 * Created on: Dec 2025
 * This program moves a sprite around the outside of a square
*/
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            sprite.move(1)
            basic.pause(500)
        }
        sprite.turn(Direction.Right, 90)
        basic.pause(500)
    }
})

