document.querySelector(".trigger-btn").addEventListener("click", function () {
    const explosionContainer = document.querySelector(".explosion-container");
    explosionContainer.style.opacity = 1; // Show explosion container

    // Clear previous explosion particles
    explosionContainer.innerHTML = '';

    // Create explosion particles dynamically
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
});
