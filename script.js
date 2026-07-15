document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const closeBtn = document.getElementById('closeDrawer');
    const drawer = document.getElementById('toolDrawer');

    if (menuBtn && drawer) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            drawer.classList.add('active');
        });
    }

    if (closeBtn && drawer) {
        closeBtn.addEventListener('click', () => {
            drawer.classList.remove('active');
        });
    }

    // Auto close drawer panel if user taps outside of it
    document.addEventListener('click', (e) => {
        if (drawer && drawer.classList.contains('active') && !drawer.contains(e.target) && e.target !== menuBtn) {
            drawer.classList.remove('active');
        }
    });
});
