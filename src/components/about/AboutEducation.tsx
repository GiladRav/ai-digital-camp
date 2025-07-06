import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Award, FileText } from "lucide-react";

const AboutEducation = () => {
  const educationItems = [
    {
      icon: GraduationCap,
      title: "תואר שני ביישוב סכסוכים וגישור",
      content: "אוניברסיטת תל אביב",
      variant: "purple"
    },
    {
      icon: BookOpen,
      title: "תואר ראשון ביחסים בינלאומיים וסוציולוגיה",
      content: "האוניברסיטה העברית",
      variant: "blue"
    },
    {
      icon: FileText,
      title: "תעודת הוראה",
      content: "",
      variant: "green"
    },
    {
      icon: Award,
      title: "תעודת מגשר",
      content: "",
      variant: "orange"
    }
  ];

  const getCardClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "card-purple";
      case "blue": return "card-blue";
      case "green": return "card-green";
      case "orange": return "card-orange";
      default: return "card-purple";
    }
  };

  const getIconClasses = (variant: string) => {
    switch (variant) {
      case "purple": return "icon-purple";
      case "blue": return "icon-blue";
      case "green": return "icon-green";
      case "orange": return "icon-orange";
      default: return "icon-purple";
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            🎓 השכלה
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationItems.map((item, index) => (
            <Card key={index} className={`${getCardClasses(item.variant)} hover:scale-105 hover:-translate-y-4 transition-all duration-500 animate-fade-in group relative overflow-hidden border-l-4 border-l-primary/20 hover:border-l-primary`} style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="pb-6 relative">
                <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${getIconClasses(item.variant)} shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 mt-1`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-primary text-xl font-bold group-hover:text-secondary transition-colors duration-300 leading-tight mb-2">
                      {item.title}
                    </CardTitle>
                    {item.content && (
                      <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground transition-colors duration-300 font-medium">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;