function addClassClicked(e) {

  let result = e.target.value

  removeClassClicked()
  e.target.classList.add('noteClicked')


}

function removeClassClicked() {
  let buttons = document.querySelectorAll('.note')

  buttons.forEach((e) => {
    e.classList.remove('noteClicked')
  })
}



function submiteForm() {

  const noteClicked = document.querySelector('.noteClicked')
  const alert = document.getElementById('alert')

  if (buttons = noteClicked) {
    window.location.href = 'thankyou.html'
  } else {
    alert.classList.add('active')

    alert.style.opacity = 1
    setTimeout(function () {
      alert.style.opacity = 0
    }, 3000)
  }

}
