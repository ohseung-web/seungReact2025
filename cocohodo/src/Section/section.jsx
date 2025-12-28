import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Page from './page';
import './section.css';
import HdSilde from '../Header/Hdslide';

export default function Section({ datalist }) {
  // // 탭 메뉴 클릭시 category 구분 필터 생성
  const [tapfilter, setTapFilter] = useState('');

  const clickHandle = (num) => {
    if (num === 1) {
      setTapFilter('nuts');
    } else if (num === 2) {
      setTapFilter('snack');
    } else if (num === 3) {
      setTapFilter('cream');
    } else if (num === 4) {
      setTapFilter('butter');
    } else if (num === 5) {
      setTapFilter('gift');
    } else {
      setTapFilter('present');
    }
  };

  return (
    <div className="section-container">
      <HdSilde />
      <div className="top-title">{/* 빈 공간 */}</div>
      <div className="page-tap">
        <ul>
          <li>
            {/* <Link to="/">전체</Link> */}
            <button type="button" onClick={() => setTapFilter('')}>
              전체
            </button>
          </li>
          <li>
            <button onClick={() => clickHandle(5)}>선물용</button>
          </li>
          <li>
            <button onClick={() => clickHandle(4)}>앙버터</button>
          </li>
          <li>
            <button onClick={() => clickHandle(3)}>크림치즈</button>
          </li>
          <li>
            <button onClick={() => clickHandle(2)}>간식용</button>
          </li>
          <li>
            <button onClick={() => clickHandle(1)}>견과류</button>
          </li>
        </ul>
      </div>
      <div>
        <Page datalist02={datalist} tapfilter={tapfilter} />
      </div>
    </div>
  );
}
