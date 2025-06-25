
import { Card, CardContent } from '@/components/ui/card';

const NeedSolutionApproach = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          הצורך / הפתרון / הגישה
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">צורך</h3>
              <p className="text-gray-700 text-lg">
                הכנת דור עתידי לעולם שבו 80% מהמקצועות בשנות ה-2030 עדיין לא קיימים היום.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-xl mb-4 text-camp-purple-600">פתרון</h3>
              <p className="text-gray-700 text-lg mb-4">
                שילוב שלושה תחומי ידע קריטיים:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• חשיבה יזמית</li>
                <li>• אוריינות בינה מלאכותית</li>
                <li>• פיתוח מעשי</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-xl mb-4 text-camp-teal-600">גישה</h3>
              <p className="text-gray-700 text-lg">
                למידה חווייתית ומבוססת עניין אישי עם אסטרטגיות למידה מבוססת משחק.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NeedSolutionApproach;
