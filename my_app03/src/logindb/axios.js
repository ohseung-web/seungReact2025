import axios from 'axios';

// Axios 인스턴스 생성
// axios.create()를 사용하면 기본 설정을 한 번만 지정하고,
// 여러 곳에서 재사용 가능
const api = axios.create({
  baseURL: 'http://localhost:8000', // 모든 요청의 기본 URL
  withCredentials: true,            // 요청 시 브라우저 쿠키를 자동으로 포함
                                    // (세션 유지용)
});

// 생성한 axios 인스턴스를 다른 파일에서 import해서 사용
export default api;
