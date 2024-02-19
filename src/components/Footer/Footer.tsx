import s from "./Footer.module.css"

type FooterProps = {
    setIsPrivacy: (condition: boolean) => void
}

const Footer = (props: FooterProps) => {

    const year = new Date().getFullYear()

    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.inner}>
                    <div>© Vedmedenko | {year}</div>
                    <div className={s.privacy_text} onClick={() => props.setIsPrivacy(true)}>Privacy Policy</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;