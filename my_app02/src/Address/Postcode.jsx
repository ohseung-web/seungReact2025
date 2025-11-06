import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import { useState } from 'react';

const Postcode = () => {
  const [zipCode, setZipcode] = useState(''); //국가기초구역번호. 2015년 8월 1일부터 시행될 새 우편번호.
  const [Address, setAddress] = useState(''); // 주소
  const [isOpen, setIsOpen] = useState(false); //검색버튼 누르기 전

  const completeHandler = (data) => {
    // 우편번호 검색 도로명 또는 지역명으로 입력
    let addr = '';
    if (data.userSelectedType === 'R') {
      addr = data.roadAddress; //도로명 주소
    } else {
      addr = data.jibunAddress; //지역명 주소
    }
    setZipcode(data.zonecode);
    setAddress(addr);
    setIsOpen(false);
  };

  // Modal 스타일
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0,0,0,0)',
    },
    content: {
      left: '0',
      margin: 'auto',
      width: '400px',
      height: '500px',
      padding: '0',
      overflow: 'hidden',
      border: '3px solid #111',
    },
  };

  // 검색 클릭
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <input
        type="text"
        value={zipCode}
        readOnly
        placeholder="우편번호"
        name="post"
        id="post"
      />
      <button type="button" onClick={toggle} id="userAddSearch">
        우편번호 검색
      </button>
      <br />
      <input
        type="text"
        value={Address}
        readOnly
        placeholder="도로명 주소"
        name="userAddress"
        id="userAddress"
      />
      <input
        type="text"
        placeholder="상세 주소"
        name="detailAddress"
        id="detailAddress"
      />
      <br />
      <Modal
        isOpen={isOpen}
        ariaHideApp={true}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        {/* 리액트의 Modal 라이브러리 사용시 overlay를 클릭하면 창이 close되게 할 때 onRquestClose={()=>setIsOpne(false)}를 사용한다. */}
        {/* <button type="button" onClick={() => setIsOpen(false)} id="modalClaose">
          닫기
        </button> */}
        <DaumPostcode onComplete={completeHandler} height="100%" />
      </Modal>
    </div>
  );
};

export default Postcode;
