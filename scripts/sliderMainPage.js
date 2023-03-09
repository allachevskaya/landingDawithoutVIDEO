const favoriteIcon = document.querySelectorAll('#addFavorite');
const favoriteIconMob = document.querySelectorAll('#addFavorite-mob')
const arrayFavoriteIcon = ['assets/icons/loveWhite.svg', 'assets/icons/loveWhiteFull.svg'];
let i = 0;

const slidesDesk = document.querySelectorAll('.NewProductsSlider');
const slidesMob = document.querySelectorAll('.SliderItemMob');


function getSlider(array, state) {

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



    let timerId = setInterval(() => nextSlide(), 4900);
}




function changeFavoriteIcon (icons) {
    i = 0;
    icons.forEach(icon => {
        
        icon.addEventListener('click', (e) => {
            i++;
            if (i == arrayFavoriteIcon.length) {
                i = 0;
            }
            e.target.src = arrayFavoriteIcon[i];
        });
    });
}



// window.addEventListener("resize", () => {
//     if (window.innerWidth < 520) {
//         getSlider(slidesDesk, 0);
//         changeFavoriteIcon(favoriteIcon);

//     }
//     else {
//         getSlider(slidesMob, 0);
//         changeFavoriteIcon(favoriteIconMob);

//     }
// });

getSlider(slidesDesk, 0);
changeFavoriteIcon(favoriteIcon);

getSlider(slidesMob, 0);
changeFavoriteIcon(favoriteIconMob);


