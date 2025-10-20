// TODO: Alert 컴포넌트를 완성하세요
// type이 "error"면 빨간색, "success"면 초록색, 그 외는 파란색
function Alert({ type, message }) {
  const colorClass =
    type === 'error' ? 'red' : type === 'success' ? 'green' : 'blue';

  return (
    <div
      style={{
        backgroundColor: colorClass,
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '16px',
      }}
    >
      {message}
    </div>
  );
}
export default Alert;
