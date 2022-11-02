
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
        $('#preloader').fadeOut(2000)
    });
    
    $('.review_content').slick({
        autoplay:true,
        dots: true,
        slidesToShow:2
    });
})




// var darkMode_icon = document.getElementById('mode');
// darkMode_icon.addEventListener('click', function(){
//     document.body.classList.toggle('darkMode');

//     if(darkMode_icon.classList.contains('fa-moon')){
//         darkMode_icon.classList.add('fa-sun');
//         darkMode_icon.classList.remove('fa-moon');
//     }else{
//         darkMode_icon.classList.remove('fa-sun');
//         darkMode_icon.classList.add('fa-moon');
//     }
// });