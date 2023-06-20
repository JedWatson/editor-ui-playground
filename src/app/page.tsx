export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex justify-center p-24">
        <a
          href="/keystatic"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Keystatic Admin{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            New UI Prototype
          </p>
        </a>
      </div>
      <div className="my-6 text-center text-xl font-medium uppercase text-gray-300">
        Editor Prototypes
      </div>
      <div className="grid grid-flow-col justify-center gap-12">
        <a
          href="/editor/design-systems"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Design Systems{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example from thinkmill.com
          </p>
        </a>

        <a
          href="/editor/markdoc"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Markdoc Homepage{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The source of https://markdoc.dev/
          </p>
        </a>
      </div>
    </main>
  );
}
