import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl">קייטנת יזמות דיגיטלית</span>
            </div>
            <p className="text-gray-300 mb-6">
              הכנת הדור הבא של יזמי הטכנולוגיה הישראלית
            </p>
            <Link to="/register">
              <Button 
                className="font-semibold"
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
                להרשמה
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  דף הבית
                </Link>
              </li>
              <li>
                <Link to="/program" className="text-gray-300 hover:text-white transition-colors">
                  מה בתכנית
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  שאלות נפוצות
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  אודות
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">צרו קשר</h3>
            <div className="space-y-3">
              <div className="space-y-2 text-gray-300">
                <a 
                  href="tel:052-2998444" 
                  className="flex items-center space-x-2 rtl:space-x-reverse hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>052-2998444</span>
                </a>
                <a 
                  href="mailto:Gilad84@gmail.com" 
                  className="flex items-center space-x-2 rtl:space-x-reverse hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Gilad84@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} קייטנת יזמות דיגיטלית. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
