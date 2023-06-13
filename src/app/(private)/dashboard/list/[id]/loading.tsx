export default function Loading() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-end gap-2">
          <div className="h-9 w-32 animate-pulse rounded-md bg-gray-200" />

          <div className="h-6 w-14 animate-pulse rounded-md bg-gray-200" />
        </div>

        <div className="h-9 w-8 animate-pulse rounded-full bg-gray-200" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-14 animate-pulse rounded-md bg-gray-200" />

        <div className="h-14 animate-pulse rounded-md bg-gray-200" />

        <div className="h-14 animate-pulse rounded-md bg-gray-200" />

        <div className="h-14 animate-pulse rounded-md bg-gray-200" />
      </div>

      <div className="h-6 w-14 animate-pulse rounded-md bg-gray-200" />
    </main>
  );
}
