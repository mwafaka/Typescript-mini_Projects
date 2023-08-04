// src/components/Todo.tsx


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
    </li>
  );
};

export default Todo;
