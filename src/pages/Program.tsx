
import Layout from '@/components/Layout';
import ProgramHero from '@/components/program/ProgramHero';
import ProgramRationale from '@/components/program/ProgramRationale';
import DailyScheduleDetailed from '@/components/program/DailyScheduleDetailed';
import CoreSubjects from '@/components/program/CoreSubjects';
import AIPlatformsSection from '@/components/program/AIPlatformsSection';
import ExpectedOutcomes from '@/components/program/ExpectedOutcomes';
import TeachingMethodologyProgram from '@/components/program/TeachingMethodologyProgram';
import ParentCommunication from '@/components/program/ParentCommunication';
import ProgramCTA from '@/components/program/ProgramCTA';

const Program = () => {
  return (
    <Layout>
      <ProgramHero />
      <ProgramRationale />
      <DailyScheduleDetailed />
      <CoreSubjects />
      <AIPlatformsSection />
      <ExpectedOutcomes />
      <TeachingMethodologyProgram />
      <ParentCommunication />
      <ProgramCTA />
    </Layout>
  );
};

export default Program;
