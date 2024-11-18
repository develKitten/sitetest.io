/***************************************************** 
 
            메인화면 슬라이드

******************************************************/

const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const progress = document.querySelector('.slide-progress');
let currentIndex = 0;
const slideInterval = 10000; // 슬라이드 전환 시간 (10초)

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');

    progress.style.transition = 'none';
    progress.style.width = '0';
    setTimeout(() => {
        progress.style.transition = `width ${slideInterval}ms linear`; 
        progress.style.width = '100%';
    }, 10);
}

// 자동 슬라이드 기능
function startSlideShow() {
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, slideInterval);
}

// 인디케이터 클릭 이벤트
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

showSlide(currentIndex);
startSlideShow();


/***************************************************** 
 
            카드 슬라이더

******************************************************/

const productData = [
    {
        image: './products/그림1.png',
        title: 'Heat Exchanger & Chemical Circulator',
    },
    {
        image: './products/그림2.png',
        title: 'Non-contact IR Temp Sensor',
    },
    {
        image: './products/그림3.png',
        title: 'High-Temp Flowmeter For Chemical',
    },
    {
        image: './products/그림4.png',
        title: 'MRM Valve',
    },
    {
        image: './products/그림5-1.png',
        title: 'Flow Control Valve & Liquid Flow Controller',
    },
    {
        image: './products/그림6-1.png',
        title: 'Ultrasonic Liquid Flow Controller',
    }
    // 카드 추가
];


const container = document.querySelector('#productContainer');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let scrollPosition = 0;
const cardWidth = 240; 


function initializeProducts() {
    productData.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <p>${product.title}</p>
        `;
        
        container.appendChild(card);
    });
    checkButtons(); 
}

// 슬라이드 이동 함수
function showNextSlide() {
    scrollPosition -= cardWidth;
    container.style.transform = `translateX(${scrollPosition}px)`;
    checkButtons();
}

function showPrevSlide() {
    scrollPosition += cardWidth;
    container.style.transform = `translateX(${scrollPosition}px)`;
    checkButtons();
}

// 버튼 활성화/비활성화 설정 함수
function checkButtons() {
    const maxScroll = -(cardWidth * (container.childElementCount - 3));
    prevButton.disabled = scrollPosition === 0;
    nextButton.disabled = scrollPosition <= maxScroll;
}

// 초기화 및 이벤트 리스너 설정
initializeProducts(); 
nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
