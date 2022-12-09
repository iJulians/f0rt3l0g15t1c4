const body = document.querySelector('body')
const color = document.querySelectorAll('header .title')

for (const element of color) {
  element.addEventListener('click', function () {
    if (element.id === 'default-theme') {
      if (body.className === 'primarycolor') {
        body.className = ''
        body.classList.toggle('secondcolor')
      } else {
        body.className = ''
        body.classList.toggle('primarycolor')
      }
    }
  })
}