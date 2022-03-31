//start by selecting all of the buttons

const btns = document.querySelectorAll('.question-btn')

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const cuestion = e.currentTarget.parentElement.parentElement
    cuestion.classList.toggle("show-text")
  })
})
