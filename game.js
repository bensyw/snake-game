import {
    SNAME_SPEED,
    update as updateSnake,
    draw as drawSnake
} from './snake.js'

import {
    update as updadeFood,
    draw as drawFood
} from './food.js'


let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // Time elapsed in seconds
    if (secondsSinceLastRender < 1 / SNAME_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updadeFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}