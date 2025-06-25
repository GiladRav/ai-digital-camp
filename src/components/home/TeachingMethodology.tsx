
import { Card, CardContent } from '@/components/ui/card';

const TeachingMethodology = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          שיטות הוראה חדשניות
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">למידה מבוססת מציאות</h3>
              <p className="text-gray-600">
                כל משתתף בוחר סוגיה שמעניינת אותו במציאות ובונה פתרון דיגיטלי מעשי וייחודי
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-purple-600">מדרגות של ידע</h3>
              <p className="text-gray-600">
                כל יום בונה על הקודם ומוסיף כלי AI חדש ומיומנויות מתקדמות, כך שבסוף השבוע 
                כל משתתף עולה 5 מדרגות בידע הטכנולוגי שלו
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-teal-600">גמישות ובחירה אישית</h3>
              <p className="text-gray-600">
                התוכנית מתאימה עצמה לתחומי העניין של כל ילד – מי שאוהב ספורט יפתח אפליקציה ספורטיבית, 
                מי שאוהב אמנות יתמקד בעיצוב
              </p>
            </CardContent>
          </Card>
          <Card className="p-6">
            <CardContent className="p-0">
              <h3 className="font-semibold text-lg mb-3 text-camp-blue-600">בינה מלאכותית כמנטור אישי</h3>
              <p className="text-gray-600">
                כל משתתף לומד לרתום בינה מלאכותית כשותף יצירתי אישי – מחקר שוק, עיצוב, פיתוח והצגה
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodology;
