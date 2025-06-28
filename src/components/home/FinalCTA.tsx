import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const FinalCTA = () => {
  const handleContact = () => {
    window.location.href = 'mailto:Gilad84@gmail.com';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          מוכנים להצטרף למהפכה דיגיטלית?
        </h2>
        
        <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-4xl mx-auto">
          הצטרפו עכשיו למחנה קיץ חדשני שיכין את דור העתיד לעולם של 2030
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
            <Link to="/register">
              להרשמה
              <ArrowRight className="mr-2 h-5 w-5" />
            </Link>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-600"
            onClick={handleContact}
          >
            <Mail className="mr-2 h-5 w-5" />
            צור קשר
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
