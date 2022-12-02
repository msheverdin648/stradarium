
// Open tooltip listener
const questionButtons = document.querySelectorAll('._question span')
questionButtons.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        e.target.nextElementSibling.classList.add('active')
    })
})

// Close tooltip listener
const tooltips = document.querySelectorAll('.tooltip')
tooltips.forEach(el => {
    const cross = el.children[0]
    cross.addEventListener('click', function(e){
        e.preventDefault()
        e.stopPropagation()
        el.classList.remove('active')
    }.bind(el))
})