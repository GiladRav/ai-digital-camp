import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section className="relative text-white py-16 px-4" style={{ 
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url("/visuals/1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[#FFD84C]">
          גלעד רביד
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
          מומחה ליזמות חינוכית וחדשנות טכנולוגית עם התמקדות בלמידה מבוססת משחק
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="tag-hero">
            <Calendar className="w-5 h-5 text-[#059669]" />
            <span className="text-sm font-medium">13.7.2025 - 17.7.2025</span>
          </div>
          <div className="tag-hero">
            <Users className="w-5 h-5 text-[#DC2626]" />
            <span className="text-sm font-medium">גילאי 10-14</span>
          </div>
          <div className="tag-hero">
            <Monitor className="w-5 h-5 text-[#181259]" />
            <span className="text-sm font-medium">מפגשים מקוונים</span>
          </div>
          <div className="tag-hero">
            <Clock className="w-5 h-5 text-[#0891B2]" />
            <span className="text-sm font-medium">10:00-14:30</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default AboutHero;