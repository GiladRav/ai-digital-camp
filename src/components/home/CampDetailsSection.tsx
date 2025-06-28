
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Video, DollarSign } from "lucide-react";

const CampDetailsSection = () => {
  const details = [
    {
      icon: Calendar,
      title: "תאריכים",
      value: "13.7.2025 – 17.7.2025",
      subtitle: "ראשון – חמישי",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Clock,
      title: "שעות",
      value: "10:00–14:30",
      subtitle: "4.5 שעות ביום",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Video,
      title: "פורמט",
      value: "מפגשים בזום",
      subtitle: "עם מדריך מומחה",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: DollarSign,
      title: "עלות",
      value: "1,400₪",
      subtitle: "כולל כל החומרים",
      color: "text-orange-600",      
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            פרטי המחנה
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map((detail, index) => (
            <Card key={index} className={`${detail.bgColor} border-2 ${detail.borderColor} hover:shadow-md transition-all duration-300`}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm`}>
                    <detail.icon className={`w-5 h-5 ${detail.color}`} />
                  </div>
                  <CardTitle className={`text-lg ${detail.color}`}>
                    {detail.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xl font-bold text-gray-900 mb-1">
                  {detail.value}
                </div>
                <p className="text-gray-600 text-sm">
                  {detail.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampDetailsSection;
