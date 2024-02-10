import { ReactNode } from 'react';

export type TPropsWithClassName<T = unknown> = T & { className?: string };

export type TPropsWithChildren<T = unknown> = T & { children?: ReactNode };

export type TPropsWithBasic<T = unknown> = T & TPropsWithClassName<T> & TPropsWithChildren<T>;

export type TConfiguration = {
  readonly APP_TITLE: string;
  readonly COPYRIGHT: string;
  readonly BLOG_URL: string;
  readonly GITHUB_URL: string;
  readonly EMAIL: string;
}