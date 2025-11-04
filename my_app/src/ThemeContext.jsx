import { createContext, useState } from 'react';
/*
  1) Context 생성
*/
export const ThemeContext = createContext();

/*
  2) Provider 컴포넌트 정의
*/
export default function ThemeProvider({ children }) {
  /*
    theme 상태 선언
    - useState('light')로 초기값을 'light'로 설정합니다.
    - theme은 'light' 또는 'dark' 같은 문자열로 관리하는 예제입니다.
    - 필요하면 boolean, enum, 객체 등으로 바꿀 수 있습니다.
  */
  // 불리언 값으로 테마 관리 (false = light, true = dark)
  const [theme, setTheme] = useState(false);

  /*
    토글 함수 (함수형 업데이트)
    - prev는 React가 자동으로 이전 상태를 전달해줍니다.
    - !prev : 이전 상태의 반대값으로 바꿔주는 연산자 (true ↔ false 전환)
  */
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ======================================================
// // 1. Context 생성
// export const ThemeContext = createContext();

// // 2. Provider 컴포넌트 정의
// export default function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light'); // 기본 테마

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }
