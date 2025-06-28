
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#FFD84C' }}>
          יזמות ופיתוח אפליקציות AI
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6 text-blue-100 max-w-4xl mx-auto">
          מחנה קיץ מקוון לפיתוח פלטפורמות דיגיטליות באמצעות בינה מלאכותית
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">13.7.2025 - 17.7.2025</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">גילאי 10-14</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
            <Monitor className="w-4 h-4" />
            <span className="text-sm font-medium">מפגשים מקוונים</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">10:00-14:30</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
            <Link to="/faq">
              צרו קשר
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
