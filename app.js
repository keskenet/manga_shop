const mangaData = [
    {
        id: '1',
        title: 'Наруто',
        author: 'Масаші Кішимото',
        price: 299.99,
        description: 'Епічна історія про молодого ніндзю, який прагне стати Хокаге.',
        image_url: 'https://images.unsplash.com/photo-1705831156575-a5294d295a31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxtYW5nYXxlbnwwfHx8fDE3NTMwMzczNTR8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Пригоди',
        volumes: 72,
        rating: 4.8
    },
    {
        id: '2',
        title: 'Атака Титанів',
        author: 'Хайджиме Ісаяма',
        price: 349.99,
        description: 'Темна історія про виживання людства проти гігантських титанів.',
        image_url: 'https://images.unsplash.com/photo-1531501410720-c8d437636169?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxtYW5nYXxlbnwwfHx8fDE3NTMwMzczNTR8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Драма',
        volumes: 34,
        rating: 4.9
    },
    {
        id: '3',
        title: 'Односкачний',
        author: 'Віатьон',
        price: 279.99,
        description: 'Комедійна історія про героя, який може перемогти будь-кого одним ударом.',
        image_url: 'https://images.unsplash.com/photo-1709675577966-6231e5a2ac43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxtYW5nYXxlbnwwfHx8fDE3NTMwMzczNTR8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Комедія',
        volumes: 29,
        rating: 4.7
    },
    {
        id: '4',
        title: 'Демон Слейер',
        author: 'Коюхару Гобуне',
        price: 329.99,
        description: 'Історія про хлопчика, який стає мисливцем на демонів.',
        image_url: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwyfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Екшн',
        volumes: 23,
        rating: 4.9
    },
    {
        id: '5',
        title: 'Мій Академічний Герой',
        author: 'Кохей Хорікоші',
        price: 289.99,
        description: 'Світ, де майже всі мають суперсили, а головний герой - ні.',
        image_url: 'https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Супергерої',
        volumes: 38,
        rating: 4.6
    },
    {
        id: '6',
        title: 'Джуджицу Кайсен',
        author: 'Геге Акутамі',
        price: 319.99,
        description: 'Студенти борються з прокльонами у сучасному Токіо.',
        image_url: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&lib=rb-4.1.0&q=85',
        genre: 'Містика',
        volumes: 24,
        rating: 4.8
    },
    {
        id: '7',
        title: 'One Piece',
        author: 'Ейічіро Ода',
        price: 399.99,
        description: 'Епічна пригода молодого пірата Манкі Д. Луффі в пошуках скарбів.',
        image_url: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        genre: 'Пригоди',
        volumes: 111,
        rating: 5.0
    },
    {
        id: '8',
        title: 'Dragon Ball',
        author: 'Акіра Торіяма',
        price: 249.99,
        description: 'Класична історія про хлопчика на ім\'я Гоку, який шукає Драконячі Кулі.',
        image_url: 'https://m.media-amazon.com/images/M/MV5BMGQ0ZWE4NDYtYWY0Mi00MjE0LWI1MzctZDA1NGExYzE3N2FiXkEyXkFqcGc@._V1_.jpg',
        genre: 'Екшн',
        volumes: 42,
        rating: 4.9
    },
    {
        id: '9',
        title: 'Death Note',
        author: 'Цугумі Оба',
        price: 279.99,
        description: 'Захопливий трилер про учня, який знаходить зошит смерті.',
        image_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Death_Note_Characters.jpg/250px-Death_Note_Characters.jpg',
        genre: 'Містика',
        volumes: 12,
        rating: 4.9
    }
];

let filteredManga = [...mangaData];
const mangaGrid = document.getElementById('manga-grid');
const searchInput = document.getElementById('search-input');
const genreSelect = document.getElementById('genre-select');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartContent = document.getElementById('cart-content');
const cartBadge = document.getElementById('cart-badge');
const header = document.getElementById('header');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// ====== КОШИК LOCALSTORAGE ======
function getCart() { return JSON.parse(localStorage.getItem('cart')) || []; }
function setCart(cart) { localStorage.setItem('cart', JSON.stringify(cart)); }

// ====== ВІДМАЛЬОВКА МАНГИ ======
function renderManga() {
    if (!mangaGrid) return;
    mangaGrid.innerHTML = '';
    
    if (filteredManga.length === 0) {
        mangaGrid.innerHTML = '<p style="text-align:center; padding: 2rem; color: #777;">На жаль, за вашим запитом нічого не знайдено.</p>';
        return;
    }

    filteredManga.forEach(manga => {
        const card = document.createElement('div');
        card.className = 'manga-card reveal';
        card.innerHTML = `
            <div class="manga-image-container">
                <img src="${manga.image_url}" alt="${manga.title}" class="manga-image">
                <div class="manga-rating">⭐ ${manga.rating}</div>
            </div>
            <div class="manga-info">
                <div>
                    <h3>${manga.title}</h3>
                    <p class="manga-author">${manga.author}</p>
                </div>
                <p class="manga-description">${manga.description}</p>
                <div class="manga-footer">
                    <span class="manga-price">${manga.price.toFixed(2)} ₴</span>
                    <button class="add-to-cart-btn" data-id="${manga.id}">Додати</button>
                </div>
            </div>
        `;
        mangaGrid.appendChild(card);
    });

    // Після рендерингу, ініціюємо анімацію
    initAnimations();
}

// ====== ФІЛЬТРАЦІЯ ======
function filterManga() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedGenre = genreSelect.value;
    filteredManga = mangaData.filter(manga => {
        const matchesSearch = manga.title.toLowerCase().includes(searchTerm) ||
                              manga.author.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'Всі' || manga.genre === selectedGenre;
        return matchesSearch && matchesGenre;
    });
    renderManga();
}

// ====== КОШИК + sidebar ======
function addToCart(mangaId) {
    const manga = mangaData.find(m => m.id === mangaId);
    if (!manga) return;
    let cart = getCart();
    const existingItem = cart.find(item => item.id === mangaId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...manga, quantity: 1 });
    }
    setCart(cart);
    updateCartDisplay();
    showCartSidebar();
}

function removeFromCart(mangaId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== mangaId);
    setCart(cart);
    updateCartDisplay();
}

function updateQuantity(mangaId, newQuantity) {
    let cart = getCart();
    if (newQuantity <= 0) {
        cart = cart.filter(item => item.id !== mangaId);
    } else {
        const item = cart.find(item => item.id === mangaId);
        if (item) item.quantity = newQuantity;
    }
    setCart(cart);
    updateCartDisplay();
}

function updateCartDisplay() {
    let cart = getCart();
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) cartBadge.textContent = cartCount;
    if (!cartContent) return;

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <p>Кошик порожній</p>
            </div>
        `;
    } else {
        const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartContent.innerHTML = `
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image_url}" alt="${item.title}" class="cart-item-image">
                        <div class="cart-item-info">
                            <h4>${item.title}</h4>
                            <p class="cart-item-price">${item.price.toFixed(2)} ₴</p>
                        </div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" data-id="${item.id}" data-action="decrease">−</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                            <button class="remove-item-btn" data-id="${item.id}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-summary">
                <div class="cart-total">
                    <span>Загалом:</span>
                    <span>${cartTotal.toFixed(2)} ₴</span>
                </div>
                <button class="checkout-btn">Оформити замовлення</button>
            </div>
        `;
    }
}

function showCartSidebar() {
    if (cartSidebar) {
        cartSidebar.classList.add('visible');
    }
    updateCartDisplay();
}

function hideCartSidebar() {
    if (cartSidebar) {
        cartSidebar.classList.remove('visible');
    }
}

function checkout() {
    let cart = getCart();
    if (cart.length === 0) {
        alert('Кошик порожній!');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Дякуємо за замовлення!\n\nЗагальна сума: ${total.toFixed(2)} ₴\n\nМи зв'яжемося з вами найближчим часом! 🌸`);
    setCart([]);
    updateCartDisplay();
    hideCartSidebar();
}

// ====== ІНІЦІАЛІЗАЦІЯ І ОБРОБНИКИ ПОДІЙ ======
function init() {
    renderManga();
    updateCartDisplay();
    initEventListeners();
    initAnimations();
}

function initEventListeners() {
    if (searchInput) searchInput.addEventListener('input', filterManga);
    if (genreSelect) genreSelect.addEventListener('change', filterManga);
    if (cartToggleBtn) cartToggleBtn.addEventListener('click', showCartSidebar);
    if (closeCartBtn) closeCartBtn.addEventListener('click', hideCartSidebar);
    if (mangaGrid) {
        mangaGrid.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart-btn');
            if (btn) {
                addToCart(btn.dataset.id);
            }
        });
    }

    if (cartContent) {
        cartContent.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;
            const id = btn.dataset.id;
            const action = btn.dataset.action;
            
            if (btn.classList.contains('remove-item-btn')) {
                removeFromCart(id);
            } else if (action === 'increase') {
                const item = getCart().find(item => item.id === id);
                if (item) updateQuantity(id, item.quantity + 1);
            } else if (action === 'decrease') {
                const item = getCart().find(item => item.id === id);
                if (item) updateQuantity(id, item.quantity - 1);
            } else if (btn.classList.contains('checkout-btn')) {
                checkout();
            }
        });
    }

    // Header scroll logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Scroll to top button logic
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// New animation logic with IntersectionObserver
function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });
}

// Run everything
document.addEventListener('DOMContentLoaded', init);