function hybridLoader() {
    const loader = document.getElementById('loader');
    const loaderProgress = document.getElementById('loader-progress');
    const content = document.getElementById('content');

    let progress = 0;
    const fakeInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 90) {
            progress = 90;
            clearInterval(fakeInterval);
        }
        loaderProgress.style.width = progress + '%';
    }, 200);

    window.addEventListener('load', () => {
        clearInterval(fakeInterval);
        progress = 100;
        loaderProgress.style.width = '100%';

        setTimeout(() => {
            loader.classList.add('hidden');

            // Через 800ms после анимации скрыть совсем
            setTimeout(() => loader.style.display = 'none', 800);

            content.classList.add('show');

            // Помечаем, что лоадер уже был показан
            localStorage.setItem('siteLoaded', 'true');
        }, 500);
    });
}
setTimeout(() => {
    loader.classList.add('hidden');

    setTimeout(() => {
        loader.style.display = 'none';
        content.classList.add('show');

        // Плавный скролл к статьям после лоадера
        const targetBlock = document.getElementById('statr-blockr');
        if (targetBlock) {
            targetBlock.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }

        localStorage.setItem('siteLoaded', 'true');
    }, 800);
}, 500);
