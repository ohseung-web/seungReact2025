import React, { useState } from 'react';

export default function Blog() {
  // posts: 블로그 글 제목들을 담은 배열
  // setPosts: posts 상태를 업데이트하는 함수
  const [posts, setPosts] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);

  // likes: 각 글에 대한 좋아요(따봉) 수를 저장하는 배열 (posts와 인덱스 대응)
  // setLikes: likes 상태를 업데이트하는 함수
  const [likes, setLikes] = useState([0, 0, 0]);

  // modalOpen: (미사용 상태) 모달창의 열림/닫힘 여부를 관리할 용도
  // 현재는 모달 UI 로직은 작성되어 있지 않음. 추후 확장에 사용.
  const [modalOpen, setModalOpen] = useState(false);

  // selectedTitle: 모달에서 어떤 글을 보여줄지 선택할 때 사용할 인덱스
  // (현재 모달이 없으므로 기본값 0으로 둠)
  const [selectedTitle, setSelectedTitle] = useState(0);

  // inputValue: 인풋에 입력된 문자열(새 글 제목)
  // setInputValue로 인풋 값 변경을 반영한다 (controlled input)
  const [inputValue, setInputValue] = useState('');

  // --------------------
  // 글 추가 함수
  // --------------------
  const addPost = () => {
    // 입력값이 공백(또는 빈 문자열)일 경우 경고하고 함수 종료
    if (inputValue.trim() === '') {
      return alert('자료를 입력하세요');
    }

    // 불변성 유지: 원본 posts를 직접 수정하지 않고 복사본을 만든다
    let postCopy = [...posts];
    // unshift로 배열 맨 앞에 새 글을 추가 (가독성상 new array로 대체 가능)
    postCopy.unshift(inputValue);
    // 상태 업데이트 (React는 참조가 바뀐 배열을 보고 리렌더링)
    setPosts(postCopy);

    // likes 배열도 posts와 길이를 맞춰줘야 함 (새 글은 0으로 시작)
    let likesCopy = [...likes];
    likesCopy.unshift(0);
    setLikes(likesCopy);

    // 입력칸 초기화
    setInputValue('');
  };

  // --------------------
  // 글 삭제 함수
  // index: 삭제하려는 글의 인덱스
  // --------------------
  const delPost = (index) => {
    // 불변성 유지: 복사본 생성
    let postCopy = [...posts];
    // splice로 해당 인덱스 항목 1개 삭제
    postCopy.splice(index, 1);
    // 상태 업데이트 (반드시 배열을 새로 넘겨야 리액트가 변경을 감지)
    setPosts(postCopy);

    // likes도 동일하게 인덱스에 맞춰 삭제
    let likesCopy = [...likes];
    likesCopy.splice(index, 1);
    setLikes(likesCopy);
  };

  // --------------------
  // 따봉(좋아요) 증가 함수
  // index: 클릭한 글의 인덱스
  // --------------------
  const addLikes = (index) => {
    // 불변성 유지: 복사본 생성
    let likesCopy = [...likes];
    // 해당 인덱스 값 1 증가
    likesCopy[index] += 1;
    // 업데이트
    setLikes(likesCopy);
  };

  // --------------------
  // 렌더링 부분 (JSX)
  // --------------------
  return (
    <div className="App">
      {/* 네비 바 영역 */}
      <div className="black-nav">
        {/* 인라인 스타일로 글자 색과 크기 지정 */}
        <h4 style={{ color: 'white', fontSize: '16px' }}>ReactBlog</h4>
      </div>

      {/* 
        posts 배열을 map으로 반복 렌더링.
        - post: 현재 항목(글 제목)
        - index: 현재 항목의 인덱스
        key 속성은 React가 각 항목을 식별하게 해주므로 필수(여기서는 index 사용).
        (실무에선 항목 고유 id가 있으면 index 대신 id 권장)
      */}
      {posts.map((post, index) => (
        <div className="list" key={index}>
          <h4>
            {/* 글 제목 출력 */}
            {post} {/* 따봉(좋아요) 아이콘: 클릭 시 addLikes 함수 실행 */}
            <span
              // onClick에 함수를 직접 호출하면 렌더링 시 즉시 실행되므로
              // 화살표 함수로 감싸서 '참조'를 전달한다.
              onClick={() => {
                addLikes(index);
              }}
              // 사용자 경험: 클릭 가능하다는 표시를 위해 cursor 스타일 추가 가능
              style={{ cursor: 'pointer' }}
            >
              👍
            </span>{' '}
            {/* 해당 글의 좋아요 수 출력 (likes 배열의 인덱스 사용) */}
            {likes[index]}
          </h4>

          {/* 부가 정보(예시 날짜) */}
          <p>11월 1일 발생</p>

          {/* 삭제 버튼: 클릭 시 delPost 실행
              주의: onClick={()쁘 delPost(index) 형태가 아니라
              onClick={() => delPost(index)} 로 넘겨야 렌더 시 즉시 실행되지 않음 */}
          <button
            onClick={() => {
              delPost(index);
            }}
          >
            삭제
          </button>
        </div>
      ))}

      {/* 입력 영역 */}
      <div className="inputArea">
        {/* controlled input: value와 onChange로 상태에 연결 */}
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          placeholder="새 글 제목을 입력하세요"
        />
        {/* 글 발행 버튼: 클릭 시 addPost 함수 실행 */}
        <button onClick={addPost}>글 발행</button>
      </div>
    </div>
  );
}
