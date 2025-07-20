document.querySelector(".trigger-button").addEventListener("click", function () {
    const explosion = document.querySelector(".explosion");
    explosion.style.opacity = 1;
    
    // Create explosion effect
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement("div");
        particle.classList.add("explosion-particle");
        
        // Random position
        particle.style.top = `${Math.random() * 100}px`;
        particle.style.left = `${Math.random() * 100}px`;
        
        explosion.appendChild(particle);
        
        // Remove particle after animation ends
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
});
