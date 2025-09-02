const accessoriesData = [
    { id: '101', title: 'Фігурка Какаші', price: 999.99, description: 'Деталізована фігурка Какаші Хатаке з аніме "Наруто".', image_url: 'https://leva.com.ua/image/cache/catalog/0_brand/naruto/2240483_narutredis1-500x500.jpg', genre: 'Фігурка' },
    { id: '102', title: 'Брелок "Атака Титанів"', price: 149.99, description: 'Стильний металевий брелок із символікою Розвідувального корпусу.', image_url: 'https://content2.rozetka.com.ua/goods/images/big/388738035.jpg', genre: 'Брелок' },
    { id: '103', title: 'Футболка "Ван Піс"', price: 499.99, description: 'Бавовняна футболка з принтом прапора піратів Солом\'яного капелюха.', image_url: 'https://images.prom.ua/4931549448_w640_h320_futbolka-belaya-s.jpg', genre: 'Одяг' },
    { id: '104', title: 'Постер "Мій сусід Тоторо"', price: 199.99, description: 'Яскравий постер з улюбленим персонажем аніме.', image_url: 'https://shop-cdn1-2.vigbo.tech/shops/126035/products/21800636/images/3-42510f1a82729cf8664a49d338ce17c0.jpg', genre: 'Постер' },
    { id: '105', title: 'Кружка "Берсерк"', price: 249.99, description: 'Керамічна кружка з логотипом аніме.', image_url: 'https://content2.rozetka.com.ua/goods/images/big/304563425.jpg', genre: 'Кухонне приладдя' },
    { id: '106', title: 'Косплей-костюм Наруто', price: 1499.99, description: 'Повний костюм для косплею, включає куртку та пов\'язку.', image_url: 'https://images.prom.ua/4286779960_w640_h320_odezhda-naruto-cosplay.jpg', genre: 'Костюм' },
    { id: '107', title: 'Набір значків', price: 129.99, description: 'Комплект із 5 значків з різними аніме-персонажами.', image_url: 'https://content.rozetka.com.ua/goods/images/big/491258602.jpg', genre: 'Значки' },
    { id: '108', title: 'Комплект аніме-карток', price: 89.99, description: 'Набір із 20 колекційних карток з аніме-героями.', image_url: 'https://images.prom.ua/5304743110_w640_h320_kollektsionnye-kartochki-anime.jpg', genre: 'Колекційні картки' }
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