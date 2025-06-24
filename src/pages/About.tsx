import Layout from '@/components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            אודות
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            הכירו את האנשים מאחורי הקייטנה החדשנית הזו
          </p>
        </div>
      </section>

      {/* General Introduction - New Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
            פתיח כללי
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            [פתיח אישי של המייסד עם המוטיבציה והגישה - יתווסף בפרומפט הבא]
          </p>
        </div>
      </section>

      {/* Background and Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
            הרקע והניסיון שלי
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            [תוכן קיים יישמר - יעודכן בפרומפט הבא]
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
