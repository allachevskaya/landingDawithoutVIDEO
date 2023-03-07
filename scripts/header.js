const menuIcon = document.querySelector('.HeaderContainerMenu svg');
const menuBurger = document.querySelector('.HeaderBurger');
const menuDesktop = document.querySelector('#MenuDesktop');
const menuDesktopBlock = document.querySelector('.HeaderOpen');
const PageContent = document.querySelector('.PageContent')


HandlerMenuDesktop()


function HandlerMenuDesktop(){

    MenuDesktop.addEventListener('mouseover', function () {
        menuDesktopBlock.classList.toggle('closeMenuDesktop');
        
    });
    
    // setTimeout(HandleMouseForOpenMenuDesktop, 3000);

    // function HandleMouseForOpenMenuDesktop(){
    //     window.addEventListener('mouseover', event =>{
        
           
    //         if(!event.composedPath().includes(menuDesktopBlock) && !event.composedPath().includes(menuDesktop)  ){
    //             menuDesktopBlock.classList.remove('closeMenuDesktop')
    //             // console.log('вожу по объекту')
               
    //         }
         
    //     })
    // }
   
    
   

    // window.addEventListener("resize", ()=>{
    //     if (window.innerWidth > 980) {
    //         menuBurger.classList.remove('closeHeaderMenu')
    //     }
    // });
}


menuIcon.addEventListener('click', () => {
    menuBurger.classList.toggle('closeHeaderMenu');
    PageContent.classList.toggle('closePageContent')
    
});


//  HandleMouseForOpenMenuDesktop()


//     function HandleMouseForOpenMenuDesktop(){
//         window.addEventListener('mouseover', event =>{
        
           
//             if(!event.composedPath().includes(menuDesktopBlock) && !event.composedPath().includes(menuDesktop)  ){
//                 menuDesktopBlock.classList.togge('closeMenuDesktop')
//                 // console.log('вожу по объекту')
               
//             }
         
//         })
//     }
