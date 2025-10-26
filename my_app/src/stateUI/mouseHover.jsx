import { useState } from 'react';

export default function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? 'blue' : 'gray',
        padding: '20px',
        transition: 'all 0.3s',
        cursor: 'pointer',
      }}
    >
      호버하면 색이 변합니다
    </div>
  );
}

