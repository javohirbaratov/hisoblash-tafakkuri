import React, {useState,useEffect} from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
const Head = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [homeLink, setHomeLink] = useState(false);
    const [boxicon, setBoxicon] = useState(false);
    const location = useLocation();
    function switch_menu(){
        setShowMenu(!showMenu);
        setBoxicon(!boxicon);
    }
    
    useEffect(() => {
        if(location.pathname != "/"){
            setHomeLink(false);
        }else{
            setHomeLink(true);
        }
      }, [location]);

    return (
        <div>
            <header className="header">
                <a className={`${homeLink ? null : 'none'}`}></a>
                <Link to="/" className={`mobli ${homeLink ? 'none' : null}`}>Asosiy sahifa</Link>
                <div className="header__togle">
                    <box-icon name={`${boxicon ? 'x' : 'menu'}`} onClick={switch_menu}></box-icon>
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