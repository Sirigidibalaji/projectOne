// Typing Animation

const text = "Full Stack Developer | MERN Stack | AI Enthusiast";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}

typingEffect();

// Button Click Function

function showMessage() {
    alert("Welcome to Balaji Portfolio!");
}
