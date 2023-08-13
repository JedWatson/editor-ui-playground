'use client';

import { ChevronDown, ChevronRight, Image, Cog, Home } from 'lucide-react';
import { twMerge as m } from 'tailwind-merge';

import { nav } from '@/sites/thinkmill/meta';
import { useStickyState } from '@/lib/useStickyState';
import { ScrollArea } from '@/components/ui/scroll-area';

function Section({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="m-4 mb-6">
      {label && (
        <div className="my-1 select-none font-medium uppercase text-slate-500">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

function Item({
  children,
  icon: Icon,
  isSelected,
  onClick,
}: {
  children: React.ReactNode;
  icon?: React.JSXElementConstructor<any>;
  isSelected?: boolean;
  onClick?: () => void;
}) {
  const selectedStyles = isSelected
    ? 'bg-white border-slate-200'
    : 'cursor-pointer hover:border-slate-200 hover:bg-slate-100';
  return (
    <div
      className={m(
        `mb-1 flex select-none items-center gap-2 rounded-md border border-transparent px-2 py-1`,
        selectedStyles
      )}
      onClick={onClick}
    >
      {Icon ? (
        <Icon size={16} className="text-slate-500" />
      ) : (
        <div className="ml-1 mr-1 h-2 w-2 rounded-full bg-slate-200" />
      )}
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
        className="mb-2 flex cursor-pointer items-center gap-2 border border-transparent px-2 text-base font-medium"
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
  const [selectedItem, setSelectedItem] = useStickyState(
    undefined,
    'thinkmill-nav-selected-item'
  );
  return (
    <ScrollArea className="w-80 border-r bg-slate-50">
      <Section>
        <Item
          icon={Home}
          isSelected={selectedItem === 'dashboard'}
          onClick={() => setSelectedItem('dashboard')}
        >
          Dashboard
        </Item>
      </Section>
      {nav.sections.map((section) => (
        <Section key={section.label} label={section.label}>
          {section.items?.map((item) => {
            if (item.kind === 'group')
              return (
                <Group key={item.slug} label={item.label} slug={item.slug}>
                  {item.items?.map((item) => (
                    <Item
                      key={item.slug}
                      isSelected={selectedItem === item.slug}
                      onClick={() => setSelectedItem(item.slug)}
                    >
                      {item.label}
                    </Item>
                  ))}
                </Group>
              );
            return (
              <Item
                key={item.slug}
                isSelected={selectedItem === item.slug}
                onClick={() => setSelectedItem(item.slug)}
              >
                {item.label}
              </Item>
            );
          })}
        </Section>
      ))}
      <Section label="Cloud">
        <Item icon={Image}>Images</Item>
        <Item icon={Cog}>Settings</Item>
      </Section>
    </ScrollArea>
  );
}
