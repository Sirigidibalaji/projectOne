// Typing Effect

const roles = [
    "Full Stack Developer",
    "Java Developer",
    "MERN Stack Developer",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect(){

    const typing =
    document.getElementById("typing");

    if(charIndex < roles[roleIndex].length){

        typing.textContent +=
        roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }else{

        setTimeout(eraseEffect,1500);
    }
}

function eraseEffect(){

    const typing =
    document.getElementById("typing");

    if(typing.textContent.length > 0){

        typing.textContent =
        typing.textContent.slice(0,-1);

        setTimeout(eraseEffect,50);

    }else{

        roleIndex =
        (roleIndex+1)%roles.length;

        charIndex = 0;

        setTimeout(typeEffect,300);
    }
}

window.onload = typeEffect;


// Mobile Menu

const menuBtn =
document.getElementById("menu-btn");

const navbar =
document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{

    navbar.classList.toggle("active");

});


// Dark Mode

document
.getElementById("theme-btn")
.addEventListener("click",()=>{

    document.body.classList.toggle("light");

});


// Scroll Reveal

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document
.querySelectorAll("section")
.forEach(section=>{

section.classList.add("hidden");

observer.observe(section);

});


// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

if(name==="" || email===""){

alert("Please fill all fields");

return;
}

alert("Message Sent Successfully");

});
