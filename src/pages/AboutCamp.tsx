
import Layout from '@/components/Layout';
import CampHero from '@/components/camp/CampHero';
import GeneralOverview from '@/components/camp/GeneralOverview';
import CampGoals from '@/components/camp/CampGoals';
import CoreSubjects from '@/components/camp/CoreSubjects';
import InnovativeMethodology from '@/components/camp/InnovativeMethodology';
import AIPlatforms from '@/components/camp/AIPlatforms';
import TechRequirements from '@/components/camp/TechRequirements';
import DetailedDailyStructure from '@/components/camp/DetailedDailyStructure';
import CampCTA from '@/components/camp/CampCTA';

const AboutCamp = () => {
  return (
    <Layout>
      <CampHero />
      <GeneralOverview />
      <CampGoals />
      <CoreSubjects />
      <InnovativeMethodology />
      <AIPlatforms />
      <TechRequirements />
      <DetailedDailyStructure />
      <CampCTA />
    </Layout>
  );
};

export default AboutCamp;
