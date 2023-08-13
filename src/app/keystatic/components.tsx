export function Header({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex justify-between border-b px-8 py-2">
      <div className="py-2 font-semibold">{title}</div>
      <div>{children}</div>
    </div>
  );
}
