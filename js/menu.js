window.addEventListener("DOMContentLoaded", ()=> {
    burgerMenu();
    showMoreFoto();
    swiper();
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
        // 651: {
        //   slidesPerView: 2,
        //   spaceBetween: 30,
        // },
       780: {
          slidesPerView: 2,
          spaceBetween: 30,
        }
      },
    });
}
