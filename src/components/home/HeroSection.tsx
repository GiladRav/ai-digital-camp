
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            מחנה קיץ דיגיטלי אינטנסיבי - 13.7-17.7.2025
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            יזמות דיגיטלית ופיתוח
            <br />
            <span className="text-yellow-300">אפליקציות בינה מלאכותית</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            תכנית חינוכית חדשנית המכינה את דור העתיד לעולם שבו 80% מהמקצועות בשנות ה-2030 
            עדיין לא קיימים היום. שילוב יזמות, טכנולוגיה ובינה מלאכותית בגישה פדגוגית מתקדמת.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                הרשמה לקייטנה - 1,400₪
              </Button>
            </Link>
            <Link to="/program">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
                מה בתכנית?
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
