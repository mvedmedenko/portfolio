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
              >
                Maksym Vedmedenko | Front-End Developer
              </h2>
              <div
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                className={s.text}
              >
                I am an individual with a strong passion for programming.
                I embarked on my journey in web development on my own in May 2021 and have been dedicatedly learning new technologies every day since.
                I have hands-on experience in developing Single Page Applications (SPAs) using React, Redux, and TypeScript. Currently,
                I am actively enhancing my skills in this domain and broadening my experience with emerging technologies.
                My future plans include delving deeper into React, Angular, venturing into server-side development,
                and eventually mastering another programming language.
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
