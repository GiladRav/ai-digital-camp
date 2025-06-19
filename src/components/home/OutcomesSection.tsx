
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Users, Award, Heart, Trophy } from 'lucide-react';

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "מטרות פדגוגיות",
      items: ["חשיבה מערכתית ופתרון בעיות", "אוריינות דיגיטלית מתקדמת", "חשיבה יצירתית ויכולת חדשנות"],
      color: "bg-blue-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "מטרות טכנולוגיות", 
      items: ["שליטה בכלי AI ופלטפורמות", "הבנת עקרונות UX/UI", "אוריינות נתונים וקבלת החלטות"],
      color: "bg-purple-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "מטרות חברתיות-רגשיות",
      items: ["עבודת צוות ומנהיגות", "ביטחון עצמי טכנולוגי", "אחריות חברתית ואתיקה"],
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          מטרות הקייטנה
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardContent className="p-6 h-full">
                <div className={`w-16 h-16 ${outcome.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                  {outcome.icon}
                </div>
                <h3 className="font-semibold text-xl mb-4 text-center text-camp-blue-700">{outcome.title}</h3>
                <ul className="space-y-3">
                  {outcome.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <Trophy className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;
