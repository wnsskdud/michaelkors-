$(function(){
    var btn = $('.cnt01>div.btn');
    var artGroup = $('.artGroup');
    var wd = $(window).width();
    var mvLeft = 0;
    var mvRight = 0;

    if(wd > 1024){
        mvLeft = 25;
        mvRight = 50;
    }else if(wd >= 420 && wd <= 1024){
        mvLeft = 33;
        mvRight = 66;
    }else{
        mvLeft = 50;
        mvRight = 100;
    }

    artGroup.find('.article:last').prependTo(artGroup);
    artGroup.css({
        marginLeft : -mvLeft+'%'
    });
    btn.find('i').first().click(function(){
        artGroup.stop().animate({
            marginLeft : '0%'
        },400,function(){
            artGroup.find('.article:last').prependTo(artGroup);
            artGroup.css({
                marginLeft : -mvLeft+'%'
            });
        });
    });
    btn.find('i').last().click(function(){
        artGroup.stop().animate({
            marginLeft : -mvRight+'%'
        },400,function(){
            artGroup.find('.article:first').appendTo(artGroup);
            artGroup.css({
                marginLeft : -mvLeft+'%'
            });
        });
    });
    // var i = 0;
    // $('.cnt01>div.btn>i').eq(0).click(function(){
    //     i--;
    //     if(i <= 0){
    //         i = 0;
    //     }
    //     $('.cnt01 div.artGroup').css('margin-left',i*-100+'%');
    // });
    // $('.cnt01>div.btn>i').eq(1).click(function(){
    //     i++;
    //     if(i >= 3){
    //         i = 2;
    //     }
    //     $('.cnt01 div.artGroup').css('margin-left',i*-100+'%');
    // });
});