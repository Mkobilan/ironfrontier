import { Rye, Playfair_Display, IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google';

export const rye = Rye({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-rye',
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-sans',
  display: 'swap',
});

export const ibmPlexSerif = IBM_Plex_Serif({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-serif',
  display: 'swap',
});

export const fontVariables = `${rye.variable} ${playfairDisplay.variable} ${ibmPlexSans.variable} ${ibmPlexSerif.variable}`;
