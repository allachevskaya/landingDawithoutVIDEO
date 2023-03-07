const itemsIcon = document.querySelectorAll('#BlackLove');
const items = document.querySelectorAll('.wishListProductsProduct');
const count = document.querySelectorAll('.count');
const plusIcon = document.querySelectorAll('.wishListProductsProductTextTitle img');

const currentCost = 0;


const deleteItem = (e,idxIcon) => {
    if (e.target.closest('.wishListProductsProduct')) {
        console.log(1)
        items.forEach((item, idxItem) => {
            if (idxItem == idxIcon) {
                console.log(1);
                 item.classList.add('wishListScale')
                setTimeout(() =>  item.style.display = 'none', 900);
            
            }
        });
    }
}

const handleClickIcon = () => {
    itemsIcon.forEach((icon, idxIcon) => {
        icon.addEventListener('click', (e)=>{
            deleteItem(e,idxIcon);
        })
    });
}



handleClickIcon();




