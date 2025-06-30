import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramHero = () => {
  return (
    <section className="relative text-white py-20 px-4" style={{ 
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url("/visuals/1.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{
        color: '#FFD84C'
      }}>מה בתכנית?</h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
          שבוע דיגיטלי של פיתוח אפליקציות באמצעות בינה מלאכותית
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar className="w-5 h-5" style={{ color: '#2ea41c' }} />
            <span className="text-sm font-medium" style={{ color: '#2ea41c' }}>13.7.2025 - 17.7.2025</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Users className="w-5 h-5" style={{ color: '#a44e1c' }} />
            <span className="text-sm font-medium" style={{ color: '#a44e1c' }}>גילאי 10-14</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Monitor className="w-5 h-5" style={{ color: '#921ca4' }} />
            <span className="text-sm font-medium" style={{ color: '#921ca4' }}>מפגשים מקוונים</span>
          </div>
          <div className="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Clock className="w-5 h-5" style={{ color: '#1c72a4' }} />
            <span className="text-sm font-medium" style={{ color: '#1c72a4' }}>10:00-14:30</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="font-semibold text-lg px-8 py-3" style={{
          backgroundColor: '#FFD84C',
          color: '#1A1A1A',
          border: 'none'
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#EAB100';
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#FFD84C';
        }}>
            <Link to="/register">
              להרשמה
            </Link>
          </Button>
          <Button asChild className="font-semibold text-lg px-8 py-3" style={{
          backgroundColor: '#FFD84C',
          color: '#1A1A1A',
          border: 'none'
        }} onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = '#EAB100';
        }} onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = '#FFD84C';
        }}>
            <Link to="/faq">
              שאלות נפוצות
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;