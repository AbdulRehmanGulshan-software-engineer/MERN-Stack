const toggleButton = document.querySelector(".toggleButton");
const dropdown = document.querySelector(".dropdownMenu");
toggleButton.addEventListener("click", () => {
    dropdown.classList.toggle('top-[75px]');
})