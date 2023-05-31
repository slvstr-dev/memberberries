export function generateStaticParams() {
  const todos = [{ id: '1' }];

  return todos.map((todo) => {
    return {
      id: todo.id,
    };
  });
}

interface TodoProps {
  params: {
    id: string;
  };
}

export default function Todo({ params: { id } }: TodoProps) {
  return (
    <main>
      <h3>Todo</h3>

      <p>{`Todo: ${id}`}</p>
    </main>
  );
}
