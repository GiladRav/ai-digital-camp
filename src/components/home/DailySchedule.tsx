
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Lightbulb, Palette, Code, Brain, Presentation } from "lucide-react";

const DailySchedule = () => {
  const days = [
    {
      day: "ראשון",
      title: "חושבים כמו יזמים",
      icon: Lightbulb,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      day: "שני",
      title: "יוצרים חוויה דיגיטלית",
      icon: Palette,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      day: "שלישי",
      title: "בונים אפליקציה בלי קוד",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      day: "רביעי",
      title: "שילוב בינה מלאכותית",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      day: "חמישי",
      title: "הצגת מיזם כמו בסטארטאפ",
      icon: Presentation,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            מבנה שבועי
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-3 mb-6">
          {days.map((day, index) => (
            <Card key={index} className={`${day.bgColor} border-2 ${day.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <day.icon className={`w-5 h-5 ${day.color}`} />
                  </div>
                  <CardTitle className={`${day.color} text-sm text-center`}>
                    {day.day}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <h3 className="font-semibold text-center text-xs text-gray-700 leading-tight">
                  {day.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-6 py-2">
            <Link to="/program">
              ראה פירוט מלא של התכנית
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DailySchedule;
