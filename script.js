const scrollButton = document.getElementById('scrollButton');
const wrapper = document.querySelector('.wrapper')
document.body.onscroll = function(e) {
  wrapper.style.setProperty('--posY', `${window.scrollY - window.scrollY/3}px`)  
}