const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-menu');

burgerMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});

$(document).ready(function() {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        fade: true,
        cssEase: 'linear',
        draggable: false,
        swipe: false,
        swipeToSlide: true,
    });

    $('.prev-slide').click(function() {
        $('.slider').slick('slickPrev');
    });

    $('.next-slide').click(function() {
        $('.slider').slick('slickNext');
    });

    $('.prev-slide, .next-slide').click(function() {
        $('.slider').slick('slickPlay');
    });
});

