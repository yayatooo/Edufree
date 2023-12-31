import { NextPage } from 'next';
import Head from 'next/head';
import Hero from '@/pages/components/Hero';
import BenefitSection from '@/pages/components/BenefitSection';
import AboutUs from '@/pages/components/AboutUs';
import Course from '@/pages/components/Course';
import Testimonies from '@/pages/components/Testimonies';
import FaqSection from '@/pages/components/FaqSection';
import LoginSection from '@/pages/components/LoginSection';
import BlogSection from '@/pages/components/BlogSection';
import FooterSection from '@/pages/components/FooterSection';
import Navbar from '@/pages/components/Navbar';

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>[EDUFREE] - App</title>
        <meta name="description" content="Generated by Create Next Stack." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <BenefitSection />
        <AboutUs />
        <Course />
        <Testimonies />
        <FaqSection />
        <LoginSection />
        <BlogSection />
        <FooterSection />
      </main>
    </>
  );
};

export default Index;
