import React, { useEffect, useState } from 'react';

export default function Ex09() {
  // 메시지 목록 상태
  const [messages, setMessages] = useState([]);
  // 입력 중인 메시지 상태
  const [currentMessage, setCurrentMessage] = useState('');

  // useEffect: 메시지 배열이 바뀔 때마다 실행
  useEffect(() => {
    if (messages.length > 0) {
      // 마지막에 추가된 메시지 출력
      console.log('새 메시지:', messages[messages.length - 1]);
    }
  }, [messages]); // messages 배열이 바뀌면 실행

  // 메시지 전송 함수
  const handleSend = () => {
    if (currentMessage.trim() === '') return; // 빈 메시지 방지
    setMessages([...messages, currentMessage]); // 메시지 추가
    setCurrentMessage(''); // 입력 필드 초기화
  };

  return (
    <div
      style={{ maxWidth: '400px', margin: '50px auto', fontFamily: 'Arial' }}
    >
      <h2>간단 메시지 입력기</h2>

      {/* 메시지 입력 */}
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="메시지를 입력하세요"
        style={{ width: '70%', padding: '8px', marginRight: '5px' }}
      />
      <button onClick={handleSend} style={{ padding: '8px 15px' }}>
        전송
      </button>

      {/* 메시지 목록 표시 */}
      <ul style={{ marginTop: '20px', paddingLeft: '20px' }}>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}
