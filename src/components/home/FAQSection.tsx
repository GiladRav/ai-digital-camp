
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          שאלות נפוצות
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3">איך מתקיימים המפגשים?</h3>
              <p className="text-gray-600">מחנה קיץ דיגיטלי אינטנסיבי בזום עם מדריך מומחה, 5 ימים מרוכזים בין השעות 09:00-13:00.</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3">איזה כלים נשתמש?</h3>
              <p className="text-gray-600">למעלה מ-10 פלטפורמות AI מובילות וכלי No-Code/Low-Code מתקדמים, כולם מבוססי ווב.</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3">מה מעורבות ההורים?</h3>
              <p className="text-gray-600">מפגש הכנה משפחתי, עדכונים יומיים, הרצאות ערב ואפשרויות מנטורינג משותפות.</p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3">איך מתבטא הפיץ' הסופי?</h3>
              <p className="text-gray-600">הצגה אישית מול הקבוצה בסגנון סטארטאפ, עם שקף/שקופית ותמונת האפליקציה שפותחה.</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Link to="/faq">
            <Button variant="outline" size="lg">
              עוד שאלות ותשובות
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
