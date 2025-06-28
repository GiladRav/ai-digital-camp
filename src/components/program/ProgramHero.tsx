import { Badge } from '@/components/ui/badge';
import { Clock, Users, Brain, Zap } from 'lucide-react';

const ProgramHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          תכנית יזמות דיגיטלית ופיתוח אפליקציות AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
          תכנית חינוכית חדשנית בת 5 ימים להכין דור עתידי לעולם דיגיטלי משתנה
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            20 שעות לימוד פעיל
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            עד 15 משתתפים
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Brain className="w-4 h-4 mr-2" />
            10+ פלטפורמות AI
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            מחנה קיץ אינטנסיבי
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
