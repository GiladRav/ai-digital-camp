
import { Card, CardContent } from '@/components/ui/card';

const DailyContent = () => {
  const dailySchedule = [
    {
      day: "יום ראשון",
      topic: "חושבים כמו יזמים",
      description: "זיהוי בעיות אמיתיות, פיתוח רעיונות והכנת תכנית עבודה"
    },
    {
      day: "יום שני", 
      topic: "עיצוב חוויית משתמש",
      description: "למידת עקרונות UX/UI ועיצוב הממשק של האפליקציה"
    },
    {
      day: "יום שלישי",
      topic: "בניית האפליקציה",
      description: "פיתוח האפליקציה בכלי No-Code וחיבור רכיבים"
    },
    {
      day: "יום רביעי",
      topic: "שילוב בינה מלאכותית",
      description: "הוספת יכולות AI לאפליקציה ובדיקות מתקדמות"
    },
    {
      day: "יום חמישי",
      topic: "הצגת המיזם",
      description: "הכנת מצגת והצגה בסגנון סטארטאפ בפני הורים וחברים"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          תכנים יומיים
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {dailySchedule.map((day, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-blue-500' :
                        index === 1 ? 'bg-purple-500' :
                        index === 2 ? 'bg-teal-500' :
                        index === 3 ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <h3 className="font-bold text-lg text-gray-800 md:w-32 flex-shrink-0">
                          {day.day}
                        </h3>
                        <h4 className="font-semibold text-lg gradient-text md:w-48 flex-shrink-0">
                          {day.topic}
                        </h4>
                        <p className="text-gray-600 flex-grow">
                          {day.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyContent;
