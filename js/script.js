document.getElementById('openModalBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Заборона перехіду за посиланням (або виконання події за замовчуванням)

    // Показати модальне вікно
    document.getElementById('myModal').style.display = 'flex';
});

// Додати обробник події для закриття модального вікна
document.querySelector('.close').addEventListener('click', function() {
    // Закрити модальне вікно
    document.getElementById('myModal').style.display = 'none';
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

const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-menu');

burgerMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});

