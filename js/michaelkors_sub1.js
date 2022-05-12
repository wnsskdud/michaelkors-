$(function(){
    var btn = $('.main ul.tab');
    $(window).scroll(function(){
        console.log(window);
    });

    btn.find('li:first').click(function(){
        $('html,body').stop().animate({
            scrollTop: 800
        },500);
    });
    btn.find('li:last').click(function(){
        $('html,body').stop().animate({
            scrollTop: 2700
        },700);
    });
});