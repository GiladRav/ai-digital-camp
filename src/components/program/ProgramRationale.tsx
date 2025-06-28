
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Heart, Users, Lightbulb, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const ProgramRationale = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "למידה מתוך תשוקה",
      description: "אנחנו מאמינים שלמידה טובה ביותר מגיעה כשהילדים לומדים על נושאים שמעניינים אותם באמת",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "ליווי אישי",
      description: "כל ילד הוא עולם ומלואו. אנחנו מתאימים את הלמידה לכל משתתף בנפרד",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "חדשנות ויצירתיות",
      description: "אנחנו מעודדים חשיבה מחוץ לקופסה ופתרונות יצירתיים לבעיות אמיתיות",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "למידה מעשית",
      description: "התיאוריה חשובה, אבל הכי חשוב הוא שהילדים יכלו ליישם את מה שלמדו בפועל",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* המשימה שלנו */}
          <Card className="mb-10">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-600">המשימה שלנו</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 leading-relaxed">
                אנחנו מאמינים שכל ילד יכול להיות יזם טכנולוגי. בעידן הבינה המלאכותית, הכלים שמאפשרים ליצור טכנולוגיה הפכו נגישים יותר מאי פעם. הקייטנה שלנו נועדה לחבר בין הסקרנות הטבעית של ילדים לבין הכוח הבלתי מוגבל של בינה מלאכותית, ולאפשר להם לממש רעיונות ולפתח פתרונות אמיתיים לבעיות שהם רואים בעולם.
              </p>
            </CardContent>
          </Card>

          {/* הערכים שלנו */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">הערכים שלנו</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className={`${value.bgColor} border-2 ${value.borderColor} hover:shadow-lg transition-all duration-300`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                        <div className={value.color}>
                          {value.icon}
                        </div>
                      </div>
                      <CardTitle className={`${value.color} text-lg leading-tight`}>
                        {value.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* למה נוצרה התכנית */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">למה נוצרה התכנית?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-red-50 border-2 border-red-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <CardTitle className="text-xl text-red-600">המצב היום</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      הטכנולוגיה משתנה בקצב מסחרר
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      מיומנויות של היום לא יהיו רלוונטיות מחר
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      בינה מלאכותית משנה את חוקי המשחק
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      ילדים צריכים להיות יוצרים, לא רק צרכנים
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-green-50 border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl text-green-600">הפתרון שלנו</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      למידה מעשית של כלי AI מתקדמים
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      פיתוח אפליקציות אמיתיות ללא תכנות
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      בניית חשיבה יזמית ופתרון בעיות
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      הכנה לעתיד הטכנולוגי
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramRationale;
