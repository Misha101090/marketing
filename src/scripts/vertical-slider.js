const mediaQuery = window.matchMedia("(min-width: 1024px)");

function initObserver() {
    const stacks = document.querySelectorAll(".client__wrapper");

    stacks.forEach((stack, i) => {
        if (i === stacks.length - 1) return;

        const next = stacks[i + 1];

        const observer = new IntersectionObserver(
            ([entry]) => {
                const ratio = entry.intersectionRatio;

                if (ratio > 0.2) {
                    const adjustedRatio = (ratio - 0.2) / (1 - 0.2);
                    const scale = 1 - adjustedRatio * 0.2;
                    stack.style.transform = `scale(${scale})`;
                } else {
                    stack.style.transform = `scale(1)`;
                }
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        observer.observe(next);
    });
}

if (mediaQuery.matches) {
    initObserver();
}

mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        initObserver();
    }
});
