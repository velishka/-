document.getElementById("loveButton").addEventListener("click", function() {
    let message = document.getElementById("message");
    message.classList.remove("hidden");
    message.style.opacity = "1";
    
    createHearts();
});

function createHearts() {
    let container = document.getElementById("heartsContainer");

    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        let xPos = Math.random() * window.innerWidth - 50;
        let yPos = Math.random() * 50 + window.innerHeight / 2;
        
        heart.style.left = `${xPos}px`;
        heart.style.top = `${yPos}px`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
