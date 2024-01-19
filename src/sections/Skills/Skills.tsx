import s from "./Skills.module.css";
import reactIcon from "../../assets/images/skillsIcons/react.svg"
import reduxIcon from "../../assets/images/skillsIcons/redux.svg"
import jsIcon from "../../assets/images/skillsIcons/js.svg"
import tsIcon from "../../assets/images/skillsIcons/ts.svg"
import bootstrapIcon from "../../assets/images/skillsIcons/bootstrap.svg"
import { Tooltip } from "react-tooltip";
import { useRef } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Skills = () => {

    const titleRef = useRef(null);
    const mainItems = useRef(null)
    const additionalItems = useRef(null)
  
    const sectionAnimationClass = useScrollAnimation(titleRef, s.section_number, s.animate_section);
    const titleAnimationClass = useScrollAnimation(titleRef, s.title, s.animate_title);
    const reactAnimationClass = useScrollAnimation(mainItems, s.react, s.animate_react);
    const reduxAnimationClass = useScrollAnimation(mainItems, s.redux, s.animate_redux);
    const javascriptAnimationClass = useScrollAnimation(mainItems, s.javascript, s.animate_javascript);
    const typescriptAnimationClass = useScrollAnimation(mainItems, s.typescript, s.animate_typescript);

    const oneAnimationClass = useScrollAnimation(additionalItems, s.one, s.animate_one);
    const twoAnimationClass = useScrollAnimation(additionalItems, s.two, s.animate_two);
    const threeAnimationClass = useScrollAnimation(additionalItems, s.three, s.animate_three);
    const fourAnimationClass = useScrollAnimation(additionalItems, s.four, s.animate_four);
    const fiveAnimationClass = useScrollAnimation(additionalItems, s.five, s.animate_five);
    const sixAnimationClass = useScrollAnimation(additionalItems, s.six, s.animate_six);
    const sevenAnimationClass = useScrollAnimation(additionalItems, s.seven, s.animate_seven);
    const eightAnimationClass = useScrollAnimation(additionalItems, s.eight, s.animate_eight);
    const nineAnimationClass = useScrollAnimation(additionalItems, s.nine, s.animate_nine);
    const tenAnimationClass = useScrollAnimation(additionalItems, s.ten, s.animate_ten);
    const elevenAnimationClass = useScrollAnimation(additionalItems, s.eleven, s.animate_eleven);
    const twelveAnimationClass = useScrollAnimation(additionalItems, s.twelve, s.animate_twelve);

    return (
        <section className={s.skills}>
            <div className="container">
                <div className={s.inner}>
                    <div  className={s.title_box}>
                        <div ref={titleRef} className={`${s.section_number} ${sectionAnimationClass.animationClass}`}>/02</div>
                        <div ref={titleRef} className={`${s.title} ${titleAnimationClass.animationClass}`}>MY PROFESSIONAL SKILLS</div>
                    </div>
                    <div className={s.grid_container_main}>
                        <div className={s.item}>
                            <a id="react"><img ref={mainItems} className={`${s.react} ${reactAnimationClass.animationClass}`} src={reactIcon} alt="IMG" /> </a>
                            <Tooltip anchorSelect="#react" clickable>
                                REACT
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="redux"><img ref={mainItems} className={`${s.redux} ${reduxAnimationClass.animationClass}`} src={reduxIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#redux" clickable>
                                REDUX
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="javascript"><img ref={mainItems} className={`${s.javascript} ${javascriptAnimationClass.animationClass}`} src={jsIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#javascript" clickable>
                                JAVASCRIPT
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="typescript"><img ref={mainItems} className={`${s.typescript} ${typescriptAnimationClass.animationClass}`} src={tsIcon} alt="IMG" /> </a>
                            <Tooltip anchorSelect="#typescript" clickable>
                                TYPESCRIPT
                            </Tooltip>
                        </div>
                    </div>
                    <div className={s.grid_container}>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.one} ${oneAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.two} ${twoAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.three} ${threeAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.four} ${fourAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.five} ${fiveAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.six} ${sixAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.seven} ${sevenAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.eight} ${eightAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.nine} ${nineAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.ten} ${tenAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.eleven} ${elevenAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={additionalItems} className={`${s.twelve} ${twelveAnimationClass.animationClass}`} src={bootstrapIcon} alt="IMG" /></a>
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
