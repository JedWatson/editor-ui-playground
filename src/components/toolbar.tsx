import {
  ChevronDownIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons';

import { cls } from './cls';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`mr-1 my-1 py-1 px-2 flex items-center border border-transparent hover:border-slate-400/40 hover:bg-slate-200/40 rounded cursor-default`}
    >
      {children}
    </div>
  );
}

export function Toolbar() {
  return (
    <div className="sticky top-0 bg-white/80 backdrop-blur">
      <div
        className={`border-b border-slate-400/50 mx-4 mt-1 py-1 text-sm ${cls.border} flex`}
      >
        <Button>
          <div className="mr-2">Paragraph</div>
          <ChevronDownIcon />
        </Button>
        <Button>
          <FontBoldIcon className="text-base" />
        </Button>
        <Button>
          <FontItalicIcon className="text-base" />
        </Button>
      </div>
    </div>
  );
}
