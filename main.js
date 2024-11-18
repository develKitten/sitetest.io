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
        category: "부품사업부",
        title: "Heat Exchanger & Chemical Circulator",
        image: "products/그림1.png",
        description: "향온조",
        detailsPage: "products/parts/01/index.html"
    },
    {
        category: "부품사업부",
        title: "IR Temp Sensor",
        image: "products/그림2.png",
        description: "IR Temp Sensor",
        detailsPage: "products/parts/02/index.html"
    },
    {
        category: "부품사업부",
        title: "High-Temp Flowmeter For Chemical",
        image: "products/그림3.png",
        description: "High-Temp Flowmeter For Chemical",
        detailsPage: "products/parts/03/index.html"
    },
    {
        category: "부품사업부",
        title: "MRM Valve",
        image: "products/그림4.png",
        description: "MRM Valve",
        detailsPage: "products/parts/04/index.html"
    },
    {
        category: "부품사업부",
        title: "FCV",
        image: "products/그림5-1.png",
        description: "Flow Control Valve & Liquid Flow Controller",
        detailsPage: "products/parts/05/index.html"
    },
    {
        category: "부품사업부",
        title: "Ultrasonic Liquid Flow Controller",
        image: "products/그림6-1.png",
        description: "초음파 유량계 제어기, 유량계 센서",
        detailsPage: "products/parts/06/index.html"
    },
    {
        category: "부품사업부",
        title: "PFA TUBE & Fitting",
        image: "products/그림7.png",
        description: "PFA TUBE & Fitting",
        detailsPage: "products/parts/07/index.html"
    }
];


const container = document.querySelector('#productContainer');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let scrollPosition = 0;
const cardWidth = 240; 


// 제품 카드 생성 및 클릭 시 링크 이동 함수
function initializeProducts() {
    productData.forEach((product) => {
        if (product.category === "부품사업부") 
            {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <p>${product.title}</p>
            `;

            card.addEventListener('click', () => 
            {
                window.location.href = product.detailsPage;
            });
            
            container.appendChild(card);
        }
    });
    checkButtons(); 
}

function showNextSlide() {
    const maxScroll = -(cardWidth * (container.childElementCount - 3)); 
    if (scrollPosition > maxScroll) { 
        scrollPosition -= cardWidth;
        if (scrollPosition < maxScroll) {
            scrollPosition = maxScroll; 
        }
        container.style.transform = `translateX(${scrollPosition}px)`;
    }
    checkButtons();
}

function checkButtons() {
    const containerWidth = container.offsetWidth; 
    const totalCardsWidth = cardWidth * container.childElementCount;
    const maxScroll = containerWidth - totalCardsWidth; 
    
    prevButton.disabled = scrollPosition >= 0; 
    nextButton.disabled = scrollPosition <= maxScroll; 
}


function showPrevSlide() 
{
    scrollPosition += cardWidth;
    container.style.transform = `translateX(${scrollPosition}px)`;
    checkButtons();
}

// 버튼 활성화/비활성화 설정 함수
function checkButtons() 
{
    const maxScroll = -(cardWidth * (container.childElementCount - 3));
    prevButton.disabled = scrollPosition === 0;
    nextButton.disabled = scrollPosition <= maxScroll;
}

function initializeCarousel() {
    scrollPosition = 0; 
    container.style.transform = `translateX(${scrollPosition}px)`; 
    checkButtons(); 
}


// 초기화 및 이벤트 리스너 설정
initializeProducts(); 
initializeCarousel();

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

window.addEventListener("resize", () => {
    initializeCarousel();
});