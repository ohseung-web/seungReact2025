export default function UserList({ users }) {
  if (users.length === 0) return <p>표시할 데이터가 없습니다.</p>;
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
