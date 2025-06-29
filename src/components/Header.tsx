import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'בית', path: '/' },
    { name: 'מה בתכנית?', path: '/program' },
    { name: 'פלטפורמות', path: '/platforms' },
    { name: 'מומחיות מקצועית', path: '/about' },
    { name: 'שאלות נפוצות', path: '/faq' },
    { name: 'הרשמה', path: '/register' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl gradient-text">קייטנת AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-camp-blue-600 ${
                  isActivePath(item.path) 
                    ? 'text-camp-blue-600 border-b-2 border-camp-blue-600 pb-1' 
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/register">
              <Button 
                className="font-semibold text-lg px-6 py-2"
                style={{ 
                  backgroundColor: '#FFD84C',
                  color: '#1A1A1A',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#EAB100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFD84C';
                }}
              >
                הרשמה
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 hover:text-camp-blue-600 ${
                    isActivePath(item.path) ? 'text-camp-blue-600' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  className="w-full font-semibold text-lg px-6 py-2"
                  style={{ 
                    backgroundColor: '#FFD84C',
                    color: '#1A1A1A',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#EAB100';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#FFD84C';
                  }}
                >
                  הרשמה
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
