document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const checkToolsBtn = document.getElementById('checkToolsBtn');
    const closeBtn = document.getElementById('closeDrawer');
    const drawer = document.getElementById('toolDrawer');

    // Drawer opener function
    const openDrawer = (e) => {
        e.stopPropagation();
        if (drawer) drawer.classList.add('active');
    };

    // Drawer closer function
    const closeDrawer = () => {
        if (drawer) drawer.classList.remove('active');
    };

    // Hook up both triggers
    if (menuBtn) menuBtn.addEventListener('click', openDrawer);
    if (checkToolsBtn) checkToolsBtn.addEventListener('click', openDrawer);
    
    // Close on click of Close Button
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    // Close automatically when user taps outside the panel space
    document.addEventListener('click', (e) => {
        if (drawer && drawer.classList.contains('active')) {
            const clickedInsideDrawer = drawer.contains(e.target);
            const clickedMenuBtn = menuBtn && menuBtn.contains(e.target);
            const clickedCtaBtn = checkToolsBtn && checkToolsBtn.contains(e.target);
            
            if (!clickedInsideDrawer && !clickedMenuBtn && !clickedCtaBtn) {
                closeDrawer();
            }
        }
    });
});
