import { useEffect } from 'react';

// EffectApp1.jsx — “처음 렌더링될 때 실행”

//목표: 컴포넌트가 화면에 처음 나타날 때만 useEffect 실행
export default function Eff02() {
  useEffect(() => {
    console.log('컴포넌트가 처음 나타났어요!');
  }, []);

  return <h2>🧩 useEffect 기본 실행</h2>;
}
