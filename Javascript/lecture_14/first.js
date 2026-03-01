console.log("Hello Coder Army")
const newElement = document.createElement("h2");
newElement.textContent = "Hello i am element created by Javascript";
newElement.id = "second";
console.log(newElement);
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

//creating new element
const newElement3 = document.createElement("h3");
newElement3.textContent = "Hello we are preparing for better tomorrow."
newElement3.id = "third";
newElement.after(newElement3);

//assigning class
newElement3.className = "diwali";
console.log(newElement3);
//making multiple names for this element
newElement3.className += " holi";
newElement3.className += " hello";

//instead of this use classList for multiple assigning
newElement3.classList.add("gulshan");
newElement3.classList.add("johny");
//removing element from class list
newElement3.classList.remove("holi");

newElement3.style.backgroundColor = "pink";
newElement3.style.fontSize = "20px";

console.log(newElement3.getAttribute("id"));

//creating own attribute
newElement3.setAttribute("hello", "ji");
console.log(newElement3.getAttribute("hello"));

const list = document.createElement("li");
list.textContent = "Milk";
const list2 = document.createElement("li");
list2.textContent = "Sugar";
const list3 = document.createElement("li");
list3.textContent = "Halwa";
const list4 = document.createElement("li");
list4.textContent = "Suji";
const unorderedList = document.getElementById("listing");
//adding li to list
unorderedList.append(list);
unorderedList.append(list2);
unorderedList.prepend(list3);       //if i want at start
list.after(list4);      //if i want at specific position

//what if i dont now where that element is present
console.log(unorderedList.children);
unorderedList.children[1].after(list4);

const arr = ["Bread", "Potato", "Coffee", "Tea"];      //i have to add this into unordered list
// for (let food of arr) {     //this method will disturb UI
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderedList.append(list);
// }

//instead use this method
const fragment = document.createDocumentFragment();     //it will not effect UI speed
for (let food of arr) {
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderedList.append(fragment);


// document.createDocumentFragment()  , create it yourself

const s1 = document.getElementById("first");
s1.remove();

const month = document.getElementById("ten");
console.log(month.children);
console.log(month.childNodes);      //it was old method developers uses,it contain text(\n) + ul both

const lister = document.createElement("li");
// lister.textContent = "help";
month.insertAdjacentElement("afterbegin", lister);      //will insert at begin of that list, it is also old method

//innerHTML is very dangerous
// if data coming from UserActivation,never put it in innerHTML
lister.innerHTML = "<h2>help</h2>";     //will consider html
lister.textContent = "<h2>help</h2>";       //will not consider html

