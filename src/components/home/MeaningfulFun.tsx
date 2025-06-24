
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Smartphone, Zap } from 'lucide-react';

const MeaningfulFun = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          הנאה עם משמעות
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-blue-600">המציאות של 2025</h3>
                <p className="text-gray-600">
                  בינה מלאכותית משנה את העולם. הדור הצעיר צריך להכיר, להבין ולדעת לרתום את הכוח הזה.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-purple-600">מחנה קיץ דיגיטלי</h3>
                <p className="text-gray-600">
                  לא עוד קייטנות מסורתיות. זה הזמן לחוויה דיגיטלית מרגשת שמכינה לעתיד.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-teal-600">איך זה עובד?</h3>
                <p className="text-gray-600">
                  5 ימים אינטנסיביים של למידה, יצירה והנאה. מרגש, מאתגר ומכין לעתיד.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeaningfulFun;
