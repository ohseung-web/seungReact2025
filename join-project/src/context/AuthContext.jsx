import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userid, setUserid] = useState(null);

  // 컴포넌트 마운트 시 localStorage에서 사용자 정보 불러오기
  useEffect(() => {
    const savedUserid = localStorage.getItem('userid');
    if (savedUserid) {
      setUserid(JSON.parse(savedUserid)); // ✔ JSON.parse 다시 사용
      //setUserid(savedUserid);
    }
  }, []);

  // 로그인
  // 저장 (문자열만 가능)
  // localStorage.setItem('키이름', '저장할값');
  // localStorage.setItem('userid', res.data.userid);
  const loginsave = (userData) => {
    setUserid(userData);
    localStorage.setItem('userid', JSON.stringify(userData));
  };

  // 로그아웃
  const logout = () => {
    setUserid(null);
    localStorage.removeItem('userid');
  };

  return (
    <AuthContext.Provider value={{ userid, loginsave, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom Hook
// export function useAuth() {
//   return useContext(AuthContext);
// }
