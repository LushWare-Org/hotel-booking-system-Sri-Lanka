import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './OffersSection.css';

const offers = [
  {
    title: "Island Villa Retreat",
    description: "Enjoy the luxury of space, comfort, and tranquility, with 41% off your stay and daily breakfast included.",
    imageUrl: "https://i.postimg.cc/jjVrjHrK/4.png",
    link: "none",
  },
  {
    title: "Poolside Paradise & Island Adventures",
    description: "Relax by the stunning pool and enjoy our exclusive day-out package, featuring unforgettable excursions.",
    imageUrl: "https://i.postimg.cc/gj2C743y/2.png",
    link: "none",
  },
  {
    title: "Tropical Hideaway Retreat",
    description: "Escape to a charming eco-friendly retreat surrounded by lush greenery and the soothing sounds of nature.",
    imageUrl: "https://i.postimg.cc/XJLMxtB7/1.png",
    link: "none",
  },
  {
    title: "Al Fresco Dining Delight",
    description: "Enjoy a magical dining experience under the open sky, where nature sets the perfect backdrop.",
    imageUrl: "https://i.postimg.cc/0Np1Kz8S/3.png",
    link: "none",
  },
  {
    title: "Into the Heart of the Wild",
    description: "Embark on an exhilarating wildlife adventure and witness nature in its purest form. ",
    imageUrl: "https://i.postimg.cc/52QV1PTn/5.png",
    link: "none",
  },
  {
    title: "Majestic Giants of the Wild",
    description: "Witness the awe-inspiring presence of elephants as they roam freely in their natural habitat.",
    imageUrl: "https://i.postimg.cc/bJpcxqJB/6.png",
    link: "none",
  },
];

const OffersSection = () => {
  return (
    <div className="offers-section-wrapper">
      <div className="offers-section">
        <div className="offers-header">
          <h2 className="offers-title">Exclusive LushGlow Haven Offers</h2>
          <p className="offers-subtitle">
            Benefits and best available rates
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]} 
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true} 
          autoplay={{ 
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          className="swiper-container"
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <a href={offer.link} className="offer-link" title={offer.title}>
                <div className="offer-image">
                  <img src={offer.imageUrl} alt={offer.title} className="offer-img" />
                </div>
                <div className="offer-text">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-description">{offer.description}</p>
                  <a href={offer.link} className="offer-btn">Discover More</a>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OffersSection;