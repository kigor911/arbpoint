const articles = [{
        background: 'source/img/replace-1.webp',
        title: 'Заголовок статьи 1',
        description: 'Краткое описание первой статьи. Это небольшое описание того, о чём статья.',
        buttonText: 'Читать',
        buttonLink: '#'
    },
    {
        background: 'source/img/replace-2.webp',
        title: 'Заголовок статьи 2',
        description: 'Краткое описание второй статьи. Это небольшое описание того, о чём статья.',
        buttonText: '                           Читать',
        buttonLink: '#'
    },
    {
        background: 'source/img/replace-3.webp',
        title: 'Заголовок статьи 3',
        description: 'Краткое описание третьей статьи. Это небольшое описание того, о чём статья.',
        buttonText: 'Читать',
        buttonLink: '#'
    },
    {
        background: 'source/img/replace-4.webp',
        title: 'Заголовок статьи 3',
        description: 'Краткое описание третьей статьи. Это небольшое описание того, о чём статья.',
        buttonText: 'Читать',
        buttonLink: '#'
    }
];

// Функция для создания блоков
function createArticleBlock(articleData) {
    // Создаем новый элемент для блока
    const articleBlock = document.createElement('div');
    articleBlock.classList.add('article-block');
    articleBlock.style.backgroundImage = `url(${articleData.background})`;

    // Вставляем информацию о статье в блок
    const articleInfo = document.createElement('div');
    articleInfo.classList.add('article-info');
    articleInfo.innerHTML = `
        <h2 class="article-title">${articleData.title}</h2>
        <p class="article-description">${articleData.description}</p>
        <a href="${articleData.buttonLink}" class="read-button">${articleData.buttonText}</a>
    `;

    articleBlock.appendChild(articleInfo);
    return articleBlock;
}

// Добавляем блоки на страницу
const container = document.getElementById('article-container');
articles.forEach(article => {
    const block = createArticleBlock(article);
    container.appendChild(block);
});