import s from "./About.module.css"
import 'aos/dist/aos.css';


const About = () => {


  return (
    <section id="about" className={s.about}>
      <div className="container">
        <div className={s.inner}>
          <div>
            <div
              className={s.title_box}>
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className={s.section_number}
              >/03
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="1000"
                className={s.title}
              >ABOUT ME
              </div>
            </div>
            <div className={s.subtitle_box}>
              <h2
                data-aos="zoom-in-right"
                className={s.subtitle}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
              <div
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                className={s.text}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eum temporibus ipsum mollitia aliquid quas voluptatibus facere, dolor odio officiis id distinctio!
                Accusamus facilis illo commodi sunt asperiores! Necessitatibus, quaerat veniam.
              </div>
            </div>
            <div className={s.grid_container}>
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="500"
                data-aos-offset="0"
                className={s.completed_work}>
                <div className={s.achiev_title}>succesfully completed work and <br /> sutisfied customers</div>
                <div className={s.achiev_text}>500+</div>
              </div>
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1000"
                data-aos-offset="0"
                className={s.experience}>
                <div className={s.achiev_title}>yearn of continious training and <br /> work experience</div>
                <div className={s.achiev_text}>8</div>
              </div>
              <div
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="1500"
                data-aos-offset="0"
                className={s.reviews}>
                <div className={s.achiev_title}>reviews about my work</div>
                <div className={s.achiev_text}>380</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.grid_element}></div>
    </section>
  );
};

export default About;
