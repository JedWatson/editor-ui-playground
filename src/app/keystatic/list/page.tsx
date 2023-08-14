import { table } from 'console';
import { Header } from '../components';
import { Button } from '@/components/ui/button';

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
}: {
  name: string;
  status: 'unchanged' | 'changed' | 'new';
}) {
  const rowStyles = `
  group cursor-pointer text-sm outline-none rounded mx-6 px-2
  focus-visible:ring focus-visible:ring-ring focus-visible:ring-[2px] focus-visible:ring-offset-0 focus-visible:ring-blue-500
  `;
  // focus-visible:before:absolute focus-visible:before:w-1 focus-visible:before:h-[80%] focus-visible:before:rounded focus-visible:before:top-[10%] focus-visible:before:-left-3 focus-visible:before:bg-blue-500
  const cellStyles = `
  py-3 border-b flex items-center gap-2
  `;
  return (
    <a className={`${gridStyles} ${rowStyles}`} href="#">
      <div className={`${cellStyles} group-hover:underline`}>{name}</div>
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
  return (
    <>
      <Header title="Blog Posts">
        <Button variant="outline">Add</Button>
      </Header>
      <TableHeader />
      <Row name="my-blog-post" status="unchanged" />
      <Row name="another-blog-post" status="unchanged" />
      <Row name="cool-article" status="changed" />
      <Row name="ten-things-you-love-about-blogs" status="unchanged" />
    </>
  );
}
