'use client';

import { Toolbar } from '@/components/toolbar';
import { cls } from '@/components/cls';
import { currentTagContext, defaultCurrentTagContext } from './tags';
import { useState } from 'react';

export function Editor({ children }: { children: React.ReactNode }) {
  const [currentTagState, setCurrentTagState] = useState(
    defaultCurrentTagContext
  );
  return (
    <currentTagContext.Provider
      value={{ state: currentTagState, setState: setCurrentTagState }}
    >
      <div
        className={`w-full max-w-5xl mb-12 items-center border ${cls.border} rounded-lg shadow-md shadow-slate-100`}
      >
        <Toolbar />
        {children}
      </div>
    </currentTagContext.Provider>
  );
}

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="p-6 outline-none"
      contentEditable
      suppressContentEditableWarning
    >
      {children}
    </div>
  );
}

export function AuthorNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 w-full max-w-5xl bg-yellow-50 border-yellow-200 border rounded-md">
      <div className="text-yellow-700 text-sm font-semibold mb-2">
        Author&rsquo;s note:
      </div>
      <div className="text-yellow-900 font-serif text-lg">{children}</div>
    </div>
  );
}

export function Markdoc({ content }: { content: string }) {
  return (
    <div className="w-full max-w-5xl">
      <pre
        className="whitespace-break-spaces p-2"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
