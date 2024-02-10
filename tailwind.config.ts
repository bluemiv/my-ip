import type { Config } from 'tailwindcss';

const space = {
  '2xs': '0.25rem',
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '5rem'
};

const primaryColor = {
  primary: '#096dd9',
  'primary-hover': '#1890ff',
  'primary-active': '#0050b3'
};

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ...primaryColor
      },
      padding: {
        ...space
      },
      margin: {
        ...space
      },
      gap: {
        ...space
      }
    }
  },
  plugins: []
};
export default config;
