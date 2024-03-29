import { Button } from '@/components';
import { configuration, ROUTE_PATH } from '@/constants';

export default function Header() {
  return (
    <header className="p-md w-full h-[60px] sticky top-0 right-0 flex items-center">
      <Button.Link className="font-bold" href={ROUTE_PATH.ROOT}>
        {configuration.APP_TITLE}
      </Button.Link>
    </header>
  );
}
