export default function TodoItem({ todo, index, removeTodo }) {
    const handleRemoveClick = () => {
      removeTodo(index);
    };
  
    return (
      <li>
        {todo}
        <button onClick={handleRemoveClick}>Remove</button>
      </li>
    );
  }
  