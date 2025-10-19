// const body = document.body
// const green = document.querySelector('#green')
// const red = document.querySelector('#red')
// const blue = document.querySelector('#blue')


// green.addEventListener('dblclick', () => { body.style.background = 'green' })
// red.addEventListener('dblclick', () => { body.style.background = 'red' })
// blue.addEventListener('dblclick', () => { body.style.background = 'blue'; })


const body = document.body;
const colors = ['green', 'red', 'blue', 'black'];

colors.forEach(color => {
    const btn = document.querySelector(`#${color}`)
    btn.addEventListener('dblclick', () => {
        body.style.background = color
    })
})