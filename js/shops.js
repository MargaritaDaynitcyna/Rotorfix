window.addEventListener("DOMContentLoaded", () => {
    burgerMenu();
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