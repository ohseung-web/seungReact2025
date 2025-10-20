/// TODO: Button 컴포넌트에 기본값을 설정하세요
// text의 기본값: "클릭", color의 기본값: "blue"
function Button({ text = '클릭', color = 'blue' }) {
  return (
    <button
      className="px-4 py-2 rounded mr-2 mb-2"
      style={{ backgroundColor: color, color: 'white' }}
    >
      {text}
    </button>
  );
}
export default Button;
