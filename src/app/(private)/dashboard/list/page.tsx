'use client';

import { useRouter } from 'next/navigation';

import CreateReminderListForm from '@/components/forms/CreateReminderListForm';
import Button from '@/components/ui/Button';

export default function List() {
  const router = useRouter();

  const handleSubmit = (id?: string) => {
    router.refresh();

    router.push(id ? `/dashboard/list/${id}` : '/dashboard');
  };

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">New list</h1>

      <div className="flex max-w-sm flex-col">
        <CreateReminderListForm onSubmit={handleSubmit} />

        <Button className="mt-2 text-center" color="primary" padding="lg" href="/dashboard">
          Cancel
        </Button>
      </div>
    </section>
  );
}
