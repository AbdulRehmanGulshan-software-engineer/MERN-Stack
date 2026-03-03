console.log("hello world start");



// // code
// const p1 = fetch("https://api.github.com/users")        //pending
// //fulfilled , reject
// // p1.then((response) => {
// //     console.log(response.json());
// // })
// const p2 = p1.then((response) => {
//     return response.json();
// })
// p2.then((response) => {
//     console.log(response);
// })

//better way for promise 👇
fetch("https://api.github.com/users")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Data is not Present in Server");
        }
        return response.json();     //it returns promise actually
    })
    .then((response) => {
        // console.log(response);
        const parent = document.getElementById("first");
        // for (let i = 0; i < response.length; i++) {
        //     const image = document.createElement('img');
        //     image.src = response[i].avatar_url;
        //     parent.append(image);
        //     image.style.height = "80px";
        //     image.style.width = "80px";
        // }
        // or using for of loop
        for (let user of response) {
            const image = document.createElement('img');
            image.src = user.avatar_url;
            parent.append(image);
            image.style.height = "80px";
            image.style.width = "80px";
        }
    })
    .catch((error) => {
        const parent = document.getElementById("first");
        parent.textContent = error.message;
    })


console.log("hello world end.");

// // js object vs json(javascript object notation i.e. understandable by all languages) 👇
// const j1 = {
//     name: "Rohit",
//     age: 30,
//     address: "dwarka",
//     ignore1: undefined,      //while json conversion it will be ignored
//     ignore2: function () {
//         console.log("i will be ignored while json conversion.") //while json conversion it will be ignored
//     },
//     address2: "dwarka",
// }
// //convert to json
// const jsonFormat = JSON.stringify(j1);
// console.log(jsonFormat);

const jsonFormat = `{
    "name": "Abdul Rehman Gulshan",
    "age": "30",
    "address": "Lahore"
}`;             //adding `` along {} make it string
// converting to JS object 👇
const jsObject = JSON.parse(jsonFormat);
console.log(jsObject);

//handling cases where server replies (promise fulfilled) , but no data present 👇
// using if(response.ok) condition in upper code,see up
/* 
reject condition runs only when:
internet down
server down
dns down
*/

// creating promise,in upper part we studied consuming promises 👇
const prom = new Promise((resolve, reject) => {
    // reject("Something Went Wrong");
    resolve("Hello");
})
prom.then((response) => {
    console.log(`${response} , hey .then is called`);
})
    .catch((error) => {
        console.log(`${error} , hey .catch is called`);
    })


// lecture 18 : call back hell problem solved by promises 👇
// zomato application

const orderDetails = {
    orderID: "123123",
    food: ["Fish", "Biryani", "Pulao", "Mutton"],
    cost: "6000",
    customer_name: "Abdul Rehman Gulshan",
    customer_location: "Lahore",
    restaurant_location: "Park View City"
}

function placeOrder(orderDetails) {
    console.log(`${orderDetails.cost} payment is in progress.`)
    // creating promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                console.log("payment is recieved and order get placed.")
                orderDetails.status = true;     //payment is cleared
                resolve(orderDetails);
            }
            else {
                reject(new Error("payment is failed."));
                // throw new Error("payment is failed.");   // we cannot do this 

            }
        }, 3000)
    })
}

function preparingOrder(orderDetails) {
    console.log(`your food preparation started.
        Order Details`);
    for (let arr of orderDetails.food) {
        console.log(arr);
    }
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.05) {
            setTimeout(() => {
                console.log("Your order is now prepared.")
                //give token to the delivery boy
                orderDetails.token = 123;
                resolve(orderDetails);
            }, 3000)
        }
        else {
            reject(new Error("Restaurant Closed or Item not available."))
        }
    })

}

function pickupOrder(orderDetails) {
    console.log(`Delivery Boy Going To ${orderDetails.restaurant_location}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.05) {
                console.log("I have picked up the order.")
                orderDetails.recieved = true;
                resolve(orderDetails);
            }
            else {
                reject(new Error("Delivery Boy Accident."))
            }
        }, 3000)
    })

}

function deliverOrder(orderDetails) {
    console.log(`Hi ${orderDetails.customer_name} I am on my way toward ${orderDetails.customer_location} to deliver your order.`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order Delivered Successfully.");
            resolve(orderDetails);
        })
    })

}


placeOrder(orderDetails)
    .then((orderDetails) => preparingOrder(orderDetails))
    .then((orderDetails) => pickupOrder(orderDetails))
    .then((orderDetails) => deliverOrder(orderDetails))
    .then((orderDetails) => {
        console.log(orderDetails);
    })
    .catch((error) => {
        console.log(`Error: ${error.message}`);
    })
    // in last comes finally that must must runs
    .finally(()=>{
        console.log("I am doing cleanup.");
    })
