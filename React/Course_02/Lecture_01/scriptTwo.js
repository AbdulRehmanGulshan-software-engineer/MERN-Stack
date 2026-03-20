//This script is guided by instructor

const firstBasket = document.querySelector('.basket-1 span');
const secondBasket = document.querySelector('.basket-2 h1');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const totalApples = 10;
let secondBasketAppleCount = 0;
let firstBasketAppleCount = totalApples - secondBasketAppleCount;
firstBasket.innerText = firstBasketAppleCount;
secondBasket.innerText = secondBasketAppleCount;

rightArrow.addEventListener("click", () => {
    if (firstBasketAppleCount > 0) {
        firstBasketAppleCount--;
        secondBasketAppleCount++;

        //updated UI : it is called imperative programming
        //while react is declarative programming
        firstBasket.innerText = firstBasketAppleCount;
        secondBasket.innerText = secondBasketAppleCount;
    }
})

leftArrow.addEventListener("click", () => {
    if (secondBasketAppleCount > 0) {
        secondBasketAppleCount--;
        firstBasketAppleCount++;

        //updated UI
        firstBasket.innerText = firstBasketAppleCount;
        secondBasket.innerText = secondBasketAppleCount;
    }
})