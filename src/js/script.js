// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//klik diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

//darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//pindah posisi toggle darkmode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

var slidePosition1 = 1;
var slidePosition2 = 1;
var slidePosition3 = 1;
var slidePosition4 = 1;
var slidePosition5 = 1;
var slidePosition6 = 1;
var slidePosition7 = 1;
SlideShow1(slidePosition1);
SlideShow2(slidePosition2);
SlideShow3(slidePosition3);
SlideShow4(slidePosition4);
SlideShow5(slidePosition5);
SlideShow6(slidePosition6);
SlideShow7(slidePosition7);

// forward/Back controls
function plusSlides1(n) {
  SlideShow1((slidePosition1 += n));
}
function plusSlides2(n) {
  SlideShow2((slidePosition2 += n));
}
function plusSlides3(n) {
  SlideShow3((slidePosition3 += n));
}
function plusSlides4(n) {
  SlideShow4((slidePosition4 += n));
}
function plusSlides5(n) {
  SlideShow5((slidePosition5 += n));
}
function plusSlides6(n) {
  SlideShow6((slidePosition6 += n));
}
function plusSlides7(n) {
  SlideShow7((slidePosition7 += n));
}

//  images controls
function currentSlide1(n) {
  SlideShow1((slidePosition1 = n));
}
function currentSlide2(n) {
  SlideShow2((slidePosition2 = n));
}
function currentSlide3(n) {
  SlideShow3((slidePosition3 = n));
}
function currentSlide4(n) {
  SlideShow4((slidePosition4 = n));
}
function currentSlide5(n) {
  SlideShow5((slidePosition5 = n));
}
function currentSlide6(n) {
  SlideShow6((slidePosition6 = n));
}
function currentSlide7(n) {
  SlideShow7((slidePosition7 = n));
}

function SlideShow1(n) {
  var i;
  var slides = document.getElementsByClassName("Containers1");
  var circles = document.getElementsByClassName("dots1");
  if (n > slides.length) {
    slidePosition1 = 1;
  }
  if (n < 1) {
    slidePosition1 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition1 - 1].style.display = "block";
  circles[slidePosition1 - 1].className += " enable";
}
function SlideShow2(n) {
  var i;
  var slides = document.getElementsByClassName("Containers2");
  var circles = document.getElementsByClassName("dots2");
  if (n > slides.length) {
    slidePosition2 = 1;
  }
  if (n < 1) {
    slidePosition2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition2 - 1].style.display = "block";
  circles[slidePosition2 - 1].className += " enable";
}
function SlideShow3(n) {
  var i;
  var slides = document.getElementsByClassName("Containers3");
  var circles = document.getElementsByClassName("dots3");
  if (n > slides.length) {
    slidePosition3 = 1;
  }
  if (n < 1) {
    slidePosition3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition3 - 1].style.display = "block";
  circles[slidePosition3 - 1].className += " enable";
}
function SlideShow4(n) {
  var i;
  var slides = document.getElementsByClassName("Containers4");
  var circles = document.getElementsByClassName("dots4");
  if (n > slides.length) {
    slidePosition4 = 1;
  }
  if (n < 1) {
    slidePosition4 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition4 - 1].style.display = "block";
  circles[slidePosition4 - 1].className += " enable";
}
function SlideShow5(n) {
  var i;
  var slides = document.getElementsByClassName("Containers5");
  var circles = document.getElementsByClassName("dots5");
  if (n > slides.length) {
    slidePosition5 = 1;
  }
  if (n < 1) {
    slidePosition5 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition5 - 1].style.display = "block";
  circles[slidePosition5 - 1].className += " enable";
}
function SlideShow6(n) {
  var i;
  var slides = document.getElementsByClassName("Containers6");
  var circles = document.getElementsByClassName("dots6");
  if (n > slides.length) {
    slidePosition6 = 1;
  }
  if (n < 1) {
    slidePosition6 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition6 - 1].style.display = "block";
  circles[slidePosition6 - 1].className += " enable";
}
function SlideShow7(n) {
  var i;
  var slides = document.getElementsByClassName("Containers7");
  var circles = document.getElementsByClassName("dots7");
  if (n > slides.length) {
    slidePosition7 = 1;
  }
  if (n < 1) {
    slidePosition7 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition7 - 1].style.display = "block";
  circles[slidePosition7 - 1].className += " enable";
}

function myFunction1() {
  var dots = document.getElementById("dot1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Baca Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Baca Lebih Sedikit";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dot2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Baca Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Baca Lebih Sedikit";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dot3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Baca Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Baca Lebih Sedikit";
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dot4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Baca Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Baca Lebih Sedikit";
    moreText.style.display = "inline";
  }
}
function myFunction5() {
  var dots = document.getElementById("dot5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Baca Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Baca Lebih Sedikit";
    moreText.style.display = "inline";
  }
}
function myFunction6() {
  var dots = document.getElementById("dot6");
  var moreText = document.getElementById("more6");
  var btnText = document.getElementById("myBtn6");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Baca Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Baca Lebih Sedikit";
    moreText.style.display = "inline";
  }
}
function myFunction7() {
  var dots = document.getElementById("dot7");
  var moreText = document.getElementById("more7");
  var btnText = document.getElementById("myBtn7");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Baca Selengkapnya";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Baca Lebih Sedikit";
    moreText.style.display = "inline";
  }
}
