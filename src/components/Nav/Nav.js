
import React, {useState} from "react";
import './Nav.scss';
export default function Nav(){
    return(
        <body>
            <div className="nav-total-tit">
            <div className="Nav_total">
                <div className="Nav_tit">
                    <div className="Nav_front">
                        <nav className='Nav_front_nav'>
                            <div>
                                <li>스토어홈</li>
                            </div>
                            <div className="nav-category">
                                <li>카테고리</li>
                            </div>
                            <div>
                                <li>베스트</li>
                            </div>
                            <div>
                                <li>오늘의딜</li>
                            </div>
                            <div>
                                <li>9월빅세일</li>
                            </div>
                            <div>
                                <li>리퍼마켓</li>
                            </div>
                            <div>
                                <li>오!굿즈</li>
                            </div>
                            <div>
                                <li>빠른배송</li>
                            </div>
                            <div>
                                <li>프리미엄</li>
                            </div>
                            <div>
                                <li>기획전</li>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        </body>
    )
}