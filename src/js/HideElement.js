const content = document.querySelectorAll('.hidden')
const contentVis = document.querySelectorAll('.visibl')
const service = document.querySelector('.service-hide__btn')
const click = document.querySelector('.service-hide')

service.addEventListener("click", () => {
  for (let i = 0; i < content.length; i++) {
    content[i].classList.toggle('hidden')
    if (service.textContent === 'Показать все') {
      click.classList.add('click')
      service.textContent = "Скрыть"
    } else {
      service.textContent = 'Показать все'
      click.classList.remove('click')
    }
  }
  for (let b = 0; b < contentVis.length; b++) {
    contentVis[b].classList.toggle('visibl')
    if (document.documentElement.clientWidth < 1119) {

    } else {

    }
  }
})
