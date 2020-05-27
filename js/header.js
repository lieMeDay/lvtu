$(function(){
    $(window).scroll(function(){
        if($('body,html').scrollTop()>=100){
            $('.header').height(80);
            // $('.header').animate({height:"80"},1000)
            $('.header *:not(.header_nav li>div)').height(80);
            $('.header_nav li>div').css({ "margin": "20px auto", "line-height": "40px","height":"40px" });
            $('.header_nav li>div>span').addClass('di').removeClass('gao')
        }else{
            $('.header').height(100);
            // $('.header').animate({height:"100"},1000)
            $('.header *:not(.header_nav li>div)').height(100);
            $('.header_nav li>div').css({ "margin": "25px auto", "line-height": "50px","height":"50px" });
            $('.header_nav li>div>span').addClass('gao').removeClass('di')
        }
    })
    $('.tab_btn').click(function(){
        $('.sm_nav').toggle()
    })
})