const boxTitle = document.querySelectorAll('.ProductDescriptionBoxesBoxTitle');
const boxText = document.querySelectorAll('.ProductDescriptionBoxesBoxText');
const icons = document.querySelectorAll('.ProductDescriptionBoxesBoxTitle img')
const arrayIcon = ['../assets/icons/minus.png', '../assets/icons/plus.svg'];

let iconsPlusMinus = document.querySelectorAll('.plusminus');


const changeImg = (idxTitle) => {

    iconsPlusMinus.forEach((icon, idxIcon) => {
        if (idxTitle == idxIcon) {
            icon.classList.toggle('plusminusActive')
        }

    });
}

const openBox = (e, idxTitle) => {


    if (e.target.closest('.ProductDescriptionBoxesBoxTitle')) {
        boxText.forEach((text, idxText) => {
            if (idxTitle == idxText) {
                text.classList.toggle('ProductDescriptionTextHidden');

            }
        });
    }


}

const handleClick = () => {
    boxTitle.forEach((title, idxTitle) => {
        title.addEventListener('click', (e) => {
            openBox(e, idxTitle);
            changeImg(idxTitle)

        })
    });
}

handleClick();

