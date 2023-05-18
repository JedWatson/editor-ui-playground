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
        className={`w-full max-w-5xl items-center border ${cls.border} rounded-lg shadow-md shadow-slate-100`}
      >
        <Toolbar />
        {children}
      </div>
    </currentTagContext.Provider>
  );
}

export function Content({ children }: { children: React.ReactNode }) {
  return <div className="p-6">{children}</div>;
}
