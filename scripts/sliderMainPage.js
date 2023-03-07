const favoriteIcon = document.querySelectorAll('#loveWhite');
const arrayFavoriteIcon = ['assets/icons/loveWhite.svg', 'assets/icons/loveWhiteFull.svg']
const slides = document.querySelectorAll('.NewProductsSliderSlides');
const slidesMob = document.querySelectorAll('.NewProductsMobSliderItem')
const mainImg = document.querySelector('#MainImg');
let i = 0;
let state = 0;
let stateMob = 0;

handleSrc();

function handleSrc() {

    favoriteIcon.forEach(icon => {
        icon.addEventListener('click', (e) => {
            i++;
            if (i == arrayFavoriteIcon.length) {
                i = 0;
            }
            e.target.src = arrayFavoriteIcon[i];
        });
    });

    // window.addEventListener("resize", () => {
    //     if (window.innerWidth < 680) {
    //         mainImg.src = '../assets/mainPage/mainIMg.png';
           
    //     }
    //     else {
    //         mainImg.src = '../assets/mainPage/IMG_6884.jpg';
           
    //     }
    // });

}


getSlider(slides) // слайдер
getSlider(slidesMob) // слайдер

function getSlider(array) {
    
    const activeSlide = index => {

        for (let slide of array) {
            slide.classList.add('closeSlideMainPage');
        }
        array[index].classList.remove('closeSlideMainPage');
    }


    const nextSlide = () => {
        if (state == array.length - 1) {
            state = 0;
            activeSlide(state);
        }
        else {
            state++;
            activeSlide(state);
        }
    }



    let timerId = setInterval(() => nextSlide(), 4000);
}


