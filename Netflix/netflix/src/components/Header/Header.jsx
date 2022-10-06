import React from "react";
import './Header.css';


export default ({black}) => {

    return (
        <header className={black ? 'black' : ' '}>
            <div className="header--logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/120px-Netflix_2015_logo.svg.png" alt="Netflix-logo"/>
            </div>
            <div className="header--user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzlmBpPN7ESAXb-m_DlVpqcX3VwKf_vPRshQ&usqp=CAU" alt="user-logo"/>
            </div>
        </header>
    )
}