
import { Card, CardContent } from '@/components/ui/card';
import { Star, Zap, BookOpen } from 'lucide-react';

const ProgramRationale = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          רציונל התכנית
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3 text-camp-blue-600">הצורך</h3>
                <p className="text-gray-600">הכנת דור עתידי לעולם שבו 80% מהמקצועות בשנות ה-2030 עדיין לא קיימים היום</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3 text-camp-purple-600">הפתרון</h3>
                <p className="text-gray-600">שילוב שלושה תחומי ידע קריטיים: יזמות כחשיבה מערכתית, אוריינות AI ופיתוח דיגיטלי</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="p-0">
                <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-3 text-camp-teal-600">הגישה</h3>
                <p className="text-gray-600">למידה חווייתית ומבוססת פרויקטים עם אסטרטגיות קונסטרוקטיביסטיות</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRationale;
