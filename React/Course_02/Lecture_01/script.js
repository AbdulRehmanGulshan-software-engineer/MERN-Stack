//This script is written by Abdul Rehman Gulshan (me)

const basketOne = document.querySelector(".basket-1 span");
const buttonOne = document.querySelector(".right-arrow");
const basketTwo = document.querySelector(".basket-2 h1");
const buttontwo = document.querySelector(".left-arrow");

buttonOne.addEventListener("click", moveFunction);

function moveFunction() {
    if (parseInt(basketOne.innerHTML) > 0 && parseInt(basketOne.innerHTML) <= 100) {
        const number = parseInt(basketOne.innerHTML) || 0;
        basketOne.innerHTML = number - 1;
        const number2 = parseInt(basketTwo.innerHTML) || 0;
        basketTwo.innerHTML = number2 + 1;
    }

}

buttontwo.addEventListener("click", reverseFunction)

function reverseFunction() {
    if (parseInt(basketOne.innerHTML) >= 0 && parseInt(basketTwo.innerHTML) > 0) {
        const number = parseInt(basketOne.innerHTML) || 0;
        basketOne.innerHTML = number + 1;
        const number2 = parseInt(basketTwo.innerHTML) || 0;
        basketTwo.innerHTML = number2 - 1;
    }

}