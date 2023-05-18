'use client';

import { MouseEvent, createContext, useContext, useId } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

type TagId = string | undefined;
type TagContext = { id?: TagId; parents: TagId[] };

export const tagContext = createContext<TagContext>({ parents: [] });

export const defaultCurrentTagContext = {
  parents: [],
};
export const currentTagContext = createContext<{
  state: TagContext;
  setState: any;
}>({
  state: defaultCurrentTagContext,
  setState: () => null,
});

function useCurrentTag(_id?: string) {
  const { id } = useContext(tagContext);
  const { state } = useContext(currentTagContext);
  const thisTagId = _id || id;
  return {
    isCurrent: thisTagId == state.id,
    isParent: state.parents && state.parents.includes(thisTagId),
  };
}

export function TagBoundary({
  children,
  border: _border,
}: {
  children: React.ReactNode;
  border?: 'normal' | 'strong';
}) {
  const id = useId();
  const pc = useContext(tagContext);
  const parents = pc.id ? [...pc.parents, pc.id] : [];
  const currentTag = useContext(currentTagContext);
  const { isCurrent, isParent } = useCurrentTag(id);
  const mouseOver = (e: MouseEvent<HTMLDivElement>) => {
    currentTag.setState({ id, parents });
    e.stopPropagation();
  };
  const onMouseOut = (e: MouseEvent<HTMLDivElement>) => {
    currentTag.setState({});
    e.stopPropagation();
  };
  const borderColor = isCurrent
    ? _border === 'strong'
      ? 'border-sky-500'
      : 'border-sky-400'
    : isParent
    ? _border === 'strong'
      ? 'border-slate-300'
      : 'border-sky-200'
    : _border === 'strong'
    ? 'border-slate-200'
    : 'border-slate-100';

  const border = {
    normal: 'border',
    strong: 'border-2',
  }[_border || 'normal'];

  return (
    <tagContext.Provider
      value={{
        id,
        parents,
      }}
    >
      <div
        className={`group ${border} ${borderColor} transition-colors rounded-md mb-4`}
        onMouseOver={mouseOver}
        onMouseOut={onMouseOut}
      >
        {children}
      </div>
    </tagContext.Provider>
  );
}

export function TagName({ children }: { children: React.ReactNode }) {
  const { isCurrent, isParent } = useCurrentTag();
  const colors =
    isCurrent || isParent
      ? 'bg-slate-100 text-slate-500'
      : 'bg-slate-50  text-slate-400';
  return (
    <div
      className={`uppercase font-semibold inline-block py-1 px-3 mr-1 text-sm rounded-br-md rounded-tl-md ${colors} transition-colors`}
    >
      {children}
    </div>
  );
}

export function TagToolbar({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-flow-col">{children}</div>;
}

export function TagButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-1 px-1 rounded flex items-center justify-center text-sm bg-slate-50 text-slate-500 font-medium">
      {children}
    </div>
  );
}

export function TagDropdown() {
  const { isCurrent, isParent } = useCurrentTag();
  const opacity = isCurrent ? 'opacity-100' : 'opacity-0';
  return (
    <div
      className={`m-1 px-1 rounded flex items-center justify-center text-sm ${opacity} bg-slate-50 hover:bg-sky-100 text-slate-500 hover:text-sky-600 transition-all cursor-pointer font-medium`}
    >
      <ChevronDownIcon />
    </div>
  );
}

export function TagProperty({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <div className="mx-2 mt-2">
      <TagPropertyLabel>{label}</TagPropertyLabel>
      <TagPropertyValue>{children}</TagPropertyValue>
    </div>
  );
}
export function TagPropertyLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-1 uppercase text-xs font-semibold text-slate-400">
      {children}
    </div>
  );
}
export function TagPropertyValue({ children }: { children: React.ReactNode }) {
  return <div className="mx-1">{children}</div>;
}

export function TagContent({
  children,
  border,
}: {
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <div className={`mx-3 my-3 ${border ? 'border-t pt-3' : ''}`}>
      {children}
    </div>
  );
}
export function TagContentButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2 text-sm rounded-md bg-slate-50 hover:bg-sky-100 text-slate-500 hover:text-sky-600 transition-colors cursor-pointer uppercase font-semibold">
      <div className="flex items-center justify-center">{children}</div>
    </div>
  );
}
