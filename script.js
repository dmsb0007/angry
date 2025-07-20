window.addEventListener("load", function () {
    const explosionContainer = document.querySelector(".explosion-container");

    // Create explosion particles dynamically after page load
    setInterval(() => {
        explosionContainer.style.opacity = 1; // Show explosion container

        // Create explosion particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement("div");
            particle.classList.add("explosion-particle");

            // Set random position for particles
            const randomX = (Math.random() - 0.5) * 300; // Random X within range
            const randomY = (Math.random() - 0.5) * 300; // Random Y within range
            particle.style.setProperty('--random-x', `${randomX}px`);
            particle.style.setProperty('--random-y', `${randomY}px`);

            explosionContainer.appendChild(particle);

            // Remove particles after animation ends
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }, 4000); // Delay between explosions to keep the effect running continuously
});
