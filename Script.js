function showSurprise() {
    document.getElementById("loveLetter").style.display = "block";
    document.getElementById("song").play();
    typeLetter();
    startFireworks();
}

// Typing effect for the love letter
function typeLetter() {
    const letterText = "My love, every day with you is a dream come true. You are my happiness, my peace, and my forever. ❤️";
    let i = 0;
    const speed = 50;
    const textElement = document.getElementById("letterText");

    textElement.innerHTML = "";
    function type() {
        if (i < letterText.length) {
            textElement.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Heart Animation
const heartCanvas = document.getElementById("heartCanvas");
const heartCtx = heartCanvas.getContext("2d");

heartCanvas.width = window.innerWidth;
heartCanvas.height = window.innerHeight;

let hearts = [];

class Heart {
    constructor(x, y, size, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.opacity = 1;
    }

    draw() {
        heartCtx.globalAlpha = this.opacity;
        heartCtx.fillStyle = "red";
        heartCtx.beginPath();
        heartCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        heartCtx.fill();
    }

    update() {
        this.y -= this.speed;
        this.opacity -= 0.02;
    }
}

function createHeart() {
    let x = Math.random() * heartCanvas.width;
    let y = heartCanvas.height;
    let size = Math.random() * 10 + 5;
    let speed = Math.random() * 2 + 1;
    hearts.push(new Heart(x, y, size, speed));
}

function animateHearts() {
    heartCtx.clearRect(0, 0, heartCanvas.width, heartCanvas.height);
    hearts.forEach((heart, index) => {
        heart.update();
        heart.draw();
        if (heart.opacity <= 0) hearts.splice(index, 1);
    });
    requestAnimationFrame(animateHearts);
}

setInterval(createHeart, 150);
animateHearts();

// Fireworks effect
const fireCanvas = document.getElementById("fireworksCanvas");
const fireCtx = fireCanvas.getContext("2d");

fireCanvas.width = window.innerWidth;
fireCanvas.height = window.innerHeight;

function startFireworks() {
    for (let i = 0; i < 50; i++) {
        setTimeout(() => createFirework(), i * 100);
    }
}

function createFirework() {
    let x = Math.random() * fireCanvas.width;
    let y = Math.random() * fireCanvas.height / 2;
    let size = Math.random() * 5 + 2;
    let color = `hsl(${Math.random() * 360}, 100%, 60%)`;

    fireCtx.beginPath();
    fireCtx.arc(x, y, size, 0, Math.PI * 2);
    fireCtx.fillStyle = color;
    fireCtx.fill();
    setTimeout(() => fireCtx.clearRect(0, 0, fireCanvas.width, fireCanvas.height), 1000);
}