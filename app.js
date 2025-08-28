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
        title: 'Зошит Смерті',
        author: 'Цугумі Оба',
        price: 279.99,
        description: 'Психологічний трилер про школяра, який знаходить зошит, що вбиває людей.',
        image_url: 'https://images.unsplash.com/photo-1620958100067-c0e782e4e1a0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxEZWF0aCUyME5vdGV8ZW58MHx8fHwxNzUzMDM3NDAwfDA&ixlib=rb-4.1.0&q=85',
        genre: 'Детектив',
        volumes: 12,
        rating: 4.7
    },
    {
        id: '4',
        title: 'Клинок, що знищує демонів',
        author: 'Койохару Готоге',
        price: 319.99,
        description: 'Пригодницька фентезі про мисливця на демонів, який шукає ліки для своєї сестри.',
        image_url: 'https://images.unsplash.com/photo-1634027771741-f050f523c960?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxEZW1vbiUyMFNsYXllcnxlbnwwfHx8fDE3NTMwMzczNTR8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Фентезі',
        volumes: 23,
        rating: 4.9
    },
    {
        id: '5',
        title: 'Берсерк',
        author: 'Кентаро Міура',
        price: 499.99,
        description: 'Похмуре фентезі про воїна-одинака на ім\'я Гатс.',
        image_url: 'https://images.unsplash.com/photo-1639800936359-009121a9a838?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxCZXJzZXJrfGVufDB8fHx8MTc1MzA1NjcwOXww&ixlib=rb-4.1.0&q=85',
        genre: 'Дарк Фентезі',
        volumes: 41,
        rating: 5.0
    },
    {
        id: '6',
        title: 'Ван Піс',
        author: 'Ейічіро Ода',
        price: 289.99,
        description: 'Пригоди піратської команди у пошуках легендарного скарбу.',
        image_url: 'https://images.unsplash.com/photo-1601618335345-d8edb2f29910?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxPbmUlMjBQaWVjZXxlbnwwfHx8fDE3NTMwNTY3MDl8MA&ixlib=rb-4.1.0&q=85',
        genre: 'Пригоди',
        volumes: 108,
        rating: 4.8
    },
    {
        id: '7',
        title: 'Сейлор Мун',
        author: 'Наоко Такеучі',
        price: 259.99,
        description: 'Історія про дівчинку, яка стає чарівною воїтелькою для захисту Землі.',
        image_url: 'https://images.unsplash.com/photo-1623992215904-8b63e528b146?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxTYWlsb3IlMjBNb29ufGVufDB8fHx8MTc1MzA1Njk0M3ww&ixlib=rb-4.1.0&q=85',
        genre: 'Махо-сьодзьо',
        volumes: 18,
        rating: 4.5
    },
    {
        id: '8',
        title: 'Хеллсинг',
        author: 'Кота Хірано',
        price: 329.99,
        description: 'Окультний бойовик про організацію, що бореться з надприродними загрозами.',
        image_url: 'https://images.unsplash.com/photo-1639726880053-a1f9a0c0a52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxIZWxsc2luZ3xlbnwwfHx8fDE3NTMwNTY5NDN8MA&ixlib-rb-4.1.0&q=85',
        genre: 'Жахи',
        volumes: 10,
        rating: 4.7
    },
    {
        id: '9',
        title: 'Жожо',
        author: 'Хірохіко Аракі',
        price: 369.99,
        description: 'Серія про пригоди різних поколінь родини Джостарів, що борються зі злом.',
        image_url: 'https://images.unsplash.com/photo-1639999665511-b2866f571b04?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxqbydqaW8lMjBiYmN8ZW58MHx8fHwxNzU0MDYzMTc5fDA&ixlib-rb-4.1.0&q=85',
        genre: 'Пригоди',
        volumes: 131,
        rating: 4.9
    }
];

// --- Shared cart logic and other functionality ---

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartSidebar = document.getElementById('cart-sidebar');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');

const updateCartCount = () => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
};

const getCart = () => cart;
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
};

const renderCart = () => {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="cart-empty-message">Кошик порожній 😔</p>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.classList.add('cart-item');
            li.innerHTML = `
                <img src="${item.image_url}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.title}</span>
                    <span class="cart-item-price">${item.price.toFixed(2)} ₴</span>
                </div>
                <div class="cart-item-actions">
                    <button class="cart-item-quantity-btn" data-id="${item.id}" data-action="decrease">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="cart-item-quantity-btn" data-id="${item.id}" data-action="increase">+</button>
                    <button class="cart-item-remove-btn" data-id="${item.id}">&times;</button>
                </div>
            `;
            cartItemsContainer.appendChild(li);
            total += item.price * item.quantity;
        });
    }

    cartTotalPrice.textContent = total.toFixed(2);
    updateCartCount();
};

const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    renderCart();
    // відкрити кошик але не ховати його
    if (typeof window.openCart === 'function') window.openCart();
};

const updateQuantity = (id, newQuantity) => {
    const item = cart.find(item => item.id === id);
    if (item) {
        if (newQuantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        } else {
            item.quantity = newQuantity;
        }
    }
    saveCart();
    renderCart();
};

// --- Checkout Modal Logic ---
const modal = document.getElementById('checkout-modal');
const modalFormContainer = document.getElementById('modal-form-container');
const modalConfirmation = document.getElementById('modal-confirmation');
const modalOrderSummaryContainer = document.getElementById('modal-order-summary');
const modalTotalPrice = document.getElementById('modal-total-price');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCloseAfterBtn = document.getElementById('modal-close-after-btn');
const originalFormParent = () => document.querySelector('.cart-checkout-form') || null;

const moveFormToModal = () => {
    const form = document.getElementById('checkout-form');
    if (!form || !modalFormContainer) return;
    modalFormContainer.appendChild(form);
};

const moveFormBack = () => {
    const form = document.getElementById('checkout-form');
    const origParent = originalFormParent();
    if (!form || !origParent) return;
    origParent.appendChild(form);
};

const renderModalOrderSummary = () => {
    if (!modalOrderSummaryContainer || !modalTotalPrice) return;

    modalOrderSummaryContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        modalOrderSummaryContainer.innerHTML = '<p>Немає товарів для замовлення.</p>';
    } else {
        cart.forEach(item => {
            const summaryItem = document.createElement('div');
            summaryItem.className = 'summary-item';
            summaryItem.innerHTML = `
                <img src="${item.image_url}" alt="${item.title}" class="summary-item-image">
                <div class="summary-item-info">
                    <div class="summary-item-title">${item.title}</div>
                    <div class="summary-item-details">Кількість: ${item.quantity}</div>
                </div>
                <div class="summary-item-price">${(item.price * item.quantity).toFixed(2)} ₴</div>
            `;
            modalOrderSummaryContainer.appendChild(summaryItem);
            total += item.price * item.quantity;
        });
    }

    modalTotalPrice.textContent = `${total.toFixed(2)} ₴`;
};

const showCheckoutForm = () => {
    if (cart.length === 0) {
        alert('Ваш кошик порожній!');
        return;
    }
    
    if (modalConfirmation) {
        modalConfirmation.classList.remove('active');
        modalConfirmation.setAttribute('aria-hidden', 'true');
    }
    if (modal.querySelector('.modal-body')) {
        modal.querySelector('.modal-body').style.display = 'flex';
    }
    
    renderModalOrderSummary();
    moveFormToModal();
    
    if (modal) {
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }
};

const hideCheckoutForm = () => {
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
    moveFormBack();
};

const confirmOrder = () => {
    const form = document.getElementById('checkout-form');
    if (form && form.checkValidity()) {
        if (modal.querySelector('.modal-body')) {
            modal.querySelector('.modal-body').style.display = 'none';
        }
        if (modalConfirmation) {
            modalConfirmation.classList.add('active');
            modalConfirmation.setAttribute('aria-hidden', 'false');
        }
        
        cart = [];
        saveCart();
        renderCart();
        
        setTimeout(moveFormBack, 500);

        setTimeout(() => {
            if (modal && modal.classList.contains('active')) {
                hideCheckoutForm();
            }
        }, 3500);
    } else {
        if (form) form.reportValidity();
    }
};

// Replace toggle-only behavior with explicit open/close and expose for other modules
const openCart = () => {
	// гарантуємо, що кошик відкритий
	if (cartSidebar && !cartSidebar.classList.contains('active')) {
		cartSidebar.classList.add('active');
	}
};
const closeCart = () => {
	if (cartSidebar && cartSidebar.classList.contains('active')) {
		cartSidebar.classList.remove('active');
		// При закритті повертаємо форму в стандартний стан
		hideCheckoutForm();
	}
};
// Для сумісності з існуючими місцями залишаємо toggle
const toggleCartSidebar = () => {
	if (!cartSidebar) return;
	cartSidebar.classList.toggle('active');
	if (!cartSidebar.classList.contains('active')) {
		hideCheckoutForm();
	}
};

// Робимо доступним глобально (accessories.js може викликати)
window.openCart = openCart;
window.closeCart = closeCart;
window.toggleCartSidebar = toggleCartSidebar;

function initListeners() {
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const cartCloseBtn = document.querySelector('.cart-close-btn');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const checkoutForm = document.getElementById('checkout-form');

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', toggleCartSidebar);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', toggleCartSidebar);

	// Theme toggle button listener (може бути відсутній на деяких сторінках)
	if (themeToggleBtn) {
		themeToggleBtn.addEventListener('click', toggleTheme);
	}

    if (cartSidebar) {
        cartSidebar.addEventListener('click', (e) => {
            const btn = e.target.closest('button');
            if (!btn) return;

            const id = btn.dataset.id;
            const action = btn.dataset.action;

            if (btn.classList.contains('cart-item-remove-btn')) {
                cart = cart.filter(item => item.id !== id);
                saveCart();
                renderCart();
            } else if (action === 'increase') {
                const item = getCart().find(item => item.id === id);
                if (item) updateQuantity(id, item.quantity + 1);
            } else if (action === 'decrease') {
                const item = getCart().find(item => item.id === id);
                if (item) updateQuantity(id, item.quantity - 1);
            } else if (btn.classList.contains('checkout-btn')) {
                showCheckoutForm();
            }
        });
    }

    document.body.addEventListener('change', (e) => {
        if (e.target.matches('.payment-options input[type="radio"]')) {
            document.querySelectorAll('.payment-options label').forEach(label => label.classList.remove('selected'));
            e.target.closest('label').classList.add('selected');
        }
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', hideCheckoutForm);
    if (modalCloseAfterBtn) modalCloseAfterBtn.addEventListener('click', hideCheckoutForm);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.matches('[data-modal-close]')) {
                hideCheckoutForm();
            }
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            hideCheckoutForm();
        }
    });

    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            confirmOrder();
        });
    }

    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 50);
        }
        if (scrollToTopBtn) {
            scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
        }
    });

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(element => observer.observe(element));
}

function initMangaPage() {
    const mangaGrid = document.getElementById('manga-grid');
    if (!mangaGrid) return;

    const catalogSearch = document.getElementById('catalog-search');
    const sortBy = document.getElementById('sort-by');

    const renderManga = (mangaItems) => {
        mangaGrid.innerHTML = '';
        mangaItems.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${item.image_url}" alt="${item.title}" class="product-image">
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-detail">${item.author}</p>
                    <p class="card-price">${item.price.toFixed(2)} ₴</p>
                    <button class="add-to-cart-btn" data-id="${item.id}">Додати в кошик</button>
                </div>
            `;
            mangaGrid.appendChild(card);
        });
    };

    const filterAndSortManga = () => {
        const query = catalogSearch.value.toLowerCase();
        const sortValue = sortBy.value;

        let filtered = mangaData.filter(manga => 
            manga.title.toLowerCase().includes(query) ||
            manga.author.toLowerCase().includes(query)
        );

        if (sortValue === 'price-asc') filtered.sort((a, b) => a.price - b.price);
        if (sortValue === 'price-desc') filtered.sort((a, b) => b.price - a.price);

        renderManga(filtered);
    };
    
    mangaGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            const id = btn.dataset.id;
            const product = mangaData.find(item => item.id === id);
            if (product) {
                // addToCart вже відкриває кошик (window.openCart), тому не ховаємо його тут
                addToCart(product);
            }
        }
    });

    catalogSearch.addEventListener('input', filterAndSortManga);
    sortBy.addEventListener('change', filterAndSortManga);

    filterAndSortManga();
}

// --- Theme (light/dark) logic ---
const themeToggleBtn = document.getElementById('theme-toggle-btn');

const applyTheme = (theme) => {
	if (theme === 'dark') {
		document.documentElement.setAttribute('data-theme', 'dark');
		if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
	} else {
		document.documentElement.removeAttribute('data-theme');
		if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
	}
	localStorage.setItem('theme', theme === 'dark' ? 'dark' : 'light');
};

const toggleTheme = () => {
	const current = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
	const next = current === 'dark' ? 'light' : 'dark';
	applyTheme(next);
};
window.toggleTheme = toggleTheme;

document.addEventListener('DOMContentLoaded', () => {
    // Застосувати збережену тему одразу
    const savedTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    applyTheme(savedTheme);

    initListeners();
    initAnimations();
    renderCart();
    initMangaPage();
});