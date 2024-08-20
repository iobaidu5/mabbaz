document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.Navbar_nav-link');
  const currentPath = window.location.pathname.replace(/^.*\/([^\/]*)$/, '/$1');
  if (currentPath === "/") {
    if (navLinks.length > 0) {
      navLinks[0].classList.add('active');
    }
    return;
  }

  navLinks.forEach(link => {
    const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname;
    if (currentPath === linkPath) {
      link.closest('.Navbar_nav-item').classList.add('active');
    }
  });
});


const nav = document.querySelector('.fixedNav');
window.addEventListener('scroll', fixNav);


function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('navbar-active');
    } else {
        nav.classList.remove('navbar-active');
    }
}

$(document).ready(function() {
  function updateCarouselId() {
      if ($(window).width() <= 990) {
          if (!$('#owl').length) { // Check if the id is not already applied
              $('.owl-carousel.owl-theme').attr('id', 'owl').owlCarousel({
                loop: true,
                margin: 10, 
                nav: false,
                dots: false,
                stagePadding: 50, 
                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1,
                    nav: false,
                    stagePadding: 20 
                  },
                  600: {
                    items: 1,
                    nav: false,
                    stagePadding: 30 
                  },
                  1000: {
                    items: 1,
                    nav: false,
                    loop: false,
                    stagePadding: 50 
                  }
                }
              });
          }
      } else {
          if ($('#owl').length) {
              $('.owl-carousel.owl-theme').trigger('destroy.owl.carousel').removeAttr('id');
          }
      }
  }

  updateCarouselId();

  $(window).resize(function() {
      updateCarouselId();
  });
});



function addTitleToLinks() {
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    if (!link.hasAttribute('title')) {
      var linkText = link.textContent;
      link.setAttribute('title', linkText);
    }
  });
}

addTitleToLinks();