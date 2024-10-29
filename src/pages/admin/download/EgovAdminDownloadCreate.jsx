import React, { useState, useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import CODE from 'constants/code';
import { DOWNLOAD_BBS_ID } from 'config';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAdmin';
import EgovAttachFile from 'components/EgovAttachFile';
import bbsFormVaildator from 'utils/bbsFormVaildator';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's styles
import './EgovAdminDownloadEdit.css';

const modules = {
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
    ],
};

const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
];

function EgovAdminDownloadCreate(props) {

    console.group("EgovAdminDownloadCreate");
    console.log("------------------------------");
    console.log("EgovAdminDownloadCreate [props] : ", props);

    const navigate = useNavigate();
    const location = useLocation();
    console.log("EgovAdminDownloadCreate [location] : ", location);

    const bbsId = location.state?.bbsId || DOWNLOAD_BBS_ID;
    const nttId = location.state?.nttId || "";

    const [modeInfo, setModeInfo] = useState({ mode: props.mode });
    const [masterBoard, setMasterBoard] = useState({});
    const [boardDetail, setBoardDetail] = useState({ nttSj: '', nttCn: '' });
    const [boardAttachFiles, setBoardAttachFiles] = useState();

    const initMode = () => {
        switch (props.mode) {
            case CODE.MODE_CREATE:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: "등록",
                    method: "POST",
                    editURL: '/board'
                });
                break;
            case CODE.MODE_MODIFY:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: "수정",
                    method: "PUT",
                    editURL: `/board/${nttId}`
                });
                break;
            case CODE.MODE_REPLY:
                setModeInfo({
                    ...modeInfo,
                    modeTitle: "답글쓰기",
                    method: "POST",
                    editURL: '/boardReply'
                });
                break;
			default:
                navigate({pathname: URL.ERROR}, {state: {msg : ""}});
        }
        retrieveDetail();
    }

    const retrieveDetail = () => {

        if (modeInfo.mode === CODE.MODE_CREATE) {// 등록이면 마스터 정보에서 파일 첨부 가능 여부 조회함
            const retrieveDetailURL = `/boardFileAtch/${bbsId}`;
            const requestOptions = {
                method: "GET",
                headers: {
                    'Content-type': 'application/json'
                }
            }

            EgovNet.requestFetch(retrieveDetailURL,
                requestOptions,
                function (resp) {
                    setMasterBoard(resp.result.brdMstrVO);
                }
            );

            setBoardDetail({ bbsId: bbsId, nttSj: "", nttCn: "" });
            return;
        }

        const retrieveDetailURL = `/board/${bbsId}/${nttId}`;
        const requestOptions = {
            method: "GET",
            headers: {
                'Content-type': 'application/json'
            }
        }
        EgovNet.requestFetch(retrieveDetailURL,
            requestOptions,
            function (resp) {
                setMasterBoard(resp.result.brdMstrVO);

                // 초기 boardDetail 설정 => ( 답글 / 수정 ) 모드일때...
                if (modeInfo.mode === CODE.MODE_REPLY) {// 답글모드이면 RE: 붙여줌
                    setBoardDetail({ ...resp.result.boardVO, nttSj: "RE: " + resp.result.boardVO.nttSj, nttCn: "" , inqireCo: 0, atchFileId: ""});
                }
                if (modeInfo.mode === CODE.MODE_MODIFY) {
                    setBoardDetail(resp.result.boardVO);
                }

                // 초기 setBoardAttachFiles 설정 => (수정) 모드 일때...
                if (modeInfo.mode === CODE.MODE_MODIFY) {
                    setBoardAttachFiles(resp.result.resultFiles);
                }
            }
        );
    }

    const updateBoard = () => {
        const formData = new FormData();
        for (let key in boardDetail) {
            formData.append(key, boardDetail[key]);
            //console.log("boardDetail [%s] ", key, boardDetail[key]);
        }

        if (bbsFormVaildator(formData)) {
            const requestOptions = {
                method: modeInfo.method,
                body: formData
            }

            EgovNet.requestFetch(modeInfo.editURL,
                requestOptions,
                (resp) => {
                    if (Number(resp.resultCode) === Number(CODE.RCV_SUCCESS)) {
                        navigate(URL.SUPPORT_DOWNLOAD, {state:{bbsId : bbsId}});
                    } else {
                        // alert("ERR : " + resp.message);
                        navigate({pathname: URL.ERROR}, {state: {msg : resp.resultMessage}});
                    }
                }
            );
        };
    };

	const Location = React.memo(function Location(masterBoard) {
        return (
            <div className="location">
                <ul>
                    <li><Link to={URL.MAIN} className="home">Home</Link></li>
                    <li><Link to={URL.ADMIN}>사이트관리</Link></li>
                    <li>{masterBoard && masterBoard.bbsNm}</li>
                </ul>
            </div>
        )
    });

    useEffect(function () {
        initMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.groupEnd("EgovAdminDownloadCreate");





    return(
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">고객지원</Link></li>
                        <li>소개</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents PDS_REG" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">고객지원</h1>
                        </div>

                        <h2 className="tit_2">자료실</h2>

                        <div className="board_view2">
                            <dl>
                                <dt>
                                    <label htmlFor="nttSj">제목<span className="req">필수</span></label>
                                </dt>
                                <dd>
                                    <input className="f_input2 w_full" id="nttSj" name="nttSj" type="text"
                                        defaultValue={boardDetail.nttSj}
                                        onChange={e => setBoardDetail({ ...boardDetail, nttSj: e.target.value })}
                                        maxLength="60" />
                                </dd>
                            </dl>
                            <dl>
                                <dt><label htmlFor="nttCn">내용<span className="req">필수</span></label></dt>
                                <dd style={{ height: '400px' }}>
{/*                                     <ReactQuill */}
{/*                                         value={boardDetail.nttCn} */}
{/*                                         onChange={(value) => setBoardDetail({ ...boardDetail, nttCn: value })} */}
{/*                                         modules={modules} */}
{/*                                         formats={formats} */}
{/*                                         placeholder= "이곳에 내용을 입력하세요!" */}
{/*                                         style={{ height: '100%' }} // 전체 높이 설정 */}
{/*                                     /> */}
                                        <textarea className="f_txtar w_full h_200" id="nttCn" name="nttCn" cols="30" rows="10" placeholder=""
                                            defaultValue={boardDetail.nttCn}
                                            onChange={e => setBoardDetail({ ...boardDetail, nttCn: e.target.value })}></textarea>
                                </dd>
                            </dl>
                            {/* 답글이 아니고 게시판 파일 첨부 가능 상태에서만 첨부파일 컴포넌트 노출 */}
                            {modeInfo?.mode !== CODE.MODE_REPLY && masterBoard.fileAtchPosblAt === 'Y' &&
                                <EgovAttachFile
                                    fnChangeFile={(attachfile) => {
                                        console.log("====>>> Changed attachfile file = ", attachfile);
                                        const arrayConcat = { ...boardDetail}; // 기존 단일 파일 업로드에서 다중파일 객체 추가로 변환(아래 for문으로)
										for ( let i = 0; i < attachfile.length; i++) {
											arrayConcat[`file_${i}`] = attachfile[i];
										}
                                        setBoardDetail(arrayConcat);
                                    }}
                                    fnDeleteFile={(deletedFile) => {
                                        console.log("====>>> Delete deletedFile = ", deletedFile);
                                        setBoardAttachFiles(deletedFile);
                                    }}
                                    boardFiles={boardAttachFiles}
                                    mode={props.mode}
                                    posblAtchFileNumber ={masterBoard.posblAtchFileNumber}
                                />
                            }
                            {/* <!-- 버튼영역 --> */}
                            <div className="board_btn_area">
                                <div className="left_col btn1">
                                    <button className="btn btn_skyblue_h46 w_100"
                                        onClick={() => updateBoard()}>저장</button>
                                </div>

                                <div className="right_col btn1">
                                    <Link to={URL.ADMIN_DOWNLOAD} className="btn btn_blue_h46 w_100">목록</Link>
                                </div>
                            </div>
                            {/* <!--// 버튼영역 --> */}
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAdminDownloadCreate;