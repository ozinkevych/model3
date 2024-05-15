document.getElementById('open-Modal-Btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prohibition of clicking on a link (or executing an event by default)

    // Show modal window
    document.getElementById('myModal').style.display = 'flex';
});

// Add an event handler for closing the modal window
document.querySelector('.close').addEventListener('click', function() {
    // Close the modal window
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

