import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './Hdslide.css';
import clove from '../../public/img/clove.png';


export default function HdSilde(){
    
    // 배너 이미지 접근
    const slideItem = [
        {id:1, src:'/img/hdslide1.jpg'},
        {id:2, src:'/img/hdslide2.jpg'},
        {id:3, src:'/img/hdslide3.jpg'},
        {id:4, src:'/img/hdslide4.jpg'}
    ];

    // 슬라이드 인덱스
    const [slideCr, setSlideCr] = useState(0);
    // 배너 재생
    const [playSlide, setPlaySlide] = useState(true);
    // 타이머
    const slidetimer = useRef(null);
    const hdslides = slideItem.length;
    // 자동 슬라이드 클린업
    useEffect(()=>{
        if(playSlide){
            slidetimer.current=setInterval(()=>{
                setSlideCr(index =>(index + 1) % hdslides);
            },3000);
        }
        return()=>{
            if(slidetimer.current){
                clearInterval(slidetimer.current);
            }
        };
    },[playSlide, hdslides]);
    // 네비 버튼
    const handleClick = (index) => {
        setSlideCr(index);
    };
    // 재생정지버튼
    const BtnHandle = ()=>{
        setPlaySlide(playSlide => !playSlide);
    };
    // 이전 버튼 핸들러 추가
    const handlePrev = () => {
        setSlideCr(prevIndex => 
            // 인덱스 0에 가장 끝으로 이동 순환
            prevIndex === 0 ? hdslides - 1 : prevIndex - 1
        );
    };

    // 다음 버튼 핸들러 추가
    const handleNext = () => {
        setSlideCr(prevIndex => 
            // 인덱스 끝에 0으로 이동 순환
            (prevIndex + 1) % hdslides
        );
    };
    // 표시할 이미지
    const CrimgUrl = slideItem[slideCr]?.src || '';

    return(
        <div className="topSlide">
            <div className="slide-navi">
                <img src={CrimgUrl} alt={`Slide ${slideCr + 1}`} />

                {/*이전 버튼 */}
                <button type="button" onClick={handlePrev} className="slide-prev">＜</button>
                
                {/*다음 버튼 */}
                <button type="button" onClick={handleNext} className="slide-next"> ＞ </button>
                
                {/* 슬라이드 순번 버튼 */}
                <div className="btn-bar">
                    <ul>
                        {/* // handleClick 실행 */}
                            {slideItem.map((item, index) => (
                                <li key={item.id}>
                                <button id="slide-clove" 
                                    type="button" onClick={() => handleClick(index)}
                                    // slideCr 현재 인덱스와 index가 같으면 'active' 부여
                                    className={index === slideCr ? 'active' : ''}
                                    aria-label={`${index + 1}번째 슬라이드로 이동`} >
                                    {/* 버튼 내부 텍스트 인덱스 번호 표시 */}
                                    <img src={clove} alt="clove" /> {/* 클로버 페이지 이동 아이콘 */}
                                </button> 
                                </li>
                            ))}
                    </ul>
                </div>
                {/* 재생정지 */}
                <div className="btn-size">
                    <button type="button" onClick={BtnHandle} className="slide-toggle-btn">
                        {playSlide ? <p>■</p> : <p><span>▶</span></p>}
                    </button>
                </div>
            </div>
        </div>
    )
}
