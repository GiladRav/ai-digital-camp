
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ProgramOverview from '@/components/home/ProgramOverview';
import BenefitsSection from '@/components/home/BenefitsSection';
import DailySchedule from '@/components/home/DailySchedule';
import OutcomesSection from '@/components/home/OutcomesSection';
import TargetAudience from '@/components/home/TargetAudience';
import TeachingMethodology from '@/components/home/TeachingMethodology';
import FAQSection from '@/components/home/FAQSection';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProgramOverview />
      <BenefitsSection />
      <DailySchedule />
      <OutcomesSection />
      <TargetAudience />
      <TeachingMethodology />
      <FAQSection />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
