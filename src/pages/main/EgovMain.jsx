import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function EgovMain(props) {
    console.group("EgovMain");
    console.log("[Start] EgovMain ------------------------------");
    console.log("EgovMain [props] : ", props);

      const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,         // 한번에 1개의 슬라이드를 보여줌
        centerMode: true,        // 중앙에 슬라이드를 배치하고 좌우에 일부 이미지가 보이도록 설정
        centerPadding: "15%",    // 양쪽에 25%씩 보이도록 설정
        autoplay: true,
        autoplaySpeed: 3000,
      };

    const location = useLocation();
    console.log("EgovMain [location] : ", location);

	// eslint-disable-next-line no-unused-vars
    const [noticeBoard, setNoticeBoard] = useState();
	// eslint-disable-next-line no-unused-vars
    const [gallaryBoard, setGallaryBoard] = useState();
    const [noticeListTag, setNoticeListTag] = useState();
    const [gallaryListTag, setGallaryListTag] = useState();

    const retrieveList = useCallback(() => {
        console.groupCollapsed("EgovMain.retrieveList()");

        const retrieveListURL = '/mainPage';
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {

                setNoticeBoard(resp.result.notiList);
                setGallaryBoard(resp.result.galList);

                let mutNotiListTag = [];
                mutNotiListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

                // 리스트 항목 구성
                resp.result.notiList.forEach(function (item, index) {
                    if (index === 0) mutNotiListTag = []; // 목록 초기화
                    mutNotiListTag.push(
                        <li key={item.nttId}>
                            <Link
                                to={{pathname: URL.INFORM_NOTICE_DETAIL}}
                                state={{
                                    nttId: item.nttId,
                                    bbsId: item.bbsId
                                }}
                            >
                                {item.nttSj}
                                <span>{item.frstRegisterPnttm}</span>
                            </Link>
                        </li>
                    );
                });
                setNoticeListTag(mutNotiListTag);

                let mutGallaryListTag = [];
                mutGallaryListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

                // 리스트 항목 구성
                resp.result.galList.forEach(function (item, index) {
                    if (index === 0) mutGallaryListTag = []; // 목록 초기화
                    mutGallaryListTag.push(
                        <li key={item.nttId}>
                            <Link
                                to={{pathname: URL.INFORM_GALLERY_DETAIL}}
                                state={{
                                    nttId: item.nttId,
                                    bbsId: item.bbsId
                                }}
                            >
                                {item.nttSj}
                                <span>{item.frstRegisterPnttm}</span>
                            </Link>
                        </li>
                    );
                });
                setGallaryListTag(mutGallaryListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovMain.retrieveList()");
    },[]);

    useEffect(() => {
        retrieveList();
    }, [retrieveList]);

    console.log("------------------------------EgovMain [End]");
    console.groupEnd("EgovMain");

    return (
        <div className="container P_MAIN">
            <div style={{ width: "100%", height: "600px", overflow: "hidden" }}>
              <Slider {...settings}>
                <div>
                  <img src="/assets/images/slider_images/agape_1.jpeg" alt="Slide 1" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                </div>
                <div>
                  <img src="/assets/images/slider_images/agape_2.jpeg" alt="Slide 2" style={{ width: "100%", height: "auto", objectFit: "cover" }}/>
                </div>
                <div>
                  <img src="/assets/images/slider_images/agape_3.jpeg" alt="Slide 3" style={{ width: "100%", height: "auto", objectFit: "cover" }}/>
                </div>
              </Slider>
            </div>
            <div className="c_wrap">
                <div className="colbox">
                    <div className="left_col">
                        <img src="/assets/images/agape_main_picture_1.jpeg" alt="아름다운 세상 법인 아이들 사진." />
                    </div>

                    <div className="right_col">
                        <div className="mini_board">
                            <ul className="tab">
                                <li><a href="#공지사항" className="on">공지사항</a></li>
                                <li><a href="#갤러리">갤러리</a></li>
                            </ul>
                            <div className="list">
                                <div className="notice">
                                    <h2 className="blind">공지사항</h2>
                                    <ul>
                                        {noticeListTag}
                                    </ul>
                                    <Link to={URL.INFORM_NOTICE} className="more">더보기</Link>
                                </div>

                                <div className="gallary">
                                    <h2 className="blind">갤러리</h2>
                                    <ul>
                                        {gallaryListTag}
                                    </ul>
                                    <Link to={URL.INFORM_GALLERY} className="more">더보기</Link>
                                </div>
                            </div>
                        </div>

                        <div className="banner">
                            <Link to={URL.SUPPORT_DOWNLOAD} className="bn1">
                                <strong>자료실</strong>
                                <span>다양한 자료를<br />다운로드 받으실 수 있습니다.</span>
                            </Link>
                            <Link to={URL.ABOUT} className="bn2">
                                <strong>아가페지역아동센터</strong>
                                <span>아가페지역아동센터의<br />약도 등의 정보를 제공합니다.</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="banner_bot">
                    <div className="b1">
                        <div>
                            <h2>주요사업 소개</h2>
                            <p>아름다운 세상 협동조합이 제공하는<br />
                                주요 사업을 소개합니다.</p>
                        </div>
                        <Link to={URL.INTRO_WORKS}>자세히 보기</Link>
                    </div>
                    <div className="b2">
                        <div>
                            <h2>대표서비스 소개</h2>
                            <p>아가페 지역 아동센터에서<br />
                                제공하는 서비스들입니다.</p>
                        </div>
                        <Link to={URL.INTRO_SERVICE}>자세히 보기</Link>
                    </div>
                    <div className="b3">
                        <div>
                            <h2>후원 문의</h2>
                            <p>안산의 아동센터에 <br />
                                후원을 <br />
                                신청 하실 수 있습니다.</p>
                        </div>
                        <Link to={URL.SUPPORT_APPLY}>자세히 보기</Link>
                    </div>
                    <div className="b4">
                        <div>
                            <h2>행사 일정</h2>
                            <p>아름다운 세상 법인과<br />
                                아동센터의 전체적인 일정<br />
                                현황을 조회하실 수 있습니다.</p>
                        </div>
                        <Link to={URL.INFORM}>자세히 보기</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default EgovMain;