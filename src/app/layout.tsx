import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import classNames from 'classnames';
import configuration from '../configuration';
import { Header, Footer } from '@/features/layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: configuration.APP_TITLE,
  description: 'Generated by create next app',
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
      <body className={classNames(inter.className, 'min-w-screen min-h-screen flex flex-col')}>
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
