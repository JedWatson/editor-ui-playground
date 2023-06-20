import { Header } from '@/components/keystatic/header';
import { Sidebar } from '@/components/keystatic/sidebar';

export default function KeystaticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex h-1 grow">
        <Sidebar />
        <div className="h-1 grow">{children}</div>
      </div>
    </div>
  );
}
