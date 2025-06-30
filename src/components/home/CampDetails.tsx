import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Monitor, DollarSign } from "lucide-react";

const CampDetails = () => {
  const details = [
    {
      title: "13.7.2025 - 17.7.2025",
      icon: Calendar,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      title: "10:00 - 14:30",
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "מפגשים בזום",
      icon: Monitor,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      title: "1,400₪",
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            פרטי המחנה
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {details.map((detail, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className={`mx-auto w-14 h-14 ${detail.bgColor} rounded-full flex items-center justify-center mb-3`}>
                  <detail.icon className={`w-7 h-7 ${detail.color}`} />
                </div>
                <CardTitle className={`${detail.color} text-lg`}>
                  {detail.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampDetails; 