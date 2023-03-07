const body = document.querySelector('body');


//modal user 
const HeaderPop = document.querySelector('.HeaderPop');
const userIcon = document.querySelectorAll('#user');


//modal store 
const HeaderPopStore = document.querySelector('.HeaderPopStore');
const storeIcon = document.querySelectorAll('#store');

// icons close 
const closeIcons = document.querySelectorAll('#closeHeaderPop');

// show password 
const showPasswordIcon = document.querySelector("#showPassword");
const password = document.querySelector('#password');

// открываем модальное окно и запрещаем скролл при клике на иконку

const toggleClass = (item, classItem) => {
    item.classList.toggle(classItem);
    document.body.classList.toggle('hiddenBody');
}

// при клике на крест закрываем действующее окно

const closeModal = (currentModal, classCurrentModal) => {
    currentModal.classList.add(classCurrentModal);
    document.body.classList.remove('hiddenBody');
}


// закрываем окно если клик не на currentPop

const handleClickWindow = (curentPop, classCurrentPop) => {
    window.addEventListener('click', (e) => {
  
        if (e.target.className === classCurrentPop) {
            toggleClass(curentPop, 'closeHeaderPop');
        }
        if (e.target.id === 'closeHeaderPop') {
            closeModal(curentPop, 'closeHeaderPop')
        }
       
        if(e.target.className === 'HeaderPopStore'){
            closeModal(curentPop, 'closeHeaderPop')
        }
    })
}

// функции для каждой иконки

const openModalUser = (e) => {
    e.preventDefault();
    toggleClass(HeaderPop, 'closeHeaderPop');
    handleClickWindow(HeaderPop, 'HeaderPop')
}


const openModalStore = (e) => {
    e.preventDefault();
    toggleClass(HeaderPopStore, 'closeHeaderPop');
    handleClickWindow(HeaderPopStore, 'HeaderPopStoreModalText')
}


// показать пароль 

const showPassword = () => {
    password.type = "text"
}



// ловим клики на иконки 

userIcon.forEach(item => {
    item.addEventListener('click', openModalUser);
});

storeIcon.forEach(item => {
    item.addEventListener('click', openModalStore);
});



// показываем пароль 
showPasswordIcon.addEventListener('click', showPassword)