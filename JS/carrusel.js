/* document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".objetoCarousel");
    const arrayGifs = Array.from(items, ()=> {
        return `<div class="objetoCarousel"></div>`
    });

    console.log(arrayGifs);
}); */

"use strict";

function carousel() {
    let carouselWidth = document.querySelector(".carousel")
    let carouselSlider = document.querySelector(".carouselSlider");
    let items = document.querySelectorAll(".objetoCarousel");
    let items2;

    const speed = 1;

    const width = carouselWidth.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone(){
        items2 = items.cloneNode(true);
        carouselSlider.appendChild(items2);
        items2.style.left = `${width}px`;
    }

    function moveFirst() {
        x -= speed;

        if(width >= Math.abs(x)) {
            items.style.left = `${x}px`;
        }else{
            x = width;
        }
    }

    function moveSecond() {
        x2 -= speed;

        if(items2.offsetWidth >= Math.abs(x2)) {
            items2.style.left = `${x2}px`;
        }else{
            x2 = width;
        }
    }

    clone();

    let a = setInterval(moveFirst, 10);
    let b = setInterval(moveSecond, 10);
}

carousel();

