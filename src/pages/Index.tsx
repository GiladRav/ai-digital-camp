import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import Vision from '@/components/home/Vision';
import CurrentSituation from '@/components/home/CurrentSituation';
import Mission from '@/components/home/Mission';
import TargetAudience from '@/components/home/TargetAudience';
import BenefitsSection from '@/components/home/BenefitsSection';
import OutcomesSection from '@/components/home/OutcomesSection';
import TeachingMethodology from '@/components/home/TeachingMethodology';
import DailySchedule from '@/components/home/DailySchedule';
import ParentCommunication from '@/components/home/ParentCommunication';
import CampDetails from '@/components/home/CampDetails';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Vision />
      <CurrentSituation />
      <Mission />
      <TargetAudience />
      <BenefitsSection />
      <OutcomesSection />
      <TeachingMethodology />
      <DailySchedule />
      <ParentCommunication />
      <CampDetails />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
