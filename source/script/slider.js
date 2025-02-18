


const partnersData = [{
        image: 'source/img/slider-img/slider-img-1.webp',
        title: 'Партнер 1',
        description: 'Описание партнера 1. Краткая информация о компании и её услугах.',
        link: '#'
    },
    {
        image: 'source/img/slider-img/slider-img-2.webp',
        title: 'Партнер 2',
        description: 'Описание партнера 2. Информация о продукции и сотрудничестве.',
        link: '#'
    },
    {
        image: 'source/img/slider-img/slider-img-3.webp',
        title: 'Партнер 3',
        description: 'Описание партнера 3. Краткое описание и условия сотрудничества.',
        link: '#'
    },
    {
        image: 'source/img/slider-img/slider-img-4.webp',
        title: 'Партнер 4',
        description: 'Описание партнера 4. Совместные проекты и предложения.',
        link: '#'
    }
];

const sliderWrapper = document.getElementById('partnersSliderWrapper');

partnersData.forEach(partner => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    slide.innerHTML = `
        <img class="partner-image" src="${partner.image}" alt="${partner.title}">
        <div class="partner-info">
            <h3 class="partner-title">${partner.title}</h3>
            <p class="partner-description">${partner.description}</p>
          <button class="btn-34"><span>Обзор</span></button>
        </div>
    `;

    sliderWrapper.appendChild(slide);
});

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    speed: 600,
});