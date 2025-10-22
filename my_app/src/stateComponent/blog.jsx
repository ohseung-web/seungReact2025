import React, { useState } from 'react';
export default function Blog() {
  const [posts, setPosts] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  const [likes, setLikes] = useState([0, 0, 0]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(0);
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
          <h4>
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
      </div>
    </div>
  );
}
