import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Palette, Brain, Code } from "lucide-react";

const AIPlatformsSection = () => {
  const platformCategories = [
    {
      title: "מנועי שפה טבעית ומחקר",
      icon: <Search className="w-6 h-6" style={{ color: '#181259' }} />,
      color: "bg-[#181259]",
      textColor: "text-[#181259]",
      borderColor: "border-[#181259]",
      bgLight: "bg-[#F3F4F6]",
      platforms: [
        { name: "ChatGPT" },
        { name: "Claude" },
        { name: "Perplexity" }
      ]
    },
    {
      title: "עיצוב ויצירת תוכן ויזואלי",
      icon: <Palette className="w-6 h-6" style={{ color: '#181259' }} />,
      color: "bg-[#181259]",
      textColor: "text-[#181259]",
      borderColor: "border-[#181259]",
      bgLight: "bg-[#F3F4F6]",
      platforms: [
        { name: "Gamma AI" },
        { name: "Canva AI" },
        { name: "Rosebud AI" }
      ]
    },
    {
      title: "פלטפורמות ללא-קוד וסימולציות",
      icon: <Brain className="w-6 h-6" style={{ color: '#181259' }} />,
      color: "bg-[#181259]",
      textColor: "text-[#181259]",
      borderColor: "border-[#181259]",
      bgLight: "bg-[#F3F4F6]",
      platforms: [
        { name: "Lovable.dev" },
        { name: "Base44" },
        { name: "Websim" }
      ]
    },
    {
      title: "פיתוח ותכנות מתקדם",
      icon: <Code className="w-6 h-6" style={{ color: '#181259' }} />,
      color: "bg-[#181259]",
      textColor: "text-[#181259]",
      borderColor: "border-[#181259]",
      bgLight: "bg-[#F3F4F6]",
      platforms: [
        { name: "Bubble" },
        { name: "Firebase Studio" },
        { name: "Google AI Studio" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#181259' }}>
            פלטפורמות בינה מלאכותית
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            היכרות מעשית עם הכלים המתקדמים ביותר בעולם הבינה המלאכותית
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-white">
                <TableHead className="text-right font-bold text-lg text-[#181259]">קטגוריה</TableHead>
                <TableHead className="text-right font-bold text-lg text-[#181259]">פלטפורמות</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {platformCategories.map((category, index) => (
                <TableRow key={index} className={`${category.borderColor} border-r-4 ${category.bgLight}`}>
                  <TableCell className={`font-semibold ${category.textColor} text-lg`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center text-white shadow-md`}>
                        {category.icon}
                      </div>
                      {category.title}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {category.platforms.map((platform, platformIndex) => (
                        <span 
                          key={platformIndex}
                          className={`px-4 py-2 rounded-full text-sm font-medium bg-[#181259] text-white shadow-sm`}
                        >
                          {platform.name}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default AIPlatformsSection;
