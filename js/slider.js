var slideIndex = 0;
showSlides(); //init function

//function to handle shide show
function showSlides() {
  var i;
  var activeDot = "./img/button-act.png";
  var inactiveDot = "./img/button.png";
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].src = dots[i].src = inactiveDot;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].src = activeDot;
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
