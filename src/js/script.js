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
SlideShow1(slidePosition1);
SlideShow2(slidePosition2);
SlideShow3(slidePositio3);
SlideShow3(slidePositio4);

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
  SlideShow3((slidePosition3 += n));
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
  SlideShow3((slidePosition3 = n));
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

function myFunction1() {
  var dots = document.getElementById("dots1");
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
  var dots = document.getElementById("dots2");
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
  var dots = document.getElementById("dots3");
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
  var dots = document.getElementById("dots4");
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
