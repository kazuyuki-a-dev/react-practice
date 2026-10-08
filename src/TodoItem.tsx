import type { Todo } from "./types";

type Props = {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
};

function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
    );
}

export default TodoItem;