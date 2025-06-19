
import { Card, CardContent } from '@/components/ui/card';

const ParentCommunication = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          תקשורת עם הורים ומעורבות משפחתית
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">תכנית תקשורת מקיפה</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• מפגש הכנה משפחתי לפני התכנית</li>
                <li>• עדכונים יומיים במהלך הקורס</li>
                <li>• אפליקציה מותאמת להורים</li>
                <li>• מעקב והכוונה ארוכת טווח</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">מעורבות הורים</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• הרצאות ערב בנושאים רלוונטיים</li>
                <li>• יום הורים עם השתתפות בסדנאות</li>
                <li>• הזדמנויות מנטורינג בתחומי מומחיות</li>
                <li>• פרויקטים משותפים הורים-ילדים</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParentCommunication;
