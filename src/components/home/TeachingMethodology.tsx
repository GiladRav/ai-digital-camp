
import { Card, CardContent } from '@/components/ui/card';

const TeachingMethodology = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          שיטות הוראה חדשניות
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">למידה מבוססת פרויקטים</h3>
              <p className="text-gray-600">פיתוח פרויקטים אמיתיים עם מחזור קולב: חוויה-רפלקציה-הפשטה-ניסוי</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">כיתה הפוכה</h3>
              <p className="text-gray-600">הכנה מראש, תרגול במפגש, יישום אחרי</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-teal-600">למידה משחקית</h3>
              <p className="text-gray-600">נקודות, הישגים ודיפרנציאציה לרמות יכולת שונות</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">AI כשותף למידה</h3>
              <p className="text-gray-600">שימוש בבינה מלאכותית כשותף ליצירה (לא תחליף למדריך)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
