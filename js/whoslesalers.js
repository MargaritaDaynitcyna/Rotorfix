window.addEventListener("DOMContentLoaded", () => {
    burgerMenu();
    showMoreFoto();
    swiper();
    rangeSales();
    rangeMarginality();
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

function showMoreFoto() {
    let fotoBtn = document.querySelector('#fotoBtn');

    fotoBtn.addEventListener('click', () => {
        if (fotoBtn.innerText === "Ещё") {
            for (img of document.querySelectorAll('.foto__img')) {
                img.style.display = 'grid';
            };
            fotoBtn.innerText = "Скрыть";
        } else if (fotoBtn.innerText === "Скрыть") {
            for (i = 12; i <= (document.querySelectorAll('.foto__img').length); i++) {
                document.querySelectorAll('.foto__img')[i].style.display = 'none';
                fotoBtn.innerText = "Ещё";
            };
        };
    });
}

function swiper() {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            780: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        },
    });
}

function rangeSales() {
    const rangeThumbSales = document.getElementById('range-thumb-sales'),
        rangeLineSales = document.getElementById('range-line-sales'),
        rangeInputSales = document.getElementById('range-input-sales');
    rangeLineSales.style.width = '60%';
    rangeThumbSales.style.left = '60%';

    const rangeInputSalesSlider = () => {
        const thumbPosition = rangeInputSales.value / rangeInputSales.max,
            space = rangeInputSales.offsetWidth - rangeThumbSales.offsetWidth;
        rangeThumbSales.style.left = (((thumbPosition * space) / rangeInputSales.offsetWidth) * 100).toFixed(0) + '%';
        rangeLineSales.style.width = Math.round((rangeInputSales.value * 100) / rangeInputSales.max) + '%';
    };

    rangeInputSales.addEventListener('input', rangeInputSalesSlider);
    rangeInputSales.addEventListener('input', countMarginality);
}

function rangeMarginality() {
    const rangeThumbMarginality = document.getElementById('range-thumb-marginality'),
        rangeLineMarginality = document.getElementById('range-line-marginality'),
        rangeInputMarginality = document.getElementById('range-input-marginality');
    rangeLineMarginality.style.width = '70%';
    rangeThumbMarginality.style.left = '70%';

    const rangeInputMarginalitySlider = () => {
        const thumbPosition = rangeInputMarginality.value / rangeInputMarginality.max,
            space = rangeInputMarginality.offsetWidth - rangeThumbMarginality.offsetWidth;
        rangeThumbMarginality.style.left = (((thumbPosition * space) / rangeInputMarginality.offsetWidth) * 100).toFixed(0) + '%';
        rangeLineMarginality.style.width = Math.round((rangeInputMarginality.value * 100) / rangeInputMarginality.max) + '%';
    };

    rangeInputMarginality.addEventListener('input', rangeInputMarginalitySlider);
    rangeInputMarginality.addEventListener('input', countMarginality);
}

function countMarginality() {
    const cashMoney = document.querySelector('.cash__money'),
        rangeInputSales = document.getElementById('range-input-sales'),
        rangeInputMarginality = document.getElementById('range-input-marginality');
    
    const money = ((Number(rangeInputSales.value)*(Number(rangeInputMarginality.value)+50)).toFixed(0)).toString();
    cashMoney.textContent = `${money} руб.`
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