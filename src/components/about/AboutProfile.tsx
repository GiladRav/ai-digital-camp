import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Target, Users, Award, Lightbulb } from "lucide-react";

const AboutProfile = () => {
  const profileItems = [
    {
      icon: Lightbulb,
      title: "לומד לכל החיים",
      content: "מחויב לצמיחה אישית ומקצועית מתמשכת",
      variant: "purple"
    },
    {
      icon: Target,
      title: "יזם חינוכי–חברתי",
      content: "מוביל אינטגרציה טכנולוגית ואוריינות דיגיטלית",
      variant: "blue"
    },
    {
      icon: Users,
      title: "מנחה סדנאות והכשרות",
      content: "בהתייחס לנושאים של חדשנות טכנולוגית, יזמות וחינוך",
      variant: "green"
    },
    {
      icon: Award,
      title: "בניית קואליציות",
      content: "יזום שותפויות אסטרטגיות בין גורמי עניין",
      variant: "orange"
    },
    {
      icon: User,
      title: "ניהול קהילות",
      content: "ניסיון בסביבות דיגיטליות ופיזיות בתחומים שונים",
      variant: "teal"
    }
  ];

  const getCardClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "card-purple";
      case "blue": return "card-blue";
      case "green": return "card-green";
      case "orange": return "card-orange";
      case "teal": return "card-teal";
      default: return "card-purple";
    }
  };

  const getIconClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "icon-purple";
      case "blue": return "icon-blue";
      case "green": return "icon-green";
      case "orange": return "icon-orange";
      case "teal": return "icon-teal";
      default: return "icon-purple";
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-25 to-blue-25">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            ✨ קצת עליי
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profileItems.map((item, index) => (
            <Card key={index} className={`${getCardClasses(item.variant)} hover:scale-105 transition-all duration-300`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconClasses(item.variant)}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-primary text-lg">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProfile;