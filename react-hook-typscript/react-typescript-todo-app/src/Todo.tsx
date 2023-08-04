// src/components/Todo.tsx

interface Todo {
  todo:{
    id: number;
    text: string;
    completed: boolean;
  }
  toggleTodo: (id: number) => void;
}

// interface TodoProps {
//   todo: Todo;
// }

const Todo: React.FC<Todo> = ({ todo, toggleTodo }) => {
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
