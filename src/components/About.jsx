const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Zap Thoung</h1>
          <p className="text-xl text-gray-600">Your Trusted Family Chinese Restaurant</p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-lg leading-relaxed">
                  Welcome to <strong className="text-red-600">Zap Thoung</strong>, a family-friendly Chinese restaurant 
                  dedicated to bringing you the most authentic and delicious halal Chinese cuisine in Islamabad.
                </p>
                <p className="text-lg leading-relaxed">
                  We are passionate about serving fresh, high-quality halal food that brings families together. 
                  Our commitment to excellence means we use only the finest ingredients, prepared with traditional 
                  Chinese cooking techniques, ensuring every dish is bursting with flavor and authenticity.
                </p>
                <p className="text-lg leading-relaxed">
                  At Zap Thoung, we believe that great food should be accessible to everyone. That's why we've created 
                  a warm, welcoming environment where families can gather, share meals, and create lasting memories. 
                  Whether you're dining in, taking away, or having your meal delivered, we ensure the same quality and 
                  care in every order.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-red-600">
                  Your satisfaction is our mission, and your trust is our greatest reward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Halal Food */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🕌</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Halal Food</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to serving only halal-certified ingredients. Every dish is prepared 
                following strict halal guidelines, giving you peace of mind with every bite.
              </p>
            </div>

            {/* Vegetarian Options */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">🥬</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vegetarian Options</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer a wide variety of delicious vegetarian dishes made with fresh vegetables 
                and authentic Chinese flavors. Everyone can find something to enjoy at our restaurant.
              </p>
            </div>

            {/* Family-Friendly */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Family-Friendly Environment</h3>
              <p className="text-gray-600 leading-relaxed">
                Our restaurant is designed to welcome families of all sizes. We provide a comfortable, 
                safe, and enjoyable dining experience for guests of all ages.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Highlights */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🍽️</div>
                <h4 className="font-semibold text-gray-800 mb-2">Fresh Ingredients</h4>
                <p className="text-sm text-gray-600">Daily fresh produce</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">👨‍🍳</div>
                <h4 className="font-semibold text-gray-800 mb-2">Expert Chefs</h4>
                <p className="text-sm text-gray-600">Traditional Chinese cooking</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-semibold text-gray-800 mb-2">Quick Service</h4>
                <p className="text-sm text-gray-600">Fast and efficient</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="font-semibold text-gray-800 mb-2">Quality Assured</h4>
                <p className="text-sm text-gray-600">Consistent excellence</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Visit Us</h2>
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">📍</div>
                <div className="space-y-2">
                  <p className="text-xl font-semibold text-gray-800">
                    Liaquat Ave, Phase 1 Jinnah Garden
                  </p>
                  <p className="text-lg text-gray-600">Islamabad, Pakistan</p>
                  <p className="text-md text-gray-500 mt-4">
                    Plus Code: <span className="font-mono font-semibold">H5CG+HC</span>
                  </p>
                </div>
              </div>
              
              {/* Map Embed */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5!2d73.1760713!3d33.5714329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeddf80632c7d%3A0x189a4a751e378cea!2sZap%20thoung%20Chinese%20food!5e0!3m2!1sen!2s!4v1734567890123!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a
                  href="https://www.google.com/maps/place/Zap+thoung+Chinese+food/@33.5714303,73.176171,17z/data=!4m15!1m8!3m7!1s0x38dfeddf80632c7d:0x189a4a751e378cea!2sZap+thoung+Chinese+food!8m2!3d33.5714329!4d73.1760713!10e1!16s%2Fg%2F11mlcmvhd2!3m5!1s0x38dfeddf80632c7d:0x189a4a751e378cea!8m2!3d33.5714329!4d73.1760713!16s%2Fg%2F11mlcmvhd2?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>📍</span> Get Directions
                </a>
                <a
                  href="tel:+923198377511"
                  className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                >
                  <span>📞</span> Call Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">We're Here to Serve You</h3>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>Halal Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>Family Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✅</span>
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
