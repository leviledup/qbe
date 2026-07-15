document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeDrawer');
    const drawer = document.getElementById('toolDrawer');

    if (menuBtn && drawer) {
        menuBtn.addEventListener('click', () => {
            drawer.classList.add('active');
        });
    }

    if (closeBtn && drawer) {
        closeBtn.addEventListener('click', () => {
            drawer.classList.remove('active');
        });
    }
});
