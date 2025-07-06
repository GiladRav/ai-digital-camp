import { Card, CardContent } from '@/components/ui/card';

const TeachingMethodologyProgram = () => {
  const methodology = [
    {
      title: "למידה מבוססת פרויקטים",
      description: "פיתוח פרויקטים אמיתיים עם מחזור קולב של חוויה-רפלקציה-הפשטה-ניסוי",
      color: "text-camp-blue-600"
    },
    {
      title: "כיתה הפוכה",
      description: "הכנה מראש, תרגול במפגש, יישום אחרי המפגש",
      color: "text-camp-purple-600"
    },
    {
      title: "למידה משחקית",
      description: "נקודות, הישגים ודיפרנציאציה לרמות יכולת שונות",
      color: "text-camp-teal-600"
    },
    {
      title: "AI כשותף למידה",
      description: "שימוש בבינה מלאכותית כשותף ליצירה (לא תחליף למדריך)",
      color: "text-camp-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#181259' }}>
          שיטת הלימוד בתכנית
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodology.map((method, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <h3 className={`font-semibold text-lg mb-3 ${method.color}`}>{method.title}</h3>
                <p className="text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodologyProgram;
