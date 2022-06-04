const repairClick = document.querySelector('.repair__click')
const repairActive = document.querySelector('.repair__click-active')
const contentRepair = document.querySelectorAll('.hidden-repair')
const contentVisRepair = document.querySelector('.visibl-repair')
const click = document.querySelector('.service-hide')

repairClick.addEventListener("click", () => {
  if (repairActive.textContent === 'Показать все') {
    click.classList.add('click')
    repairActive.textContent = "Скрыть"
  } else {
    repairActive.textContent = 'Показать все'
    click.classList.remove('click')
  }
  for (let i = 0; i < contentRepair.length; i++){
    contentRepair[i].classList.toggle('hidden-repair')
  }
  contentVisRepair.classList.toggle('visibl-repair')
})
