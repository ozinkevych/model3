document.getElementById('open-Modal-Btn').addEventListener('click', function (event) {
    event.preventDefault();

    document.getElementById('myModal').style.display = 'flex';
});


document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('myModal').style.display = 'none';
});


$(document).ready(function () {
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

    $('.prev-slide').click(function () {
        $('.slider').slick('slickPrev');
    });

    $('.next-slide').click(function () {
        $('.slider').slick('slickPrev');
    });

    $('.prev-slide, .next-slide').click(function () {
        $('.slider').slick('slickPlay');
    });
});



const burgerMenu = document.querySelector('.burger-menu');
const mainMenu = document.querySelector('.main-menu');

burgerMenu.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});
document.querySelector('.form-btn').addEventListener('click', function (event) {
    let form = document.querySelector('.feedback-form');

    if (!form.checkValidity()) {
        event.preventDefault();
        form.classList.add('invalid');
    } else {
        form.classList.remove('invalid');
    }
});
