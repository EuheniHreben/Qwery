const scrollButton = document.getElementById('scrollButton');
const wrapper = document.querySelector('.wrapper')
document.body.onscroll = function(e) {
  wrapper.style.setProperty('--posY', `${window.scrollY - window.scrollY/3}px`)  
}

$(document).ready(function(){
  $(".slider").bxSlider({
    pager: false,
    controls: false, 
    auto: true,
    speed: 2100,
    easing: 'ease-in-out',
    pause: 4000
  });
});

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
    document.querySelector('.btn-up').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();