$(function(){
    let i=parseInt(window.location.hash.substring(1))-1
    $('.pro_list>li').eq(i).addClass('act').siblings('.pro_list>li').removeClass('act')
    $('.pro_detail').eq(i).addClass('act').siblings('.pro_detail').removeClass('act')
    $('.pro_list>li').click(function(){
        $(this).addClass('act').siblings('.pro_list>li').removeClass('act')
        $('.pro_detail').eq($(this).index()).addClass('act').siblings('.pro_detail').removeClass('act')
    })
})