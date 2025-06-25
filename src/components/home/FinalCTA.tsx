
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          מוכנים להצטרף למהפכה הדיגיטלית?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הצטרפו עכשיו לתכנית החינוכית החדשנית שמכינה את דור העתיד לעולם של 2030
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link to="/register">
            <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              הרשמה לקייטנה - 1,400₪
            </Button>
          </Link>
          <div className="text-white/80">
            <p className="text-sm">מקומות מוגבלים • הרשמה מוקדמת חובה</p>
          </div>
        </div>
        
        {/* Course Details */}
        <div className="max-w-2xl mx-auto bg-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">פרטי הקייטנה</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>תאריכים:</strong> 13.7.2025 – 17.7.2025</p>
              <p><strong>ימים:</strong> ראשון – חמישי</p>
            </div>
            <div>
              <p><strong>שעות:</strong> 10:00–14:00</p>
              <p><strong>פורמט:</strong> מפגשים בזום עם מדריך מומחה</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-md mx-auto bg-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">מפעיל הקייטנה</h3>
          <p className="mb-2"><strong>גלעד רביד</strong></p>
          <div className="flex flex-col space-y-2">
            <a href="tel:052-2998444" className="flex items-center justify-center space-x-2 rtl:space-x-reverse hover:text-yellow-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>052-2998444</span>
            </a>
            <a href="mailto:Gilad84@gmail.com" className="flex items-center justify-center space-x-2 rtl:space-x-reverse hover:text-yellow-300 transition-colors">
              <Mail className="w-4 h-4" />
              <span>Gilad84@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
