
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import VisionSection from '@/components/home/VisionSection';
import NeedSolutionApproach from '@/components/home/NeedSolutionApproach';
import WhyDifferent from '@/components/home/WhyDifferent';
import TargetAudience from '@/components/home/TargetAudience';
import ProgramGoals from '@/components/home/ProgramGoals';
import OutcomesSection from '@/components/home/OutcomesSection';
import TeachingMethodology from '@/components/home/TeachingMethodology';
import DailySchedule from '@/components/home/DailySchedule';
import ParentCommunication from '@/components/home/ParentCommunication';
import CostAndSafety from '@/components/home/CostAndSafety';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <VisionSection />
      <NeedSolutionApproach />
      <WhyDifferent />
      <TargetAudience />
      <ProgramGoals />
      <OutcomesSection />
      <TeachingMethodology />
      <DailySchedule />
      <ParentCommunication />
      <CostAndSafety />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
