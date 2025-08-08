document.querySelectorAll(".faq__question").forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq__item");
        const answer = item.querySelector(".faq__answer");
        const icon = button.querySelector(".faq__icon");

        const isActive = item.classList.contains("active");

        if (isActive) {
            // Закриваємо
            answer.style.height = answer.scrollHeight + "px"; // для плавного старту
            requestAnimationFrame(() => {
                answer.style.height = "0";
            });
            item.classList.remove("active");
            icon.textContent = "+";
        } else {
            // Відкриваємо
            item.classList.add("active");
            answer.style.height = answer.scrollHeight + "px";
            icon.textContent = "−";

            answer.addEventListener(
                "transitionend",
                () => {
                    if (item.classList.contains("active")) {
                        answer.style.height = "auto";
                    }
                },
                { once: true }
            );
        }
    });
});
