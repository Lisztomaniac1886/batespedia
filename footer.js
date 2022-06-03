document.write( '<div class=\"footer\">\n' );
document.write( '  <p>© 2022 Lisztomaniac</p>\n' );
document.write( '</div>' );
function openModal() {
    document.getElementById("Gallery1Modal").style.display = "block";
    var k = document.getElementsByTagName("BODY")[0];
    k.style.overflow = "hidden";
  }
  function closeModal() {
    document.getElementById("Gallery1Modal").style.display = "none";
    var k = document.getElementsByTagName("BODY")[0];
    k.style.overflow = "visible";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("GallerySlides");
    var dots = document.getElementsByClassName("Gallery1Demo");
    var Gallery1CaptionText = document.getElementById("Gallery1Caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    Gallery1CaptionText.innerHTML = dots[slideIndex-1].alt;
  }
    document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		closeModal()
	}
});
