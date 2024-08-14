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

$(document).ready(function() {
  function updateCarouselId() {
      if ($(window).width() <= 990) {
          $('.owl-carousel.owl-theme').attr('id', 'owl');
      } else {
        $('.owl-carousel.owl-theme').removeAttr('id')
      }
  }
  updateCarouselId();

  $(window).resize(function() {
      updateCarouselId();
  });
});


$(document).ready(function() {
  function initOwlCarousel() {
    $('#owl').owlCarousel({
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
  initOwlCarousel();
});

