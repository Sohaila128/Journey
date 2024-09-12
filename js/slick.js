// //===== Slick MOST SELLING
// $('.most-slied').slick({
//   dots: true,
//   dotsToShow: 3, // عدد النقاط التي تظهر في وقت واحد
//   infinite: true,
//   speed: 800,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   arrows: true,
//   prevArrow:'<span class="prev"><i class="fa fa-angle-left"></i></span>',
//   nextArrow: '<span class="next"><i class="fa fa-angle-right"></i></span>',
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       }
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         arrows: false,
//       }
//     },
//   ]
// });

//===== Slick services-swiper
$('.services-swiper').slick({
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow:  $('.left-arrow'), // تعطيل السهم الافتراضي لليسار
  nextArrow: $('.right-arrow'), // تعطيل السهم الافتراضي لليمين
  appendDots: $('.pagination-container'), // تحديد عنصر HTML لعرض الباجينيشن
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});
