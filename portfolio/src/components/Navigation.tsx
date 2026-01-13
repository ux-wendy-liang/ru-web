import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show background when scrolled past hero section (about 400px)
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On homepage: transparent at top, show background when scrolled
  // On other pages: always show background
  const showBackground = !isHomePage || isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${showBackground ? 'animated-gradient' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/67db640bad59fdb9af641cfd_logo-32-new.png"
              alt="Wendy Liang"
              className="w-10 h-10"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-12">
            <Link
              to="/"
              className="text-xl text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-xl text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
