// Async Await In Javascript
//async function always return a promise

// // 👇
// async function greet() {
//     // return "Rohit";
//     return new Promise((resolve, reject) => {
//         // resolve("Rohit");
//         reject("Rohit");
//     })
// }
// const response = greet();
// console.log(response);
// //how i will access data
// response.then((data) => {
//     console.log(data);
// })
//     .catch((error) => {
//         console.log("Error: ", error);
//     })

// fetch("https://api.github.com/users")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// //good format if we have 👇
// const resp = fetch("https://api.github.com/users");
// const data = response.json();
// console.log(data);
// //but point is JS will not stop here

// //using await: wait at this line till it does not complete 👇
// const resp = await fetch("https://api.github.com/users");
// const dat = await resp.json();
// console.log(dat);
// //problem : my code freeze at wait point

//here comes async function 👇
async function github() {
    const resp = await fetch("https://api.github.com/users");
    const dat = await resp.json();
    const parent = document.getElementById("first");
    // console.log(dat);
    for (let user of dat) {
        const element = document.createElement("div");
        //adding class name
        element.classList.add("user");
        const image = document.createElement("img");
        image.src = user.avatar_url;
        const userName = document.createElement("h2");
        userName.textContent = user.login;
        const anchor = document.createElement("a");
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile"
        element.append(image,userName,anchor);
        parent.append(element);
    }
}

github();
// console.log("hello world! how are you doing.")