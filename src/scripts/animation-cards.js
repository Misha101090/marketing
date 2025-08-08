const cards = document.querySelectorAll(".card");
const section = document.querySelector(".challenge");

let ticking = false;

window.addEventListener("scroll", () => {
    if (!ticking && window.innerWidth >= 1024) {
        window.requestAnimationFrame(() => {
            updateCards();
            ticking = false;
        });
        ticking = true;
    }
});

function updateCards() {
    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionTopViewport = rect.top;

    if (sectionTopViewport <= 0 && sectionTopViewport >= -(section.offsetHeight - windowHeight)) {
        const progress = Math.min(
            Math.abs(sectionTopViewport) / (section.offsetHeight - windowHeight),
            1
        );
        const step = 1 / (cards.length + 1);

        cards.forEach((card, index) => {
            const disappearStart = (index + 1) * step;

            if (progress >= disappearStart) {
                card.classList.add("hidden-up");
            } else {
                card.classList.remove("hidden-up");
            }
        });
    } else if (sectionTopViewport > 0) {
        cards.forEach((card) => card.classList.remove("hidden-up"));
    } else {
        cards.forEach((card) => card.classList.add("hidden-up"));
    }
}
