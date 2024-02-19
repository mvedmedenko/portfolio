import Header from "../../components/Header/Header";
import s from "./Home.module.css";

type HeaderProps = {
    isPrivacy: boolean
}


const Home = (props: HeaderProps) => {


    return (
        <section id="home" className={s.home}>
            {!props.isPrivacy &&
                <div>
                    <Header />
                </div>
                }
            <div className="container">
                <div className={s.inner}>
                    <div className={s.name_box}>
                        <div className={s.firs_name_box}>
                            <div className={s.design_element}></div>
                            <div className={s.first_name}>MAKSYM</div>
                            <div className={s.major_box}>
                                <div>Front-End</div>
                                <div>Developer</div>
                            </div>
                        </div>
                        <div className={s.last_name}>VEDMEDENKO</div>
                    </div>
                    <div className={s.button}>
                        <a target="_blank" href="https://drive.google.com/file/d/1gfraU_JbXMJARQD6HzgkhBzTDhPBSAIL/view?usp=sharing"><button>DOWNLOAD CV</button></a>
                    </div>
                </div>
            </div>
            <div className={s.symbols_elements}></div>
            <div className={s.stars}></div>
            <div className={s.green_element}></div>
        </section>
    );
};


export default Home;


