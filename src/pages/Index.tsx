
import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import MeaningfulFun from '@/components/home/MeaningfulFun';
import TargetAudience from '@/components/home/TargetAudience';
import CampWithApp from '@/components/home/CampWithApp';
import AdditionalInfo from '@/components/home/AdditionalInfo';
import GeneralGoals from '@/components/home/GeneralGoals';
import UniqueCamp from '@/components/home/UniqueCamp';
import DailyContent from '@/components/home/DailyContent';
import TeachingApproach from '@/components/home/TeachingApproach';
import ParentCommunication from '@/components/home/ParentCommunication';
import CostAndSupport from '@/components/home/CostAndSupport';
import QuickFAQ from '@/components/home/QuickFAQ';
import FinalCTA from '@/components/home/FinalCTA';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MeaningfulFun />
      <TargetAudience />
      <CampWithApp />
      <AdditionalInfo />
      <GeneralGoals />
      <UniqueCamp />
      <DailyContent />
      <TeachingApproach />
      <ParentCommunication />
      <CostAndSupport />
      <QuickFAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
