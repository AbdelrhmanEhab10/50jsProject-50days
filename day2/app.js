const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
const progressLine = document.querySelector('#progress')

let currentActive = 1

nextBtn.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prevBtn.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})

const update = () => {
    circles.forEach((circle, i) => {
        if (i < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active')


    progressLine.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prevBtn.disabled = true
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}