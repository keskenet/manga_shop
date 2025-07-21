import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

// Sample manga data with the images from vision expert
const sampleManga = [
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

function App() {
  const [manga, setManga] = useState(sampleManga);
  const [cart, setCart] = useState([]);
  const [cartId] = useState(() => uuidv4());
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Всі');

  const genres = ['Всі', 'Пригоди', 'Драма', 'Комедія', 'Екшн', 'Супергерої', 'Містика'];

  // Filter manga based on search and genre
  const filteredManga = manga.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'Всі' || item.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  const addToCart = (mangaItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === mangaItem.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === mangaItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...mangaItem, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (mangaId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== mangaId));
  };

  const updateQuantity = (mangaId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(mangaId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === mangaId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-japanese-light to-white">
      {/* Header */}
      <header className="bg-white shadow-lg japanese-border relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl font-bold gradient-text font-japanese">
                🌸 Манга Магазин
              </h1>
              <span className="hidden md:block text-japanese-red font-medium">
                | Найкращі японські комікси
              </span>
            </div>
            
            <button
              onClick={() => setShowCart(!showCart)}
              className="relative bg-japanese-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 manga-shadow"
            >
              🛒 Кошик ({getTotalItems()})
              <span className="absolute -top-2 -right-2 bg-japanese-gold text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                {getTotalItems()}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-japanese-navy/80 to-japanese-red/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1519638399535-1b036603ac77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxhbmltZXxlbnwwfHx8fDE3NTMxMDExNTZ8MA&ixlib=rb-4.1.0&q=85)'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="animate-slideIn">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-japanese">
              Світ Манги
            </h2>
            <p className="text-xl text-japanese-cherry mb-8 max-w-2xl mx-auto">
              Відкрийте для себе найкращу колекцію японських коміксів. 
              Від класики до новинок - усе в одному місці!
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-white text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">✨ Швидка доставка</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">📚 Оригінальні видання</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">🎌 Японська якість</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/70">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Пошук манги..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border-2 border-japanese-gold rounded-lg focus:outline-none focus:border-japanese-red transition-colors w-64"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
            </div>
            
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="px-4 py-3 border-2 border-japanese-gold rounded-lg focus:outline-none focus:border-japanese-red transition-colors"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Manga Grid */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-japanese-navy mb-6 font-japanese">
              Каталог Манги ({filteredManga.length})
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredManga.map(mangaItem => (
                <div key={mangaItem.id} className="bg-white rounded-xl manga-shadow overflow-hidden transform hover:scale-105 transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={mangaItem.image_url} 
                      alt={mangaItem.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-japanese-gold text-white px-2 py-1 rounded-full text-sm font-medium">
                      ⭐ {mangaItem.rating}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-japanese-navy mb-2">{mangaItem.title}</h4>
                    <p className="text-gray-600 mb-2">Автор: {mangaItem.author}</p>
                    <p className="text-sm text-gray-500 mb-2 line-clamp-2">{mangaItem.description}</p>
                    
                    <div className="flex items-center gap-2 mb-3 text-sm">
                      <span className="bg-japanese-cherry px-2 py-1 rounded-full">{mangaItem.genre}</span>
                      <span className="text-gray-500">{mangaItem.volumes} томів</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-japanese-red">
                        {mangaItem.price.toFixed(2)} ₴
                      </span>
                      <button
                        onClick={() => addToCart(mangaItem)}
                        className="bg-japanese-red hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors transform hover:scale-105"
                      >
                        Додати 🛒
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          {showCart && (
            <div className="w-80 bg-white rounded-xl manga-shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-japanese-navy">Кошик</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-japanese-red"
                >
                  ✕
                </button>
              </div>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🛒</div>
                  <p className="text-gray-500">Кошик порожній</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <img 
                          src={item.image_url} 
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{item.title}</h4>
                          <p className="text-sm text-japanese-red font-medium">
                            {item.price.toFixed(2)} ₴
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-sm"
                          >
                            −
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 bg-japanese-red text-white rounded-full flex items-center justify-center text-sm"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-2 text-red-500 hover:text-red-700"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-bold">Загалом:</span>
                      <span className="text-2xl font-bold text-japanese-red">
                        {getTotalPrice().toFixed(2)} ₴
                      </span>
                    </div>
                    <button className="w-full bg-japanese-gold hover:bg-yellow-600 text-white py-3 rounded-lg font-medium transition-colors transform hover:scale-105">
                      Оформити замовлення 🎌
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-japanese-navy text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">🌸 Манга Магазин</h3>
          <p className="text-japanese-cherry mb-6">
            Ваш провідник у світі японської культури та коміксів
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <span>📧 info@mangashop.ua</span>
            <span>📞 +38 (067) 123-45-67</span>
            <span>🚚 Доставка по всій Україні</span>
          </div>
          <div className="mt-6 text-xs text-gray-400">
            © 2025 Манга Магазин. Усі права захищено.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;