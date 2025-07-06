import Layout from '@/components/Layout';
import AboutHero from '@/components/about/AboutHero';
import AboutProfile from '@/components/about/AboutProfile';
import AboutExpertise from '@/components/about/AboutExpertise';
import AboutLectures from '@/components/about/AboutLectures';
import AboutEducation from '@/components/about/AboutEducation';
import AboutExperience from '@/components/about/AboutExperience';
import AboutCTA from '@/components/about/AboutCTA';

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <AboutProfile />
      <AboutExpertise />
      <AboutLectures />
      <AboutEducation />
      <AboutExperience />
      <AboutCTA />
    </Layout>
  );
};

export default About;
