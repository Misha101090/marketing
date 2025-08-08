document.querySelectorAll(".header__nav-item").forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
            const headerHeight = document.querySelector(".header").offsetHeight;
            const y = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

            window.scrollTo({
                top: y,
                behavior: "smooth",
            });
        }
    });
});
