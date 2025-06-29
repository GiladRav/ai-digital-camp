
import Layout from '@/components/Layout';
import ProgramHero from '@/components/program/ProgramHero';
import ProgramMission from '@/components/program/ProgramMission';
import ProgramRationale from '@/components/program/ProgramRationale';
import CoreSubjects from '@/components/program/CoreSubjects';
import AIPlatformsSection from '@/components/program/AIPlatformsSection';
import ExpectedOutcomes from '@/components/program/ExpectedOutcomes';
import ParentCommunication from '@/components/program/ParentCommunication';
import TechRequirements from '@/components/program/TechRequirements';
import LongTermGoals from '@/components/program/LongTermGoals';
import DailyScheduleDetailed from '@/components/program/DailyScheduleDetailed';
import ProgramCTA from '@/components/program/ProgramCTA';

const Program = () => {
  return (
    <Layout>
      <ProgramHero />
      <ProgramMission />
      <ProgramRationale />
      <CoreSubjects />
      <AIPlatformsSection />
      <ExpectedOutcomes />
      <ParentCommunication />
      <TechRequirements />
      <LongTermGoals />
      <DailyScheduleDetailed />
      <ProgramCTA />
    </Layout>
  );
};

export default Program;
