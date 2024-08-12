$(document).ready(function () {
    $("li.active").removeClass("active");
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
});

// if ($(window).width() > 990) {
//   $('.Navbar').addClass('fixedNav');
// } else {
//   $('Navbar').removeClass('fixedNav');
// }

const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);


function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}