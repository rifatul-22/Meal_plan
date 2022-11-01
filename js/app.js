
$(function(){
    $(window).on('scroll', function(){
        var scrollSize = $(window).scrollTop();

        if(scrollSize > 130){
            $('nav').addClass('active');
        }else{
            $('nav').removeClass('active');
        }
    });

    $(window).on('load', function(){
        $('#preloader').fadeOut(1000);
    });

    $('.review_content').slick({
        autoplay:true,
        dots: true,
        slidesToShow:2
    });
})