import s from "./Skills.module.css";
import reactIcon from "../../assets/images/skillsIcons/react.svg"
import reduxIcon from "../../assets/images/skillsIcons/redux.svg"
import jsIcon from "../../assets/images/skillsIcons/js.svg"
import tsIcon from "../../assets/images/skillsIcons/ts.svg"
import bootstrapIcon from "../../assets/images/skillsIcons/bootstrap.svg"
import { Tooltip } from "react-tooltip";
import { useEffect, useState, useRef } from "react";
import cx from 'classnames';

const Skills = () => {

    const titleRef = useRef(null);
    const reacteRef = useRef(null);
    const oneItem = useRef(null)
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      const rect = titleRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isVisible = rect.top <= windowHeight && rect.bottom >= 0;
  
      setIsVisible(isVisible);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <section className={s.skills}>
            <div className="container">
                <div className={s.inner}>
                    <div  className={s.title_box}>
                        <div ref={titleRef} className={cx(s.section_number, { [s.animate_section]: isVisible })}>/02</div>
                        <div ref={titleRef} className={cx(s.title, { [s.animate_title]: isVisible })}>MY PROFESSIONAL SKILLS</div>
                    </div>
                    <div className={s.grid_container_main}>
                        <div className={s.item}>
                            <a id="react"><img ref={reacteRef} className={cx(s.react, { [s.animate_react]: isVisible })} src={reactIcon} alt="IMG" /> </a>
                            <Tooltip anchorSelect="#react" clickable>
                                REACT
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="redux"><img ref={reacteRef} className={cx(s.redux, { [s.animate_redux]: isVisible })} src={reduxIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#redux" clickable>
                                REDUX
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="javascript"><img ref={reacteRef} className={cx(s.javascript, { [s.animate_javascript]: isVisible })} src={jsIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#javascript" clickable>
                                JAVASCRIPT
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="typescript"><img ref={reacteRef} className={cx(s.typescript, { [s.animate_typescript]: isVisible })} src={tsIcon} alt="IMG" /> </a>
                            <Tooltip anchorSelect="#typescript" clickable>
                                TYPESCRIPT
                            </Tooltip>
                        </div>
                    </div>
                    <div className={s.grid_container}>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.one, { [s.animate_one]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.two, { [s.animate_two]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.three, { [s.animate_three]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.four, { [s.animate_four]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.five, { [s.animate_five]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.six, { [s.animate_six]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.seven, { [s.animate_seven]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.eight, { [s.animate_eight]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.nine, { [s.animate_nine]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.ten, { [s.animate_ten]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.elven, { [s.animate_eleven]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
                            <Tooltip anchorSelect="#bootstrap" clickable>
                                BOOTSTRAP
                            </Tooltip>
                        </div>
                        <div className={s.item}>
                            <a id="bootstrap"><img ref={oneItem} className={cx(s.twelve, { [s.animate_twelve]: isVisible })} src={bootstrapIcon} alt="IMG" /></a>
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
