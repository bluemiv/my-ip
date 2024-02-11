import dayjs from 'dayjs';
import { toDateYearString } from '@/features/date';
import configuration from '@/configuration';
import { Button, Icons } from '@/components';

export default function Footer() {
  return (
    <footer className="flex justify-center h-[250px] w-full bg-zinc-300 text-sm gap-md">
      <div className="h-full w-full max-w-[1200px] flex justify-between items-center">
        <div>{['©', configuration.COPYRIGHT, toDateYearString(dayjs())].join(' ')}</div>
        <div className="w-[300px] flex flex-col justify-center gap-2xs">
          <div className="flex gap-sm items-center">
            <span>Blog</span>
            <Button.Link target="_blank" href={configuration.BLOG_URL}>
              {configuration.BLOG_URL}
            </Button.Link>
          </div>
          <div className="flex gap-sm items-center">
            <span className="flex items-center gap-xs">
              <Icons.Github />
              <span>Github</span>
            </span>
            <Button.Link target="_blank" href={configuration.GITHUB_URL}>
              {configuration.GITHUB_URL}
            </Button.Link>
          </div>
          <div className="flex gap-sm items-center">
            <span className="flex items-center gap-xs">
              <Icons.Email />
              <span>Email</span>
            </span>
            <Button.Link target="_blank" href={`to:${configuration.EMAIL}`}>
              {configuration.EMAIL}
            </Button.Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
