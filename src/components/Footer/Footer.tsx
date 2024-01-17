import s from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <div>© Vedmedenko | 2024</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;