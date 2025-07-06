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
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-200" style={{ background: 'linear-gradient(90deg, #F7F7FA 0%, #F3F4F6 100%)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse" style={{ background: 'linear-gradient(90deg, #E9D8FD 0%, #F3E8FF 100%)', borderRadius: '0.5rem', padding: '0.25rem 0.5rem' }}>
            <img src="/visuals/Platform.png" alt="Platform Logo" className="w-8 h-8 rounded-lg object-cover" />
            <span className="font-bold text-xl" style={{ color: '#181259' }}>קיץ דיגיטלי עם AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-[#8B5CF6] ${
                  isActivePath(item.path) 
                    ? 'text-[#8B5CF6] border-b-2 border-[#8B5CF6] pb-1' 
                    : 'text-[#181259]'
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
                  color: '#181259',
                  border: '0.5px solid #181259'
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
          <div className="md:hidden py-4 border-t border-gray-200" style={{ background: 'linear-gradient(90deg, #F7F7FA 0%, #F3F4F6 100%)' }}>
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 hover:text-[#8B5CF6] ${
                    isActivePath(item.path) ? 'text-[#8B5CF6]' : 'text-[#181259]'
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
                    color: '#181259',
                    border: '0.5px solid #181259'
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
