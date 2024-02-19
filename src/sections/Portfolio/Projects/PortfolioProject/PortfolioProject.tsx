import s from "./PortfolioProject.module.css"
import portfolioScreen from "../../../../assets/images/projectsScreens/portfolio/portfolioScreen.png"
import { Tooltip } from "react-tooltip"
import reactIcon from "../../../../assets/images/skillsIcons/react.svg"
import tsIcon from "../../../../assets/images/skillsIcons/ts.svg"
import slickIcon from "../../../../assets/images/skillsIcons/slick.svg"
import aosIcon from "../../../../assets/images/skillsIcons/aos.svg"
import formikIcon from "../../../../assets/images/skillsIcons/formik.svg"



const PortfolioProject = () => {
    return (
        <div className={s.portfolio}>
            <div className={s.inner}>
                <div>
                    <div className={s.title}>03 / Portfolio</div>
                    <div className={s.description}>
                        <div className={s.description_text}>
                            This landing page was created to provide users with information about the developer, 
                            offering the ability to download the resume, view previous projects, and contact the developer through a feedback form.
                            </div>
                        <div className={s.stack_box}>
                            <div className={s.stack_title}>Technologies Stack Used:</div>
                            <div className={s.icons_box}>
                                <div className={s.icon}>
                                    <img id="react" src={reactIcon} alt="REACT" />
                                    <Tooltip anchorSelect="#react" clickable>
                                        REACT
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="ts" src={tsIcon} alt="TYPESCRIPT" />
                                    <Tooltip anchorSelect="#ts" clickable>
                                        TYPESCRIPT
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="aos" src={aosIcon} alt="AOS ANIMATIONS" />
                                    <Tooltip anchorSelect="#aos" clickable>
                                        AOS ANIMATIONS
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="slick" src={slickIcon} alt="SLICK SLIDER" />
                                    <Tooltip anchorSelect="#slick" clickable>
                                        SLICK SLIDER
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="formik" src={formikIcon} alt="FORMIK" />
                                    <Tooltip anchorSelect="#formik" clickable>
                                        FORMIK
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.button_box}>
                        <a target="_blank" href="https://mvedmedenko.github.io/portfolio/"><button className={s.visit_btn}>VISIT WEBSITE</button></a>
                        <a target="_blank" href="https://github.com/mvedmedenko/portfolio"><button className={s.github_btn}>SEE ON GITHUB</button></a>
                    </div>
                </div>
                <div className={s.img_box}>
                    <img src={portfolioScreen} alt="screen" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioProject;