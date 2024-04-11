import { TPropsWithChildren } from '@/types';
import { Footer, Header } from '@/components';

export default function Template({ children }: TPropsWithChildren) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
