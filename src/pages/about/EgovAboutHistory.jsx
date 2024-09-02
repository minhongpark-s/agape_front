import React from 'react';
import { Link } from 'react-router-dom';

import URL from 'constants/url';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutHistory() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.ABOUT}>사이트 소개</Link></li>
                        <li>연혁</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">사이트 소개</h1>

                        <p className="txt_1">아름다운 세상 협동조합의 개요와 연혁, 조직소개,<br/>
                            거점 기관 및 아동센터들의 약도 등의 정보를 제공하고 있습니다.</p>
                        
                        <h2 className="tit_4">아름다운 세상 사회적 협동조합 연혁</h2>

                        <h3 className="tit_5">연혁</h3>
                    <br/>
                    <div>
                        <img src="/assets/images/corp_hist_simple.png" alt="" />
                    </div>
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutHistory;