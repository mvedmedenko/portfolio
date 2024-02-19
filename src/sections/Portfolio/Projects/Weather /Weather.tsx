import s from "./Weather.module.css"
import weatherImg from "../../../../assets/images/projectsScreens/weather/weatherScreen.png"
import { Tooltip } from "react-tooltip"
import reactIcon from "../../../../assets/images/skillsIcons/react.svg"
import reduxIcon from "../../../../assets/images/skillsIcons/redux.svg"
import tsIcon from "../../../../assets/images/skillsIcons/ts.svg"
import tailwindIcon from "../../../../assets/images/skillsIcons/tailwind.svg"
import axiosIcon from "../../../../assets/images/skillsIcons/axios.svg"
import restapiIcon from "../../../../assets/images/skillsIcons/restApi.svg"



const Weather = () => {
    return (
        <div className={s.weather}>
            <div className={s.inner}>
                <div>
                    <div className={s.title}>02 / Weather Application</div>
                    <div className={s.description}>
                        <div className={s.description_text}>
                            Weather Application - upon visiting, displays the current weather forecast based on the approximate user location.
                            Additionally, it features a search functionality allowing users to obtain the forecast for a specified city.
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
                                    <img id="redux" src={reduxIcon} alt="REDUX TOOLKIT" />
                                    <Tooltip anchorSelect="#redux" clickable>
                                        REDUX TOOLKIT
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="tailwind" src={tailwindIcon} alt="TAILWIND" />
                                    <Tooltip anchorSelect="#tailwind" clickable>
                                        TAILWIND
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="axios" src={axiosIcon} alt="AXIOS" />
                                    <Tooltip anchorSelect="#axios" clickable>
                                        AXIOS
                                    </Tooltip>
                                </div>
                                <div className={s.icon}>
                                    <img id="restapi" src={restapiIcon} alt="REST API" />
                                    <Tooltip anchorSelect="#restapi" clickable>
                                        REST API
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.button_box}>
                        <a target="_blank" href="https://mvedmedenko.github.io/weather/"><button className={s.visit_btn}>VISIT WEBSITE</button></a>
                        <a target="_blank" href="https://github.com/mvedmedenko/weather"><button className={s.github_btn}>SEE ON GITHUB</button></a>
                    </div>
                </div>
                <div className={s.img_box}>
                    <img src={weatherImg} alt="screen" />
                </div>
            </div>
        </div>
    )
}

export default Weather;