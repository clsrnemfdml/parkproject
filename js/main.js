// $("nav > ul > li").mouseover(function(){
//     $(".submenu").stop().fadeIn();
// });
// $("nav > ul > li").mouseleave(function(){
//     $(".submenu").stop().fadeOut(); 
// });

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    // spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

  });

  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
    centeredSlides : true,
    // centeredSlidesBounds :true,
    loop: true,
    breakpoints:{
      1024:{
        slidesPerView:5,
      },
      768: {
        slidesPerView:4,
      },
      640:{
        slidesPerView:2,
      },
    }
      
  });

  var swiper = new Swiper('.swiper-container3', {
    slidesPerView: 1.3,
    spaceBetween: 40,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
    // centeredSlidesBounds :true,
    centeredSlides : true,
    loop: true,
    breakpoints:{
      1024:{
        slidesPerView:4,
      },
      768: {
        slidesPerView:3,
      },
      376:{
        slidesPerView:2,
      }
    }
      
  });


  
  // $(".swiper-wrapper").each(function(idex){
  //       $(".swiper-wrapper:ntn-child"+"("+idex+")"+":hover::after").css({
  //           content: '빵구독서비스',
  //           display: block,
  //           width: 100 + "%",
  //           height: 100 + "%",
  //           backgroundColor: rgba(255, 255, 255, 0.315),
  //           position: absolute
  //       })
  // });   