//toggle class active
const navbarNav = document.querySelector(".navBar-nav");
document.querySelector("#hamber-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side ber 
const hamburger = document.querySelector("#hamber-menu");
documen.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
