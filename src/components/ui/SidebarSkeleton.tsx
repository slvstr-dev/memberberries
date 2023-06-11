export default function SidebarSkeleton() {
  return (
    <aside className="flex w-48 -translate-x-full flex-col gap-4 p-4 transition-transform duration-150 ease-in md:translate-x-0">
      <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />

      <div className="h-23 animate-pulse rounded-md bg-gray-200" />

      <div className="grow">
        <div className="mx-2 mb-1 h-4 w-20 animate-pulse rounded-full bg-gray-200" />

        <div className="flex flex-col gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="m-2 h-5 animate-pulse rounded-full bg-gray-200" />
          ))}
        </div>
      </div>

      <div className="m-1 h-5 animate-pulse rounded-full bg-gray-200" />
    </aside>
  );
}
