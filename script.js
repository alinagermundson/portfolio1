$(document).ready(function() {

    $('#contact').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#1').offset().top
            }, 2000)
    });

    $('#work').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#2').offset().top
            }, 2000)
    });

    $('#who').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#4').offset().top
            }, 2000)
    });

});

