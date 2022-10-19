import categoryData from './category.json';

import './Nav.scss';

export default function Nav(){
    return(
        <body className='nav_body'>
            <div className="nav-total-tit">
            <div className="Nav_total">
                <div className="Nav_tit">
                    <div className="Nav_front">
                        <nav className='Nav_front_nav'>
                            <a>
                                <div>
                                    <li className='storehome'>스토어홈</li>    
                                </div>
                            </a>
                            <a>
                                <div className="nav-category">
                                    <li>카테고리</li>
                                    <div className="nav-category--category">
                                        <ul className="nav-category-list">
                                            {categoryData.category.map(c => {
                                                <li className="nav-category-list-one">
                                                    <img className="nav-category-list-one-img" src={c.iconImage} alt="icon" />
                                                    <span className="nav-category-list-one-span">{c.title}</span>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>베스트</li>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>오늘의딜</li>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>9월빅세일</li>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>리퍼마켓</li>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>오!굿즈</li>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>빠른배송</li>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>프리미엄</li>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <li>기획전</li>
                                </div>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        </body>
    )
}