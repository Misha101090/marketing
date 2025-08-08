document.querySelectorAll(".open-modal").forEach((button) => {
    button.addEventListener("click", () => {
        document.getElementById("myModal").classList.add("active");
    });
});

document.querySelectorAll(".modal").forEach((modal) => {
    const closeBtn = modal.querySelector(".modal__close");
    const overlay = modal.querySelector(".modal__overlay");

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    overlay.addEventListener("click", () => {
        modal.classList.remove("active");
    });
});
