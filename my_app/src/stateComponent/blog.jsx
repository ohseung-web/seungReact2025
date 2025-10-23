import React, { useState } from 'react';
export default function Blog() {
  const [posts, setPosts] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  const [likes, setLikes] = useState([0, 0, 0]);
  const [modalOpen, setModalOpen] = useState(false); //모달 창이 안보이는 상태를 false로 지정
  const [selectedIndex, setSelectedIndex] = useState(null); // 선택된 글의 인덱스
  const [inputValue, setInputValue] = useState('');

  // 글 추가, 글 삭제, 따봉 증가 함수 별도로 작성

  // 글 추가
  const addPost = () => {
    if (inputValue.trim() === '') {
      return alert('자료를 입력하세요');
    }
    let postCopy = [...posts];
    postCopy.unshift(inputValue);
    setPosts(postCopy);

    let likesCopy = [...likes];
    likesCopy.unshift(0);
    setLikes(likesCopy);

    setInputValue('');
  };

  // 글 삭제
  const delPost = (index) => {
    let postCopy = [...posts];
    postCopy.splice(index, 1);
    setPosts(postCopy);

    let likesCopy = [...likes];
    likesCopy.splice(index, 1);
    setLikes(likesCopy);
  };

  //따봉 증가
  const addLikes = (index) => {
    let likesCopy = [...likes];
    likesCopy[index] += 1;
    setLikes(likesCopy);
  };

  //모달 토글

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'white', fontSize: '16px' }}>ReactBlog</h4>
      </div>
      {posts.map((post, index) => (
        <div className="list" key={index}>
          <h4
            onClick={() => {
              setModalOpen(true);
              setSelectedIndex(index);
            }}
            style={{ cursor: 'pointer' }}
          >
            {posts[index]}
            <span
              onClick={() => {
                addLikes(index);
              }}
            >
              👍
            </span>
            {likes[index]}
          </h4>
          <p>11월 1일 발생</p>
          <button
            onClick={() => {
              delPost(index);
            }}
          >
            삭제
          </button>
        </div>
      ))}
      <div className="inputArea">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={addPost}>글 발행</button>
        {modalOpen && (
          <Modal
            color={'lightgray'}
            title={posts}
            setPosts={setPosts}
            index={selectedIndex}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

// 자식 컴포넌트 Modal 생성하기
function Modal(props) {
  const update = () => {
    let titleCopy = [...props.title];
    titleCopy[props.index] =
      prompt('새 제목을 입력하세요', titleCopy[props.index]) ||
      titleCopy[props.index];
    props.setPosts(titleCopy);
  };
  return (
    <>
      <div className="modal" style={{ backgroundColor: props.color }}>
        <h4>{props.title[props.index]}</h4>
        <p>날짜: 11월 1일</p>
        <p>상세내용: 여기에 내용을 넣어보세요</p>
        <button onClick={update}>글수정</button>
        <button onClick={props.onClose}>닫기</button>
      </div>
    </>
  );
}
