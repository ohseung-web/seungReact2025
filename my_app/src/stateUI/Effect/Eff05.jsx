import { useEffect, useState } from 'react';
// EffectApp5.jsx — “타이머 cleanup”

//목표: setInterval과 cleanup으로 메모리 누수 방지
export default function Eff05() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return <h2>⏰ {time}초 경과</h2>;
}
