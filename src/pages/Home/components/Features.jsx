import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2 className="features__title">Why Choose Us</h2>
      <div className="features__container">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          loopedSlides={4}
          allowTouchMove={true}
          navigation={{
            enabled: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2.5,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
          className="features__swiper"
        >
          <SwiperSlide>
            <div className="feature-card">
              <div className="feature-card__icon">🎯</div>
              <h3 className="feature-card__title">Personalized Training Plans</h3>
              <p className="feature-card__description">
                Programs designed for your specific goals and fitness level.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-card">
              <div className="feature-card__icon">👥</div>
              <h3 className="feature-card__title">Dedicated Coaches</h3>
              <p className="feature-card__description">
                Coaches who are committed to helping you achieve your best results.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-card">
              <div className="feature-card__icon">📊</div>
              <h3 className="feature-card__title">Progress Tracking</h3>
              <p className="feature-card__description">
                Advanced tracking tools to monitor your progress and adjust your program for optimal results.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="feature-card">
              <div className="feature-card__icon">🤝</div>
              <h3 className="feature-card__title">Community Support</h3>
              <p className="feature-card__description">
                Join our growing supportive community of like-minded individuals on their fitness journey.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Features; 