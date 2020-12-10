$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('header .main-menu').toggleClass('open-menu');
        $('header .main-menu2').toggleClass('open-menu');
    });
});