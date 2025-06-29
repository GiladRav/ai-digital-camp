
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <section 
      className="relative text-white py-20 px-4 bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('/lovable-uploads/a6643e5a-9962-4648-b0d7-d286a5a20d5a.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
          אודות הקייטנה
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
          החזון שלנו הוא להכין את הדור הבא של יזמי הטכנולוגיה ולהפוך את עולם ה-AI לנגיש לכל ילד
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">13.7.2025 - 17.7.2025</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">גילאי 10-14</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Monitor className="w-5 h-5" />
            <span className="text-sm font-medium">מפגשים מקוונים</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">10:00-14:30</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
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
            <Link to="/register">
              להרשמה
            </Link>
          </Button>
          <Button 
            asChild 
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
            <Link to="/contact">
              צרו קשר
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
