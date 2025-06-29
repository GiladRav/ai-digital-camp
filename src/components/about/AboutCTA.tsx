
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-16 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFD84C' }}>
          בואו להיות חלק מהחזון
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הצטרפו אלינו במסע מרגש להכנת הדור הבא של יזמי הטכנולוגיה הישראלית
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/register">
            <Button 
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
              להרשמה
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
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
              צרו קשר
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
