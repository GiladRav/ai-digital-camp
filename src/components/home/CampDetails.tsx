
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Monitor, DollarSign } from "lucide-react";

const CampDetails = () => {
  const details = [
    {
      title: "13.7.2025 - 17.7.2025",
      icon: Calendar,
      color: "#2563EB",
      bgColor: "#EFF6FF",
      borderColor: "#BFDBFE",
      iconBg: "#BFDBFE"
    },
    {
      title: "10:00 - 14:30",
      icon: Clock,
      color: "#16A34A",
      bgColor: "#F0FDF4",
      borderColor: "#BBF7D0",
      iconBg: "#86EFAC"
    },
    {
      title: "מפגשים בזום",
      icon: Monitor,
      color: "#181259",
      bgColor: "#F3E8FF",
      borderColor: "#E9D5FF",
      iconBg: "#DDD6FE"
    },
    {
      title: "1,400₪",
      icon: DollarSign,
      color: "#EA580C",
      bgColor: "#FFF7ED",
      borderColor: "#FED7AA",
      iconBg: "#FDBA74"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#181259' }}>
            פרטי המחנה
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {details.map((detail, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-shadow border-2"
              style={{ 
                backgroundColor: detail.bgColor,
                borderColor: detail.borderColor
              }}
            >
              <CardHeader className="pb-3">
                <div 
                  className="mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: detail.iconBg }}
                >
                  <detail.icon className="w-7 h-7" style={{ color: detail.color }} />
                </div>
                <CardTitle className="text-lg" style={{ color: detail.color }}>
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
