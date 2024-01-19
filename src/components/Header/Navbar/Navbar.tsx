import s from "./Navbar.module.css"
import { useState } from 'react';;

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const hamburgerHandler = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={s.navbar}>
            <div className={menuOpen ? s.menuBg : ''}></div>
            <div className={s.menuBar} onClick={hamburgerHandler}>
                <div className={menuOpen ? s.changed_bar1 : s.bar1}></div>
                <div className={menuOpen ? s.changed_bar2 : s.bar}></div>
                <div className={menuOpen ? s.changed_bar3 : s.bar3}></div>
            </div>

            <ul className={`${s.list} ${menuOpen ? s.active : ''}`}>
                <li className={s.item}><span>01/</span>HOME</li>
                <li className={s.item}><span>01/</span>SKILLS</li>
                <li className={s.item}><span>01/</span>ABOUT ME</li>
                <li className={s.item}><span>01/</span>PORTFOLIO</li>
                <li className={s.item}><span>01/</span>CONTACT</li>
            </ul>
        </nav>
    );
}

export default Navbar;
