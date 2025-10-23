import { useState } from 'react';

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false); // 초기에는 모달이 닫힘

  return (
    <div className='modal'>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      {isOpen && <div className="modal">모달 내용</div>}
      {isOpen && <button onClick={() => setIsOpen(false)}>닫기</button>}
    </div>
  );
}
