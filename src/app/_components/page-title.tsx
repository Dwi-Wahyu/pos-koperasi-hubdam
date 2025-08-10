export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="text-center font-semibold text-secondary text-xl">
      {title}
    </h1>
  );
}
