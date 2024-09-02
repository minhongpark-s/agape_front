import React from 'react';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavIntro';

function EgovIntroWork() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><a className="home" href="#!">Home</a></li>
                        <li><a href="#!">정보마당</a></li>
                        <li>주요사업 소개</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents BUSINESS_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">정보마당</h1>

                        <p className="txt_1">대표제품의 소개와 대표서비스의 소개를 보실 수 있는 페이지입니다.</p>
                        
                        <h2 className="tit_4">일반 사업 소개</h2>

                        <h3 className="tit_5">개요</h3>

                        <p className="img">
                            <img className="w" src="/assets/images/business_main_intro.png" alt=""/>
                        </p>
                        <br/>

                        <h2 className="tit_4">특별 사업 소개</h2>
                        <h3 className="tit_5">개요</h3>
                        <p className="img">
                            <img className="w" src="/assets/images/business_spec_intro.png" alt=""/>
                        </p>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovIntroWork;