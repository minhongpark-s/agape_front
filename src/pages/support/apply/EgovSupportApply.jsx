import React from 'react';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';

function EgovSupportApply() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><a className="home" href="#!">Home</a></li>
                        <li><a href="#!">고객지원</a></li>
                        <li>서비스신청</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">고객지원</h1>

                        <p className="txt_1">아름다운 세상 협동조합 관련 다양한 고객지원을 제공합니다.</p>
                        
                        <h2 className="tit_4">후원 안내</h2>
                        <br></br>

                        <a href="https://together.kakao.com/fundraisings/119221/story"><h3 className="tit_5">아이들에게 선물하는 감귤 향 가득한 제주도 여행(클릭)</h3></a>
                        <br></br>


                        <p className="msg_1">
                            <p className="img">
                                <img className="w" src="/assets/images/agape_summer_camp_1.png" alt="summer_camp" style={{ maxHeight: '100%', height: 'auto' }}  />
                            </p>
                            <br></br>
                            <h3>다양한 지역의 가치를 발견하는 아이들의 첫 걸음</h3>
                            올해 11월, 아동에게 제주도 여행을 통한 새로운 시각을 선물하고자 합니다. 우리 센터에는 다문화 가정에서 자라고 있는 아이들이 있습니다. 그 아이들은 다양한 문화 속에서 성장하며, 새로운 경험에 대한 갈망이 큽니다.<br/><br/>
                            이번 제주도 여행은 고학년 아동 중 가정 형편을 고려하여, 한 번도 여행에 참여하지 못한 아동을 중심으로 선정됐습니다. 다문화 가정과 수급자 가정의 아이들에게는 일상 속에서 벗어나 자유로운 공간에서 건강한 일상을 체험하고, 특정 지역을 탐방할 수 있는 소중한 기회가 될 것입니다. 이 여행을 통해서 아이들은 지역사회의 따뜻함을 체험하며, 지방의 가치를 몸소 느낄 수 있을 것입니다.<br/><br/>
                            <br></br>
                            <h3>제주도에서 감귤향 가득한 다채로운 체험</h3>
                            이번 여행은 책 속의 글자로만 배워왔던 역사를 이제는 생생하게 체험할 수 있는 기회입니다. 제주도의 아름다운 자연과 역사적 장소를 직접 방문하며, 아이들은 과거와 현재를 연결하는 특별한 경험을 하게 될 것입니다.<br/><br/>
                            특히 다문화 가정과 수급자 가정의 아이들에게는 이런 현장 체험이 더욱 소중합니다. 아이들은 다양한 배경을 가진 친구들과 함께 감귤 농장에서 직접 감귤을 따고 맛보며, 제주도의 자연과 문화에 대하여 배울 것입니다. 제주도의 다채로운 역사와 문화를 직접 느끼며, 감귤 향 가득한 이 체험은 아이들에게 잊지 못할 추억이 될 것입니다.<br/><br/>
                        </p>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovSupportApply;