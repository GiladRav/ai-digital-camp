
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Calendar, Heart, Users } from 'lucide-react';

const ParentCommunication = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
            <Heart className="w-8 h-8 text-red-500" />
            <Users className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            תקשורת עם הורים ומעורבות משפחתית
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            אנחנו מאמינים שהצלחת הבני נוער מתחילה במעורבות ההורים. 
            להלן התכנית המקיפה שלנו לשיתוף וליווי ההורים לאורך כל התהליך.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">תכנית תקשורת מקיפה</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• מפגש הכנה משפחתי לפני הקייטנה</li>
                <li>• עדכונים יומיים במהלך הקורס</li>
                <li>• אפליקציה מותאמת להורים</li>
                <li>• מעקב והכוונה ארוכת טווח</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">מעורבות הורים</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• הרצאות ערב בנושאים רלוונטיים</li>
                <li>• יום הורים עם השתתפות בסדנאות</li>
                <li>• הזדמנויות מנטורינג בתחומי מומחיות</li>
                <li>• פרויקטים משותפים הורים-בני נוער</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParentCommunication;
