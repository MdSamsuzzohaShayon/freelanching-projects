// SVG ANIMATION START
const animation = bodymovin.loadAnimation({
  container: document.getElementById('zaparevideo'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/landing_data.json'
});

const animation2 = bodymovin.loadAnimation({
  container: document.getElementById('zapareeqry'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'js/boy_girl_talking.json'
})

// lottie.loadAnimation({
//     container: document.getElementById('zaparevideo'), // the dom element that will contain the animation
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'landing_data.json' // the path to the animation json 
// });

// SVG ANIMATION ENDS





// SLICK AND POLYFILLS WORKING TOGETHER
let scroll = new SmoothScroll('a[href*="#"]');

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  $("#navbarDropdown").attr("data-toggle", "dropdown");
  $("#navbarDropdown1").attr("data-toggle", "dropdown");
}









