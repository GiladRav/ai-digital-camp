
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          מוכנים להצטרף למהפכה דיגיטלית?
        </h2>
        
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          הצטרפו עכשיו למחנה קיץ חדשני שיכין את דור העתיד לעולם של 2030
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="font-semibold text-lg px-6 py-2.5"
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
              להרשמה
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
