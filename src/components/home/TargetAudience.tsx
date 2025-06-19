
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const TargetAudience = () => {
  const targetAudience = [
    "בני נוער בגילאי 11-14 (כיתות ו'-ח')",
    "ללא צורך בידע טכני מוקדם",
    "עניין ביזמות ופתרון בעיות",
    "סקרנות טכנולוגיה ויצירתיות",
    "מוטיבציה ללמידה פעילה"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            למי זה מתאים?
          </h2>
          <Card className="p-8">
            <CardContent className="p-0">
              <ul className="space-y-4 text-lg">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
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

export default TargetAudience;
