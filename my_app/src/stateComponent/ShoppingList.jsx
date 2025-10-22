import React, { useState } from 'react';
import './ShoppingList.css';

export default function ShoppingList() {
  const [items, setItems] = useState([
    { name: '우유', done: false },
    { name: '계란', done: false },
  ]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (!input.trim()) return alert('물건 이름을 입력하세요!');
    setItems([{ name: input, done: false }, ...items]);
    setInput('');
  };

  const toggleDone = (index) => {
    const copy = [...items];
    copy[index].done = !copy[index].done;
    setItems(copy);
  };

  const deleteItem = (index) => {
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
  };

  return (
    <div className="shopApp">
      <h2>🛒 쇼핑 리스트</h2>
      <div className="inputArea">
        <input
          type="text"
          placeholder="물건 이름 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addItem}>추가</button>
      </div>

      {items.map((item, i) => (
        <div key={i} className="itemRow">
          <span className={item.done ? 'done' : ''}>{item.name}</span>
          <div className="btns">
            <button onClick={() => toggleDone(i)}>
              {item.done ? '취소' : '구매 완료'}
            </button>
            <button onClick={() => deleteItem(i)}>삭제</button>
          </div>
        </div>
      ))}
    </div>
  );
}
