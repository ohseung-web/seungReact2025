import { useState } from 'react';
function Modal({ post, onClose }) {
  return (
    <div className="modal">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
}

export default function PostList() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const posts = [
    { id: 1, title: '첫 글', content: 'React 배우기 시작!' },
    { id: 2, title: '두 번째 글', content: 'useState 완전정복!' },
  ];

  return (
    <div>
      {posts.map((p) => (
        <div
          key={p.id}
          onClick={() => {
            setSelectedPost(p);
            setModalOpen(true);
          }}
        >
          {p.title}
        </div>
      ))}
      {modalOpen && (
        <Modal post={selectedPost} onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}
