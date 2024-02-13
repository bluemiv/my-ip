import { TConfiguration } from '@/types';

export const configuration = {
  APP_TITLE: process.env.NEXT_PUBLIC_APP_TITLE,
  COPYRIGHT: process.env.NEXT_PUBLIC_COPYRIGHT,
  BLOG_URL: process.env.NEXT_PUBLIC_BLOG_URL,
  GITHUB_URL: process.env.NEXT_PUBLIC_GITHUB_URL,
  EMAIL: process.env.NEXT_PUBLIC_EMAIL,
  IP_API_KEY: process.env.NEXT_PUBLIC_IP_API_KEY,
} as TConfiguration;

export const DATE_FORMAT = {
  SHORT_YEAR: 'YY',
  YEAR: 'YYYY',
  DATE: 'YYYY-MM-DD',
  DATETIME: 'YYYY-MM-DD HH:mm:ss',
} as const;

export const ROUTE_PATH = {
  ROOT: '/',
} as const;
