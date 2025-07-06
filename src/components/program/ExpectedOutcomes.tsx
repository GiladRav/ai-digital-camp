import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Smartphone, Users, Lightbulb } from "lucide-react";

const ExpectedOutcomes = () => {
  const outcomes = [
    {
      icon: Trophy,
      title: "פרויקט אישי מוגמר",
      description: "אפליקציה פועלת עם בינה מלאכותית שכל משתתף פיתח בעצמו",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Smartphone,
      title: "כישורי AI מתקדמים",
      description: "יכולת לעבוד עם 10+ פלטפורמות בינה מלאכותית מובילות",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Users,
      title: "ביטחון עצמי טכנולוגי",
      description: "תחושת מסוגלות ויכולת להמשיך ללמוד ולפתח לבד",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Lightbulb,
      title: "חשיבה יזמית",
      description: "יכולת לזהות הזדמנויות ולפתח פתרונות דיגיטליים יצירתיים",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#181259' }}>
            תוצאות צפויות
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${outcome.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <outcome.icon className={`w-8 h-8 ${outcome.color}`} />
                </div>
                <CardTitle className={`${outcome.color} text-lg`}>
                  {outcome.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Educational Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#181259' }}>
              הגישה החינוכית שלנו
            </h2>
            <Card className="p-8">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-xl mb-4" style={{ color: '#181259' }}>למידה מבוססת פרויקטים</h3>
                    <p className="text-gray-600 mb-4">
                      כל מה שלומדים במהלך הקייטנה מיושם מיד בפרויקטים אמיתיים. 
                      הילדים לא רק לומדים תיאוריה, אלא בונים דברים שפועלים בפועל.
                    </p>
                    
                    <h3 className="font-semibold text-xl mb-4" style={{ color: '#181259' }}>התאמה אישית</h3>
                    <p className="text-gray-600">
                      כל ילד מגיע עם תחומי עניין ויכולות שונות. אנחנו מתאימים את הפרויקטים 
                      והקצב ללומד הספציפי, כך שכל אחד מקבל את החוויה המתאימה לו.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-xl mb-4" style={{ color: '#181259' }}>למידה מכשלונות</h3>
                    <p className="text-gray-600 mb-4">
                      אנחנו מעודדים ניסוי וטעייה. טעויות הן חלק מתהליך הלמידה, 
                      ואנחנו עוזרים לילדים להפוך כשלונות להזדמנויות למידה.
                    </p>
                    
                    <h3 className="font-semibold text-xl mb-4" style={{ color: '#181259' }}>יזמות אחראית</h3>
                    <p className="text-gray-600">
                      אנחנו מלמדים לא רק איך ליצור טכנולוגיה, אלא גם איך לעשות זאת באופן אתי 
                      ואחראי שתורם לחברה.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExpectedOutcomes;
