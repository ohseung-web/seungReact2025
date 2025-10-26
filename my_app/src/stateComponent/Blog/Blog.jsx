import { useState } from 'react';
import PostList from './PostList';
import Modal from './Modal';
import './Blog.css';

export default function Blog() {
  const [posts, setPosts] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  const [likes, setLikes] = useState([0, 0, 0]);
  //모달 창이 안보이는 상태를 false로 지정
  const [modalOpen, setModalOpen] = useState(false);
  // 선택된 글의 인덱스
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [inputValue, setInputValue] = useState('');

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

  return (
    <div className="blog-container">
      <div className="nav-bar">
        <h4 style={{ color: 'white', fontSize: '16px' }}>ReactBlog</h4>
      </div>
      {/* PostList컴포넌트 분리 */}
      <PostList
        post={posts}
        likes={likes}
        setModalOpen={setModalOpen}
        setSelectedIndex={setSelectedIndex}
        delPost={delPost}
        addLikes={addLikes}
      />
      {/* 글 입력 창 */}
      <div className="input-area">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={addPost}>글 발행</button>
        {/* 모달 조건부 렌더링 부분 */}
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
