// Burger

const burgerButton = document.querySelector('.burger-header');
const headerNav = document.querySelector('.nav');

burgerButton.addEventListener('click', (el) => {
    headerNav.classList.toggle('nav_active');
    burgerButton.classList.toggle('burger-header_active');
    document.body.classList.toggle('no-scroll');
});



// Spoller

const items = document.querySelectorAll('.questions-item__title');
items.forEach((element) => {
    element.addEventListener("click", () => {
        items.forEach((el) => {
            if(el == element) {
                return;
            }
            el.parentElement.classList.remove('questions-item_active');
        }); 
        element.parentElement.classList.toggle('questions-item_active');
    })
});

// Feedback Slider

const prevButton = document.getElementsByClassName('slider-feedback__button_left')[0];
const nextButton = document.getElementsByClassName('slider-feedback__button_right')[0];

const slides = document.querySelectorAll('.feedback-slide');

let currentSlide = 0;



function moveSlider() {
    console.log(currentSlide);
    slides.forEach((e) => {
        e.style.transform = `translateX(calc(-${100*currentSlide}% - ${currentSlide * 24}px))`;
    });
    if (currentSlide <= 0) {
        if(!prevButton.classList.contains('slider-feedback__button_disable')) {
            prevButton.classList.add('slider-feedback__button_disable');
        }
    } else {
        if(prevButton.classList.contains('slider-feedback__button_disable')) {
            prevButton.classList.remove('slider-feedback__button_disable');
        }
    }
    if (currentSlide >= slides.length - 1) {
        if(!nextButton.classList.contains('slider-feedback__button_disable')) {
            nextButton.classList.add('slider-feedback__button_disable');
        }
    } else {
        if(nextButton.classList.contains('slider-feedback__button_disable')) {
            nextButton.classList.remove('slider-feedback__button_disable');
        }
    }
}

moveSlider();

prevButton.addEventListener('click', (e) => {
    if (currentSlide <= 0) {
        return false;
    }
    currentSlide --;
    moveSlider();
});
nextButton.addEventListener('click', (e) => {
    if (currentSlide >= slides.length - 1) {
        return false;
    }
    currentSlide ++;
    moveSlider();
});

// Header adaptive 

function changeTemplate(){
    const burger = document.querySelector('.burger-header');
    const button = document.querySelector('.header__button');
    const navList = document.querySelector('.nav__list');
    const header = document.querySelector('.header__inner');

    if(window.innerWidth < 500) {
        navList.append(button);
    } else {
        burger.before(button);
    }
}

window.addEventListener('resize', () => {
    changeTemplate();
});
window.addEventListener('load', () => {
    changeTemplate();
});

// Header 

const header = document.querySelector('.header');

window.onscroll = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        header.classList.add('header_scroll');
    } else {
        header.classList.remove('header_scroll');
    }
};

function myFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById("myImg").className = "slideUp";
  }
}
