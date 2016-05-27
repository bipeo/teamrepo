$(document).ready(function() {
    setTimeout(function() {
    
    $('#slider_1').show().slick({
        dots: false,
    });
    $('#slider_2').show().slick({
        dots: false,
    });
    
    $('#slider_2').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true
    });
});
    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('.to_top').fadeIn();

        } else {

            $('.to_top').fadeOut();

        }

    });

    $('.to_top').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });
