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
  readonly IP_API_KEY: string;
};

export type TIPInfo = {
  country_code?: null | string;
  country_name?: null | string;
  city?: null | string;
  postal?: null | string;
  latitude?: null | number;
  longitude?: null | number;
  IPv4?: null | string;
  state?: null | string;
};
