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
      bgColor: "bg-yellow-100"
    },
    {
      day: "שני",
      title: "יוצרים חוויה דיגיטלית",
      icon: Palette,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      day: "שלישי",
      title: "בונים אפליקציה בלי קוד",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      day: "רביעי",
      title: "שילוב בינה מלאכותית",
      icon: Brain,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      day: "חמישי",
      title: "הצגת מיזם כמו בסטארטאפ",
      icon: Presentation,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            מבנה שבועי
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-8">
          {days.map((day, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className={`mx-auto w-12 h-12 ${day.bgColor} rounded-full flex items-center justify-center mb-3`}>
                  <day.icon className={`w-6 h-6 ${day.color}`} />
                </div>
                <CardTitle className={`text-lg ${day.color}`}>
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2 text-sm">{day.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="font-semibold text-lg px-8 py-3"
            style={{ 
              backgroundColor: '#FFD84C',
              color: '#1A1A1A',
              border: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#EAB100';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFD84C';
            }}
          >
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
