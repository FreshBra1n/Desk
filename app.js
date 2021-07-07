const board = document.querySelector('#board')
const container = document.querySelector('.container')
const colors = ['#33ccff', '#666699', '#9933ff', '#00ff00', '#ff0066', '#ff00ff', '#cc9900', '#ff0066']
const SQUARES_NUMBER = 450;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    container.addEventListener('mouseover', () => setColorToContainer(container))
    square.addEventListener('mouseleave', removeColor)
    board.append(square)
}

function setColorToContainer(container) {
    const color = getRandomColor()
    container.style.transition = 'all 0.25s ease '
    container.style.boxShadow = `0 0 170px ${color}, 0 0 170px ${color}`
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = ' #1d1d1d'
    element.style.boxShadow = `0 0 2px #000 `
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]

}