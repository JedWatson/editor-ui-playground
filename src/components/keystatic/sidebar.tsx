'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';

import { nav } from '@/sites/thinkmill/meta';
import { useStickyState } from '@/lib/useStickyState';
import { ScrollArea } from '@/components/ui/scroll-area';

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <div className="mb-4 font-medium uppercase text-slate-500">{label}</div>
      {children}
    </div>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 flex items-center gap-1">
      <div className="ml-1 mr-2 h-2 w-2 rounded-full bg-slate-200" />
      {children}
    </div>
  );
}
function Group({
  children,
  label,
  slug,
}: {
  children: React.ReactNode;
  label: string;
  slug?: string;
}) {
  const [open, setOpen] = useStickyState(false, slug || '');
  return (
    <>
      <div
        className="mb-2 flex cursor-pointer items-center gap-2 text-base font-medium"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        {label}
      </div>
      {open && <div className="pl-4">{children}</div>}
    </>
  );
}

export function Sidebar() {
  return (
    <ScrollArea className="relative w-96 border-r bg-slate-50 p-4">
      {nav.sections.map((section) => (
        <Section key={section.label} label={section.label}>
          {section.items?.map((item) => {
            if (item.kind === 'group')
              return (
                <Group key={item.slug} label={item.label} slug={item.slug}>
                  {item.items?.map((item) => (
                    <Item key={item.slug}>{item.label}</Item>
                  ))}
                </Group>
              );
            return <Item key={item.slug}>{item.label}</Item>;
          })}
        </Section>
      ))}
    </ScrollArea>
  );
}
