import "./app-heading.js";

const btn = document.querySelector(".btn");
const btn1 = document.querySelector(".btn1");
const appModal1 = document.querySelector("#card1");
const appModal2 = document.querySelector("#card2");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    appModal1.open();
});

btn1.addEventListener("click", function (e) {
    e.preventDefault();
    appModal2.open();
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "x") {
        appModal1.close();
    }
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "x") {
        appModal2.close();
    }
});
