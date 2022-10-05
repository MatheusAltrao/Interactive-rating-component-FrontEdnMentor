
const result = localStorage.getItem('result')


function checkValue() {
  let message = document.getElementById('message')

  switch (result) {
    case '1':
      message.innerText = 'You selected 1 out of 5'
      break
    case '2':
      message.innerText = 'You selected 2 out of 5'
      break
    case '3':
      message.innerText = 'You selected 3 out of 5'
      break
    case '4':
      message.innerText = 'You selected 4 out of 5'
      break
    case '5':
      message.innerText = 'You selected 5 out of 5'
      break
    default:
      console.log('error')
  }

}

checkValue()