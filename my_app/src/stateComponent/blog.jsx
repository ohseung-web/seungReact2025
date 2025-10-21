import React, { useState } from 'react';
export default function Blog() {
  // let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '남자코트 추천',
    '강남 우동맛집',
    '파이썬독학',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  // modal창이 안보이는 상태를 : false로 지정
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  // map함수 란 : array 자료를 반복처리 가능한 함수 for문대신 사용한다.
  // [1,2,3].map(function(a){
  //    return "123"
  // })

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'white', fontSize: '16px' }}>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}{' '}
        </h4>
        <p>11월 1일 발생</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>11월 1일 발생</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(modal === true ? false : true);
          }}
        >
          {글제목[2]}
        </h4>
        <p>11월 1일 발생</p>
      </div> */}
      {/* <button type='button' onClick={()=>{
        
        // 기존 state가 array나 object 이면 원본유지하며 copy본을 만들자
        // 이런 copy를 deepcopy 또는 깊은복사라 한다.
        // [...글제목] => 괄호를 벗겨주고 다시 씌어주세요
        // [state변경함수 특징] : 기존state == 신규state의 경우 변경안됨
        // console.log(copy == 글제목)은  무조건  true임 고로 변경되지 않음
        // [array/object 특징]

        let copy = [...글제목];
        copy[0] ='여자코트 추천'
        글제목변경(copy);


        }}>수정</button>
        <button type='button'  onClick={()=>{
            let copy = [...글제목];
            글제목변경(copy.sort());
        }}>가나순정렬</button> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(modal === false ? true : false);
                setTitle(i);
              }}
            >
              {글제목[i]}{' '}
              <span
                onClick={(e) => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  e.stopPropagation();
                  따봉변경(copy);
                }}
              >
                👍
              </span>{' '}
              {따봉[i]}
            </h4>
            <p>11월 1일 발생</p>

            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      {/*input에 데이터 입력시 코드실행하고 싶으면 onChange/onInput 이벤트 핸들러이다.  
       input에 입력한 값 가져오는 방법
       onChange={(e)=>{console.log(e)}}
       e 파라미터 : 이벤트 객체라 부르면 지금 발생하는 이벤트에 관련한 여러 기능이 담겨 있다. 
       */}
      {/* 이벤트 버블링 : 자식을 클릭하면 부모도 같이 클릭되어지는 현상을 말한다. 
       e.stopPropagation(); 함수를 사용하면 이벤트 버블링을 막을 수 있다.*/}
      <input
        type="text"
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          // copy.push()는 아래추가, copy.unshift()는 위부터 추가
          copy.unshift(입력값);
          글제목변경(입력값 != '' ? copy : alert('자료를 입력하세요'));

          // 블로그 글이 추가될 때 따봉의 수도 변경되도록 추가하는 코드
          let DabungCopy = [...따봉];
          DabungCopy.unshift(0);
          따봉변경(DabungCopy);
        }}
      >
        글발행
      </button>

      {modal === true ? (
        <Modal
          color={'lightgray'}
          글제목={글제목}
          글제목변경={글제목변경}
          title={title}
        />
      ) : null}
    </div>
  );
}

// 함수안의 state를 다른 함수안으로 가져다 사용할 수 없다.
// 부모 컴포넌트에서 자식 컴포넌트로 state를 전달 할 수 있다.
// 전달하는 명령어가 props이다.
// 1. <자식 컴포넌트 작명={state이름}>
// 2. 자식 컴포넌트에서 props파라미터 등록후 props.작명 사용한다.
// 단, 부모에서 자식으로만  state 전송이 가능하다는 점에 유의 하자.

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.글제목];
          copy[0] = ['여자코트 추천', '강남 우동맛집', '파이썬독학'];
          props.글제목변경(copy[0]);
        }}
      >
        글수정
      </button>
    </div>
  );
}
