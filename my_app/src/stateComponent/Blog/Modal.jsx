// 자식 컴포넌트 Modal 생성하기
export default function Modal(props) {
  const update = () => {
    let titleCopy = [...props.title];
    titleCopy[props.index] =
      prompt('새 제목을 입력하세요', titleCopy[props.index]) ||
      titleCopy[props.index];
    props.setPosts(titleCopy);
  };
  return (
    <>
      <div className="modal-overlay">
        <div className="modal" style={{ backgroundColor: props.color }}>
          <h4>{props.title[props.index]}</h4>
          <p>날짜: 11월 1일</p>
          <p>상세내용: 여기에 내용을 넣어보세요</p>
          <div className="modal-buttons">
            <button onClick={update}>글수정</button>
            <button onClick={props.onClose}>닫기</button>
          </div>
        </div>
      </div>
    </>
  );
}

