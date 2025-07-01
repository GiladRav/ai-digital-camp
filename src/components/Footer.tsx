
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1F2937' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span style={{ color: '#FFFFFF' }} className="font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl" style={{ color: '#FFFFFF' }}>קייטנת יזמות דיגיטלית</span>
            </div>
            <p className="mb-6" style={{ color: '#D1D5DB' }}>
              הכנת הדור הבא של יזמי הטכנולוגיה הישראלית
            </p>
            <Link to="/register">
              <Button 
                className="font-semibold border-0"
                style={{ 
                  backgroundColor: '#FFD84C',
                  color: '#181259'
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
            <h3 className="font-semibold text-lg mb-4" style={{ color: '#FFFFFF' }}>קישורים מהירים</h3>
            <div className="space-y-4">
              <ul className="space-y-2">
                <li><a href="/" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>דף הבית</a></li>
                <li><a href="/program" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>מה בתכנית?</a></li>
                <li><a href="/platforms" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>פלטפורמות</a></li>
                <li><a href="/about" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>מומחיות מקצועית</a></li>
                <li><a href="/faq" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>שאלות נפוצות</a></li>
                <li><a href="/register" className="transition-colors" style={{ color: '#9CA3AF' }} onMouseEnter={(e) => e.currentTarget.style.color = '#8B5CF6'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>הרשמה</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: '#FFFFFF' }}>פרטי התקשרות</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <a 
                  href="tel:052-2998444" 
                  className="flex items-center space-x-2 rtl:space-x-reverse transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Phone className="w-4 h-4" />
                  <span>052-2998444</span>
                </a>
                <a 
                  href="mailto:Gilad84@gmail.com" 
                  className="flex items-center space-x-2 rtl:space-x-reverse transition-colors"
                  style={{ color: '#D1D5DB' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#D1D5DB'}
                >
                  <Mail className="w-4 h-4" />
                  <span>Gilad84@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #374151' }}>
          <p style={{ color: '#6B7280' }}>&copy; {new Date().getFullYear()} קייטנת יזמות דיגיטלית. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
