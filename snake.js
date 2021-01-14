import {
    getInputDirection
} from './input.js'

export const SNAME_SPEED = 1 // Number of render per second
const snakeBody = [{
    x: 11,
    y: 11
}] // Coordinate in a grid

export function update() {
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = {
            ...snakeBody[i]
        }
    }

    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

}
export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}