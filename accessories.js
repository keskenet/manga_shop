const accessoriesData = [
    { id: '101', title: 'Фігурка Какаші', price: 999.99, description: 'Деталізована фігурка Какаші Хатаке з аніме "Наруто".', image_url: 'https://images.unsplash.com/photo-1629815049339-38374181966a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Фігурка' },
    { id: '102', title: 'Брелок "Атака Титанів"', price: 149.99, description: 'Стильний металевий брелок із символікою Розвідувального корпусу.', image_url: 'https://images.unsplash.com/photo-1634731034458-13d5268c2f82?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Брелок' },
    { id: '103', title: 'Футболка "Ван Піс"', price: 499.99, description: 'Бавовняна футболка з принтом прапора піратів Солом\'яного капелюха.', image_url: 'https://images.unsplash.com/photo-1628173426189-e58f000b953d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Одяг' },
    { id: '104', title: 'Постер "Мій сусід Тоторо"', price: 199.99, description: 'Яскравий постер з улюбленим персонажем аніме.', image_url: 'https://images.unsplash.com/photo-1616056588898-d1f1f1d1f1f1?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Постер' },
    { id: '105', title: 'Кружка "Берсерк"', price: 249.99, description: 'Керамічна кружка з логотипом аніме.', image_url: 'https://images.unsplash.com/photo-1613076161989-106511b06f52?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Кухонне приладдя' },
    { id: '106', title: 'Косплей-костюм Наруто', price: 1499.99, description: 'Повний костюм для косплею, включає куртку та пов\'язку.', image_url: 'https://images.unsplash.com/photo-1622329324546-24d45d3c8c76?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Костюм' },
    { id: '107', title: 'Набір значків', price: 129.99, description: 'Комплект із 5 значків з різними аніме-персонажами.', image_url: 'https://images.unsplash.com/photo-1616056588898-d1f1f1d1f1f1?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Значки' },
    { id: '108', title: 'Комплект аніме-карток', price: 89.99, description: 'Набір із 20 колекційних карток з аніме-героями.', image_url: 'https://images.unsplash.com/photo-1616056588898-d1f1f1d1f1f1?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', genre: 'Колекційні картки' }
];

function initAccessoriesPage() {
    const accessoriesGrid = document.getElementById('accessories-grid');
    const accessoriesSearch = document.getElementById('accessories-search');
    const sortByAccessories = document.getElementById('sort-by-accessories');

    if (!accessoriesGrid) return;

    const renderAccessories = (items) => {
        accessoriesGrid.innerHTML = '';
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'product-card'; // Unified class
            card.innerHTML = `
                <img src="${item.image_url}" alt="${item.title}" class="product-image">
                <div class="card-content">
                    <h3 class="card-title">${item.title}</h3>
                    <p class="card-detail">${item.description}</p>
                    <p class="card-price">${item.price.toFixed(2)} ₴</p>
                    <button class="add-to-cart-btn" data-id="${item.id}">Додати в кошик</button>
                </div>
            `;
            accessoriesGrid.appendChild(card);
        });
    };

    const filterAndSortAccessories = () => {
        const query = accessoriesSearch.value.toLowerCase();
        const sortValue = sortByAccessories.value;

        let filtered = accessoriesData.filter(accessory =>
            accessory.title.toLowerCase().includes(query) ||
            accessory.description.toLowerCase().includes(query)
        );

        if (sortValue === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        renderAccessories(filtered);
    };

    accessoriesGrid.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            const id = btn.dataset.id;
            const product = accessoriesData.find(item => item.id === id);
            if (product && typeof addToCart === 'function') {
                addToCart(product);
                // Відкриваємо кошик, але НЕ ховаємо його автоматично
                if (typeof window.openCart === 'function') {
                    window.openCart();
                }
                // Видалено автоматичне закривання
            }
        }
    });

    accessoriesSearch.addEventListener('input', filterAndSortAccessories);
    sortByAccessories.addEventListener('change', filterAndSortAccessories);
    
    filterAndSortAccessories();
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('accessories-grid')) {
        initAccessoriesPage();
    }
});