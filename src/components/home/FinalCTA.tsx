import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="relative text-white py-20 px-4" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/visuals/2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFD84C' }}>
          מוכנים להצטרף למהפכה דיגיטלית?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הצטרפו עכשיו למחנה קיץ חדשני שיכין את דור העתיד לעולם של 2030
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
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
              להרשמה
            </Link>
          </Button>
          <Button 
            asChild 
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
              שאלות נפוצות
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
