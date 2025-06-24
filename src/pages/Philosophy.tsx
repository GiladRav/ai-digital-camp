
import Layout from '@/components/Layout';
import PhilosophyHero from '@/components/philosophy/PhilosophyHero';
import EducationalApproach from '@/components/philosophy/EducationalApproach';
import InstructorRole from '@/components/philosophy/InstructorRole';
import Mission from '@/components/philosophy/Mission';
import CoreValues from '@/components/philosophy/CoreValues';
import DigitalCampNeed from '@/components/philosophy/DigitalCampNeed';
import AssessmentTracking from '@/components/philosophy/AssessmentTracking';
import SuccessMetrics from '@/components/philosophy/SuccessMetrics';

const Philosophy = () => {
  return (
    <Layout>
      <PhilosophyHero />
      <EducationalApproach />
      <InstructorRole />
      <Mission />
      <CoreValues />
      <DigitalCampNeed />
      <AssessmentTracking />
      <SuccessMetrics />
    </Layout>
  );
};

export default Philosophy;
