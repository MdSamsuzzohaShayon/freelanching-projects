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






// HIGHT SETUP FOR TRANSLATION PAGE
// const translation_languages_header = document.getElementById('lan_head');
// if(window.innerWidth > 412){
//   translation_languages_header.style.height = '90vh';
// }

// if(window.innerWidth < 412){
//   translation_languages_header.style.height = '100%';
// }



const circle_from_process_of_t_service = document.getElementsByClassName('tl-circ');
const menu = document.getElementsByClassName('menuDiv');
const lan_head = document.getElementById('lan_head');


// if(circle_from_process_of_t_service)
// circle_from_process_of_t_service[1].scrollHeight



// console.log(window.);


for (let i = 0; i < circle_from_process_of_t_service.length; i++) {
  console.log(circle_from_process_of_t_service[i].offSetTop);  
}


// circle_from_process_of_t_service.forEach((circle) => {
//   if (event.deltaY)
// })



console.log(circle_from_process_of_t_service.length);