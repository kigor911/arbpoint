document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.getElementById('burgerButton');
    const navMenu = document.getElementById('navMenu');

    // Открытие/закрытие бургера
    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burgerButton.classList.toggle('open');
    });

    // Закрытие меню при клике вне
    document.addEventListener('click', (e) => {
        const isClickInsideNav = navMenu.contains(e.target);
        const isClickOnBurger = burgerButton.contains(e.target);

        if (!isClickInsideNav && !isClickOnBurger) {
            navMenu.classList.remove('active');
            burgerButton.classList.remove('open');
        }
    });

    // Закрытие меню при выборе пункта (для якорей)
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            burgerButton.classList.remove('open');
        });
    });
});
