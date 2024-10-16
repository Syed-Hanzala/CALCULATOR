let inptt = document.getElementById("inpt");

let once = document.getElementById("one");
once.addEventListener("click", () => {
    inptt.value += "1";
})


let twoo = document.getElementById("two");
twoo.addEventListener("click", () => {
    inptt.value += "2";
})

let the = document.getElementById("three");
the.addEventListener("click", () => {
    inptt.value += "3";
})

let fourr = document.getElementById("four");
fourr.addEventListener("click", () => {
    inptt.value += "4";
})

let fivee = document.getElementById("five");
fivee.addEventListener("click", () => {
    inptt.value += "5";
})

let sixx = document.getElementById("six");
sixx.addEventListener("click", () => {
    inptt.value += "6";
})

let sevenm = document.getElementById("seven");
sevenm.addEventListener("click", () => {
    inptt.value += "7";
})

let eightt = document.getElementById("eight");
eightt.addEventListener("click", () => {
    inptt.value += "8";
})

let ninm = document.getElementById("nine");
ninm.addEventListener("click", () => {
    inptt.value += "9";
})

let doii = document.getElementById("dot");
doii.addEventListener("click", () => {
    inptt.value += ".";
})

let plu = document.getElementById("plas");
plu.addEventListener("click", () => {
    inptt.value += "+";
})

let minns = document.getElementById("niv");
minns.addEventListener("click", () => {
    inptt.value += "-";
})

let silesh = document.getElementById("dvi");
silesh.addEventListener("click", () => {
    inptt.value += "/";
})

let tar = document.getElementById("star");
tar.addEventListener("click", () => {
    inptt.value += "*";
})

let row = document.getElementById("zero");
row.addEventListener("click", () => {
    inptt.value += "0";
})

let seee = document.getElementById("see");
see.addEventListener("click", () => {
    inptt.value = "";
})

let resultt = document.getElementById("result");
resultt.addEventListener("click", () => {
    let result = eval(inptt.value);
    inptt.value = result;
})





