import HeroSection from '../components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorkSection from '@/components/WorkSection';

import projects from '@/constants/projects.json';
import ContactSection from '@/components/ContactSection';
import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <Script src='https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID' />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-5N4MXQ8XVZ');
        `}
      </Script>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <WorkSection data={projects} />
      <ContactSection />
    </main>
  );
}
