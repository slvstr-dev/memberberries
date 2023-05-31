export function generateStaticParams() {
  const reminders = [{ id: '1' }];

  return reminders.map((reminder) => {
    return {
      id: reminder.id,
    };
  });
}

interface ReminderProps {
  params: {
    id: string;
  };
}

export default function Reminder({ params: { id } }: ReminderProps) {
  return (
    <main>
      <h3>Reminder</h3>

      <p>{`Reminder: ${id}`}</p>
    </main>
  );
}
