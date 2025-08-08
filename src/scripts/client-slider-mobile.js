const navItems = document.querySelectorAll(".client__nav-item");
const wrappers = document.querySelectorAll(".client__wrapper");

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        const index = item.dataset.index;

        // Зняти active з усіх
        navItems.forEach((nav) => nav.classList.remove("active"));
        wrappers.forEach((wrapper) => wrapper.classList.remove("active"));

        // Додати active потрібному
        item.classList.add("active");
        const targetWrapper = document.querySelector(`.client__wrapper[data-index="${index}"]`);
        if (targetWrapper) {
            targetWrapper.classList.add("active");
        }
    });
});
