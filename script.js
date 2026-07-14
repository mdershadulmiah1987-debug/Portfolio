// Scroll Animation

const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

reveals.forEach(section => {

const windowHeight = window.innerHeight;

const revealTop = section.getBoundingClientRect().top;

const revealPoint = 150;

if(revealTop < windowHeight - revealPoint){

section.classList.add("active");
section.classList.add("reveal");

}

});

});

// Back To Top Button

const button = document.createElement("button");

button.innerHTML = "↑";

button.classList.add("back-top");

document.body.appendChild(button);

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

button.classList.add("show");

}else{

button.classList.remove("show");

}

});

button.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Active Menu

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});