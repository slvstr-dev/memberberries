export default function Loading() {
  return (
    <main>
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-end gap-2">
          <div className="h-9 w-20 animate-pulse rounded-md bg-gray-200" />

          <div className="h-6 w-5 animate-pulse rounded-full bg-gray-200" />
        </div>

        <div className="h-4 w-4 animate-pulse rounded-full bg-gray-200" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="h-16 animate-pulse rounded-md bg-gray-200" />

        <hr className="border-gray-100" />

        <div className="h-16 animate-pulse rounded-md bg-gray-200" />

        <hr className="border-gray-100" />

        <div className="h-16 animate-pulse rounded-md bg-gray-200" />

        <hr className="border-gray-100" />

        <div className="h-16 animate-pulse rounded-md bg-gray-200" />
      </div>
    </main>
  );
}
