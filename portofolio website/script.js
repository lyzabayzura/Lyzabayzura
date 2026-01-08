const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  navbar.classList.add('active');
};

closeIcon.onclick = () => {
  navbar.classList.remove('active');
};
