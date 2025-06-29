
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Code, TrendingUp, Award } from 'lucide-react';

const ProgramGoals = () => {
  const goals = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "הכנת הדור הבא",
      description: "להכין את ילדי היום לעולם הטכנולוגיה של מחר"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "דמוקרטיזציה של הטכנולוגיה",
      description: "להפוך את פיתוח הטכנולוגיה לנגיש לכל ילד, ללא תלות ברקע או יכולות טכניות"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "פיתוח חשיבה יזמית",
      description: "ללמד ילדים לזהות בעיות ולפתח פתרונות יצירתיים ומעשיים"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "בניית ביטחון עצמי",
      description: "לתת לילדים את החוויה של הצלחה ויצירה בתחום הטכנולוגיה"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          המטרות שלנו
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {goals.map((goal, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
                    <p className="text-gray-600">{goal.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramGoals;
