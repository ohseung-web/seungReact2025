// TODO: Counter 컴포넌트를 완성하세요
// count와 onIncrease를 props로 받아서 사용
function Counter({ count, onIncrease }) {
  return (
    <div className="p-4 border rounded mb-4">
      <p className="text-xl mb-2">카운트: {count}</p>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded"
        onClick={onIncrease}
      >
        증가
      </button>
    </div>
  );
}
export default Counter;
