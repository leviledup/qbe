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

    // Handle profile images failing to load safely
    document.querySelectorAll('.avatar-img').forEach(img => {
        img.addEventListener('error', () => {
            const isLevi = img.alt.toLowerCase() === 'levi';
            const strokeColor = isLevi ? '#10b981' : '#8b5cf6';
            const fillColor = isLevi ? 'rgba(16, 185, 129, 0.15)' : 'rgba(139, 92, 246, 0.15)';
            
            let innerShape = '';
            if (isLevi) {
                innerShape = `
                    <path d="M50 25 L75 38 L75 62 L50 75 L25 62 L25 38 Z" fill="none" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round"/>
                    <path d="M50 25 L50 75 M50 50 L25 38 M50 50 L75 38" fill="none" stroke="${strokeColor}" stroke-width="3"/>
                `;
            } else {
                innerShape = `
                    <path d="M50 20 L75 32 L75 68 L50 80 L25 68 L25 32 Z M25 32 L50 45 L75 32 M50 45 L50 80" fill="none" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round"/>
                    <rect x="40" y="52" width="20" height="15" rx="3" fill="none" stroke="${strokeColor}" stroke-width="3"/>
                `;
            }

            const fallbackSvg = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="width: 100%; height: 100%; display: block;">
                    <circle cx="50" cy="50" r="48" fill="${fillColor}" stroke="${strokeColor}" stroke-width="3"/>
                    ${innerShape}
                </svg>
            `;
            
            const holder = img.parentElement;
            if (holder) {
                holder.innerHTML = fallbackSvg;
            }
        });
    });
});
