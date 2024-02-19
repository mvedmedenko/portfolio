import s from "./StussyCopy.module.css"
import { Tooltip } from "react-tooltip"
import stussyImg from "../../../../assets/images/projectsScreens/stussyCopy/stussy.png"
import reactIcon from "../../../../assets/images/skillsIcons/react.svg"
import reduxIcon from "../../../../assets/images/skillsIcons/redux.svg"
import tsIcon from "../../../../assets/images/skillsIcons/ts.svg"
import firebaseIcon from "../../../../assets/images/skillsIcons/firebase.svg"
import formikIcon from "../../../../assets/images/skillsIcons/formik.svg"



const StussyCopy = () => {
    return (
        <div className={s.stussy}>
            <div className={s.inner}>
                <div>
                    <div className={s.title}>01 / Copy of Stussy store</div>
                    <div className={s.description}>
                        <div className={s.description_text}>This project was created based on an existing online store for the Stussy brand's clothing.
                            The project incorporates various functionalities, including adding items to the shopping cart,
                            creating a personal account, adding delivery addresses, and the option for user registration, among other features.
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
                                    <img id="redux" src={reduxIcon} alt="REDUX" />
                                    <Tooltip anchorSelect="#redux" clickable>
                                        REDUX
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="firebase" src={firebaseIcon} alt="FIREBASE" />
                                    <Tooltip anchorSelect="#firebase" clickable>
                                        FIREBASE
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
                        <a target="_blank" href="https://mvedmedenko.github.io/stussy/"><button className={s.visit_btn}>VISIT WEBSITE</button></a>
                        <a target="_blank" href="https://github.com/mvedmedenko/stussy"><button className={s.github_btn}>SEE ON GITHUB</button></a>
                    </div>
                </div>
                <div className={s.img_box}>
                    <img src={stussyImg} alt="screen" />
                </div>
            </div>
        </div>
    )
}

export default StussyCopy;