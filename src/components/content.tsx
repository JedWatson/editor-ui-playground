import { ReaderIcon, QuoteIcon } from '@radix-ui/react-icons';
import {
  TagBoundary,
  TagButton,
  TagContent,
  TagDropdown,
  TagName,
  TagToolbar,
} from './tags';

export function Tag({
  children,
  name,
  attrs,
  menu,
}: {
  children: React.ReactNode;
  name: string;
  attrs?: string[];
  menu?: boolean;
}) {
  return (
    <TagBoundary>
      <div className="flex">
        <TagName>{name}</TagName>
        <TagToolbar>
          {attrs?.map((i) => (
            <TagButton key={i}>{i}</TagButton>
          ))}
          {menu && <TagDropdown />}
        </TagToolbar>
      </div>
      <TagContent>{children}</TagContent>
    </TagBoundary>
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
    <div className="my-4 py-1">
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

export function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 pl-3 py-1 border-l-4">
      {/* <div className="mb-1 flex items-center gap-2 text-slate-500">
        <QuoteIcon />
      </div> */}
      {children}
    </div>
  );
}

export function Link({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <span className="text-sky-800 underline" title={href}>
      {children}
    </span>
  );
}
