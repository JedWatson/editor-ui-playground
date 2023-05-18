import { ReaderIcon, QuoteIcon } from '@radix-ui/react-icons';
import { TagButton } from './tags';

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 pl-3 py-1 border-l-4">
      <div className="mb-1 flex items-center gap-2 text-slate-500">
        <QuoteIcon />
      </div>
      {children}
    </div>
  );
}

export function Paragraph({
  children,
  cls,
}: {
  children: React.ReactNode;
  cls?: string;
}) {
  return cls ? (
    <div className="my-4 pl-3 py-1 border-l-4">
      <div className="mb-1 flex items-center gap-2 text-slate-500">
        <ReaderIcon />
        <TagButton>{cls}</TagButton>
      </div>
      {children}
    </div>
  ) : (
    <div className="my-4">{children}</div>
  );
}
