import s from "./Skills.module.css";
import reactIcon from "../../assets/images/skillsIcons/react.svg"
import reduxIcon from "../../assets/images/skillsIcons/redux.svg"
import jsIcon from "../../assets/images/skillsIcons/js.svg"
import tsIcon from "../../assets/images/skillsIcons/ts.svg"
import htmlIcon from "../../assets/images/skillsIcons/html5.svg"
import cssIcon from "../../assets/images/skillsIcons/css3.svg"
import materialUiIcon from "../../assets/images/skillsIcons/materialUi.svg"
import tailwwindIcom from "../../assets/images/skillsIcons/tailwind.svg"
import tddIcon from "../../assets/images/skillsIcons/tdd.svg"
import nmpIcon from "../../assets/images/skillsIcons/npm.svg"
import yarnIcon from "../../assets/images/skillsIcons/yarn.svg"
import storybookIcon from "../../assets/images/skillsIcons/storybook.svg"
import gitIcon from "../../assets/images/skillsIcons/git.svg"
import restApiIcon from "../../assets/images/skillsIcons/restApi.svg"
import axiosIcon from "../../assets/images/skillsIcons/axios.svg"
import sassIcon from "../../assets/images/skillsIcons/sass.svg"
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
                                REDUX / RTK QUERY / REDUX TOOLKIT
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
                            <a id="html5"><img width="80px" height="64px" className={s.html5} src={htmlIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#html5" clickable>
                                HTML5
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="css3"><img width="80px" height="64px" className={s.css3} src={cssIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#css3" clickable>
                                CSS3
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="materialui"><img width="80px" height="64px" className={s.materialui} src={materialUiIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#materialui" clickable>
                                MATERIAL UI
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}>
                            <a id="tailwind"><img width="80px" height="64px" className={s.tailwind} src={tailwwindIcom} alt="IMG" /></a>
                            <Tooltip anchorSelect="#tailwind" clickable>
                                TAILWIND
                            </Tooltip> 
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="npm"><img width="80px" height="64px" className={s.npm} src={nmpIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#npm" clickable>
                                NPM
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="yarn"><img width="80px" height="64px" className={s.yarn} src={yarnIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#yarn" clickable>
                                YARN
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="storybook"><img width="80px" height="64px" className={s.storybook} src={storybookIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#storybook" clickable>
                                STORYBOOK
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="git"><img width="80px" height="64px" className={s.git} src={gitIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#git" clickable>
                                GIT
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item
                            }>
                            <a id="restapi"><img width="80px" height="64px" className={s.restapi} src={restApiIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#restapi" clickable>
                                REST API
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="axios"><img width="80px" height="64px" className={s.axios} src={axiosIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#axios" clickable>
                                AXIOS
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="sass"><img width="80px" height="64px" className={s.sass} src={sassIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#sass" clickable>
                                SASS
                            </Tooltip>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-delay="1000"
                            className={s.item}
                        >
                            <a id="tdd"><img width="80px" height="64px" className={s.tdd} src={tddIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#tdd" clickable>
                                UNIT TESTS
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
