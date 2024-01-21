import s from "./Skills.module.css";
import reactIcon from "../../assets/images/skillsIcons/react.svg"
import reduxIcon from "../../assets/images/skillsIcons/redux.svg"
import jsIcon from "../../assets/images/skillsIcons/js.svg"
import tsIcon from "../../assets/images/skillsIcons/ts.svg"
import bootstrapIcon from "../../assets/images/skillsIcons/bootstrap.svg"
import { Tooltip } from "react-tooltip";

const Skills = () => {

    return (
        <section id="skills" className={s.skills}>
            <div className="container">
                <div className={s.inner}>
                    <div className={s.title_box}>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            className={s.section_number}
                        >/02</div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            className={s.title}>MY PROFESSIONAL SKILLS</div>
                    </div>
                    <div className={s.grid_container_main}>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="200"
                            className={s.item}
                        >
                            <a id="react"><img className={s.react} src={reactIcon} alt="IMG" /> </a>
                            <Tooltip anchorSelect="#react" clickable>
                                REACT
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="400"
                            className={s.item}
                        >
                            <a id="redux"><img className={s.redux} src={reduxIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#redux" clickable>
                                REDUX
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="600"
                            className={s.item}
                        >
                            <a id="javascript"><img className={s.javascript} src={jsIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#javascript" clickable>
                                JAVASCRIPT
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="800"
                            className={s.item}
                        >
                            <a id="typescript"><img className={s.typescript} src={tsIcon} alt="IMG" /> </a>
                            <Tooltip anchorSelect="#typescript" clickable>
                                TYPESCRIPT
                            </Tooltip>
                        </div>
                    </div>
                    <div className={s.grid_container}>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.one} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1100"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.two} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1200"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.three} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1300"
                            className={s.item}>
                            <a id="bootstrap"><img className={s.four} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1400"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.five} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1500"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.six} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1600"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.seven} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1700"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.eight} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1800"
                            className={s.item
                            }>
                            <a id="bootstrap"><img className={s.nine} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1900"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.ten} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="2000"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.eleven} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="2100"
                            className={s.item}
                        >
                            <a id="bootstrap"><img className={s.twelve} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.green_element}></div>
        </section>
    );
};

export default Skills;
