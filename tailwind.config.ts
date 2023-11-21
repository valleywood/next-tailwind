import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: () => ({
      // We added here our new color named "brand"
      brand: {
        secondaryContrast: 'rgb(0,0,0)',
        sustainabilityContrast: 'rgb(255,255,255)',
        sustainabilityMain: 'rgb(66,128,101)',
        headerContrast: 'rgb(17,17,17)',
        headerMain: 'rgb(255,255,255)',
        primaryContrast: 'rgb(17,17,17)',
        searchMain: 'rgb(241,242,243)',
        searchContrast: 'rgb(17,17,17)',
        badgeContrast: 'rgb(255,255,255)',
        secondaryMain: 'rgb(241,242,243)',
        badgeMain: 'rgb(114,110,110)',
        headerSale: 'rgb(233,0,41)',
        primaryMain: 'rgb(255,255,255)',
      },
    }),
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
