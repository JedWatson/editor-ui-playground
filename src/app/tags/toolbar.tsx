import { RiArrowDownSLine, RiBold, RiItalic } from 'react-icons/ri';

import { cls } from './cls';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`mr-1 my-1 py-1 px-2 flex items-center border border-transparent hover:border-slate-200 hover:bg-slate-100 rounded cursor-default`}
    >
      {children}
    </div>
  );
}

export function Toolbar() {
  return (
    <div className={`border-b mx-4 mt-1 py-1 text-sm ${cls.border} flex`}>
      <Button>
        <div className="mr-2">Paragraph</div>
        <RiArrowDownSLine />
      </Button>
      <Button>
        <RiBold />
      </Button>
      <Button>
        <RiItalic />
      </Button>
    </div>
  );
}
