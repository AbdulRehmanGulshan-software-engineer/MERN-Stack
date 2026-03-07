console.log(this);

function hello() {
    console.log(this);      //will print global object
}
hello();

hell = () => {
    console.log(this);      //will borrow {}
}
hell();