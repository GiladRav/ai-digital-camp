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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profileItems.map((item, index) => (
            <Card key={index} className={`${getCardClasses(item.variant)} hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-fade-in group`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center ${getIconClasses(item.variant)} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-primary text-xl font-bold group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors duration-300">
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