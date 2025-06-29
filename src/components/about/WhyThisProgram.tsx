
import { Card, CardContent } from '@/components/ui/card';

const WhyThisProgram = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            למה נוצרה התכנית?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-xl mb-4 text-camp-blue-600">המצב היום</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    הטכנולוגיה משתנה בקצב מסחרר
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    מיומנויות של היום לא יהיו רלוונטיות מחר
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    בינה מלאכותית משנה את חוקי המשחק
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    ילדים צריכים להיות יוצרים, לא רק צרכנים
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="font-semibold text-xl mb-4 text-camp-purple-600">הפתרון שלנו</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    למידה מעשית של כלי AI מתקדמים
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    פיתוח אפליקציות אמיתיות ללא תכנות
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    בניית חשיבה יזמית ופתרון בעיות
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-camp-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    הכנה לעתיד הטכנולוגי
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisProgram;
