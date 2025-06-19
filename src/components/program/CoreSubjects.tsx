
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Brain, 
  Palette, 
  Target, 
  Heart 
} from 'lucide-react';

const CoreSubjects = () => {
  const coreSubjects = [
    {
      title: "יזמות בעידן הדיגיטלי",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-blue-500",
      description: "היכרות עם האקוסיסטם הסטארטאפ הישראלי ועקרונות יזמות מודרנית"
    },
    {
      title: "טכנולוגיות מתפתחות בAI",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-purple-500",
      description: "הבנה מעמיקה של יכולות הבינה המלאכותית ויישומיה"
    },
    {
      title: "עיצוב וחוויית משתמש",
      icon: <Palette className="w-6 h-6" />,
      color: "bg-teal-500",
      description: "עקרונות UX/UI עם דגש על נגישות כוללנית"
    },
    {
      title: "ניהול פרויקטים מתקדם",
      icon: <Target className="w-6 h-6" />,
      color: "bg-green-500",
      description: "מתודולוגיות Agile וניהול צוותים דיגיטליים"
    },
    {
      title: "אתיקה וחינוך דיגיטלי",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-500",
      description: "אחריות חברתית ושימוש אתי בטכנולוגיה"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          נושאי ליבה בתכנית
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSubjects.map((subject, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                  {subject.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{subject.title}</h3>
                <p className="text-gray-600 text-sm">{subject.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSubjects;
