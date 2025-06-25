
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/register">
            <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              הרשמה לקייטנה - 1,400₪
            </Button>
          </Link>
          <div className="text-white/80">
            <p className="text-sm">מקומות מוגבלים • הרשמה מוקדמת חובה</p>
            <p className="text-sm">13.7.2025 – 17.7.2025 • 10:00–14:00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
