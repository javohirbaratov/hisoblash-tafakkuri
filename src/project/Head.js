import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
const Head = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [homeLink, setHomeLink] = useState(false);
    const [boxicon, setBoxicon] = useState(false);
    const location = useLocation();
    function switch_menu() {
        setShowMenu(!showMenu);
        setBoxicon(!boxicon);
    }

    useEffect(() => {
        if (location.pathname != "/") {
            setHomeLink(false);
        } else {
            setHomeLink(true);
        }
    }, [location]);

    return (
        <div>
            <header className="header">
                <a className={`${homeLink ? null : 'none'}`}></a>
                <Link to="/" className={`mobli ${homeLink ? 'none' : null}`}>Asosiy sahifa</Link>
                <div className="header__togle">
                    {
                        boxicon ? (
                            <svg onClick={switch_menu} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) :
                            (
                                <svg onClick={switch_menu} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
                            )
                    }
                </div>
                <nav className={`nav ${showMenu ? 'show' : null}`} id="nav-menu">
                    <div className="nav__content bd-grid">
                        <div className="nav__title">
                            <span className="nav__name">Hisoblash tafakkuri</span>
                        </div>
                        <ul className="nav__menu">
                            <li className="nav__item">
                                <Link to="/" onClick={switch_menu} className="nav__link">Asosiy sahifa</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/information" onClick={switch_menu} className="nav__link">Umumiy ma'lumotlar</Link>
                            </li>
                            <li className="nav__item">
                                <Link to="/select" onClick={switch_menu} className="nav__link">Savollar va testlar</Link>
                            </li>
                            <li className="nav__item">
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <Outlet />
        </div>
    );
};


export default Head;