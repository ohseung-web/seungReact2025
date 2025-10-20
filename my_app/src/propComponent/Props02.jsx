// props로 name, age, city를 받아서 표시
function UserCard(props) {
  return (
    <div
      style={{
        width: '200px',
        height: '150px',
        border: '1px solid #ddd',
        borderRadius: '5px',
      }}
    >
      <p>이름: {props.name}</p>
      <p>나이: {props.age}</p>
      <p>도시: {props.city}</p>
    </div>
  );
}
export default UserCard;
