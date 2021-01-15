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

    // Check if game is over
    if (gameOver) {
        // Reload the page if Ok is pressed.
        if (confirm('You lost. Press OK to restart.')) {
            window.location.reload()
        }
        return
    }

    window.requestAnimationFrame(main)
    // Get time elapsed in seconds. Do nothing if it doesn't elapse enough time.
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAME_SPEED) return

    lastRenderTime = currentTime

    update()
    draw()
}

// Render the first frame
window.requestAnimationFrame(main)

// Update the game state
function update() {
    updateSnake()
    updadeFood()
    checkDeath()
}

// Draw the game board based on the updated state
function draw() {
    // Clear the old game board
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

// Check death
function checkDeath() {
    // Two death conditions
    // 1. If snake head is outside of the grid
    // 2. Or if snake intersects with it self
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}