import { createContext, useState } from 'react';

// 1️⃣ Context 생성
export const AuthContext = createContext();

// 2️⃣ Provider 정의
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = 로그인 안됨

  // 로그인 함수
  const login = (username) => {
    setUser({ name: username });
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
