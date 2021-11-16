const windowImg = document.querySelector('.img')
const btnPaused = document.querySelector('.paused')
const btnReset = document.querySelector('.reset')

let count = 0;
let idInterval;
let paused = false

const playFlyAnimate = () => {
    if (!paused) {
        flyAnimte()
    } else {
        requestAnimationFrame(playFlyAnimate)
    }
    
}

const flyAnimte = () => {
    count++
    idInterval = requestAnimationFrame(playFlyAnimate)
    
    if (count < 500) { 
        windowImg.style.left = count * 3 + 'px'
        console.log(count);
    } else {
        cancelAnimationFrame(idInterval)
    }
}
if (!paused) {
    playFlyAnimate()
}


btnPaused.addEventListener('click', () => {
    paused = !paused
})
btnReset.addEventListener('click', () => {
    cancelAnimationFrame(idInterval)
    paused = false
    count = 0
    playFlyAnimate()
})