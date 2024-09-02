import React from 'react';
import { Link } from 'react-router-dom';

import URL from 'constants/url';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutOrganization() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.ABOUT}>사이트 소개</Link></li>
                        <li>조직소개</li>
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

                        <h2 className="tit_4">아름다운 세상 사회적 협동조합 조직소개</h2>

                        <h3 className="tit_5">조직</h3>

                        <p className="msg_1">아가페 지역 아동센터는 총회를 중심으로 이사장이 조직을 이끌며, 감사와 운영위원회가 이를 지원하는 체계적인 구조를 갖추고 있습니다. 운영위원회 아래에는 2개의 아동센터와 1개의 돌봄센터가 있어, 각 센터는 아이들에게 맞춤형 돌봄과 교육을 제공합니다.</p>
                        <p className="img">
                            <img src="/assets/images/agape_organization.png" alt="" />
                        </p>
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutOrganization;