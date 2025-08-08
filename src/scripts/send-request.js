document.querySelectorAll(".email-form").forEach((form) => {
    let isSubmitting = false;

    const emailInput = form.querySelector('input[name="email"]');
    const nameInput = form.querySelector('input[name="name"]');

    const emailError = form.querySelector(".email-error");
    const nameError = form.querySelector(".name-error");

    // Live очищення помилок
    emailInput.addEventListener("input", () => {
        emailInput.classList.remove("invalid");
        emailError.textContent = "";
    });

    if (nameInput) {
        nameInput.addEventListener("input", () => {
            nameInput.classList.remove("invalid");
            nameError.textContent = "";
        });
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (isSubmitting) return; // 🛑 захист від повторної відправки

        const email = emailInput.value.trim();
        const name = nameInput?.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        // Email валідація
        if (!email) {
            emailError.textContent = "Поле email обов’язкове";
            emailInput.classList.add("invalid");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = "Введіть коректний email";
            emailInput.classList.add("invalid");
            isValid = false;
        }

        // Name валідація
        if (nameInput && !name) {
            nameError.textContent = "Поле ім’я обов’язкове";
            nameInput.classList.add("invalid");
            isValid = false;
        }

        if (!isValid) return;

        // 🟡 Установлюємо прапорець "запит триває"
        isSubmitting = true;

        const data = { email };
        data.source = "audit-ua";

        if (nameInput) data.name = name;

        fetch("https://remrkt.me/api/leads", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (!res.ok) throw new Error("Помилка сервера");
                return res.json();
            })
            .then(() => {
                alert("Форма успішно надіслана!");
                form.reset();
                emailInput.classList.remove("invalid");
                emailError.textContent = "";
                if (nameInput) {
                    nameInput.classList.remove("invalid");
                    nameError.textContent = "";
                }

                // Закрити модалку, якщо форма в ній
                const modal = form.closest(".modal");
                if (modal) modal.classList.remove("active");
            })
            .catch((err) => {
                alert("Помилка при відправці.");
                console.error(err);
            })
            .finally(() => {
                // 🔓 Дозволити наступну відправку
                isSubmitting = false;
            });
    });
});
