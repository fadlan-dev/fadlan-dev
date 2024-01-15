import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './globals.css';
import { ServerThemeProvider } from '@wits/next-themes';
import { IBM_Plex_Sans_Thai_Looped } from 'next/font/google';
import ScollTopButton from '@/components/ScollTopButton';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const roboto = IBM_Plex_Sans_Thai_Looped({
  weight: ['400', '500', '700'],
  subsets: ['thai'],
});

export const metadata = {
  title: 'Fadlan Jehteerokee',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute='class'>
      <html lang='en' className={roboto.className}>
        <body>
          <SpeedInsights />
          <ScollTopButton />
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </body>
      </html>
    </ServerThemeProvider>
  );
}
