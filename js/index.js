$('#banner').load('../html/banner.html')
$('#footer').load('../html/footer.html')
$(function () {
  $('.about_left>div').eq(0).siblings('div').addClass('animated ').css('display', 'none');
  $('.about_right>ul>li').click(function () {
    var i = $(this).index()
    $(this).addClass('active').siblings('li').removeClass('active')
    $('.about_left>div').eq(0).siblings('div').css('display', 'block');
    // $('.about_left>div').eq(i).removeClass('fadeInUp active').addClass('fadeOutUp')
    $('.about_left>div').eq(i).removeClass('fadeOutUp').addClass('fadeInUp ').siblings('div').removeClass('fadeInUp ').addClass('fadeOutUp')

  })
})

$(function () {
  window.onresize = resizeBannerImage; //当窗口改变宽度时执行此函数
  function resizeBannerImage() {
    var winW = $(window).width();
    if (winW > 960) {
      var mySwiper_2 = new Swiper('.swiper-container_pro', {
        // autoplay: {
        //   delay: 2000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false,
        // },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        //   slidesPerView: 3,
        // //   spaceBetween: -50,
        //   centeredSlides: true,
        //   observer: true,
        //   observeParents: true,

        centeredSlides: true, // 选中slide居中显示    
        initialSlide: 1, // 默认选中项索引    
        slidesPerView: 3.3, // 自动匹配每次显示的slide个数,loop="auto",//模式下，还需要设置loopedSlides    
        effect: "coverflow", // 切换效果-3d    
        coverflowEffect: {
          rotate: 0,
          stretch: 10,
          depth: 160,
          modifier: 2,
          slideShadows: true
        },

      })
    }else{
      var mySwiper_2 = new Swiper('.swiper-container_pro', {
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        //   slidesPerView: 3,
        // //   spaceBetween: -50,
        //   centeredSlides: true,
        //   observer: true,
        //   observeParents: true,

        // centeredSlides: true, // 选中slide居中显示    
        // initialSlide: 1, // 默认选中项索引    
        // slidesPerView: 3, // 自动匹配每次显示的slide个数,loop="auto",//模式下，还需要设置loopedSlides    
        // effect: "coverflow", // 切换效果-3d    
        // coverflowEffect: {
        //   rotate: 0,
        //   stretch: 10,
        //   depth: 160,
        //   modifier: 2,
        //   slideShadows: true
        // },

      })
    }
  }
  
  resizeBannerImage()

})