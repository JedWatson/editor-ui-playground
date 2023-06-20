import { Header } from '@/components/keystatic/header';
import { Sidebar } from '@/components/keystatic/sidebar';

function Content() {
  return <div className="p-4">(content)</div>;
}

export default function Page() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex grow">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
