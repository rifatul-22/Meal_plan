
$(function(){
    $(window).on('scroll', function(){
        var scrollSize = $(window).scrollTop();

        if(scrollSize > 130){
            $('nav').addClass('active');
        }else{
            $('nav').removeClass('active');
        }
        //Back To Top
        if(scrollSize > 300){
            $('#backToTop').show(500);
        }else{
            $('#backToTop').hide(500);
        }
    });

    $(window).on('load', function(){
        $('#preloader').fadeOut(2000)
    });

    //Banner Slick
    $('.banner_slider').slick({
        autoplay: true,
        prevArrow: '<i class="fa-solid fa-chevron-left banner_slider_arrews"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right banner_slider_arrews"></i>',
        dots: true,
        dotsClass: 'banner_slider_dots'
    });
    
    $('.review_content').slick({
        autoplay:true,
        dots: true,
        slidesToShow:2,
        arrows: false,
        dotsClass: 'review_dots'
    });
    $('#backToTop').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        })
    });
})