const bgMain = document.querySelector('.aboutHomeImage img');

    window.addEventListener("resize", ()=>{
        if (window.innerWidth <= 520) {
            bgMain.src = '../assets/aboutHome/image 338.png'
        }
        else {
            bgMain.src = '../assets/aboutHome/image 556.png'
        }
    });