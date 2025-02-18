async function loadLayout() {
    try {
        // Загружаем header
        const headerResponse = await fetch('source/docs/header.html');
        if (!headerResponse.ok) throw new Error('Ошибка загрузки header.html');
        const headerHtml = await headerResponse.text();
        document.getElementById('header-container').innerHTML = headerHtml;

        // Загружаем footer
        const footerResponse = await fetch('source/docs/footer.html');
        if (!footerResponse.ok) throw new Error('Ошибка загрузки footer.html');
        const footerHtml = await footerResponse.text();

        const footerContainer = document.getElementById('footer-container');
        footerContainer.innerHTML = footerHtml;

        // Ждём пока футер вставился, затем отслеживаем его появление
        const footer = footerContainer.querySelector('footer');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        footer.classList.add('show');
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(footer);

    } catch (error) {
        console.error('Ошибка при загрузке layout:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});
