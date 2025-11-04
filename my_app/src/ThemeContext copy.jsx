import { createContext, useState } from 'react';
/*
  1) Context 생성
  - createContext()는 Context 객체를 만듭니다.
  - Provider와 Consumer(또는 useContext 훅)를 통해 하위 컴포넌트에 값을 전달할 때 사용합니다.
  - 파라미터로 초기값을 줄 수 있으나 (예: createContext({ theme: 'light' })),
    보통은 Provider에서 실제 값을 내려주기 때문에 빈 상태로 생성하는 경우가 많습니다.
*/
export const ThemeContext = createContext();

/*
  2) Provider 컴포넌트 정의
  - 이 컴포넌트는 앱 트리(또는 해당 트리의 일부)를 감싸며
    하위 컴포넌트들에게 theme와 toggleTheme을 전달합니다.
  - children: Provider로 감싼 자식 컴포넌트들이 들어오는 자리입니다.
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

  // const [theme, setTheme] = useState('light'); // 기본 테마
  // const [theme, setTheme] = useState(false);
  /*
    토글 함수 정의
    - 이전 상태(prev)를 받아서 'light'면 'dark'로, 아니면 'light'로 바꿉니다.
    - setState에 함수형 업데이트를 사용하면 상태 갱신이 안전합니다(이전 상태에 의존할 때 권장).
    - (나중에 성능 최적화를 하고 싶으면 useCallback으로 감싸는 것을 고려)
  */
  // prevState의 약어 prev
  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  // };

  /*
    토글 함수 (함수형 업데이트)
    - prev는 React가 자동으로 이전 상태를 전달해줍니다.
    - !prev : 이전 상태의 반대값으로 바꿔주는 연산자 (true ↔ false 전환)
  */
  const toggleTheme = () => {
    setTheme((prev) => !prev);
  };

  /*
    Provider에서 value로 전달
    - value는 컨텍스트를 통해 하위 컴포넌트에서 접근 가능한 값입니다.
    - 여기서는 현재 테마(theme)와 테마를 바꿀 함수(toggleTheme)를 함께 전달합니다.
    - 주의: value에 새로운 객체를 매 렌더마다 넘기면 하위 구독 컴포넌트들이 불필요하게 재렌더링될 수 있습니다.
      -> 필요하면 useMemo({ theme, toggleTheme }, [theme]) 또는 toggleTheme을 useCallback으로 감싸세요.
  */
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
