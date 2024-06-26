import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import './globals.css';
import { configuration } from '@/constants';
import { Footer, Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: configuration.APP_TITLE,
  description: '빠르게 나의 아이피 주소를 조회 할 수 있습니다.',
  openGraph: {
    title: configuration.APP_TITLE,
    description: '빠르게 나의 아이피 주소를 조회 할 수 있습니다.',
    url: 'https://my-ip-bluemiv.vercel.app/',
    siteName: configuration.APP_TITLE,
    images: [
      {
        url: 'https://my-ip-bluemiv.vercel.app/logo.png',
        width: 512,
        height: 512,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={classNames(inter.className)}>{children}</body>
    </html>
  );
}
