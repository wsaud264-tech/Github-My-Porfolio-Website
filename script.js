let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");

menuBtn.onclick = ()=>{
  navLinks.classList.toggle("show");
}
