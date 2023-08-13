import { Plus } from 'lucide-react';

import { Header } from './components';

function Section({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="m-8">
      {label && (
        <div className="my-4 select-none text-sm font-medium uppercase text-slate-500">
          {label}
        </div>
      )}
      <div className="grid grid-cols-3 justify-items-stretch gap-4">
        {children}
      </div>
    </div>
  );
}

function Card({
  label,
  count,
  add,
}: {
  label: string;
  count?: number;
  add?: boolean;
}) {
  const cardStyles = `
  before:absolute before:block before:h-full before:w-full before:rounded-md before:border before:-m-4
  hover:before:border-sky-400 hover:before:shadow hover:before:shadow-sky-100
  focus-visible:before:outline focus-visible:before:outline-2 focus-visible:before:outline-offset-2 focus-visible:before:outline-blue-500
  `;
  const linkStyles = `
  font-medium outline-none focus:outline-none hover:text-sky-700
  `;
  const buttonStyles = `
  relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-slate-50 p-1 shadow-sm outline-offset-2
  hover:border-emerald-500 hover:bg-emerald-50
  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
  `;
  return (
    <div className="relative flex justify-between p-4">
      <div>
        <a
          href="/keystatic/list"
          className={`block ${linkStyles} ${cardStyles}`}
        >
          {label}
        </a>
        {count ? (
          <div className="mt-2 text-sm text-slate-400">
            {count} {count > 1 ? 'entries' : 'entry'}
          </div>
        ) : null}
      </div>

      {add ? (
        <a href="#" className={buttonStyles}>
          <Plus width="16" />
        </a>
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Header title="Dashboard" />
      <Section label="Collections">
        <Card label="Docs pages" count={33} add />
        <Card label="Blog posts" count={1} add />
        <Card label="Authors" count={3} add />
      </Section>
      <Section label="Collections">
        <Card label="Navigation" />
      </Section>
    </>
  );
}
