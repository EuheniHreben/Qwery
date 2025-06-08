document.addEventListener("DOMContentLoaded", function () {
  const topImage = document.querySelector(".parallax--top");
  const bottomImage = document.querySelector(".parallax--bottom");

  if (topImage) {
    new simpleParallax(topImage, {
      scale: 1.2,
      orientation: "up",
      delay: 0.2,
    });
  }

  if (bottomImage) {
    new simpleParallax(bottomImage, {
      scale: 1.4,
      orientation: "down",
      delay: 0.1,
    });
  }
});
