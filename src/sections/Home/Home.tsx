import Header from "../../components/Header/Header";
import s from "./Home.module.css";
import FlyingObject from "./FlyingObject/FlyingObject";
import testFly from "../../assets/images/testFly.svg"

const Home = () => {

    return (
        <section className={s.home}>
            <div className={s.symbols_elements}>
                <div>
                    <Header />
                </div>
                <div className="container">
                    <div className={s.inner}>
                        {/* <FlyingObject x={300} y={150}>
                            <img src={testFly} alt="Flying Object" />
                        </FlyingObject> */}
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
                            <button>DOWNLOAD CV</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.stars}></div>
            <div className={s.green_element}></div>
        </section>
    );
};


export default Home;
