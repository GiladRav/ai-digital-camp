import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl text-white">קייטנת יזמות דיגיטלית</span>
            </div>
            <p className="text-white mb-6">
              הכנת הדור הבא של יזמי הטכנולוגיה הישראלית
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: '#FFD84C' }}>פרטי התקשרות</h3>
            <div className="space-y-3">
              <div className="space-y-2">
                <p className="text-white font-semibold">גלעד רביד</p>
                <a 
                  href="tel:052-2998444" 
                  className="flex items-center space-x-2 rtl:space-x-reverse hover:text-gray-300 transition-colors text-white"
                >
                  <Phone className="w-4 h-4" />
                  <span>052-2998444</span>
                </a>
                <a 
                  href="mailto:Gilad84@gmail.com" 
                  className="flex items-center space-x-2 rtl:space-x-reverse hover:text-gray-300 transition-colors text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>Gilad84@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} קייטנת יזמות דיגיטלית. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
