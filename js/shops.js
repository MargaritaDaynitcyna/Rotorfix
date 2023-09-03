window.addEventListener("DOMContentLoaded", () => {
    burgerMenu();
    showsShop();
    maps();
});

function burgerMenu() {
    document.querySelector("#burger").addEventListener("click", () => {
        document.querySelector("#menu").classList.add("nav__is-active")
    });
    document.querySelector("#close").addEventListener("click", () => {
        document.querySelector("#menu").classList.remove("nav__is-active")
    });
}

function showsShop() {
    const btnList = document.querySelector('.show__list');
    const btnCart = document.querySelector('.show__cart');

    btnList.addEventListener('click', () => {
        btnActive(btnList);
    })
    btnCart.addEventListener('click', () => {
        btnActive(btnCart);
    })

    function btnActive(element) {
        document.querySelector('.show__btn-is-active').style.zIndex='0';
        document.querySelector('.show__btn-is-active').classList.remove('show__btn-is-active');
        element.classList.add('show__btn-is-active');
        element.style.zIndex='1';
    };
}

function maps() {
    const mapsMarks = document.querySelectorAll('.maps__mark');

    mapsMarks.forEach((mark) => mark.addEventListener('click', () => {
        document.querySelector('.maps__mark-active').classList.remove('maps__mark-active');
        document.querySelector('.maps__info-active').classList.remove('maps__info-active');
        document.querySelectorAll('.maps__svg-color-active').forEach((svg)=>{
            svg.classList.remove('maps__svg-color-active');
        })

        mark.classList.add('maps__mark-active');
        mark.querySelector('.maps__info').classList.add('maps__info-active');
        mark.querySelectorAll('.maps__svg-color').forEach((svg)=>{
            svg.classList.add('maps__svg-color-active');
        });
    }));
}