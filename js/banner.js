
$(function () {
    var mySwiper_1 = new Swiper('.swiper-container', {
  
      // noSwiping: true,
      autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: function () {
          swiperAnimateCache(this); //隐藏动画元素 
          swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
          swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
          // this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); //动画只展现一次，去除ani类名
        }
      },
  
    })
    //鼠标覆盖停止自动切换与隐藏前进后退按钮
    mySwiper_1.el.onmouseover = function () {
      mySwiper_1.navigation.$nextEl.css('display', 'block');
      mySwiper_1.navigation.$prevEl.css('display', 'block');
    }
    //鼠标覆盖停止自动切换与隐藏前进后退按钮
    mySwiper_1.el.onmouseout = function () {
      mySwiper_1.navigation.$nextEl.css('display', 'none');
      mySwiper_1.navigation.$prevEl.css('display', 'none');
    }
  })
  