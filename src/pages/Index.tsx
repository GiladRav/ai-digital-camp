
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import ProgramOverview from '@/components/home/ProgramOverview';
import BenefitsSection from '@/components/home/BenefitsSection';
import CampDetailsSection from '@/components/home/CampDetailsSection';
import TargetAudience from '@/components/home/TargetAudience';
import DailySchedule from '@/components/home/DailySchedule';
import OutcomesSection from '@/components/home/OutcomesSection';
import TeachingMethodology from '@/components/home/TeachingMethodology';
import ParentCommunication from '@/components/home/ParentCommunication';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProgramOverview />
      <BenefitsSection />
      <CampDetailsSection />
      <TargetAudience />
      <DailySchedule />
      <OutcomesSection />
      <TeachingMethodology />
      <ParentCommunication />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
