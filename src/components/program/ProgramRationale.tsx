
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Zap, BookOpen, Target } from 'lucide-react';

const ProgramRationale = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          רציונל הקייטנה
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-red-600">הצורך</h3>
                <p className="text-gray-600">הכנת דור עתידי לעולם שבו 80% מהמקצועות בשנות ה-2030 עדיין לא קיימים היום</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-blue-600">הפתרון</h3>
                <p className="text-gray-600">שילוב שלושה תחומי ידע קריטיים: יזמות כחשיבה מערכתית, אוריינות AI ופיתוח דיגיטלי</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-3 text-green-600">הגישה</h3>
                <p className="text-gray-600">למידה חווייתית ומבוססת פרויקטים עם אסטרטגיות קונסטרוקטיביסטיות</p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <div className="text-center">
              <Target className="w-12 h-12 text-camp-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-4 gradient-text">המטרה המרכזית</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                ליצור דור חדש של יזמים צעירים שמבינים את עוצמת הטכנולוגיה ויודעים לרתום אותה 
                ליצירת פתרונות חדשניים לבעיות אמיתיות בעולם
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRationale;
