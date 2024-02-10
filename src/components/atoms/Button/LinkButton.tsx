import Link from 'next/link';
import classNames from 'classnames';
import { TPropsWithBasic } from '@/types';

interface TProps {
  target?: '_blank';
  href: string;
}

export default function LinkButton({ target, href, children, className }: TPropsWithBasic<TProps>) {
  return (
    <Link
      target={target}
      className={classNames(
        'text-primary hover:text-primary-hover active:text-primary-active',
        className,
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
