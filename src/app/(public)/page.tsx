import Button from '@/components/ui/Button';
import ReminderDummy from '@/components/ui/ReminderDummy';
import ReminderList from '@/components/ui/ReminderList';

const reminders = [
  {
    title: 'Review Project Proposal',
    priority: 'low',
    tag: 'Long term',
    isCompleted: true,
  },
  {
    title: 'Schedule Team Meeting',
    priority: 'medium',
    tag: 'Short term',
    isCompleted: false,
  },
  {
    title: 'Submit Monthly Report',
    priority: 'high',
    tag: 'Urgent',
    isCompleted: false,
  },
  {
    title: 'Update Client Database',
    tag: 'Sometime soon',
    isCompleted: false,
  },
];

export default function Home() {
  return (
    <div className="flex h-full flex-col items-center gap-20 lg:flex-row">
      <div>
        <h1 className="mb-5 text-5xl font-bold">Memberberries</h1>

        <p className="mb-10 text-xl text-gray-600">
          Personal task manager to &apos;member your daily tasks.
        </p>

        <Button href="/signin" color="primary" padding="xl">
          Start prioritizing
        </Button>
      </div>

      <div className="relative w-full max-w-lg">
        <div className="absolute -left-20 -top-20 h-96 w-96 animate-blob rounded-full bg-emerald-400 opacity-40 mix-blend-multiply blur-2xl" />

        <div className="animation-delay-2000 absolute -right-20 top-0 h-96 w-96 animate-blob rounded-full bg-red-400 opacity-40 mix-blend-multiply blur-2xl" />

        <div className="animation-delay-4000 absolute left-20 top-20 h-96 w-96 animate-blob rounded-full bg-amber-400 opacity-40 mix-blend-multiply blur-2xl" />

        <ReminderList>
          {reminders.map((reminder, idx) => {
            return <ReminderDummy key={idx} reminder={reminder} />;
          })}
        </ReminderList>
      </div>
    </div>
  );
}
