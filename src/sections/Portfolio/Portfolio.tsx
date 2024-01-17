import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './Portfolio.module.css';
import Test from './Projects/Test/Test';
import prevArrow from '../../assets/images/prevArrow.svg';
import nextArrow from '../../assets/images/nextArrow.svg';
import { useRef } from 'react';
import { useScrollAnimation } from '../../assets/hooks/useScrollAnimation';

const CustomPrevArrow = (props: any) => (

    <div
      className={`${s.custom_arrow} ${s.prev_arrow}`}
      onClick={props.onClick}
    >
      <img src={prevArrow} alt="Previous" />
    </div>
  );
  
  const CustomNextArrow = (props: any) => (
    <div
      className={`${s.custom_arrow} ${s.next_arrow}`}
      onClick={props.onClick}
    >
      <img src={nextArrow} alt="Next" />
    </div>
  );
  
  const Portfolio = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };

    const titleRef = useRef(null); 
    const sliderRef = useRef(null); 

    const sectionAnimationClass = useScrollAnimation(titleRef, s.section_number, s.animate_section);
    const titleAnimationClass = useScrollAnimation(titleRef, s.title, s.animate_title);
    const sliderAnimationClass = useScrollAnimation(sliderRef, s.slider_box, s.animate_slider);


    return (
      <section className={s.portfolio}>
        <div className="container">
          <div className={s.inner}>
            <div className={s.title_box}>
              <div ref={titleRef} className={sectionAnimationClass}>/04</div>
              <div ref={titleRef} className={titleAnimationClass}>PORTFOLIO</div>
            </div>
            <div className={s.portfolio_box}>
              <div className={s.box_green_element}>
                <div ref={sliderRef} className={sliderAnimationClass}>
                  <Slider {...settings} className={s.slider}>
                    <Test />
                    <Test />
                    <Test />
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  

export default Portfolio;
