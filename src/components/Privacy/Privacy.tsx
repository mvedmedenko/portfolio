import s from "./Privacy.module.css"
import closeIcon from "../../assets/images/close.svg"
import { useRef } from "react"

type PrivacyProps = {
    setIsPrivacy: (condition: boolean) => void
}

const Privacy = (props: PrivacyProps) => {

    const ref = useRef(null)

    const closeHandle: React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (e.target === ref.current) {
            props.setIsPrivacy(false)
        }
    }

    return (
        <div ref={ref} onClick={closeHandle} className={s.privacy}>
            <div className={s.inner}>
                <div className={s.content_box}>
                    <div className={s.title_box}>
                        <div  className={s.title}>Privacy Policy</div>
                        <div onClick={() => props.setIsPrivacy(false)} className={s.close}><img src={closeIcon}/></div>
                    </div>
                    <div className={s.privacy_text}>

                        Thank you for visiting our website portfolio. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our portfolio site.

                        <span>Information We Collect:</span>

                        When you visit our website portfolio, we may collect certain information about you, such as:

                        Personal Information: When you voluntarily provide your name, email address, or other details through contact forms or other means.

                        Usage Information: We may gather information about how you interact with our portfolio, including IP addresses, browser types, and access times.

                        <span>How We Use Your Information:</span>

                        We use the information collected for the following purposes:

                        Communication: To respond to your inquiries, feedback, or requests submitted through our contact forms.

                        Portfolio Improvement: To enhance and optimize our website portfolio based on user preferences and feedback.

                        Cookies and Tracking Technologies:

                        Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze website usage. You can control cookie preferences through your browser settings.

                        <span>Third-Party Links:</span>

                        Our portfolio may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of those sites.

                        Data Security:

                        We implement reasonable security measures to protect your information. However, please note that no method of transmission over the internet or electronic storage is 100% secure.

                        <span>Your Choices:</span>

                        You have the right to access, correct, or delete your personal information. If you have any questions or concerns about our privacy practices, please contact us using the information provided below.

                        Changes to this Privacy Policy:

                        We reserve the right to update this Privacy Policy to reflect changes in our practices or for legal and regulatory reasons. We encourage you to review this policy periodically for any updates.

                        <span>Contact Us:</span>

                        If you have any questions about this Privacy Policy or our practices, please contact us at [maksym.vedmedenko@gmail.com].

                        By using our website portfolio, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please refrain from using our website.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy;