
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, Users, Zap } from "lucide-react";

const Vision = () => {
  const visionPoints = [
    {
      icon: Target,
      title: "המטרה",
      content: "להכין את הדור הבא של יזמי הטכנולוגיה - ילדים שיודעים לחשוב יצירתי, לפתור בעיות ולהשתמש בטכנולוגיה ככלי ליצירה",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Lightbulb,
      title: "החזון",
      content: "עולם שבו כל ילד יכול להפוך רעיון לאפליקציה פועלת תוך שבוע, בלי להיות מתכנת",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "הגישה",
      content: "למידה מעשית וחווייתית שמתאימה את עצמה לכל ילד - המיזם שלו, הקצב שלו, התחומים שמעניינים אותו",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Zap,
      title: "הייחוד",
      content: "שילוב בין חשיבה יזמית, בינה מלאכותית ופיתוח דיגיטלי - הכישורים הקריטיים לעתיד",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            החזון שלנו
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            תכנית חינוכית חדשנית המכינה את דור העתיד לעולם של 2030
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {visionPoints.map((point, index) => (
            <Card key={index} className={`${point.bgColor} border-0 hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <point.icon className={`w-5 h-5 ${point.color}`} />
                  </div>
                  <CardTitle className={`${point.color} text-lg`}>
                    {point.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {point.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
