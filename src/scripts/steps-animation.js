document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".work__step");
    const workSection = document.querySelector(".work");
    if (!steps.length || !workSection) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                steps.forEach((step, i) => {
                    step.style.animationDelay = `${i * 0.3}s`;
                    step.classList.add("animate");
                });
            } else {
                steps.forEach((step) => {
                    step.classList.remove("animate");
                    step.style.animationDelay = "0s";
                });
            }
        },
        { threshold: 0.4 }
    );

    observer.observe(workSection);
});
