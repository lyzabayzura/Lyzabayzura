const typedText = document.querySelector('.typing');

const words = ['welcome to my portfolio'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];
  let currentText = currentWord.substring(0, charIndex);

  typedText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 80);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex++;
      if (wordIndex >= words.length) wordIndex = 0;
    }
    setTimeout(typeEffect, 800);
  }
}

document.addEventListener('DOMContentLoaded', typeEffect);

function revealLeft() {
  const reveals = document.querySelectorAll('.reveal-left');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealLeft);
window.addEventListener('load', revealLeft);

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('active');
};

document.querySelectorAll('.navbar a').forEach((link) => {
  link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('active');
  };

  const menuIcon = document.querySelector('.menu-icon');
  const nav = document.querySelector('.nav-links');
  const closeBtn = document.querySelector('.close-btn');

  menuIcon.addEventListener('click', () => {
    nav.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});
