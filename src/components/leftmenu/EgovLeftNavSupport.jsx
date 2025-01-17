import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavSupport() {
    return (
        <div className="nav">
            <div className="inner">
                <h2>고객지원</h2>
                <ul className="menu4">
                    <li><NavLink to={URL.SUPPORT_DOWNLOAD} className={({ isActive }) => (isActive ? "cur" : "")}>운영자료</NavLink></li>
                    <li><NavLink to={URL.SUPPORT_APPLY} className={({ isActive }) => (isActive ? "cur" : "")}>후원문의</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default EgovLeftNavSupport;