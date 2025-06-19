
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Calendar, Users } from 'lucide-react';

const ProgramCTA = () => {
  return (
    <section className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
          <Star className="w-6 h-6 text-yellow-300" />
          <Star className="w-6 h-6 text-yellow-300" />
          <Star className="w-6 h-6 text-yellow-300" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          מוכנים להצטרף לקייטנה החדשנית?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הירשמו עכשיו לקייטנת קיץ דיגיטלית שתכין את הילדים שלכם לעתיד הטכנולוגי
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white/20 px-4 py-2 rounded-full">
            <Calendar className="w-5 h-5" />
            <span>5 ימים מרוכזים</span>
          </div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white/20 px-4 py-2 rounded-full">
            <Users className="w-5 h-5" />
            <span>עד 15 משתתפים</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/register">
            <Button size="lg" className="bg-white text-camp-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              הרשמה לקייטנה - 1,800₪
            </Button>
          </Link>
          <Link to="/faq">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              יש לי שאלות
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramCTA;
