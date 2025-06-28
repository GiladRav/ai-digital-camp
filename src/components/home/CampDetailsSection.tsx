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
      bgColor: "bg-blue-100"
    },
    {
      icon: Clock,
      title: "שעות",
      value: "10:00–14:30",
      subtitle: "4.5 שעות ביום",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Video,
      title: "פורמט",
      value: "מפגשים בזום",
      subtitle: "עם מדריך מומחה",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: DollarSign,
      title: "עלות",
      value: "1,400₪",
      subtitle: "כולל כל החומרים",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            פרטי המחנה
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {details.map((detail, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 ${detail.bgColor} rounded-full flex items-center justify-center mb-4`}>
                  <detail.icon className={`w-8 h-8 ${detail.color}`} />
                </div>
                <CardTitle className={`text-lg ${detail.color}`}>
                  {detail.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  {detail.value}
                </div>
                <p className="text-gray-600">
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
