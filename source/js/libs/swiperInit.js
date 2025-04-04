import Swiper from 'swiper';
import 'swiper/css';

// Initialize Swiper
const SwiperSlide = () => {
  Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};

export default SwiperSlide;
