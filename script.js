const toggle = document.getElementById('toggle');
const cancel = document.getElementById('cancel');
const navlink = document.getElementById('navlink');

if (toggle && cancel && navlink) {
    toggle.addEventListener('click', () => {
        navlink.style.right = '0px';
        toggle.style.display = 'none';
        cancel.style.display = 'unset';
    });

    cancel.addEventListener('click', () => {
        navlink.style.right = '-300px';
        cancel.style.display = 'none';
        toggle.style.display = 'unset';
    });
}

function hideButtonsOnWidth() {
    if (window.innerWidth >= 769) {
        toggle.style.display = 'none';
        cancel.style.display = 'none';
    } else {
        toggle.style.display = 'unset';
        cancel.style.display = 'none';
    }
}

window.addEventListener('resize', hideButtonsOnWidth);
hideButtonsOnWidth(); // Initialize on page load



const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

if (slides.length && prevButton && nextButton) {
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('activee');
            if (i === index) {
                slide.classList.add('activee');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); // Initialize the first slide
}


const reviews = document.querySelector('.reviews');
const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');

if (reviews && prev2 && next2) {
    next2.addEventListener('click', () => {
        reviews.scrollBy({
            left: 210,
            behavior: 'smooth'
        });
    });

    prev2.addEventListener('click', () => {
        reviews.scrollBy({
            left: -210,
            behavior: 'smooth'
        });
    });
}

const sections = document.querySelectorAll('.gaming');

sections.forEach(section => {
    const games = section.querySelector('.games');
    const prevButton = section.querySelector('.prev3');
    const nextButton = section.querySelector('.next3');

    if (games && prevButton && nextButton) {
        nextButton.addEventListener('click', () => {
            games.scrollBy({
                left: 210,
                behavior: 'smooth'
            });
        });

        prevButton.addEventListener('click', () => {
            games.scrollBy({
                left: -210,
                behavior: 'smooth'
            });
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    function handleScroll() {
        var anime = document.querySelectorAll('.animeX');
        var windowheight = window.innerHeight;

        anime.forEach(el => {
            let animetop = el.getBoundingClientRect().top;
            let animepoint = 150;

            if (animetop < windowheight - animepoint) {
                el.classList.add('activate');
            } else {
                el.classList.remove('activate');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger scroll handler on page load
});

