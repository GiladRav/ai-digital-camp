
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
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
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
          יזמות ופיתוח אפליקציות AI
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto" style={{ color: '#FFFFFF' }}>
          מחנה קיץ מקוון לפיתוח פלטפורמות דיגיטליות באמצעות בינה מלאכותית
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <Calendar className="w-5 h-5" style={{ color: '#059669' }} />
            <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>13.7.2025 - 17.7.2025</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <Users className="w-5 h-5" style={{ color: '#059669' }} />
            <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>גילאי 10-14</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <Monitor className="w-5 h-5" style={{ color: '#059669' }} />
            <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>מפגשים מקוונים</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <Clock className="w-5 h-5" style={{ color: '#059669' }} />
            <span className="text-sm font-medium" style={{ color: '#FFFFFF' }}>10:00-14:30</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default HeroSection;
