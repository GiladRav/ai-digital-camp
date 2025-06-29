
import Layout from '@/components/Layout';
import AboutHero from '@/components/about/AboutHero';
import MissionStatement from '@/components/about/MissionStatement';
import OurValues from '@/components/about/OurValues';
import WhyThisProgram from '@/components/about/WhyThisProgram';
import ProgramGoals from '@/components/about/ProgramGoals';
import EducationalApproach from '@/components/about/EducationalApproach';
import TeamExperience from '@/components/about/TeamExperience';
import AboutCTA from '@/components/about/AboutCTA';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <MissionStatement />
      <OurValues />
      <WhyThisProgram />
      <ProgramGoals />
      <EducationalApproach />
      <TeamExperience />
      <AboutCTA />
    </Layout>
  );
};

export default About;
