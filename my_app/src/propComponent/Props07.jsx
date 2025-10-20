// TODO: TodoList 컴포넌트를 완성하세요
// todos 배열을 받아서 각 항목을 li로 표시 (key 속성 필수!)
function TodoList({ todos }) {
  return (
    <ul className="list-disc list-inside p-4 border rounded mb-4">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
export default TodoList;
