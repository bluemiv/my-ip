import dayjs from 'dayjs';
import { toDateYearString } from '@/features/date';
import configuration from '@/configuration';
import { Button, Icons } from '@/components';

export default function Footer() {
  return (
    <footer className="flex justify-center min-h-[150px] w-full bg-zinc-300 text-sm gap-md">
      <div className="h-full w-full px-lg py-xl max-w-[1200px] flex flex-col md:flex-row md:justify-between items-center gap-lg">
        <div>
          {['©', configuration.COPYRIGHT, toDateYearString(dayjs())].join(' ')}. All Rights
          Reserved.
        </div>
        <div className="w-[300px] flex flex-col justify-center gap-md md:gap-2xs">
          <div className="flex flex-col md:flex-row gap-sm items-center">
            <span>Blog</span>
            <Button.Link target="_blank" href={configuration.BLOG_URL}>
              {configuration.BLOG_URL}
            </Button.Link>
          </div>
          <div className="flex flex-col md:flex-row gap-sm items-center">
            <span className="flex items-center gap-xs">
              <Icons.Github />
              <span>Github</span>
            </span>
            <Button.Link target="_blank" href={configuration.GITHUB_URL}>
              {configuration.GITHUB_URL}
            </Button.Link>
          </div>
          <div className="flex flex-col md:flex-row gap-sm items-center">
            <span className="flex items-center gap-xs">
              <Icons.Email />
              <span>Email</span>
            </span>
            <Button.Link href={`to:${configuration.EMAIL}`}>{configuration.EMAIL}</Button.Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
