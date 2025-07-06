import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative text-white py-16 px-4" style={{ 
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url("/visuals/2.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#FFD84C]">
          בואו להיות חלק מהחזון
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          הצטרפו אלינו במסע מרגש להכנת הדור הבא של יזמי הטכנולוגיה הישראלית
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild className="btn-primary font-semibold text-lg px-8 py-3">
            <Link to="/register">להרשמה</Link>
          </Button>
          <Button asChild className="btn-primary font-semibold text-lg px-8 py-3">
            <Link to="/faq">שאלות נפוצות</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;