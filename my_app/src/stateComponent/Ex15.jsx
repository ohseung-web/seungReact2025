import React, { useState } from 'react';

export default function Exstate15() {
  const [name, setName] = useState('홍길동');
  const [age, setAge] = useState(20);

  const handleClick = () => {
    setName('이순신');
    setAge(30);
  };

  return (
    <div>
      <p>
        {name} ({age})
      </p>
      <button onClick={handleClick}>정보 변경</button>
    </div>
  );
}
