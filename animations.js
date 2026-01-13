// 애니메이션 유틸리티 모듈
class AnimationUtils {
    constructor() {
        this.observers = new Map();
        this.init();
    }

    init() {
        // Intersection Observer로 스크롤 애니메이션
        this.setupScrollAnimations();
        
        // 이미지 lazy loading
        this.setupLazyLoading();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // 카드에 관찰자 추가
        const observeCards = () => {
            document.querySelectorAll('.card').forEach(card => {
                if (!card.classList.contains('observed')) {
                    card.classList.add('observed');
                    observer.observe(card);
                }
            });
        };

        // 초기 관찰
        observeCards();

        // 동적으로 추가된 카드도 관찰
        const originalDisplayProducts = window.displayProducts;
        if (originalDisplayProducts) {
            window.displayProducts = function(filter) {
                originalDisplayProducts(filter);
                setTimeout(observeCards, 100);
            };
        }
    }

    setupLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            // 네이티브 lazy loading 지원
            document.querySelectorAll('img[data-src]').forEach(img => {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
            });
        } else {
            // 폴리필: Intersection Observer 사용
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // 부드러운 스크롤
    static smoothScrollTo(element, offset = 0) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    // 페이드 인 애니메이션
    static fadeIn(element, duration = 300) {
        element.style.opacity = '0';
        element.style.display = 'block';
        
        let start = null;
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    // 페이드 아웃 애니메이션
    static fadeOut(element, duration = 300) {
        let start = null;
        const startOpacity = parseFloat(window.getComputedStyle(element).opacity);
        
        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.max(startOpacity - (progress / duration), 0);
            
            element.style.opacity = opacity;
            
            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                element.style.display = 'none';
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// 전역 인스턴스 생성
let animationUtils;

// 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        animationUtils = new AnimationUtils();
    });
} else {
    animationUtils = new AnimationUtils();
}
