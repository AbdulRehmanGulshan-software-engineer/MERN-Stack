const logical = () => {
    let num = 5;
    if (num = 10) {
        console.log(num);
    }
    else {
        console.log("num is not 10");
    }


    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);      //prints undefined at the end of the loopF
    }

    let numb = "10";
    console.log(numb + 5); //expected result:15, prints: 105
};

module.exports = logical;