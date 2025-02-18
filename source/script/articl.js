const articlesData = [{
        image: 'source/img/articl/arctl-1.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '12 февраля 2024',
        link: '#'
    },
    {
        image: 'source/img/articl/arctl-2.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '10 февраля 2024',
        link: '#'
    },
    {
        image: 'source/img/articl/arctl-3.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '8 февраля 2024',
        link: '#'
    },
    {
        image: 'source/img/articl/arctl-4.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '7 февраля 2024',
        link: '#'
    },
    {
        image: 'source/img/articl/arctl-5.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '5 февраля 2024',
        link: '#'
    },
    {
        image: 'source/img/articl/arctl-6.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '3 февраля 2024',
        link: '#'
    },
    {
        image: 'source/img/articl/arctl-7.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '1 февраля 2024',
        link: '#'
    },
    {
        image: 'source/img/articl/arctl-8.webp',
        title: 'Название статьи',
        tags: ['#text', '#text', '#text'],
        date: '30 января 2024',
        link: '#'
    }
];

const articlesGrid = document.getElementById('articlesGrid');

articlesData.forEach(article => {
    const card = document.createElement('div');
    card.classList.add('article-card');

    card.innerHTML = `
        <div class="article-overlay"></div>
        <img class="article-image" src="${article.image}" alt="${article.title}">
        <div class="article-content">
            <h3 class="article-title">${article.title}</h3>
            <div class="article-tags">${article.tags.join(', ')}</div>
            <div class="article-date">${article.date}</div>
        </div>
        <a href="${article.link}" class="read-more-button">Читать полностью</a>
    `;

    articlesGrid.appendChild(card);
});