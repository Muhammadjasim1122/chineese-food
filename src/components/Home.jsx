import heroBanner from '../assets/images/herobanner.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBanner})`,
          minHeight: '450px'
        }}
      >
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">Zap Thoung</h1>
            <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Delicious Halal Chinese Food in Islamabad</p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923198377511"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>📞</span> Call Now
              </a>
              <a
                href="https://www.google.com/maps/place/Zap+thoung+Chinese+food/@33.5714303,73.176171,17z/data=!4m15!1m8!3m7!1s0x38dfeddf80632c7d:0x189a4a751e378cea!2sZap+thoung+Chinese+food!8m2!3d33.5714329!4d73.1760713!10e1!16s%2Fg%2F11mlcmvhd2!3m5!1s0x38dfeddf80632c7d:0x189a4a751e378cea!8m2!3d33.5714329!4d73.1760713!16s%2Fg%2F11mlcmvhd2?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>📍</span> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Delivery</h3>
              <p className="text-gray-600">Fast and reliable delivery to your doorstep</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🥡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Takeaway</h3>
              <p className="text-gray-600">Order ahead and pick up at your convenience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Dine-in</h3>
              <p className="text-gray-600">Enjoy our delicious food in a cozy atmosphere</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Drive-through</h3>
              <p className="text-gray-600">Quick service without leaving your car</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Opening Hours</h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
              <div className="text-4xl mb-4">🕐</div>
              <p className="text-2xl font-semibold text-red-600 mb-2">4:00 PM – 12:00 AM</p>
              <p className="text-gray-600">Open Daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5!2d73.1760713!3d33.5714329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeddf80632c7d%3A0x189a4a751e378cea!2sZap%20thoung%20Chinese%20food!5e0!3m2!1sen!2s!4v1734567890123!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

