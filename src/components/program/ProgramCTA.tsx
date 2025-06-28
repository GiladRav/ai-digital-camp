
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          מוכנים להצטרף לתכנית החדשנית?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הירשמו עכשיו למחנה קיץ דיגיטלי שיכין את הילדים שלכם לעתיד הטכנולוגי
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="font-semibold text-lg px-8 py-3"
            style={{ 
              backgroundColor: '#FFD84C',
              color: '#1A1A1A',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EAB100';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD84C';
            }}
          >
            <Link to="/register">
              הרשמה לקייטנה - 1,400₪
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="font-semibold text-lg px-8 py-3"
            style={{ 
              backgroundColor: '#FFD84C',
              color: '#1A1A1A',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EAB100';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD84C';
            }}
          >
            <Link to="/faq">
              יש לי שאלות
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramCTA;
