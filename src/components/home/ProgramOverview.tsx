
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Star,
  Zap,
  BookOpen,
  Clock,
  Users,
  Brain,
  Trophy
} from 'lucide-react';

const ProgramOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            למה התכנית שלנו שונה?
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg text-camp-blue-600">הצורך</h3>
                <p className="text-gray-600">הכנת דור עתידי לעולם משתנה</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg text-camp-purple-600">הפתרון</h3>
                <p className="text-gray-600">שילוב יזמות, AI ופיתוח דיגיטלי</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-bold text-lg text-camp-teal-600">הגישה</h3>
                <p className="text-gray-600">למידה חווייתית ומבוססת פרויקטים</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">20 שעות לימוד פעיל</h3>
              <p className="text-gray-600">5 ימים מרוכזים, 4 שעות ביום</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">עד 15 משתתפים</h3>
              <p className="text-gray-600">ליווי אישי וקבוצה אינטימית</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">10+ פלטפורמות AI</h3>
              <p className="text-gray-600">כלים מובילים ומתקדמים</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">פרויקטים אמיתיים</h3>
              <p className="text-gray-600">מרעיון למוצר מוחשי</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
