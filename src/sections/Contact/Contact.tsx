import s from "./Contact.module.css"
import ContactForm from "./Form/ContactForm"
import locationIcon from "../../assets/images/location.svg"
import mailIcon from "../../assets/images/mail.svg"
import { Tooltip } from "react-tooltip"
import { useRef } from "react"
import { useScrollAnimation } from "../../hooks/useScrollAnimation"

const Contact = () => {

    const titleRef = useRef(null);
    const formRef = useRef(null);

    const sectionAnimationClass = useScrollAnimation(titleRef, s.section_number, s.animate_section);
    const titleAnimationClass = useScrollAnimation(formRef, s.title, s.animate_title);
    const formAnimationClass = useScrollAnimation(formRef, s.form, s.animate_form);
    const contactAnimationClass = useScrollAnimation(formRef, s.contact_box, s.animate_contact);

    return (
        <section className={s.contact}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.title_box}>
                        <div ref={titleRef} className={`${s.section_number} ${sectionAnimationClass.animationClass}`}>/05</div>
                        <div ref={titleRef} className={`${s.title} ${titleAnimationClass.animationClass}`}>CONTACT</div>
                    </div>
                    <div className={s.grid_container}>
                        <div ref={formRef} className={`${s.form} ${formAnimationClass.animationClass}`}>
                            <ContactForm />
                        </div>
                        <div ref={formRef} className={`${s.contact_box} ${contactAnimationClass.animationClass}`}>
                            <div className={s.location_box}>
                                <div className={s.country_box}>
                                    <div><img src={locationIcon} alt="" /></div>
                                    <div className={s.country}>Canada</div>
                                </div>
                                <div className={s.city}>Russel</div>
                            </div>
                            <div className={s.phone_box}>
                                <div><a className={s.phone_number} href="tel:+16476695887">+1 647 669 5887</a></div>
                                <a id="telegram" target="_blank" href="https://t.me/mvedmedenko"><div className={s.telegram}></div></a>
                                <Tooltip anchorSelect="#telegram" clickable>
                                    TELEGRAM
                                </Tooltip>
                            </div>
                            <div className={s.social_box}>
                                <div className={s.social_text}>me in social media</div>
                                <div className={s.icons_box}>
                                    <div className={s.icon_item}>
                                        <a id="instagram" target="_blank" href="https://www.instagram.com/mvedmedenko_/"><div className={s.instagram}></div></a>
                                        <Tooltip anchorSelect="#instagram" clickable>
                                            INSTAGRAM
                                        </Tooltip>
                                    </div>
                                    <div className={s.icon_item}>
                                        <a id="linkedIn" target="_blank" href="https://www.linkedin.com/in/maksym-vedmedenko-3b5249235/"><div className={s.linkedIn}></div></a>
                                        <Tooltip anchorSelect="#linkedIn" clickable>
                                            LINKEDIN
                                        </Tooltip>
                                    </div>
                                    <div className={s.icon_item}>
                                        <a id="github" target="_blank" href="https://github.com/mvedmedenko"><div className={s.github}></div></a>
                                        <Tooltip anchorSelect="#github" clickable>
                                            GITHUB
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <div className={s.email_box}>
                                <div><img src={mailIcon} alt="" /></div>
                                <a href="mailto:maksym.vedmedenko@gmail.com">maksym.vedmedenko@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Contact