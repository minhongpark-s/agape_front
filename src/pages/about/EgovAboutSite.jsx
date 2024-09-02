import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutSite() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">사이트 소개</Link></li>
                        <li>소개</li>
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
                        
                        <h2 className="tit_4">아름다운 세상 사회적 협동조합 소개</h2>

                        <h3 className="tit_5">개요</h3>

                        <p className="msg_1">아름다운 세상 사회적 협동조합은 저소득층 아동들에게 학습과 문화 공간을 제공하고, 상담 및 교육을 통해 올바른 가치관을 심어주며, 지역사회의 연계를 통해 보호와 양육이 필요한 아동들이 꿈을 가지고 성장할 수 있도록 통합적인 지원을 제공합니다.
                        </p>
                    
                        <div className="ds_1">

                            <h4 className="t_1">지역아동센터 서비스 품질향상 및  효율성 향상</h4>
                            
                            <ul className="li_1">
                                <li>교육 및 문화 활동<br/>통한 가치키움</li>
                                <li>아동의 행복<br/>보장</li>
                                <li>지역사회<br/>연계</li>
                            </ul>
                            
                            <p className="t_2">아름다운 세상 사회적 협동 조합<br/>설립</p>

                            <div className="bot">
                                <h4 className="t_3">사회적 협동 조합 구축 및 적용 요구</h4>
                                <ul>
                                    <li><span>거점 기관의 부재로 인한<br/>
                                        지역 사회 연계 및 협력 저하<br/>
                                        </span></li>
                                    <li><span>기관별/사업별 개별적인<br/>
                                       사업추진으로 중복 발생</span></li>
                                    <li><span>정부기관 등에 직접적으로<br/>
                                        소통할 협의체의 부재<br/>
                                        </span></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutSite;