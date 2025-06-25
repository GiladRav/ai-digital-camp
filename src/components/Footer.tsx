
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl">קייטנת יזמות דיגיטלית AI</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              קייטנה דיגיטלית פורצת דרך לתלמידי חטיבת ביניים שממנפת כלי בינה מלאכותית מתקדמים 
              להפיכת רעיונות לאפליקציות פועלות.
            </p>
            <Link to="/register">
              <Button className="gradient-bg text-white hover:opacity-90">
                הרשמה עכשיו
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
            <h3 className="font-semibold text-lg mb-4">יצירת קשר</h3>
            <div className="space-y-2 text-gray-300">
              <p>טלפון: 050-123-4567</p>
              <p>אימייל: info@aicamp.co.il</p>
              <p>זמני מענה: א'-ה' 9:00-17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} קייטנת יזמות דיגיטלית AI. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
