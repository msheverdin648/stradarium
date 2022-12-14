
// Open tooltip listener
const questionButtons = document.querySelectorAll('._question')
questionButtons.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        console.log(e.target.children[1])
        e.target.children[1].classList.add('active')
    })
})

// Close tooltip listener
const tooltips = document.querySelectorAll('.tooltip')
tooltips.forEach(el => {
    //Clear tooltip from default link events
    el.addEventListener('click', e => {
        e.preventDefault()
    })
    const cross = el.children[0]
    cross.addEventListener('click', function(e){
        e.preventDefault()
        e.stopPropagation()
        el.classList.remove('active')
    }.bind(el))
})



//only for demostration navigation

const button = document.querySelector('.login__button')

button.addEventListener('click', e => {
    e.preventDefault()
    location.href = '/lk.html'
})