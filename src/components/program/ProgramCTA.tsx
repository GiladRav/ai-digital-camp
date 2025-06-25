
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramCTA = () => {
  return (
    <section className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          מוכנים להצטרף לתכנית החדשנית?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הירשמו עכשיו למחנה קיץ דיגיטלי שיכין את הילדים שלכם לעתיד הטכנולוגי
        </p>
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
