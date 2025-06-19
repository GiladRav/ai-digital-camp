
import Layout from '@/components/Layout';
import ProgramHero from '@/components/program/ProgramHero';
import ProgramRationale from '@/components/program/ProgramRationale';
import CoreSubjects from '@/components/program/CoreSubjects';
import ExpectedOutcomes from '@/components/program/ExpectedOutcomes';
import DailyScheduleDetailed from '@/components/program/DailyScheduleDetailed';
import AIPlatformsSection from '@/components/program/AIPlatformsSection';
import TeachingMethodologyProgram from '@/components/program/TeachingMethodologyProgram';
import ProgramCTA from '@/components/program/ProgramCTA';

const Program = () => {
  return (
    <Layout>
      <ProgramHero />
      <ProgramRationale />
      <CoreSubjects />
      <ExpectedOutcomes />
      <DailyScheduleDetailed />
      <AIPlatformsSection />
      <TeachingMethodologyProgram />
      <ProgramCTA />
    </Layout>
  );
};

export default Program;
