const screens = document.querySelectorAll(".screen");
let index = 0;

setInterval(() => {
    screens[index].classList.remove("active");
    index = (index + 1) % screens.length;
    screens[index].classList.add("active");
}, 5000);
