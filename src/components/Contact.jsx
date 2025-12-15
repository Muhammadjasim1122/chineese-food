const Contact = () => {
  const phoneNumber = "+923198377511";
  const whatsappNumber = "923198377511";

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We're here to serve you. Order now or get in touch!</p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Phone & Order Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📞</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Order by Phone</h2>
              <a
                href={`tel:${phoneNumber}`}
                className="text-3xl font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                {phoneNumber}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <a
                href={`tel:${phoneNumber}`}
                className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-3 text-lg"
              >
                <span>📞</span> Call Now
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello! I would like to place an order.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-3 text-lg"
              >
                <span>💬</span> WhatsApp Order
              </a>
            </div>

            {/* Opening Hours */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Opening Hours</h3>
              <div className="text-center text-gray-600">
                <p className="text-lg font-medium">4:00 PM – 12:00 AM</p>
                <p className="text-sm mt-1">Open Daily</p>
              </div>
            </div>
          </div>

          {/* Location & Parking Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">📍</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Visit Us</h2>
              <div className="text-gray-600 space-y-2">
                <p className="text-lg font-medium">Liaquat Ave, Phase 1 Jinnah Garden</p>
                <p className="text-md">Islamabad, Pakistan</p>
                <p className="text-sm text-gray-500 mt-2">
                  Plus Code: <span className="font-mono font-semibold">H5CG+HC</span>
                </p>
              </div>
            </div>

            {/* Parking Information */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Parking Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                  <span className="text-2xl">🅿️</span>
                  <div>
                    <p className="font-semibold text-gray-800">Free Parking</p>
                    <p className="text-sm text-gray-600">Available for all customers</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                  <span className="text-2xl">🚗</span>
                  <div>
                    <p className="font-semibold text-gray-800">Street Parking</p>
                    <p className="text-sm text-gray-600">Convenient street parking available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="mt-6">
              <a
                href="https://www.google.com/maps/place/Zap+thoung+Chinese+food/@33.5714303,73.176171,17z/data=!4m15!1m8!3m7!1s0x38dfeddf80632c7d:0x189a4a751e378cea!2sZap+thoung+Chinese+food!8m2!3d33.5714329!4d73.1760713!10e1!16s%2Fg%2F11mlcmvhd2!3m5!1s0x38dfeddf80632c7d:0x189a4a751e378cea!8m2!3d33.5714329!4d73.1760713!16s%2Fg%2F11mlcmvhd2?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
              >
                <span>📍</span> Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us on Map</h2>
          <div className="rounded-lg overflow-hidden shadow-md">
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

        {/* Additional Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold text-gray-800 mb-2">Delivery</h3>
            <p className="text-sm text-gray-600">Fast delivery to your doorstep</p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-red-600 hover:text-red-700 text-sm font-medium mt-2 inline-block"
            >
              Order Now →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🥡</div>
            <h3 className="font-semibold text-gray-800 mb-2">Takeaway</h3>
            <p className="text-sm text-gray-600">Order ahead and pick up</p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-red-600 hover:text-red-700 text-sm font-medium mt-2 inline-block"
            >
              Order Now →
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl mb-3">🍽️</div>
            <h3 className="font-semibold text-gray-800 mb-2">Dine-In</h3>
            <p className="text-sm text-gray-600">Reserve a table or walk-in</p>
            <a
              href={`tel:${phoneNumber}`}
              className="text-red-600 hover:text-red-700 text-sm font-medium mt-2 inline-block"
            >
              Call Us →
            </a>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-lg mb-6">Call us now or message us on WhatsApp for quick ordering</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <span>📞</span> Call {phoneNumber}
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello! I would like to place an order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <span>💬</span> WhatsApp Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
