import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Login.css';

export default function Login(){
    return(
        <div className="form-container">
                <h2>로그인</h2>
            <div className="top-login">
                <ul>
                    <li><button className="kakaobtn">Kakao로 시작하기</button></li>
                    <li><button className="naverbtn">Naver로 시작하기</button></li>
                </ul>
            </div>
            <div className="hrbar">
                <div className="borderbar"></div>
            </div>
            <div className="join">
                <ul>
                    <li><input type="id" /></li>
                    <li><input type="password" /></li>
                    <li><button>로그인</button>
                    <p><input type="checkbox" />로그인 유지</p></li>
                </ul>
            </div>
            <div className="join-text">
                <p><Link>회원가입</Link></p>
                <p><Link>아이디·비밀번호 찾기</Link></p>
            </div>
            <div className="hrbar">
                <div className="borderbar"></div>
            </div>
            <div className="non-join">
                <button>비회원 주문조회</button>
            </div>
        </div>
    )
}