import React from 'react';
import './Header.css';
import logo from "./img/logo.png";

export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href="/">
                <img src={logo} alt="logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Usuário"/>
                </a>
            </div>
        </header>
    )
}