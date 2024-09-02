import React from 'react';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavIntro';

function EgovIntroService() {
    return (
        <div className="container">
        <div className="c_wrap">
            {/* <!-- Location --> */}
            <div className="location">
                <ul>
                    <li><a className="home" href="#!">Home</a></li>
                    <li><a href="#!">정보마당</a></li>
                    <li>대표서비스 소개</li>
                </ul>
            </div>
            {/* <!--// Location --> */}

            <div className="layout">
                {/* <!-- Navigation --> */}
                <EgovLeftNav></EgovLeftNav>
                {/* <!--// Navigation --> */}
                
                <div className="contents SERVICE_INTRO" id="contents">
                    {/* <!-- 본문 --> */}

                    <h1 className="tit_3">정보마당</h1>

                    <p className="txt_1">대표제품의 소개와 대표서비스의 소개를 보실 수 있는 페이지입니다.</p>
                    
                    <h2 className="tit_4">대표서비스 소개</h2>

                    <p className="txt_1">
                        아름다운 세상 사회적 협동조합은 거점으로의 서비스 제공 및
                        2개의 지역 아동센터와 1개의 다함께돌봄센터에서 서비스를 제공한다.<br/>
                                            </p>

                    <h3 className="tit_5">지역아동센터 & 다함께돌봄센터</h3>

                    <div className="msg">
                        <p>지역아동센터와 다함께돌봄센터에서는 아동 관련 다양한 서비스를 제공한다<br/></p>
                        <ul>
                            <li>아동 맞춤형 서비스: 아동의 특성에 맞는 욕구와 적성, 연령, 기호에 맞는 맞춤형 서비스 지원</li>
                            <li>심리/정서적 서비스: 아동 상담, 관찰, 지지 등 정서적으로 안정감을 주는 서비스 연계</li>
                            <li>아동 가족 지원 서비스 : 부모상담 등 정기적 소통을 통해 돌봄 서비스 제공, 다양한 지역자원, 부모교육</li>
                            <li>다문화 가족지원 서비스 : 다문화의 다양성 이해증진 및 통합적 돌봄서비스 지원</li>
                        </ul>
                    </div>

                    <h3 className="tit_5">업무처리</h3>

                    <div className="msg second">
                        <p>업무처리 서비스는 업무 프로그램의 업무 로직을 담당하는 서비스로 업무 흐름제어, 트랜잭션 관리, 에러 처리 등의<br/>
                            기능을 제공한다.</p>
                        <ul>
                            <li>Process Control : 비지니스 로직과 업무 흐름의 분리를 지원하며, XML 등의 외부 설정으로 업무흐름 구성을 제공하고, 미리 정의된 프로세스를 실행하는 기능을 제공한다.
                                </li>
                            <li>Exception Handling : 응용 프로그래밍의 수행 과정에서 발생하는 예외사항(Exception)을 처리하기 위해 표준화된 방법을 제공한다.</li>
                        </ul>
                    </div>

                    {/* <!--// 본문 --> */}
                </div>
            </div>
        </div>
    </div>
    );
}

export default EgovIntroService;