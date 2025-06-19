
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink, Brain, Sparkles } from 'lucide-react';

const AIPlatformsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse mb-4">
            <Brain className="w-8 h-8 text-purple-600" />
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            פלטפורמות AI מתקדמות בקייטנה
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
            נכיר למעלה מ-10 פלטפורמות AI מובילות ונלמד לרתום את כוחן ליצירת אפליקציות מקצועיות
          </p>
        </div>
        <div className="text-center">
          <Link to="/platforms">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90">
              <ExternalLink className="w-5 h-5 mr-2" />
              צפה בפירוט מלא של הפלטפורמות
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AIPlatformsSection;
