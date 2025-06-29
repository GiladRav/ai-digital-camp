
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const TeamExperience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          הרקע והניסיון שלנו
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Badge className="mb-4 bg-camp-blue-100 text-camp-blue-800">רקע טכנולוגי</Badge>
              <h3 className="font-semibold text-lg mb-3">מפתחים מנוסים</h3>
              <p className="text-gray-600 text-sm">
                הצוות שלנו כולל מפתחים עם ניסיון רב שנים בתחום הטכנולוגיה והבינה המלאכותית
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Badge className="mb-4 bg-camp-purple-100 text-camp-purple-800">רקע חינוכי</Badge>
              <h3 className="font-semibold text-lg mb-3">מחנכים מוסמכים</h3>
              <p className="text-gray-600 text-sm">
                השילוב של ידע טכנולוגי עם הבנה פדגוגית מעמיקה של עולם הילדים
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="p-0">
              <Badge className="mb-4 bg-camp-teal-100 text-camp-teal-800">ניסיון מוכח</Badge>
              <h3 className="font-semibold text-lg mb-3">תוצאות מוכחות</h3>
              <p className="text-gray-600 text-sm">
                ניסיון בהדרכת מאות ילדים בתחומי הטכנולוגיה והיזמות הדיגיטלית
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamExperience;
