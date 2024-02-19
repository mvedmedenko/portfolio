import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './Portfolio.module.css';
import StussyCopy from './Projects/StussyCopy/StussyCopy';
import Weather from './Projects/Weather /Weather';
import prevArrow from '../../assets/images/prevArrow.svg';
import nextArrow from '../../assets/images/nextArrow.svg';
import 'aos/dist/aos.css';
import PortfolioProject from './Projects/PortfolioProject/PortfolioProject';

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


  return (
    <section id='portfolio' className={s.portfolio}>
      <div className="container">
        <div className={s.inner}>
          <div className={s.title_box}>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className={s.section_number}
            >/04</div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className={s.title}
            >PORTFOLIO</div>
          </div>
          <div className={s.portfolio_box}>
            <div className={s.box_green_element}>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className={s.slider_box}
              >
                <div className={s.slider}>
                  <Slider {...settings}>
                    <StussyCopy/>
                    <Weather/>
                    <PortfolioProject/>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Portfolio;
