// 1. context 생성
export const MyContext = createContext();

// 2. 상위 컴포넌트에서 제공
<MyContext.Provider value={공유값}>
  <자식컴포넌트 />
</MyContext.Provider>

// 3. 하위 컴포넌트에서 사용
const data = useContext(MyContext);


