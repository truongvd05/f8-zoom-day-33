import "./app-heading.js";

const btn = document.querySelector(".btn");
const appModal = document.querySelector("app-heading");
console.dir(appModal);

btn.addEventListener("click", function (e) {
    e.preventDefault();
    appModal.open();
});

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "x") {
        appModal.close();
    }
});

appModal.addEventListener("open", () => {
    console.log("Modal opened!");
});

appModal.addEventListener("close", () => {
    console.log("Modal closed!");
});
