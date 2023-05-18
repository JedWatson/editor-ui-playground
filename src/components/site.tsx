import { ChevronLeftIcon } from '@radix-ui/react-icons';

export function MainWrapper({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      {children}
    </main>
  );
}

export function Back() {
  return (
    <div className="mb-4">
      <a
        href="/"
        className="group flex items-center gap-2 rounded-lg border border-transparent px-4 py-2 transition-colors text-gray-400 hover:text-gray-800 hover:border-gray-300 hover:bg-gray-100"
      >
        <span className="inline-block transition-transform group-hover:-translate-x-0.5 motion-reduce:transform-none">
          &lt;-
        </span>
        Back
      </a>
    </div>
  );
}
