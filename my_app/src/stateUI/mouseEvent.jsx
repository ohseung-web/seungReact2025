import { useState } from 'react';

export default function MouseEvent() {
  const [msg, setMsg] = useState('');

  // onMouseOver - 요소나 자식 요소 위로 마우스가 올라갈 때마다 발생
  const handleMouseOver = () => {
    setMsg('마우스가 올라왔습니다 (Over)');
  };

  // onMouseEnter - 요소 위로 마우스가 처음 진입할 때만 발생 (자식 요소 무시)
  const handleMouseEnter = () => {
    setMsg('마우스가 진입했습니다 (Enter)');
  };

  // onMouseLeave - 요소에서 마우스가 벗어날 때 발생
  const handleMouseLeave = () => {
    setMsg('마우스가 벗어났습니다 (Leave)');
  };

  // onMouseOut - 요소나 자식 요소에서 마우스가 벗어날 때 발생
  const handleMouseOut = () => {
    setMsg('마우스가 나갔습니다 (Out)');
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'lightblue',
          padding: '20px',
        }}
      >
        마우스를 올려보세요
      </div>
      <p>{msg}</p>
    </>
  );
}
