'use client';

import { Header } from '../components';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

const gridStyles = `
relative grid grid-cols-[1fr_200px]
`;

function TableHeader() {
  const tableStyles = `
  mt-4 mx-8 border-b py-2 text-sm font-semibold uppercase text-slate-500
  `;
  return (
    <div className={`${gridStyles} ${tableStyles}`}>
      <div>label</div>
      <div>status</div>
    </div>
  );
}

function Row({
  name,
  status,
  alt,
}: {
  name: string;
  status: 'unchanged' | 'changed' | 'new';
  alt: boolean;
}) {
  const rowStyles = `
  group cursor-pointer text-sm outline-none
  ${
    alt
      ? `mx-7 px-px rounded hover:bg-slate-50 focus-visible:before:absolute focus-visible:before:w-1 focus-visible:before:h-[80%] focus-visible:before:rounded focus-visible:before:top-[10%] focus-visible:before:-left-1 focus-visible:before:bg-blue-500`
      : `rounded mx-6 px-2 focus-visible:ring focus-visible:ring-ring focus-visible:ring-[2px] focus-visible:ring-offset-0 !ring-blue-500`
  }
  `;
  const cellStyles = `
  py-3 flex items-center gap-2 border-b ${alt ? 'px-1' : ''}
  `;
  const nameStyles = alt ? `` : `group-hover:underline`;
  return (
    <a className={`${gridStyles} ${rowStyles}`} href="#">
      <div className={`${cellStyles} ${nameStyles}`}>{name}</div>
      {status === 'unchanged' ? (
        <div className={`${cellStyles}`}>
          <div className="ml-1 mr-1 h-2 w-2 rounded-full bg-slate-200" />
          Unchanged
        </div>
      ) : status === 'changed' ? (
        <div className={`${cellStyles}`}>
          <div className="ml-1 mr-1 h-2 w-2 rounded-full bg-sky-500" />
          Changed
        </div>
      ) : (
        <div className={`${cellStyles}`}>no status</div>
      )}
    </a>
  );
}

export default function Page() {
  const [alt, setAlt] = useState(false);
  return (
    <>
      <Header title="Blog Posts">
        <Button variant="outline">Add</Button>
      </Header>
      <div className="mx-8 my-4 flex items-center gap-2">
        <Switch
          id="alternate"
          checked={alt}
          onCheckedChange={() => setAlt(!alt)}
        />
        <Label htmlFor="alternate">Alternate Style</Label>
      </div>
      <TableHeader />
      <Row name="my-blog-post" status="unchanged" alt={alt} />
      <Row name="another-blog-post" status="unchanged" alt={alt} />
      <Row name="cool-article" status="changed" alt={alt} />
      <Row
        name="ten-things-you-love-about-blogs"
        status="unchanged"
        alt={alt}
      />
    </>
  );
}
