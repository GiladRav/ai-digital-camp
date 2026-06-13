import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'בית', path: '/' },
    { name: 'מה בתכנית', path: '/program' },
    { name: 'הכלים', path: '/platforms' },
    { name: 'על המנחה', path: '/about' },
    { name: 'שאלות', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 backdrop-blur-xl" style={{ background: 'rgba(8,6,26,0.75)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#8B5CF6,#181259)', boxShadow: '0 0 20px rgba(139,92,246,0.5)' }}>
              <Gamepad2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-lg text-white">פיתוח משחקים <span className="purple-text">עם AI</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.path) ? 'text-[#FFD84C]' : 'text-purple-100/80 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/register">
              <Button className="btn-primary rounded-full px-6">הרשמה לקייטנה</Button>
            </Link>
          </div>

          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="תפריט">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium ${isActive(item.path) ? 'text-[#FFD84C]' : 'text-purple-100'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="btn-primary w-full rounded-full mt-2">הרשמה לקייטנה</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
