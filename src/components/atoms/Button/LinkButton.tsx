import Link from 'next/link';
import classNames from 'classnames';
import { TPropsWithBasic } from '@/types';

interface TProps {
  href: string;
}

export default function LinkButton({ href, children, className }: TPropsWithBasic<TProps>) {
  return <Link className={classNames('text-primary hover:text-primary-hover active:text-primary-active', className)}
               href={href}>{children}</Link>;
}