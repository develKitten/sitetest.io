// 제품 목록
const productData = [
    {
        category: "부품사업부",
        title: "Heat Exchanger & Chemical Circulator",
        image: "../../그림1.png",
        description: "향온조",
        detailsPage: "../01/index.html"
    },
    {
        category: "부품사업부",
        title: "IR Temp Sensor",
        image: "../../그림2.png",
        description: "IR Temp Sensor",
        detailsPage: "../02/index.html"
    },
    {
        category: "부품사업부",
        title: "High-Temp Flowmeter For Chemical",
        image: "../../그림3.png",
        description: "High-Temp Flowmeter For Chemical",
        detailsPage: "../03/index.html"
    },
    {
        category: "부품사업부",
        title: "MRM Valve",
        image: "../../그림4.png",
        description: "MRM Valve",
        detailsPage: "../04/index.html"
    },
    {
        category: "부품사업부",
        title: "FCV",
        image: "../../그림5-1.png",
        description: "Flow Control Valve & Liquid Flow Controller",
        detailsPage: "../05/index.html"
    },
    {
        category: "부품사업부",
        title: "Ultrasonic Liquid Flow Controller",
        image: "../../그림6-1.png",
        description: "초음파 유량계 제어기, 유량계 센서",
        detailsPage: "../06/index.html"
    },
    {
        category: "부품사업부",
        title: "PFA TUBE & Fitting",
        image: "../../그림7.png",
        description: "PFA TUBE & Fitting",
        detailsPage: "../07/index.html"
    },
    {
        category: "장비사업부",
        title: "CDS",
        image: "../../그림8.png",
        description: "Chemical Delivery System",
        detailsPage: "../08/index.html"
    },
    {
        category: "장비사업부",
        title: "WTR",
        image: "../../그림9.png",
        description: "WTR",
        detailsPage: "../09/index.html"
    },
    {
        category: "장비사업부",
        title: "EFEM",
        image: "../../그림10.png",
        description: "Equipment Front End Module",
        detailsPage: "../10/index.html"
    },
    {
        category: "장비사업부",
        title: "Cooling Unit",
        image: "../../그림11.png",
        description: "Cooling Unit",
        detailsPage: "../11/index.html"
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


const partsURL = "../01/index.html"; 
const equipmentURL = "../../equip/08/index.html"; 
const partsBtn = document.getElementById('partsBtn');
const equipmentBtn = document.getElementById('equipmentBtn');

partsBtn.addEventListener('click', () => {
    window.location.href = partsURL;
});

equipmentBtn.addEventListener('click', () => {
    window.location.href = equipmentURL;
});
