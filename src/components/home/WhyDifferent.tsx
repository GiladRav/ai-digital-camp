
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const WhyDifferent = () => {
  const differences = [
    "שילוב ייחודי של יזמות, טכנולוגיה ובינה מלאכותית",
    "למידה חווייתית: יצירת אפליקציות אמיתיות עם כלי AI מתקדמים",
    "עבודת צוות: פיתוח מיומנויות חברתיות ומנהיגות דיגיטלית",
    "אתיקה דיגיטלית: שימוש אחראי בטכנולוגיה ובינה מלאכותית"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          למה התכנית שלנו שונה?
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8">
            <CardContent className="p-0">
              <ul className="space-y-4">
                {differences.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
