import Swiper, {Pagination} from 'swiper';
const handleResize = () => {
  const width = window.innerWidth
  swiperArea(width)
}
window.addEventListener('resize', handleResize)
const swiperArea = (width) => {
  let swiper
  if (width > 768) {
  } else {
    swiper = new Swiper('.swiper', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,

      },
      loop: true,
      slidesPerView: "auto",
      observer: true,
      observeParents: true,
      updateOnWindowResize: true,
      resizeObserver: true,
    })
  }
}
swiperArea(window.innerWidth)
