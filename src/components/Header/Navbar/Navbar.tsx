import s from "./Navbar.module.css"



const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.list}>
                <li className={s.item}>01/ HOME</li>
                <li className={s.item}>02/ SKILLS</li>
                <li className={s.item}>03/ ABOUT ME</li>
                <li className={s.item}>04/ PORTFOLIO</li>
                <li className={s.item}>05/ CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navbar;