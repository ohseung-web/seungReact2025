import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './header.css';


export default function Header(){


    return(
        <div className="header-container">
            <div className="top-box">
                <div className="logo01">
                    <Link to='/'><img src='./img/cocologotext.png' alt="cocologotext" style={{width:'150px'}}/></Link>
                </div>
                <div className="taps">
                    <ul>
                        <li><Link to='/'>온라인몰</Link></li>
                        <li><Link to='/'>답례품 라벨</Link></li>
                        <li><Link to='/'>매장</Link></li>
                        <li><Link to='/'>가맹안내</Link></li>
                        <li><Link to='/'>회사소개</Link></li>
                        <li><Link to='/'>이벤트</Link></li>
                        <li><Link to='/'>자주묻는질문</Link></li>
                        <li><Link to='/'>기부내역</Link></li>
                    </ul>
                </div>
                <div className="my-page">
                    <ul>
                        <li><input type="text" /><img src="./img/search-img.png" alt="" style={{height:'20px'}}/></li>
                        <li><Link to='/Login'>로그인</Link></li>
                        <li><Link to='/Cart'>장바구니</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}