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
        image_url: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Містика',
        volumes: 24,
        rating: 4.8
    }
];

// Cart state
let cart = [];
let filteredManga = [...mangaData];

// Initialize the page
function init() {
    renderManga();
    updateCartDisplay();
    // Викликаємо нову функцію для плавного появи секцій
    revealSections();
}

// Render manga cards
function renderManga() {
    const grid = document.getElementById('manga-grid');
    grid.innerHTML = '';

    filteredManga.forEach((manga, index) => {
        const card = document.createElement('div');
        card.className = 'manga-card';
        // Прибираємо animationDelay тут, щоб використовувати клас .loaded для анімації
        // card.style.animationDelay = `${index * 0.1}s`; 
        
        card.innerHTML = `
            <div style="position: relative;">
                <img src="${manga.image_url}" alt="${manga.title}" class="manga-image">
                <div class="manga-rating">⭐ ${manga.rating}</div>
            </div>
            <div class="manga-info">
                <h3 class="manga-title">${manga.title}</h3>
                <p class="manga-author">Автор: ${manga.author}</p>
                <p class="manga-description">${manga.description}</p>
                <div class="manga-meta">
                    <span class="genre-tag">${manga.genre}</span>
                    <span style="color: #666; font-size: 0.875rem;">${manga.volumes} томів</span>
                </div>
                <div class="manga-footer">
                    <span class="manga-price">${manga.price.toFixed(2)} ₴</span>
                    <button class="add-to-cart-btn" onclick="addToCart('${manga.id}')">
                        Додати 🛒
                    </button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);

        // Додаємо клас 'loaded' з невеликою затримкою для плавного появи кожної картки
        setTimeout(() => {
            card.classList.add('loaded');
        }, index * 100); // Затримка 100мс між картками
    });

    document.getElementById('manga-count').textContent = filteredManga.length;
}

// Filter manga by search term and genre
function filterManga() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedGenre = document.getElementById('genre-select').value;

    filteredManga = mangaData.filter(manga => {
        const matchesSearch = manga.title.toLowerCase().includes(searchTerm) ||
                                manga.author.toLowerCase().includes(searchTerm);
        const matchesGenre = selectedGenre === 'Всі' || manga.genre === selectedGenre;
        
        return matchesSearch && matchesGenre;
    });

    renderManga();
}

// Add item to cart
function addToCart(mangaId) {
    const manga = mangaData.find(m => m.id === mangaId);
    if (!manga) return;

    const existingItem = cart.find(item => item.id === mangaId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...manga,
            quantity: 1
        });
    }

    updateCartDisplay();
    
    // Add bounce animation to cart button
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.classList.add('cart-bounce');
    setTimeout(() => cartBtn.classList.remove('cart-bounce'), 600);
}

// Remove item from cart
function removeFromCart(mangaId) {
    cart = cart.filter(item => item.id !== mangaId);
    updateCartDisplay();
}

// Update quantity
function updateQuantity(mangaId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(mangaId);
        return;
    }

    const item = cart.find(item => item.id === mangaId);
    if (item) {
        item.quantity = newQuantity;
        updateCartDisplay();
    }
}

// Update cart display
function updateCartDisplay() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    document.getElementById('cart-count').textContent = cartCount;
    document.getElementById('cart-badge').textContent = cartCount;

    const cartContent = document.getElementById('cart-content');

    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Кошик порожній</p>
            </div>
        `;
    } else {
        cartContent.innerHTML = `
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image_url}" alt="${item.title}" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.title}</div>
                            <div class="cart-item-price">${item.price.toFixed(2)} ₴</div>
                        </div>
                        <div class="cart-item-controls">
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
                            <span>${item.quantity}</span>
                            <button class="quantity-btn plus" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            <button onclick="removeFromCart('${item.id}')" style="margin-left: 0.5rem; background: none; border: none; cursor: pointer;">🗑️</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">
                <span class="total-label">Загалом:</span>
                <span class="total-price">${cartTotal.toFixed(2)} ₴</span>
            </div>
            <button class="checkout-btn" onclick="checkout()">
                Оформити замовлення 🎌
            </button>
        `;
    }
}

// Toggle cart sidebar
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('visible');
}

// Checkout function
function checkout() {
    if (cart.length === 0) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Дякуємо за замовлення!\n\nЗагальна сума: ${total.toFixed(2)} ₴\n\nМи зв'яжемося з вами найближчим часом! 🌸`);
    
    // Clear cart
    cart = [];
    updateCartDisplay();
    toggleCart();
}

// animation
function revealSections() {
    const sectionsToReveal = [
        document.getElementById('hero-section'),
        document.getElementById('search-section'),
        document.getElementById('catalog-section'),
        document.getElementById('footer-section')
    ];

    sectionsToReveal.forEach((section, index) => {
        if (section) {
            setTimeout(() => {
                section.classList.remove('hidden');
                section.classList.add('visible');
            }, index * 200 + 100); // Затримка 200мс між секціями, плюс 100мс початкова затримка
        }
    });
}
// end animation

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);