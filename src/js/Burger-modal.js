const callZev = document.querySelectorAll('.call')
const message = document.querySelectorAll('.message')
const modal = document.querySelectorAll('.modal')
const closeBtn = document.querySelectorAll('.close')
const blackOut = document.querySelector('.blackout')
const open = document.querySelectorAll('.open')
const burger = document.querySelector('.burger')

blackOut.addEventListener('click', () => {
  blackOut.classList.remove("blackout__active")
  modal[1].classList.remove('modal__active')
  modal[0].classList.remove('modal__active')
  burger.classList.remove('burger__active')
})
for (let i = 0; i < callZev.length; i++) {
  callZev[i].addEventListener('click', () => {
    blackOut.classList.add('blackout__active')
    modal[0].classList.toggle('modal__active')
    modal[1].classList.remove('modal__active')
    burger.classList.remove('burger__active')
  })
}
for (let i = 0; i < message.length; i++) {
  message[i].addEventListener('click', () => {
    blackOut.classList.add('blackout__active')
    modal[1].classList.toggle('modal__active')
    modal[0].classList.remove('modal__active')
    burger.classList.remove('burger__active')
  })
}
for (let i = 0; i < open.length; i++) {
  open[i].addEventListener('click', () => {
    burger.classList.toggle('burger__active')
    blackOut.classList.add('blackout__active')
  })
}
