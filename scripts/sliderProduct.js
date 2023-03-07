const sliderDesktop = document.querySelectorAll('#slideDesk');
const favoriteIconDesk = document.querySelectorAll('.SliderItemLike');
const arrayFavoriteIcon = ['../assets/icons/loveWhite.svg', '../assets/icons/loveWhiteFull.svg'];
const favoriteIconMob = document.querySelectorAll('.SliderItemLikeMob');
const slideMob = document.querySelectorAll('#slideMob');


function getSlider(array, classArray, state) {

    const activeSlide = index => {

        for (let slide of array) {
            slide.classList.add(classArray);
        }
        array[index].classList.remove(classArray);

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



window.addEventListener("resize", () => {
    if (window.innerWidth < 520) {
        getSlider(slideMob, 'sliderHidden', 0);
        changeFavoriteIcon(favoriteIconMob);

    }
    else {
        getSlider(sliderDesktop, 'sliderHidden', 0);
        changeFavoriteIcon(favoriteIconDesk);

    }
});







