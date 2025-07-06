import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

// עדכון זמני לבדיקת deploy - 2025
const HeroSection = () => {
  return (
    <section className="relative text-white py-16 px-4" style={{ 
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url("/visuals/1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
          יזמות ופיתוח אפליקציות AI
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
          מחנה קיץ מקוון לפיתוח פלטפורמות דיגיטליות באמצעות בינה מלאכותית
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <Calendar className="w-5 h-5" style={{ color: '#1D4ED8' }} />
            <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>13.7.2025 - 17.7.2025</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <Users className="w-5 h-5" style={{ color: '#1D4ED8' }} />
            <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>גילאי 10-14</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <Monitor className="w-5 h-5" style={{ color: '#1D4ED8' }} />
            <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>מפגשים מקוונים</span>
          </div>
          <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <Clock className="w-5 h-5" style={{ color: '#1D4ED8' }} />
            <span className="text-sm font-medium" style={{ color: '#D1D5DB' }}>10:00-14:30</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            variant="primary"
            className="font-semibold text-lg px-8 py-3"
            style={{ 
              backgroundColor: '#FFD84C',
              color: '#181259',
              border: '0.5px solid #181259'
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
              color: '#181259',
              border: '0.5px solid #181259'
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

export default HeroSection;
