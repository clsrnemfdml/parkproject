$("nav > ul > li").mouseover(function(){
    $(".submenu").stop().fadeIn();
});
$("nav > ul > li").mouseleave(function(){
    $(".submenu").stop().fadeOut(); 
});

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

    }
  });

  var swiper = new Swiper('.swiper-container2', {
    slidesPerView: 8,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
      
  });

  var swiper = new Swiper('.swiper-container3', {
    slidesPerView: 5,
    spaceBetween: 30,
    // centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
      },
      
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