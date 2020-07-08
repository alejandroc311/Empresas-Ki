new Glider(document.querySelector('.glider'), {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
   {
     // screens greater than >= 775px
     breakpoint: 775,
     settings: {
       // Set to `auto` and provide item width to adjust to viewport
       slidesToShow: 3,
       slidesToScroll: 1,
     }
   }
 ]
});
