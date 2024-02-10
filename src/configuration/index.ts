import { TConfiguration } from '@/types';

const configuration = {
  APP_TITLE: process.env.NEXT_PUBLIC_APP_TITLE,
  COPYRIGHT: process.env.NEXT_PUBLIC_COPYRIGHT,
  BLOG_URL: process.env.NEXT_PUBLIC_BLOG_URL,
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
  EMAIL: process.env.NEXT_PUBLIC_EMAIL
} as TConfiguration;

export default configuration;