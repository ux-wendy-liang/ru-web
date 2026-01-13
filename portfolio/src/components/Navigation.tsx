import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animated-gradient">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo + Name */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/67db640bad59fdb9af641cfd_logo-32-new.png"
              alt="Wendy Liang"
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold text-gray-900">Wendy Liang</span>
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
