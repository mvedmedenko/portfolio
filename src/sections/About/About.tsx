import s from "./About.module.css"
import { useRef } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";


const About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const completedRef = useRef(null);
  const experienceRef = useRef(null);
  const reviewsRef = useRef(null);

  const sectionAnimationClass = useScrollAnimation(titleRef, s.section_number, s.animate_section);
  const titleAnimationClass = useScrollAnimation(titleRef, s.title, s.animate_title);
  const subtitleAnimationClass = useScrollAnimation(subtitleRef, s.subtitle_box, s.animate_subtitle);
  const completedAnimationClass = useScrollAnimation(completedRef, s.completed_work, s.animate_completed);
  const experienceAnimationClass = useScrollAnimation(experienceRef, s.experience, s.animate_experience);
  const reviewsAnimationClass = useScrollAnimation(reviewsRef, s.reviews, s.animate_reviews);

  return (
    <section className={s.about}>
      <div className="container">
        <div className={s.inner}>
          <div>
            <div className={s.title_box}>
              <div ref={titleRef} className={`${s.section_number} ${sectionAnimationClass.animationClass}`}>/03</div>
              <div ref={titleRef} className={`${s.title} ${titleAnimationClass.animationClass}`}>ABOUT ME</div>
            </div>
            <div ref={subtitleRef} className={`${s.subtitle_box} ${subtitleAnimationClass.animationClass}`}>
              <h2 className={s.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
              <div className={s.text}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eum temporibus ipsum mollitia aliquid quas voluptatibus facere, dolor odio officiis id distinctio!
                Accusamus facilis illo commodi sunt asperiores! Necessitatibus, quaerat veniam.
              </div>
            </div>
            <div className={s.grid_container}>
              <div ref={completedRef} className={`${s.completed_work} ${completedAnimationClass.animationClass}`}>
                <div className={s.achiev_title}>succesfully completed work and <br/> sutisfied customers</div>
                <div className={s.achiev_text}>500+</div>
              </div>
              <div ref={experienceRef} className={`${s.experience} ${experienceAnimationClass.animationClass}`}>
                <div className={s.achiev_title}>yearn of continious training and <br/> work experience</div>
                <div className={s.achiev_text}>8</div>
              </div>
              <div ref={reviewsRef} className={`${s.reviews} ${reviewsAnimationClass.animationClass}`}>
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
