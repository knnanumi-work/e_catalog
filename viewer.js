// 이미지 뷰어 모듈
class ImageViewer {
    constructor() {
        this.currentIndex = 0;
        this.products = [];
        this.viewer = null;
        this.init();
    }

    init() {
        // 뷰어 HTML 생성
        const viewerHTML = `
            <div class="image-viewer" id="imageViewer">
                <div class="viewer-content">
                    <button class="viewer-close" id="viewerClose">×</button>
                    <div class="viewer-counter" id="viewerCounter"></div>
                    <button class="viewer-nav prev" id="viewerPrev">‹</button>
                    <img class="viewer-image" id="viewerImage" alt="제품 이미지">
                    <button class="viewer-nav next" id="viewerNext">›</button>
                    <div class="viewer-info" id="viewerInfo">
                        <h3 id="viewerTitle"></h3>
                        <p id="viewerDesc"></p>
                        <div class="viewer-price" id="viewerPrice"></div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', viewerHTML);
        
        this.viewer = document.getElementById('imageViewer');
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 닫기 버튼
        document.getElementById('viewerClose').addEventListener('click', () => {
            this.close();
        });

        // 이전/다음 버튼
        document.getElementById('viewerPrev').addEventListener('click', () => {
            this.prev();
        });

        document.getElementById('viewerNext').addEventListener('click', () => {
            this.next();
        });

        // ESC 키로 닫기
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.viewer.classList.contains('active')) {
                this.close();
            }
        });

        // 화살표 키로 네비게이션
        document.addEventListener('keydown', (e) => {
            if (!this.viewer.classList.contains('active')) return;
            
            if (e.key === 'ArrowLeft') {
                this.prev();
            } else if (e.key === 'ArrowRight') {
                this.next();
            }
        });

        // 배경 클릭으로 닫기
        this.viewer.addEventListener('click', (e) => {
            if (e.target === this.viewer) {
                this.close();
            }
        });

        // 터치 제스처 (스와이프)
        let touchStartX = 0;
        let touchEndX = 0;

        this.viewer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.viewer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 왼쪽으로 스와이프 (다음)
                this.next();
            } else {
                // 오른쪽으로 스와이프 (이전)
                this.prev();
            }
        }
    }

    open(products, index) {
        this.products = products;
        this.currentIndex = index;
        this.updateViewer();
        this.viewer.classList.add('active');
        document.body.style.overflow = 'hidden'; // 스크롤 방지
    }

    close() {
        this.viewer.classList.remove('active');
        document.body.style.overflow = ''; // 스크롤 복원
    }

    prev() {
        if (this.products.length === 0) return;
        this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
        this.updateViewer();
    }

    next() {
        if (this.products.length === 0) return;
        this.currentIndex = (this.currentIndex + 1) % this.products.length;
        this.updateViewer();
    }

    updateViewer() {
        if (this.products.length === 0) return;

        const product = this.products[this.currentIndex];
        const img = document.getElementById('viewerImage');
        const title = document.getElementById('viewerTitle');
        const desc = document.getElementById('viewerDesc');
        const price = document.getElementById('viewerPrice');
        const counter = document.getElementById('viewerCounter');

        // 제품 정보 먼저 업데이트
        title.textContent = product.name;
        desc.textContent = product.desc;
        
        const price2 = product.price2 ? ` / ${product.price2.toLocaleString()}원 ${product.unit2}` : '';
        price.textContent = `${product.price.toLocaleString()}원 ${product.unit || '/ 1세트'}${price2}`;
        
        // 카운터 업데이트
        counter.textContent = `${this.currentIndex + 1} / ${this.products.length}`;

        // 이미지 로딩
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        const placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22%3E%3Crect fill=%22%23f5f5f5%22 width=%22800%22 height=%22600%22/%3E%3Ctext fill=%22%23999%22 x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22%3E이미지를 불러올 수 없습니다%3C/text%3E%3C/svg%3E';
        
        // 이미지가 이미 로드되어 있으면 즉시 표시
        if (img.complete && img.src === product.img) {
            img.style.opacity = '1';
        } else {
            // BMP 파일이면 JPG로 변환 시도
            let imgPath = product.img;
            if (product.img.toLowerCase().endsWith('.bmp')) {
                imgPath = product.img.replace(/\.bmp$/i, '.jpg');
            }
            
            img.src = imgPath;
            img.alt = product.name;
            
            img.onload = () => {
                img.style.opacity = '1';
            };

            img.onerror = () => {
                // JPG가 없으면 원본 BMP 시도 (BMP 파일인 경우)
                if (imgPath !== product.img && product.img.toLowerCase().endsWith('.bmp')) {
                    img.src = product.img;
                    img.onerror = () => {
                        img.src = placeholder;
                        img.style.opacity = '1';
                    };
                } else {
                    // BMP가 아니거나 원본도 실패하면 placeholder
                    img.src = placeholder;
                    img.style.opacity = '1';
                }
            };
        }
    }
}

// 전역 뷰어 인스턴스
let imageViewer;

// 초기화 함수
function initImageViewer() {
    imageViewer = new ImageViewer();
}

// 제품 상세 보기 함수 (기존 showDetail 대체)
function showProductViewer(productId) {
    const allProducts = [...productsData.gyeongnam, ...productsData.nationwide];
    const index = allProducts.findIndex(p => p.id === productId);
    
    if (index !== -1 && imageViewer) {
        imageViewer.open(allProducts, index);
    }
}

// DOM 로드 시 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initImageViewer);
} else {
    initImageViewer();
}
