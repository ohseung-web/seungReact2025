import React, { useState } from 'react';
import './CommentBoard.css';

function CommentItem({ text, like, onLike, onDelete }) {
  return (
    <div className="commentItem">
      <p>{text}</p>
      <div>
        <span onClick={onLike}>👍 {like}</span>
        <button onClick={onDelete}>삭제</button>
      </div>
    </div>
  );
}

export default function CommentBoard() {
  const [comments, setComments] = useState([
    { text: '리액트 재밌어요!', like: 0 },
    { text: 'useState 너무 신기해요', like: 0 },
  ]);
  const [input, setInput] = useState('');

  const addComment = () => {
    if (!input.trim()) return alert('댓글을 입력하세요!');
    setComments([{ text: input, like: 0 }, ...comments]);
    setInput('');
  };

  const deleteComment = (index) => {
    const copy = [...comments];
    copy.splice(index, 1);
    setComments(copy);
  };

  const addLike = (index) => {
    const copy = [...comments];
    copy[index].like += 1;
    setComments(copy);
  };

  return (
    <div className="commentApp">
      <h2>💬 댓글 게시판</h2>
      <input
        type="text"
        placeholder="댓글 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addComment}>등록</button>

      {comments.map((c, i) => (
        <CommentItem
          key={i}
          text={c.text}
          like={c.like}
          onLike={() => addLike(i)}
          onDelete={() => deleteComment(i)}
        />
      ))}
    </div>
  );
}
