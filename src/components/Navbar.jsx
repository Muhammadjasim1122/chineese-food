import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-red-600">Zap Thoung</span>
            <span className="ml-2 text-sm text-gray-600">Chinese Food</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/menu')
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Menu
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-red-600 border-b-2 border-red-600'
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-red-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

