// finds the first element in the page that matches the CSS selector provide
const container = document.querySelector(".container");
const userInput = document.getElementById("userInput");
const submitButton = document.getElementById("submit");
const downloadButton = document.getElementById("download");
const sizeOption = document.querySelector(".sizeOptions");
const BGColor = document.getElementById("BGcolor");
const FGColor = document.getElementById("FGcolor");
let qrCode;
let sizeChoice = sizeOption.value;
let BGColorChoice = BGColor.value;
let FGColorChoice = FGColor.value;

//set size
sizeOption.addEventListener("change", () => {
    sizeChoice = sizeOption.value;
});

//set background color
BGColor.addEventListener("input", () => {
    BGColorChoice = BGColor.value;
})

//set foreground color
FGColor.addEventListener("input", () => {
    FGColorChoice = FGColor.value;
})

//format input
// used RegEx : /[^a-zA-Z0-9]+/g
const inputFormatter = (value) => {
    value = value.replace(/[^a-zA-Z0-9]+/g, "");
    return value;
}

//clear previous data
submitButton.addEventListener("click", async () => {
    container.innerHTML = "";

    //create a canvas element on element
    const canvas = document.createElement("canvas");
    container.appendChild(canvas);

    //generated QR code using canvas method
    //created QR class object,passed two parameters (location where it will go,configuration for qr code)
    try {
        // if we want text filtering here too
        // await QRCode.toCanvas(canvas, inputFormatter(userInput.value), {
        await QRCode.toCanvas(canvas, userInput.value, {
            width: sizeChoice,
            color: {
                // dark: FGColorChoice,
                dark: FGColor.value,
                light: BGColorChoice,
            }
        });
    } catch (error) {
        console.log("QR generation failed: ", error);
        return;
    }
    // set url for download  👇
    downloadButton.href = canvas.toDataURL("image/png");

    //determine a suitable filename
    let userValue = userInput.value;
    try {
        // get the domain name if it’s a URL
        userValue = new URL(userValue).hostname;
    }
    catch {
        //otherwise sanitized it
        userValue = inputFormatter(userValue);
    }

    downloadButton.download = `${userValue}QR.png`;
    downloadButton.classList.remove("hide");

})

userInput.addEventListener("input", () => {
    if (userInput.value.trim().length < 1) {
        submitButton.disabled = true;
        downloadButton.href = "";
        downloadButton.classList.add("hide");
    }
    else {
        submitButton.disabled = false;
    }
})

window.onload = () => {
    container.innerHTML = "";
    sizeChoice = 100;
    sizeOption.value = 100;
    userInput.value = "";

    BGColorChoice = "#ffffff";
    FGColorChoice = "#000000";

    BGColor.value = BGColorChoice;
    FGColor.value = FGColorChoice;


}