const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let touchStartY = 0;
let touchEndY = 0;
const sensitivity = 50; // Чувствительность касания для определения свайпа

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

let isScrollLocked = false; // Флаг для блокировки прокрутки
const scrollLockDuration = 2000; // 5 секунд в миллисекундах

slider.addEventListener('wheel', (e) => {
    e.preventDefault(); // Предотвращаем прокрутку страницы колесом мыши

    if (!isScrollLocked) {
        isScrollLocked = true; // Устанавливаем блокировку

        setTimeout(() => {
            isScrollLocked = false; // Снимаем блокировку через 5 секунд
        }, scrollLockDuration);

        if (e.deltaY > 0) {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
                nextAnimate.classList.add('show-next');
                nextAnimateTwo.classList.add('show-next');
                nextAnimateThree.classList.add('show-next');
                nextAnimateFour.classList.add('show-next');
                setTimeout(() => {
                    nextAnimate.classList.add('hide-next');
                    nextAnimateTwo.classList.add('hide-next');
                    nextAnimateThree.classList.add('hide-next');
                    nextAnimateFour.classList.add('hide-next');
                    setTimeout(() => {
                        nextAnimate.classList.remove('hide-next');
                        nextAnimate.classList.remove('show-next');
                        nextAnimateTwo.classList.remove('hide-next');
                        nextAnimateTwo.classList.remove('show-next');
                        nextAnimateThree.classList.remove('hide-next');
                        nextAnimateThree.classList.remove('show-next');
                        nextAnimateFour.classList.remove('hide-next');
                        nextAnimateFour.classList.remove('show-next');
                    }, 500);
                }, 1000);
            }
        } else if (e.deltaY < 0) {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
                prevAnimate.classList.add('show-prev');
                prevAnimateTwo.classList.add('show-prev');
                prevAnimateThree.classList.add('show-prev');
                prevAnimateFour.classList.add('show-prev');
                setTimeout(() => {
                    prevAnimate.classList.add('hide-prev');
                    prevAnimateTwo.classList.add('hide-prev');
                    prevAnimateThree.classList.add('hide-prev');
                    prevAnimateFour.classList.add('hide-prev');
                    setTimeout(() => {
                        prevAnimate.classList.remove('hide-prev');
                        prevAnimate.classList.remove('show-prev');
                        prevAnimateTwo.classList.remove('hide-prev');
                        prevAnimateTwo.classList.remove('show-prev');
                        prevAnimateThree.classList.remove('hide-prev');
                        prevAnimateThree.classList.remove('show-prev');
                        prevAnimateFour.classList.remove('hide-prev');
                        prevAnimateFour.classList.remove('show-prev');
                    }, 500);
                }, 1000);
            }
        }
    }
});
function handleGesture() {
    if (touchEndY < touchStartY - sensitivity) {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
            nextAnimate.classList.add('show-next');
            nextAnimateTwo.classList.add('show-next');
            nextAnimateThree.classList.add('show-next');
            nextAnimateFour.classList.add('show-next');
            // Поднятие квадрата и его исчезновение через 1 секунду
            setTimeout(() => {
                nextAnimate.classList.add('hide-next');
                nextAnimateTwo.classList.add('hide-next');
                nextAnimateThree.classList.add('hide-next');
                nextAnimateFour.classList.add('hide-next');
                setTimeout(() => {
                    nextAnimate.classList.remove('hide-next');
                    nextAnimate.classList.remove('show-next');
                    nextAnimateTwo.classList.remove('hide-next');
                    nextAnimateTwo.classList.remove('show-next');
                    nextAnimateThree.classList.remove('hide-next');
                    nextAnimateThree.classList.remove('show-next');
                    nextAnimateFour.classList.remove('hide-next');
                    nextAnimateFour.classList.remove('show-next');
                }, 500); // Убрать черный квадрат через 0.5 секунды
            }, 1000); // Поднять квадрат через 1 секунду
        }
    } else if (touchEndY > touchStartY + sensitivity) {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
            prevAnimate.classList.add('show-prev');
            prevAnimateTwo.classList.add('show-prev');
            prevAnimateThree.classList.add('show-prev');
            prevAnimateFour.classList.add('show-prev');
            setTimeout(() => {
                prevAnimate.classList.add('hide-prev');
                prevAnimateTwo.classList.add('hide-prev');
                prevAnimateThree.classList.add('hide-prev');
                prevAnimateFour.classList.add('hide-prev');
                setTimeout(() => {
                    prevAnimate.classList.remove('hide-prev');
                    prevAnimate.classList.remove('show-prev');
                    prevAnimateTwo.classList.remove('hide-prev');
                    prevAnimateTwo.classList.remove('show-prev');
                    prevAnimateThree.classList.remove('hide-prev');
                    prevAnimateThree.classList.remove('show-prev');
                    prevAnimateFour.classList.remove('hide-prev');
                    prevAnimateFour.classList.remove('show-prev');
                }, 500); // Убрать черный квадрат через 0.5 секунды
            }, 1000); // Поднять квадрат через 1 секунду
        }
    }
}
slider.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

slider.addEventListener('touchmove', (e) => {
    e.preventDefault(); // Предотвращает прокрутку страницы на мобильных устройствах
});

slider.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].clientY;
    handleGesture();
});

const prevAnimate = document.querySelector('.prev-animate');
const prevAnimateTwo = document.querySelector('.prev-animate-two');
const prevAnimateFour = document.querySelector('.prev-animate-four');
const prevAnimateThree = document.querySelector('.prev-animate-three');
document.querySelector('.prev').addEventListener('click', () => {

    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
        prevAnimate.classList.add('show-prev');
        prevAnimateTwo.classList.add('show-prev');
        setTimeout(() => {
            prevAnimate.classList.add('hide-prev');
            prevAnimateTwo.classList.add('hide-prev');
            setTimeout(() => {
                prevAnimate.classList.remove('hide-prev');
                prevAnimate.classList.remove('show-prev');
                prevAnimateTwo.classList.remove('hide-prev');
                prevAnimateTwo.classList.remove('show-prev');
            }, 500); // Убрать черный квадрат через 0.5 секунды
        }, 1000); // Поднять квадрат через 1 секунду
    }
});
const slidesTwo = document.querySelectorAll('.slideTwo');
const prev = document.querySelector('.prevTwo');
const next = document.querySelector('.nextTwo');
let otherSlide = 0;

function showSlideTwo(index) {
    slidesTwo.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}


prev.addEventListener('click', () => {
    otherSlide = (otherSlide - 1 + slidesTwo.length) % slidesTwo.length;
    showSlideTwo(otherSlide);
});

next.addEventListener('click', () => {
    otherSlide = (otherSlide + 1) % slidesTwo.length;
    showSlideTwo(otherSlide);
});
const nextButton = document.querySelector('.next');
const nextAnimate = document.querySelector('.next-animate');
const nextAnimateTwo = document.querySelector('.next-animate-two');
const nextAnimateThree = document.querySelector('.next-animate-three');
const nextAnimateFour = document.querySelector('.next-animate-four');
nextButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
        nextAnimate.classList.add('show-next');
        nextAnimateTwo.classList.add('show-next');
        // Поднятие квадрата и его исчезновение через 1 секунду
        setTimeout(() => {
            nextAnimate.classList.add('hide-next');
            nextAnimateTwo.classList.add('hide-next');
            setTimeout(() => {
                nextAnimate.classList.remove('hide-next');
                nextAnimate.classList.remove('show-next');
                nextAnimateTwo.classList.remove('hide-next');
                nextAnimateTwo.classList.remove('show-next');
            }, 500); // Убрать черный квадрат через 0.5 секунды
        }, 1000); // Поднять квадрат через 1 секунду
    }
});
showNextLetter();
// Проверяем, есть ли сохраненное значение индекса слайда в localStorage
const savedSlideIndex = localStorage.getItem('currentSlideIndex');
if (savedSlideIndex) {
    currentSlide = parseInt(savedSlideIndex); // Преобразуем строку в число
    showSlide(currentSlide);
}

// Добавляем обработчик события перед выгрузкой страницы
window.addEventListener('beforeunload', () => {
    // Сохраняем индекс текущего слайда в localStorage перед уходом со страницы
    localStorage.setItem('currentSlideIndex', currentSlide);
});

