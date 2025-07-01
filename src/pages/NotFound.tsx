
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative text-white py-20 px-4" style={{ 
        backgroundImage: 'linear-gradient(rgba(24, 18, 89, 0.4), rgba(24, 18, 89, 0.4)), url("/visuals/1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" style={{ color: '#FFD84C' }}>
            404 - דף לא נמצא
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white max-w-4xl mx-auto">
            הדף שחיפשתם לא קיים. חזרו לדף הבית או השתמשו בתפריט הניווט
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="font-semibold text-lg px-8 py-3"
              style={{ 
                backgroundColor: '#FFD84C',
                color: '#181259',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EAB100';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFD84C';
              }}
            >
              <Link to="/">
                חזרה לדף הבית
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
