
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Brain, Star } from 'lucide-react';

const ProgramHero = () => {
  return (
    <section className="gradient-bg text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          תכנית יזמות דיגיטלית ופיתוח אפליקציות AI
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          תכנית חינוכית חדשנית בת 5 ימים המכינה דור עתידי לעולם דיגיטלי משתנה
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Badge className="bg-white/20 text-white border-white/30">
            <Clock className="w-4 h-4 mr-2" />
            20 שעות לימוד פעיל
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30">
            <Users className="w-4 h-4 mr-2" />
            עד 15 משתתפים
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30">
            <Brain className="w-4 h-4 mr-2" />
            10+ פלטפורמות AI
          </Badge>
          <Badge className="bg-white/20 text-white border-white/30">
            <Star className="w-4 h-4 mr-2" />
            מחנה קיץ אינטנסיבי
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
