import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Star,
  Zap,
  BookOpen,
  Clock,
  Users,
  Brain,
  Trophy,
  HelpCircle,
  Monitor
} from 'lucide-react';

const ProgramOverview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מידע כללי
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            מחנה קיץ חדשני להפוך רעיונות לאפליקציות אמיתיות בעזרת בינה מלאכותית וללא צורך בניסיון או ידע בתכנות. שבוע של מפגשים ווירטואלים קבוצתיים בהם נשתמש בפלטפורמות בינה מלאכותית כדי ליצור תוכן, לאפיין חווית משתמש ולפתח אפליקציות. כל משתתפ.ת יבחר תחום שמסקרן אותו.ה, והפעילות תותאם אישית לכישורים, לתחומי העניין ולסגנון הייחודי של כל אחד ואחת.
          </p>
        </div>

        {/* איך זה עובד */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">איך זה עובד?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <HelpCircle className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="text-red-600">אתגר</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  בעוד כעשור כ-80% מהמקצועות שקיימים היום צפויים להפוך ללא רלוונטיים.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="text-yellow-600">פתרון</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  שילוב שלושה תחומי ידע קריטיים: יזמות כחשיבה מערכתית, אוריינות בינה מלאכותית ופיתוח דיגיטלי
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-green-600">שיטה</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  תהליך למידה מקוון בהובלת מומחה מקצועי עם התאמה אישית לפי תחומי עניין
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* מה אנחנו מציעים */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">מה אנחנו מציעים?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                <p className="text-gray-600">שעות ב5 ימים מרוכזים</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">10-15</div>
                <p className="text-gray-600">משתתפים בקבוצה</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <p className="text-gray-600">פלטפורמות בינה מלאכותית</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">פיתוח מעשי של אפליקציות</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramOverview;
