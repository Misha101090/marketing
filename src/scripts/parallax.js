const promoBlocks = document.querySelectorAll(".parallax");

promoBlocks.forEach((promoBlock) => {
    const parallaxItems = promoBlock.querySelectorAll(".icon");

    function handleParallax(clientX, clientY) {
        const { width, height, left, top } = promoBlock.getBoundingClientRect();
        const offsetX = (clientX - left - width / 2) / width;
        const offsetY = (clientY - top - height / 2) / height;

        parallaxItems.forEach((item) => {
            const speed = 15;
            item.style.transform = `translate(${offsetX * speed}px, ${offsetY * speed}px)`;
        });
    }

    promoBlock.addEventListener("mousemove", (e) => {
        handleParallax(e.clientX, e.clientY);
    });

    promoBlock.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            const touch = e.touches[0];
            handleParallax(touch.clientX, touch.clientY);
        }
    });
});
