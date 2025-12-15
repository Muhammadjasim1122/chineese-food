import { useState } from 'react';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuData = {
    starters: [
      {
        name: 'Spring Rolls',
        description: 'Crispy vegetable spring rolls served with sweet and sour sauce',
        price: 'Rs. 350'
      },
      {
        name: 'Chicken Wings',
        description: 'Spicy fried chicken wings with special Chinese seasoning',
        price: 'Rs. 450'
      },
      {
        name: 'Crab Rangoon',
        description: 'Creamy crab and cream cheese filled wontons, deep fried',
        price: 'Rs. 400'
      },
      {
        name: 'Chicken Corn Soup',
        description: 'Traditional Chinese soup with chicken, corn, and egg',
        price: 'Rs. 380'
      },
      {
        name: 'Hot & Sour Soup',
        description: 'Spicy and tangy soup with vegetables and tofu',
        price: 'Rs. 350'
      }
    ],
    rice: [
      {
        name: 'Chicken Fried Rice',
        description: 'Stir-fried rice with tender chicken pieces and vegetables',
        price: 'Rs. 550'
      },
      {
        name: 'Beef Fried Rice',
        description: 'Classic fried rice with marinated beef and mixed vegetables',
        price: 'Rs. 650'
      },
      {
        name: 'Shrimp Fried Rice',
        description: 'Delicious fried rice with fresh shrimp and vegetables',
        price: 'Rs. 700'
      },
      {
        name: 'Vegetable Fried Rice',
        description: 'Healthy fried rice with assorted fresh vegetables',
        price: 'Rs. 450'
      },
      {
        name: 'Egg Fried Rice',
        description: 'Simple and flavorful fried rice with scrambled eggs',
        price: 'Rs. 400'
      },
      {
        name: 'Special Fried Rice',
        description: 'Our signature fried rice with chicken, beef, and shrimp',
        price: 'Rs. 850'
      }
    ],
    noodles: [
      {
        name: 'Chicken Chow Mein',
        description: 'Stir-fried noodles with chicken and vegetables',
        price: 'Rs. 600'
      },
      {
        name: 'Beef Lo Mein',
        description: 'Soft noodles tossed with beef and savory sauce',
        price: 'Rs. 700'
      },
      {
        name: 'Singapore Noodles',
        description: 'Curry-flavored rice noodles with vegetables and choice of protein',
        price: 'Rs. 650'
      },
      {
        name: 'Pad Thai',
        description: 'Thai-style stir-fried noodles with tamarind sauce',
        price: 'Rs. 650'
      },
      {
        name: 'Vegetable Hakka Noodles',
        description: 'Spicy noodles with mixed vegetables',
        price: 'Rs. 500'
      },
      {
        name: 'Seafood Noodles',
        description: 'Noodles with shrimp, squid, and fish in special sauce',
        price: 'Rs. 800'
      }
    ],
    chicken: [
      {
        name: 'Sweet & Sour Chicken',
        description: 'Crispy chicken pieces in tangy sweet and sour sauce',
        price: 'Rs. 750'
      },
      {
        name: 'Kung Pao Chicken',
        description: 'Spicy stir-fried chicken with peanuts and vegetables',
        price: 'Rs. 800'
      },
      {
        name: 'General Tso\'s Chicken',
        description: 'Crispy chicken in sweet and spicy sauce',
        price: 'Rs. 850'
      },
      {
        name: 'Orange Chicken',
        description: 'Battered chicken in orange-flavored sauce',
        price: 'Rs. 800'
      },
      {
        name: 'Lemon Chicken',
        description: 'Tender chicken with lemon sauce and vegetables',
        price: 'Rs. 750'
      },
      {
        name: 'Szechuan Chicken',
        description: 'Spicy Szechuan-style chicken with vegetables',
        price: 'Rs. 800'
      },
      {
        name: 'Honey Chicken',
        description: 'Crispy chicken glazed with honey sauce',
        price: 'Rs. 750'
      }
    ],
    beef: [
      {
        name: 'Beef with Broccoli',
        description: 'Tender beef stir-fried with fresh broccoli',
        price: 'Rs. 900'
      },
      {
        name: 'Mongolian Beef',
        description: 'Sliced beef in savory Mongolian sauce',
        price: 'Rs. 950'
      },
      {
        name: 'Beef in Black Bean Sauce',
        description: 'Beef cooked in fermented black bean sauce',
        price: 'Rs. 900'
      },
      {
        name: 'Szechuan Beef',
        description: 'Spicy beef with Szechuan peppers and vegetables',
        price: 'Rs. 950'
      },
      {
        name: 'Beef with Mushrooms',
        description: 'Tender beef with assorted mushrooms',
        price: 'Rs. 900'
      },
      {
        name: 'Pepper Steak',
        description: 'Beef strips with bell peppers in savory sauce',
        price: 'Rs. 900'
      }
    ],
    vegetarian: [
      {
        name: 'Vegetable Stir Fry',
        description: 'Mixed fresh vegetables in light sauce',
        price: 'Rs. 500'
      },
      {
        name: 'Mapo Tofu',
        description: 'Spicy Sichuan tofu with vegetables',
        price: 'Rs. 550'
      },
      {
        name: 'Buddha\'s Delight',
        description: 'Assorted vegetables and tofu in vegetarian sauce',
        price: 'Rs. 600'
      },
      {
        name: 'Sweet & Sour Vegetables',
        description: 'Mixed vegetables in sweet and sour sauce',
        price: 'Rs. 500'
      },
      {
        name: 'Vegetable Spring Rolls',
        description: 'Crispy vegetable rolls with dipping sauce',
        price: 'Rs. 400'
      },
      {
        name: 'Garlic Broccoli',
        description: 'Fresh broccoli stir-fried with garlic',
        price: 'Rs. 450'
      }
    ],
    happyHour: [
      {
        name: 'Combo Deal #1',
        description: 'Chicken Fried Rice + Sweet & Sour Chicken + 2 Spring Rolls',
        price: 'Rs. 1,200',
        originalPrice: 'Rs. 1,550'
      },
      {
        name: 'Combo Deal #2',
        description: 'Beef Fried Rice + Mongolian Beef + Soup',
        price: 'Rs. 1,500',
        originalPrice: 'Rs. 1,900'
      },
      {
        name: 'Family Pack',
        description: '2 Rice + 2 Noodles + 2 Chicken Dishes + 4 Spring Rolls',
        price: 'Rs. 3,500',
        originalPrice: 'Rs. 4,500'
      },
      {
        name: 'Happy Hour Special',
        description: 'Any 2 items + 1 Soup (4:00 PM - 6:00 PM only)',
        price: 'Rs. 1,000',
        originalPrice: 'Rs. 1,300'
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'starters', name: 'Starters' },
    { id: 'rice', name: 'Rice' },
    { id: 'noodles', name: 'Noodles' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'beef', name: 'Beef' },
    { id: 'vegetarian', name: 'Vegetarian' },
    { id: 'happyHour', name: 'Happy Hour Deals' }
  ];

  const renderMenuItems = (items, isHappyHour = false) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              {isHappyHour && item.originalPrice && (
                <span className="text-sm text-gray-400 line-through ml-2">
                  {item.originalPrice}
                </span>
              )}
            </div>
            <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className={`text-lg font-bold ${isHappyHour ? 'text-red-600' : 'text-gray-800'}`}>
                {item.price}
              </span>
              {isHappyHour && (
                <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                  DEAL
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return {
        starters: menuData.starters,
        rice: menuData.rice,
        noodles: menuData.noodles,
        chicken: menuData.chicken,
        beef: menuData.beef,
        vegetarian: menuData.vegetarian,
        happyHour: menuData.happyHour
      };
    }
    return { [selectedCategory]: menuData[selectedCategory] };
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Menu</h1>
          <p className="text-gray-600 text-lg">Delicious Halal Chinese Food</p>
          
          {/* PDF Download Button */}
          <div className="mt-6">
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto">
              <span>📄</span> Download PDF Menu (Coming Soon)
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-red-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-12">
          {selectedCategory === 'all' ? (
            <>
              {/* Starters */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span>🥢</span> Starters
                </h2>
                {renderMenuItems(menuData.starters)}
              </section>

              {/* Rice */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span>🍚</span> Rice
                </h2>
                {renderMenuItems(menuData.rice)}
              </section>

              {/* Noodles */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span>🍜</span> Noodles
                </h2>
                {renderMenuItems(menuData.noodles)}
              </section>

              {/* Chicken */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span>🍗</span> Chicken
                </h2>
                {renderMenuItems(menuData.chicken)}
              </section>

              {/* Beef */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span>🥩</span> Beef
                </h2>
                {renderMenuItems(menuData.beef)}
              </section>

              {/* Vegetarian */}
              <section>
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <span>🥬</span> Vegetarian
                </h2>
                {renderMenuItems(menuData.vegetarian)}
              </section>

              {/* Happy Hour Deals */}
              <section className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                    <span>🎉</span> Happy Hour Deals
                  </h2>
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    4:00 PM - 6:00 PM
                  </span>
                </div>
                {renderMenuItems(menuData.happyHour, true)}
              </section>
            </>
          ) : (
            <>
              {selectedCategory === 'happyHour' ? (
                <section className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                      <span>🎉</span> Happy Hour Deals
                    </h2>
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      4:00 PM - 6:00 PM
                    </span>
                  </div>
                  {renderMenuItems(menuData.happyHour, true)}
                </section>
              ) : (
                <section>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    {categories.find(cat => cat.id === selectedCategory)?.name}
                  </h2>
                  {renderMenuItems(filteredItems[selectedCategory])}
                </section>
              )}
            </>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-red-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
          <p className="mb-6 text-lg">Call us now or order via WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+923198377511"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/923198377511"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
