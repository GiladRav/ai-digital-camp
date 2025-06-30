
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Monitor, DollarSign } from "lucide-react";

const CampDetails = () => {
  const details = [
    {
      title: "13.7.2025 - 17.7.2025",
      icon: Calendar,
      color: "text-status-info",
      bgColor: "bg-status-info-light"
    },
    {
      title: "10:00 - 14:30",
      icon: Clock,
      color: "text-status-success",
      bgColor: "bg-status-success-light"
    },
    {
      title: "מפגשים בזום",
      icon: Monitor,
      color: "text-brand-camp-purple",
      bgColor: "bg-purple-100"
    },
    {
      title: "1,400₪",
      icon: DollarSign,
      color: "text-status-warning",
      bgColor: "bg-status-warning-light"
    }
  ];

  return (
    <section className="py-12 section-bg-benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary-navy mb-4">
            פרטי המחנה
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {details.map((detail, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white border-brand-soft-lavender/30">
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
