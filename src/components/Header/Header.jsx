import React from 'react';
import headerCss from './Header.module.css';

const Header = () => {
    return (
        <header className={headerCss.header}>
            <img className={headerCss.mainLogo} src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png" />
        </header>
    )
}

export default Header;