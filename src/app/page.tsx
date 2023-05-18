export default function Home() {
  return (
    <main className="grid grid-flow-col gap-12 justify-center p-24">
      <a
        href="/design-systems"
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
        href="/markdoc"
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
    </main>
  );
}
