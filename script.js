document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeDrawer');
    const drawer = document.getElementById('toolDrawer');

    if (menuBtn) menuBtn.addEventListener('click', () => drawer.classList.add('active'));
    if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
});
