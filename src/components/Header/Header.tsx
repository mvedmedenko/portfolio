import s from "./Header.module.css"
import Navbar from "./Navbar/Navbar";




const Header = () => {

    return (
        <header className={s.header}>
            <div className="container">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;