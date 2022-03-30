const questions = document.querySelectorAll('.question')
const clickButtons = document.querySelectorAll('.question-btn')
const spanIcons = document.querySelectorAll('span')


// const clickPlusIcons = document.querySelectorAll('.plus-icon')
// const clickMinusIcons = document.querySelectorAll('.minus-icon')

clickButtons.forEach(clickButton => {
 clickButton.addEventListener('click', () => {
    var childSpans = clickButton.childNodes
    console.log(childSpans)
 })
})

