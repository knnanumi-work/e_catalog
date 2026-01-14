// 2026년 병오년 설 선물세트 제품 데이터
const productsData = {
    gyeongnam: [
        { id: 1, name: '따시네 액상차', category: '액상차', desc: '대추, 계피, 감초, 생강 (국내산) - 1팩 용량: 120ml', price: 15000, unit: '(20개입)', price2: 30000, unit2: '(40개입)', img: 'images/image00001.png' },
        { id: 2, name: '대추네 액상차', category: '액상차', desc: '대추 100% (국내산-밀양) - 1팩 용량: 120ml', price: 15000, unit: '(20개입)', price2: 30000, unit2: '(40개입)', img: 'images/image00002.png' },
        { id: 3, name: '포도네 액상차', category: '액상차', desc: '포도 100% (국내산-경산) - 1팩 용량: 120ml', price: 20000, unit: '(20개입)', price2: 30000, unit2: '(35개입)', img: 'images/image00003.png' },
        { id: 4, name: '원두 드립백 세트', category: '커피', desc: '산책 블렌딩(과테말라, 콜롬비아) 1박스, 소풍 블렌딩(에티오피아, 케냐) 1박스 - 10g x 8ea x 2 (총 16팩)', price: 28000, img: 'images/image00004.png' },
        { id: 5, name: '늘품은견과 답례품', category: '견과류', desc: '늘품은견과 1통 (브라질넛, 캐슈넛, 컨크랜베리, 호두, 아몬드)', price: 7000, img: 'images/image00005.png' },
        { id: 6, name: '늘품은견과 선물세트', category: '견과류', desc: '늘품은견과 25g 25봉(박스 포장) - 브라질넛, 캐슈넛, 컨크랜베리, 호두, 아몬드', price: 23000, img: 'images/image00006.png' },
        { id: 7, name: '새로힘견과류 선물 세트', category: '견과류', desc: '1팩당 견과류 7종 포함 (20g) - 구운아몬드, 구운캐슈넛, 브라질너트, 마카다미아, 호두, 컨크랜베리, 건블루베리 - 1박스 16팩 포함', price: 22000, img: 'images/image00007.png' },
        { id: 8, name: '제과제빵 선물 세트', category: '제과제빵', desc: '유기농밀 100% 사용 - 소프트 롤 빵 1개, 버터쿠키(초코칩) 1개, 기본(아몬드) 머핀 1개, 초코머핀 1개 - 총 4개입', price: 22000, img: 'images/image00008.png' },
        { id: 9, name: '쿠키선물세트 (6입)', category: '쿠키', desc: '오렌지, 무화과, 녹차, 오트밀, 딸기, 초코칩 (6개입)', price: 12000, img: 'images/image00009.png' },
        { id: 10, name: '쿠키선물세트 (12입)', category: '쿠키', desc: '오렌지, 무화과, 녹차, 오트밀, 딸기, 초코칩 (12개입)', price: 24000, img: 'images/image00010.png' },
        { id: 11, name: '해연풍 흑마늘 액상차', category: '건강식품', desc: '흑마늘추출액 5.75% - 75ml 30개입 (박스포장)', price: 48000, img: 'images/image00011.png' },
        { id: 12, name: '흑마늘 힘찬하루 세트', category: '건강식품', desc: '500ml x 2병 (선물박스) - 100% 남해산 마늘, 고형분 30% 이상', price: 110000, img: 'images/image00012.png' }
    ],
    nationwide: [
        { id: 13, name: '예심맛나김 종합세트', category: '김', desc: '전장김 24g 4봉 + 김자반 50g 2봉 + 도시락김 4g 4봉 (총 8개입)', price: 21000, img: 'images/image00013.png' },
        { id: 14, name: '예심맛나김 종합세트 2', category: '김', desc: '전장김 24g 5봉 + 김자반 50g 3봉 + 도시락김 4g 8봉 (총 16개입)', price: 29000, img: 'images/image00014.png' },
        { id: 15, name: '부안김 세트', category: '김', desc: '재래전장 2봉 + 돌김전장 2봉 + 김자반 4봉 + 도시락김 16봉', price: 25000, img: 'images/image00015.png' },
        { id: 16, name: '부안김 프리미엄 세트', category: '김', desc: '재래전장 3봉 + 돌김전장 2봉 + 김자반 3봉 + 명품곱창돌김 120g 이상', price: 35000, img: 'images/image00016.png' },
        { id: 17, name: '서천김 세트', category: '김', desc: '전장김 5매 8봉 (20g 이상) - 국내산 (서천산)', price: 15000, img: 'images/image00017.png' },
        { id: 18, name: '서천김 프리미엄 세트', category: '김', desc: '전장김 20g x 4봉 + 식탁김 15g x 4봉 + 도시락김 5g x 12봉 - 국내산 (서천산)', price: 21000, img: 'images/image00018.png' },
        { id: 19, name: '참·들기름 세트 2종', category: '참들기름', desc: '중국산 참기름(300ml) 1병, 중국산 들기름(300ml) 1병', price: 25000, img: 'images/image00019.png' },
        { id: 20, name: '참·들기름 세트 3종', category: '참들기름', desc: '중국산 참기름(300ml) 1병, 중국산 들기름(300ml) 1병, 중국산 볶음깨(160g) 1병', price: 30000, img: 'images/image00020.png' },
        { id: 21, name: '국산 참·들기름 세트 120ml', category: '참들기름', desc: '국산 참기름(120ml) 1병, 국산 들기름(120ml) 1병', price: 35000, img: 'images/image00021.png' },
        { id: 22, name: '국산 참·들기름 세트 220ml', category: '참들기름', desc: '국산 참기름(220ml) 1병, 국산 들기름(220ml) 1병', price: 50000, img: 'images/image00022.png' },
        { id: 23, name: '꽃바위 참기름+볶음깨 세트', category: '참들기름', desc: '참기름 (중국산) 290ml 1병, 볶음깨 (중국산) 100g 1통', price: 17000, img: 'images/image00023.png' },
        { id: 24, name: '꽃바위 참기름+참기름 세트', category: '참들기름', desc: '참기름 (중국산) 290ml 2병', price: 25000, img: 'images/image00024.png' },
        { id: 25, name: '꽃바위 참기름+참기름+볶음깨 세트', category: '참들기름', desc: '참기름 (중국산) 290ml 2병, 볶음깨 (중국산) 100g 1통', price: 28000, img: 'images/image00025.png' },
        { id: 26, name: '꽃바위 참기름+들기름+볶음깨 세트', category: '참들기름', desc: '참기름 (중국산) 290ml 1병, 들기름 (국내산) 290ml 1병, 볶음깨 (중국산) 100ml 1통', price: 39000, img: 'images/image00026.png' },
        { id: 27, name: '황태 선물 세트 1', category: '황태', desc: '황태포(중) 38-40cm 5마리, 황태채 200g 1개 (러시아산)', price: 35000, img: 'images/image00027.png' },
        { id: 28, name: '황태 선물 세트 2', category: '황태', desc: '황태포(대) 40-42cm 10마리 (러시아산)', price: 40000, img: 'images/image00028.png' },
        { id: 29, name: '황태 선물 세트 3', category: '황태', desc: '황태포(특대) 44-46cm 10마리 (러시아산)', price: 55000, img: 'images/image00029.png' },
        { id: 30, name: '미비방실록 육포세트', category: '육포', desc: '쇠고기육포(호주산) 25g x 6팩, 돼지고기육포(국내산) 25g x 4팩', price: 25000, img: 'images/image00030.png' },
        { id: 31, name: '미비방실록 육포세트', category: '육포', desc: '쇠고기육포(호주산) 50g 6팩, 돼지고기육포(국내산) 25g 4팩', price: 37000, img: 'images/image00031.png' },
        { id: 32, name: '미비방실록 명품육포세트', category: '육포', desc: '쇠고기육포(호주산) 60g 6팩', price: 55000, img: 'images/image00032.png' },
        { id: 33, name: '채반호도리 세트 小', category: '곶감', desc: '1.2kg 이상 35과 내외 (국내산) - 위생적인 전천후 농산물 건조시스템', price: 40000, img: 'images/image00033.png' },
        { id: 34, name: '채반호도리 세트 中', category: '곶감', desc: '1.5kg 이상 45과 내외 (국내산) - 위생적인 전천후 농산물 건조시스템', price: 60000, img: 'images/image00034.png' },
        { id: 35, name: '채반호도리 세트 大', category: '곶감', desc: '2kg 이상 50과 내외 (국내산) - 위생적인 전천후 농산물 건조시스템', price: 80000, img: 'images/image00035.png' },
        { id: 36, name: '곡류 선물 세트', category: '곡류', desc: '백미, 현미, 찰쌀, 흑보리 각 500g 1개 (총 4개입) / 국내쌀, 진공포장', price: 25000, img: 'images/image00036.png' },
        { id: 37, name: '사람엔삼 홍삼스틱 세트', category: '홍삼', desc: '10g x 30포(300g) / 식품유형: 액상차 - 홍삼농축액 20%, 정제수', price: 30000, img: 'images/image00037.png' },
        { id: 38, name: '왜배기 홍삼액 세트', category: '홍삼', desc: '80ml x 30파우치 - 홍삼추출액 100% (국산) - 72시간 저온달임 추출 방식', price: 35000, img: 'images/image00038.png' },
        { id: 39, name: '허브드림 1호 세트', category: '차', desc: '허브차 티백 3종 랜덤 (스피아민트, 페퍼민트, 캐모마일, 레몬밤, 레몬버베나, 애플민트 등)', price: 15000, img: 'images/image00039.png' },
        { id: 40, name: '허브드림 2호 세트', category: '차', desc: '허브차 티백 6종 랜덤 (스피아민트, 페퍼민트, 캐모마일, 레몬밤, 레몬버베나, 애플민트 등)', price: 27000, img: 'images/image00040.png' },
        { id: 41, name: '허브드림 3호 세트', category: '차', desc: '베론, 봄 기다림(티백 40개, 20g), 베론, 숲에 잠기다(티백 40개, 20g) (총 2개 세트)', price: 28000, img: 'images/image00041.png' },
        { id: 42, name: '강릉모래내 커피& 티 세트', category: '커피', desc: '커피 5개, 수국차 7개, 현미 수국차 10개', price: 16000, img: 'images/image00042.png' },
        { id: 43, name: '강릉모래내 커피 티백 세트', category: '커피', desc: '커피 티백 15개 포함 (소박스당 5개씩) - 1봉 4g / 강릉모래내 로스팅 기술 반영', price: 20000, img: 'images/image00043.png' },
        { id: 44, name: '드립백 선물 세트', category: '커피', desc: '드립백(콜롬비아, 에티오피아, 브라질) 3종 각 8개씩', price: 28000, img: 'images/image00044.png' },
        { id: 45, name: '쌍화차 10개 세트', category: '차', desc: '쌍화차 10개 세트 / 100ml', price: 23000, img: 'images/image00045.png' },
        { id: 46, name: '쌍화차 20개 세트', category: '차', desc: '쌍화차 20개 세트 / 100ml', price: 41000, img: 'images/image00046.png' },
        { id: 47, name: '꿈꾸다 3종 선물세트', category: '차', desc: '유리병 (10T x 3EA) - 작두콩, 돼지감자, 우엉, 호박팥, 캐모마일 등', price: 16000, img: 'images/image00047.png' },
        { id: 48, name: '꿈꾸다 6종 선물세트', category: '차', desc: '유리병 (10T x 6EA) - 작두콩, 돼지감자, 우엉, 호박팥, 캐모마일 등', price: 22000, img: 'images/image00048.png' },
        { id: 49, name: '강뉴 커피선물 세트 1호', category: '커피', desc: '강뉴커피백 + 드립백(블렌딩)', price: 20000, img: 'images/image00049.png' },
        { id: 50, name: '강뉴 커피선물 세트 2호', category: '커피', desc: '강뉴커피백 + 드립백(블렌딩) + 드립백(케냐)', price: 30000, img: 'images/image00050.png' },
        { id: 51, name: '하늘재 T 세트', category: '돈까스', desc: '등심돈까스 150g 1팩 (4개), 떡갈비스테이크 100g 1팩 (4개), 소스 500ml 1개', price: 26000, img: 'images/image00051.png' },
        { id: 52, name: '하늘재 K 세트', category: '돈까스', desc: '등심돈까스, 치킨순살까스, 떡갈비스테이크, 소스 포함', price: 40000, img: 'images/image00052.png' },
        { id: 53, name: '레드솔트 조미용기 2종 세트', category: '소금', desc: '천일염, 흑마늘 소금 200g', price: 12000, img: 'images/image00053.png' },
        { id: 54, name: '레드솔트 조미용기 3종세트', category: '소금', desc: '천일염, 흑마늘, 꽃게 소금 200g', price: 18000, img: 'images/image00054.png' },
        { id: 55, name: '레드솔트 혼합 3종 세트', category: '소금', desc: '천일염 450g, 소금(흑마늘, 꽃개) 각 200g', price: 20000, img: 'images/image00055.png' },
        { id: 56, name: '레드솔트 단지용기 3종 세트', category: '소금', desc: '천일염, 흑마늘, 꽃개 각 450g', price: 30000, img: 'images/image00056.png' },
        { id: 57, name: '흰여울 주방세제 세트 1', category: '세제', desc: '퐁 500ml 1개 + 퐁 리필용 700ml 1개', price: 15000, img: 'images/image00057.png' },
        { id: 58, name: '흰여울 주방세제 세트 2', category: '세제', desc: '퐁 500ml 1개 + 퐁 리필용 700ml 2개', price: 23000, img: 'images/image00058.png' },
        { id: 59, name: '흰여울 주방, 비누 세트', category: '세제', desc: '퐁 850m 1개, 어성초, 곡물, 파프리카 비누 각 1개', price: 25000, img: 'images/image00059.png' },
        { id: 60, name: '흰여울 선물 세트', category: '세제', desc: '고농축 주방세제, 샴푸바, 세안비누, 목욕비누, 세탁비누, 수세미, 비누받침', price: 30000, img: 'images/image00060.png' },
        { id: 61, name: '네이쳐 워터솝 핸드케어 세트', category: '비누', desc: '네이쳐 레몬 워터솝 300m 1개, 내츄럴핸드크림(아보카도) 50g 1개', price: 14000, img: 'images/image00061.png' },
        { id: 62, name: '모이스춰 패밀리케어 세트', category: '비누', desc: '바디워시, 바디로션, 핸드크림, 쑥비누, 코코넛비누', price: 32000, img: 'images/image00062.png' },
        { id: 63, name: '헤어 케어 세트', category: '비누', desc: '샴푸 500ml 1개, 컨디셔너 500ml 1개', price: 15000, img: 'images/image00063.png' },
        { id: 64, name: '바디 케어 세트', category: '비누', desc: '물비누(바디워시) 500ml 1개, 샤워볼 1개, 세안비누 4개', price: 33000, img: 'images/image00064.png' },
        { id: 65, name: '푸른지구 주방세제 세트 1', category: '세제', desc: '주방세제 500ml 1개, 리필 500ml 1개, 천연고무장갑 1개', price: 15000, img: 'images/image00065.png' },
        { id: 66, name: '푸른지구 주방세제 세트 2', category: '세제', desc: '주방세제 500ml 1개, 리필 500ml 2개, 천연고무장갑 1개, 삼베수세미 1개', price: 22000, img: 'images/image00066.png' },
        { id: 67, name: '건강기능식품 세트 1', category: '건강기능식품', desc: '옥타코사놀 500mg, 밀크씨슬 500mg', price: 40000, img: 'images/image00067.png' },
        { id: 68, name: '건강기능식품 세트 2', category: '건강기능식품', desc: '홍삼 500mg, 종합비타민 500mg', price: 40000, img: 'images/image00068.png' }
    ]
};

// 제품 표시 함수
function displayProducts(filter) {
    const gyeongnamGrid = document.getElementById('gyeongnamGrid');
    const nationwideGrid = document.getElementById('nationwideGrid');
    
    gyeongnamGrid.innerHTML = '';
    nationwideGrid.innerHTML = '';
    
    let gCount = 0, nCount = 0;
    
    productsData.gyeongnam.forEach(p => {
        if (shouldShow(p, filter, 'gyeongnam')) {
            gyeongnamGrid.innerHTML += createCard(p);
            gCount++;
        }
    });
    
    productsData.nationwide.forEach(p => {
        if (shouldShow(p, filter, 'nationwide')) {
            nationwideGrid.innerHTML += createCard(p);
            nCount++;
        }
    });
    
    if (gCount === 0) gyeongnamGrid.innerHTML = '<div class="empty">해당 조건의 제품이 없습니다</div>';
    if (nCount === 0) nationwideGrid.innerHTML = '<div class="empty">해당 조건의 제품이 없습니다</div>';
    
    document.querySelectorAll('.card').forEach((c, i) => {
        c.style.animationDelay = `${i * 0.05}s`;
        c.classList.add('fade-in');
    });
}

function shouldShow(p, filter, region) {
    if (filter === 'all') return true;
    if (filter === 'gyeongnam') return region === 'gyeongnam';
    if (filter === 'nationwide') return region === 'nationwide';
    if (filter === 'under30') return p.price < 30000;
    if (filter === '30to50') return p.price >= 30000 && p.price < 50000;
    if (filter === 'over50') return p.price >= 50000;
    return true;
}

function createCard(p) {
    const price2 = p.price2 ? ` / ${p.price2.toLocaleString()}원 ${p.unit2}` : '';
    const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22320%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22300%22 height=%22320%22/%3E%3Ctext fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E이미지 준비중%3C/text%3E%3C/svg%3E';
    
    return `
        <div class="card" onclick="showProductViewer(${p.id})">
            <img src="${p.img}" alt="${p.name}" loading="lazy" 
                 onerror="handleImageError(this, '${p.img}', '${placeholder}')">
            <div class="info">
                <span class="cat">${p.category}</span>
                <h3>${p.name}</h3>
                <p class="desc">${p.desc}</p>
                <div class="price">${p.price.toLocaleString()}원 <span>${p.unit || '/ 1세트'}</span>${price2}</div>
            </div>
        </div>
    `;
}

// 이미지 에러 처리 함수
function handleImageError(img, originalSrc, placeholder) {
    // BMP 파일이면 JPG로 변환 시도
    if (originalSrc.toLowerCase().endsWith('.bmp')) {
        const jpgPath = originalSrc.replace(/\.bmp$/i, '.jpg');
        img.onerror = null; // 에러 핸들러 초기화
        img.src = jpgPath;
        img.onerror = function() {
            // JPG도 실패하면 원본 BMP 시도
            this.onerror = null;
            this.src = originalSrc;
            this.onerror = function() {
                // 모두 실패하면 placeholder
                this.src = placeholder;
                this.onerror = null;
            };
        };
    } else {
        // BMP가 아니면 바로 placeholder
        img.src = placeholder;
        img.onerror = null;
    }
}

function filterProducts(filter) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    displayProducts(filter);
}

function searchProducts() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const gyeongnamGrid = document.getElementById('gyeongnamGrid');
    const nationwideGrid = document.getElementById('nationwideGrid');
    
    gyeongnamGrid.innerHTML = '';
    nationwideGrid.innerHTML = '';
    
    let gCount = 0, nCount = 0;
    
    productsData.gyeongnam.forEach(p => {
        if (matches(p, term)) {
            gyeongnamGrid.innerHTML += createCard(p);
            gCount++;
        }
    });
    
    productsData.nationwide.forEach(p => {
        if (matches(p, term)) {
            nationwideGrid.innerHTML += createCard(p);
            nCount++;
        }
    });
    
    if (gCount === 0) gyeongnamGrid.innerHTML = '<div class="empty">검색 결과가 없습니다</div>';
    if (nCount === 0) nationwideGrid.innerHTML = '<div class="empty">검색 결과가 없습니다</div>';
}

function matches(p, term) {
    return p.name.toLowerCase().includes(term) || 
           p.desc.toLowerCase().includes(term) || 
           p.category.toLowerCase().includes(term) || 
           p.price.toString().includes(term);
}

// showDetail은 showProductViewer로 대체됨 (viewer.js에서 정의)
function showDetail(id) {
    // 하위 호환성을 위해 유지
    showProductViewer(id);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 초기화
window.addEventListener('DOMContentLoaded', () => {
    displayProducts('all');
    
    window.addEventListener('scroll', () => {
        const btn = document.getElementById('scrollTop');
        btn.classList.toggle('visible', window.pageYOffset > 300);
    });
});
