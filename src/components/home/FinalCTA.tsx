
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section 
      className="relative text-white py-20 px-4" 
      style={{ 
        background: 'linear-gradient(135deg, #181259 0%, #4C1D95 50%, #1E3A8A 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(24, 18, 89, 0.12)' }}></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFD84C' }}>
          מוכנים להצטרף למהפכה דיגיטלית?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
          הצטרפו עכשיו למחנה קיץ חדשני שיכין את דור העתיד לעולם של 2030
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            className="font-semibold text-lg px-8 py-3 border-0"
            style={{ 
              backgroundColor: '#FFD84C',
              color: '#181259'
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
            className="font-semibold text-lg px-8 py-3 border-0"
            style={{ 
              backgroundColor: '#181259',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#8B5CF6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#181259';
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
