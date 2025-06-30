
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative text-white py-20 px-4" style={{ 
      backgroundImage: 'linear-gradient(rgba(24, 18, 89, 0.15), rgba(24, 18, 89, 0.15)), url("/visuals/1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-brand-sunny-yellow">
          יזמות ופיתוח אפליקציות AI
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-white max-w-4xl mx-auto">
          מחנה קיץ מקוון לפיתוח פלטפורמות דיגיטליות באמצעות בינה מלאכותית
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar className="w-5 h-5 text-status-success" />
            <span className="text-sm font-medium text-status-success">13.7.2025 - 17.7.2025</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="w-5 h-5 text-status-warning" />
            <span className="text-sm font-medium text-status-warning">גילאי 10-14</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Monitor className="w-5 h-5 text-brand-camp-purple" />
            <span className="text-sm font-medium text-brand-camp-purple">מפגשים מקוונים</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="w-5 h-5 text-status-info" />
            <span className="text-sm font-medium text-status-info">10:00-14:30</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default HeroSection;
