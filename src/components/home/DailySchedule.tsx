
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Target, CheckCircle } from 'lucide-react';

const DailySchedule = () => {
  const dailyActivities = [
    { time: "09:00-09:15", activity: "צ'ק-אין ומיקוד", icon: <Clock className="w-6 h-6" />, color: "bg-blue-500" },
    { time: "09:15-10:15", activity: "למידה חדשה", icon: <Target className="w-6 h-6" />, color: "bg-purple-500" },
    { time: "10:30-11:45", activity: "תרגול מונחה", icon: <Users className="w-6 h-6" />, color: "bg-teal-500" },
    { time: "12:00-13:00", activity: "יישום עצמאי", icon: <CheckCircle className="w-6 h-6" />, color: "bg-green-500" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          מה נלמד?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dailyActivities.map((item, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-camp-blue-700">{item.time}</h3>
                <p className="text-gray-600">{item.activity}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
          <h3 className="font-bold text-2xl mb-6 text-center gradient-text">תכנים יומיים</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">1</div>
              <h4 className="font-semibold text-camp-blue-700 mb-2">חושבים כמו יזמים</h4>
              <p className="text-sm text-gray-600">זיהוי בעיות אמיתיות ופיתוח רעיונות</p>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">2</div>
              <h4 className="font-semibold text-camp-purple-700 mb-2">יוצרים חוויה דיגיטלית</h4>
              <p className="text-sm text-gray-600">עיצוב UX/UI ותכנון מסכים</p>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">3</div>
              <h4 className="font-semibold text-camp-teal-700 mb-2">בונים אפליקציה</h4>
              <p className="text-sm text-gray-600">פיתוח עם כלי No-Code</p>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">4</div>
              <h4 className="font-semibold text-green-700 mb-2">שילוב AI</h4>
              <p className="text-sm text-gray-600">הוספת יכולות בינה מלאכותית</p>
            </div>
            <div className="text-center p-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">5</div>
              <h4 className="font-semibold text-red-700 mb-2">הצגת מיזם</h4>
              <p className="text-sm text-gray-600">פיץ' בסגנון סטארטאפ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;
