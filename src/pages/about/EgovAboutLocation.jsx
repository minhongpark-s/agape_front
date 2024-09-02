import React from 'react';
import { Link } from 'react-router-dom';

import URL from 'constants/url';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutLocation() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.ABOUT}>사이트 소개</Link></li>
                        <li>찾아오시는길</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents SITE_CONTACT_US" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">사이트 소개</h1>

                        <p className="txt_1">아름다운 세상 협동조합의 개요와 연혁, 조직소개,<br/>
                                                    거점 기관 및 아동센터들의 약도 등의 정보를 제공하고 있습니다.</p>

                        <h2 className="tit_4">찾아오시는길</h2>

                        <div className="map">
                            <a href="https://naver.me/xH2jBoZX" target="_blank" rel="noreferrer">
                                <img src="/assets/images/agape_map_static.png" alt="" />
                            </a>
                        </div>

                        <div className="addr">
                            <div className="left_col">
                                <h3>아름다운 세상 사회적 협동조합 주소</h3>
                                <dl>
                                    <dt>도로명주소</dt>
                                    <dd>15324 경기 안산시 상록구 일동로 15 2층</dd>
                                </dl>
                                <dl>
                                    <dt>지번주소</dt>
                                    <dd>15324 일동 121-9 2층</dd>
                                </dl>
                            </div>
                            <div className="right_col">
                                <h3>QR코드로 위치알아보기</h3>
                                <p>스마트폰에서 QR코드<br />
                                    리더를 이용해 사진·<br />
                                    지도 등 다양한 정보를<br />
                                    확인하세요.</p>
                                <img className="qr" src="/assets/images/qrcode.png" alt="qr code" />
                            </div>
                        </div>

                        <div className="way">
                            <div className="left_col">
                                <h3>찾아오시는 길</h3>
                                <dl>
                                    <dt>지하철 4호선</dt>
                                    <dd>한대앞역 1번 출구 앞 버스정류장에서 80A, 23, 11, 125번 버스 이용</dd>
                                </dl>
                                <dl>
                                    <dt>지하철 4호선</dt>
                                    <dd>상록수역 2번 출구 건너편 버스정류장에서 99-1, 80B, 23, 21 버스 이용</dd>
                                </dl>
                            </div>
                            <div className="right_col">
                                <h3>연락처</h3>
                                <dl>
                                    <dt className="call">전화</dt>
                                    <dd>031-417-8122</dd>
                                </dl>
                                <dl>
                                    <dt className="email">이메일</dt>
                                    <dd>myk0584@daum.net</dd>
                                </dl>
                            </div>
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutLocation;