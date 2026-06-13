import { Phone, Mail, Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-purple-500/20 mt-20" style={{ background: 'rgba(8,6,26,0.85)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#8B5CF6,#181259)' }}>
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg text-white">פיתוח משחקים עם AI</span>
            </div>
            <p className="text-purple-200/70 text-sm leading-relaxed">
              קייטנת קיץ פרימיום לגילאי 11–15. הילדים בונים משחק דיגיטלי אישי בעזרת בינה מלאכותית — מרעיון לתוצר אמיתי שניתן לשתף.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 neon-text">ניווט מהיר</h3>
            <ul className="space-y-2 text-sm text-purple-200/80">
              <li><Link to="/program" className="hover:text-white">מה בתכנית</Link></li>
              <li><Link to="/platforms" className="hover:text-white">הכלים שנשתמש בהם</Link></li>
              <li><Link to="/about" className="hover:text-white">על המנחה</Link></li>
              <li><Link to="/faq" className="hover:text-white">שאלות נפוצות</Link></li>
              <li><Link to="/register" className="hover:text-white">הרשמה</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 neon-text">יצירת קשר</h3>
            <p className="text-white font-semibold mb-2">גלעד רביד</p>
            <a href="tel:052-2998444" className="flex items-center gap-2 text-purple-200/80 hover:text-white text-sm mb-1">
              <Phone className="w-4 h-4" /> 052-2998444
            </a>
            <a href="mailto:Gilad84@gmail.com" className="flex items-center gap-2 text-purple-200/80 hover:text-white text-sm">
              <Mail className="w-4 h-4" /> Gilad84@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-purple-500/15 mt-10 pt-6 text-center text-purple-300/60 text-xs">
          © {new Date().getFullYear()} פיתוח משחקים עם בינה מלאכותית · כל הזכויות שמורות
        </div>
      </div>
    </footer>
  );
};

export default Footer;
