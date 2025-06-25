
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DailySchedule = () => {
  const weeklySchedule = [
    { day: "יום 1", focus: "חושבים כמו יזמים", description: "זיהוי בעיות ופיתוח רעיונות", color: "bg-camp-blue-100 text-camp-blue-800" },
    { day: "יום 2", focus: "יוצרים חוויה דיגיטלית", description: "עיצוב UX/UI ונגישות", color: "bg-camp-purple-100 text-camp-purple-800" },
    { day: "יום 3", focus: "בונים אפליקציה בלי קוד", description: "פיתוח עם כלי No-Code", color: "bg-camp-teal-100 text-camp-teal-800" },
    { day: "יום 4", focus: "שילוב בינה מלאכותית", description: "הוספת יכולות AI לאפליקציה", color: "bg-camp-blue-100 text-camp-blue-800" },
    { day: "יום 5", focus: "הצגת מיזם כמו בסטארטאפ", description: "פיץ' אישי והצגת הפרויקט", color: "bg-camp-purple-100 text-camp-purple-800" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          מבנה לימודי יומי
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {weeklySchedule.map((day, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge className={`mb-3 ${day.color}`}>
                    {day.day}
                  </Badge>
                  <h3 className="font-bold text-sm mb-2">{day.focus}</h3>
                  <p className="text-xs text-gray-600">{day.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h3 className="font-bold text-lg mb-4 text-center gradient-text">מבנה יומי מובנה</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
              <div>
                <h4 className="font-semibold text-camp-blue-600">09:00-09:15</h4>
                <p className="text-sm text-gray-600">צ'ק-אין ומיקוד</p>
              </div>
              <div>
                <h4 className="font-semibold text-camp-purple-600">09:15-10:15</h4>
                <p className="text-sm text-gray-600">למידה חדשה</p>
              </div>
              <div>
                <h4 className="font-semibold text-camp-teal-600">10:30-11:45</h4>
                <p className="text-sm text-gray-600">תרגול מונחה</p>
              </div>
              <div>
                <h4 className="font-semibold text-camp-blue-600">12:00-13:00</h4>
                <p className="text-sm text-gray-600">יישום עצמאי</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link to="/program">
              <Button variant="outline" size="lg">
                ראה פירוט מלא של התכנית
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;
