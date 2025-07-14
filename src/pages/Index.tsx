import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<number[]>([]);

  const categories = [
    { name: 'Одежда', icon: 'Shirt', color: 'bg-coral' },
    { name: 'Электроника', icon: 'Smartphone', color: 'bg-blue' },
    { name: 'Продукты', icon: 'Apple', color: 'bg-mint' },
    { name: 'Книги', icon: 'BookOpen', color: 'bg-coral' },
    { name: 'Дом', icon: 'Home', color: 'bg-blue' },
    { name: 'Спорт', icon: 'Dumbbell', color: 'bg-mint' }
  ];

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: 89990,
      oldPrice: 99990,
      image: '/img/ea2a0733-f6d4-404c-990f-4e6065ba42c4.jpg',
      category: 'Электроника',
      rating: 4.8,
      reviews: 1250,
      inStock: true
    },
    {
      id: 2,
      name: 'Стильная куртка',
      price: 4990,
      oldPrice: 7990,
      image: '/img/15cc1f27-899d-46c7-8793-fd757e162bfe.jpg',
      category: 'Одежда',
      rating: 4.6,
      reviews: 340,
      inStock: true
    },
    {
      id: 3,
      name: 'MacBook Pro',
      price: 199990,
      oldPrice: 219990,
      image: '/img/aa44e9f8-43fd-4842-a758-c56ecc4675df.jpg',
      category: 'Электроника',
      rating: 4.9,
      reviews: 890,
      inStock: true
    },
    {
      id: 4,
      name: 'Беспроводные наушники',
      price: 12990,
      oldPrice: 15990,
      image: '/img/ea2a0733-f6d4-404c-990f-4e6065ba42c4.jpg',
      category: 'Электроника',
      rating: 4.7,
      reviews: 567,
      inStock: false
    },
    {
      id: 5,
      name: 'Спортивные кроссовки',
      price: 8990,
      oldPrice: 12990,
      image: '/img/15cc1f27-899d-46c7-8793-fd757e162bfe.jpg',
      category: 'Одежда',
      rating: 4.5,
      reviews: 234,
      inStock: true
    },
    {
      id: 6,
      name: 'Умные часы',
      price: 24990,
      oldPrice: 29990,
      image: '/img/aa44e9f8-43fd-4842-a758-c56ecc4675df.jpg',
      category: 'Электроника',
      rating: 4.8,
      reviews: 445,
      inStock: true
    }
  ];

  const toggleCart = (id: number) => {
    setCartItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const toggleFavorite = (id: number) => {
    setFavoriteItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
                MarketPlace
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-coral transition-colors">Главная</a>
                <a href="#" className="text-gray-600 hover:text-coral transition-colors">Каталог</a>
                <a href="#" className="text-gray-600 hover:text-coral transition-colors">Акции</a>
                <a href="#" className="text-gray-600 hover:text-coral transition-colors">Контакты</a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Button variant="outline" size="icon" className="relative">
                <Icon name="Heart" size={20} />
                {favoriteItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-coral text-white text-xs">
                    {favoriteItems.length}
                  </Badge>
                )}
              </Button>
              
              <Button variant="outline" size="icon" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartItems.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-coral text-white text-xs">
                    {cartItems.length}
                  </Badge>
                )}
              </Button>
              
              <Button variant="outline" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-coral to-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in" style={{ fontFamily: 'Montserrat' }}>
            Найди всё что нужно
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in" style={{ fontFamily: 'Open Sans' }}>
            Миллионы товаров по лучшим ценам с быстрой доставкой
          </p>
          <Button size="lg" className="bg-white text-coral hover:bg-gray-100 animate-scale-in">
            Начать покупки
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: 'Montserrat' }}>
            Категории
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={category.icon as any} className="text-white" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900" style={{ fontFamily: 'Open Sans' }}>
                    {category.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
              Популярные товары
            </h3>
            <Button variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white">
              Посмотреть все
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-4 right-4 ${favoriteItems.includes(product.id) ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Icon name="Heart" size={20} />
                  </Button>
                  {!product.inStock && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-gray-500 text-white">
                        Нет в наличии
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                      <span className="text-sm text-gray-400">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Open Sans' }}>
                    {product.name}
                  </h4>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {formatPrice(product.price)} ₽
                      </span>
                      {product.oldPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.oldPrice)} ₽
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full mt-4 ${cartItems.includes(product.id) ? 'bg-mint hover:bg-mint/90' : 'bg-coral hover:bg-coral/90'} text-white`}
                    onClick={() => toggleCart(product.id)}
                    disabled={!product.inStock}
                  >
                    {cartItems.includes(product.id) ? 'В корзине' : 'В корзину'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>MarketPlace</h5>
              <p className="text-gray-300 text-sm" style={{ fontFamily: 'Open Sans' }}>
                Ваш надежный интернет-магазин с широким ассортиментом товаров и быстрой доставкой.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>Покупателям</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-coral transition-colors">Как сделать заказ</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Возврат товара</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Гарантия</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>Компания</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-coral transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-coral transition-colors">Партнеры</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4" style={{ fontFamily: 'Montserrat' }}>Контакты</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <p>8 (800) 555-0123</p>
                <p>support@marketplace.ru</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 MarketPlace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;