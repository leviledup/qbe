const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeDrawer');
const drawer = document.getElementById('toolDrawer');

menuBtn.addEventListener('click', () => drawer.classList.add('active'));
closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
