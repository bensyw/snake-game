import {
    SNAME_SPEED,
    update as updateSnake,
    draw as drawSnake,
    getSnakeHead,
    snakeIntersection
} from './snake.js'

import {
    outsideGrid
} from './grid.js'

import {
    update as updadeFood,
    draw as drawFood
} from './food.js'


let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press OK to restart.')) {
            window.location.reload()
        }
        return
    }

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
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}