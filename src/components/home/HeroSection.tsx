
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Clock, Users, Calendar, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          קייטנת יזמות דיגיטלית ופיתוח אפליקציות בינה מלאכותית
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
          מחנה קיץ דיגיטלי חדשני בן 5 ימים המכין דור עתידי לעולם דיגיטלי משתנה
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
            <Calendar className="w-5 h-5 mr-2" />
            13.7-17.7 (ראשון-חמישי)
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
            <Clock className="w-5 h-5 mr-2" />
            10:00-14:00
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
            <Users className="w-5 h-5 mr-2" />
            10-15 משתתפים
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 text-lg py-2 px-4">
            <Star className="w-5 h-5 mr-2" />
            גילאי 10-14
          </Badge>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/register">
            <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-xl px-10 py-4">
              הרשמה לקייטנה - 1,600₪
            </Button>
          </Link>
          <Link to="/about-camp">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-xl px-10 py-4">
              פרטים נוספים על הקייטנה
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
