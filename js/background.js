let logo = document.querySelector(".logo");
let back = document.querySelector(".thumbnail");

logo.addEventListener('click', function(e) {
  e.preventDefault();
  back.src="images/dark.jpg";
})
