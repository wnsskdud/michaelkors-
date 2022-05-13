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
    // var loc = [];
    // for(var i = 0; i < $('body>div').length; i++){
    //     loc[i] = $$('body>div').eq(i).offset().top;
    // }
    // btn.find('li:first').click(function(){
    //     ind = $(this).index();
    //     $('html').animate({scrollTop:loc[ind]})
    // });
});