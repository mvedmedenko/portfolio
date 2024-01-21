import s from "./Navbar.module.css"
import { useState, useEffect } from 'react';
import { Link } from "react-scroll";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("home")
    const [scrollY, setScrollY] = useState(0);

    const hamburgerHandler = () => {
        setMenuOpen(!menuOpen);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

      
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        if(scrollY > 650 && scrollY < 1378) {
          setActive("skills")
        } else if(scrollY > 1378 && scrollY < 2108) {
          setActive("about")
        } else if(scrollY > 2108 && scrollY < 2709) {
          setActive("portfolio")
        } else if(scrollY > 2709) {
          setActive("contact")
        } else if(scrollY >= 0 && scrollY < 712) {
          setActive("home")
        }
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [scrollY]);




    return (
        <nav className={scrollY > 100 && window.innerWidth > 775 ? s.navbar_scrolled : s.navbar}>
            <div className={menuOpen ? s.menuBg : ''}></div>
            <div className={s.menuBar} onClick={hamburgerHandler}>
                <div className={menuOpen ? s.changed_bar1 : s.bar1}></div>
                <div className={menuOpen ? s.changed_bar2 : s.bar}></div>
                <div className={menuOpen ? s.changed_bar3 : s.bar3}></div>
            </div>

            <ul className={`${scrollY > 100 && window.innerWidth > 775 ? s.list_scrolled : s.list} ${menuOpen ? s.active : ''}`}>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={active === "home" ? s.item_active : s.item}
                >
                   <span>01/</span> HOME
                </Link>
                <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={window.innerWidth < 775 ? 20 : -100}
                    duration={500}
                    className={active === "skills" ? s.item_active : s.item}
                >
                    <span>02/</span> SKILLS
                </Link>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={window.innerWidth < 775 ? 40 : -200}
                    duration={500}
                    className={active === "about" ? s.item_active : s.item}
                >
                    <span>03/</span> ABOUT ME
                </Link>
                <Link
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={window.innerWidth < 775 ? 40 : -80}
                    duration={500}
                    className={active === "portfolio" ? s.item_active : s.item}
                >
                    <span>04/</span> PORTFOLIO
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={window.innerWidth < 775 ? -50 : 0}
                    duration={500}
                    className={active === "contact" ? s.item_active : s.item}
                >
                    <span>05/</span> CONTACT
                </Link>
            </ul>
        </nav>
    );
}

export default Navbar;
