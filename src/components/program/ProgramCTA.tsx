
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramCTA = () => {
  return (
    <section className="relative text-white py-20 px-4" style={{ 
      backgroundImage: 'linear-gradient(rgba(24, 18, 89, 0.15), rgba(24, 18, 89, 0.15)), url("/visuals/2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-sunny-yellow">
          מוכנים להצטרף למהפכה דיגיטלית?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
          הצטרפו עכשיו למחנה קיץ חדשני שיכין את דור העתיד לעולם של 2030
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="btn-primary font-semibold text-lg px-8 py-3">
            <Link to="/register">
              להרשמה
            </Link>
          </Button>
          <Button asChild className="btn-secondary font-semibold text-lg px-8 py-3">
            <Link to="/faq">
              שאלות נפוצות
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramCTA;
