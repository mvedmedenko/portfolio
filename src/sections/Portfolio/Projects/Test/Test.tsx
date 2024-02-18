import s from "./Test.module.css"
import projectImg from "../../../../assets/images/projects/test/project.png"



const Test = () => {
    return (
        <div className={s.test}>
            <div className={s.inner}>
                <div>
                    <div className={s.title}>01/ OMEX</div>
                    <div className={s.description}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, assumenda modi eaque sunt fuga esse consectetur. Magni sed consectetur alias voluptas cupiditate. Vero molestiae quae alias. Voluptatum cupiditate enim molestiae!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, assumenda modi eaque sunt fuga esse consectetur. Magni sed consectetur alias voluptas cupiditate. Vero molestiae quae alias. Voluptatum cupiditate enim molestiae!</p>
                    </div>
                    <div className={s.button_box}>
                        <button className={s.visit_btn}>VISIT WEBSITE</button>
                        <button className={s.github_btn}>SEE ON GITHUB</button>
                    </div>
                </div>
                <div className={s.img_box}>
                    <img src={projectImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Test;