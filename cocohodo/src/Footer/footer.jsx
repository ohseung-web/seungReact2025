import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './footer.css';

export default function Footer(){

    return(
        <div className="footer-container">
            <div className="logo02">
                <img src='./img/cocologotext.png' alt="cocologotext" style={{width:'100px'}}/>
            </div>
            <div className="info">
                <ul>
                    <li>
                        <h4>Company Information</h4>
                        <p>(주) 샤마</p>
                        <p>사업자등록번호: 129-86-03092</p>
                        <p>대표자 : 권기택</p>
                        <p>본사 : 경기도 용인시 처인구 모현읍 능원로10번길 19</p>
                    </li>
                    <li>
                        <h4>Online Shop Information</h4>
                        <p>(주) 루마</p>
                        <p>사업자등록번호: 142-81-10927</p>
                        <p>통신판매업 신고: 2013-용인처인-0086</p>
                        <p>대표자 : 권기택</p>
                        <p>본사 : 경기도 용인시 처인구 모현읍 능원로10번길 19</p>
                    </li>
                    <li>
                        <h4>Contact</h4>
                        <p>Tel : 1588-1303</p>
                        <p>Fax : 031-339-4080</p>
                        <p>E-mail : contact@cocohodo.co.kr</p>
                    </li>
                    <li>
                        <h4>Resources</h4>
                        <p><Link to='/'>개인정보처리방침</Link></p>
                        <p><Link to='/'>이용약관</Link></p>
                    </li>
                    <li>
                        <h4>고객상담센터 · 가맹문의</h4>
                        <h1>1588-1303</h1>
                        <h4>기업,행사,대량 구매 문의는</h4>
                        <h1>031-333-1303</h1>
                        <h3>또는 카카오톡 채널로 문의주세요.</h3>
                        <h4>평일 09:00 ~ 17:20 (점심 12:30 ~ 13:30)</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}