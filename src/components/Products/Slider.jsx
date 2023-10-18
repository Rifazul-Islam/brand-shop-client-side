
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
const Slider = () => {
              
return (
<div className='mx-auto'>
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className='pl-20'>
        <SwiperSlide> <img src="https://i.ibb.co/vsd3c0w/section1.jpg" alt="" />  </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/yNVXmPM/mercedes-benz1.jpg" alt="" />  </SwiperSlide>
        <SwiperSlide> <img src="https://i.ibb.co/ZB5VFnQ/tesla3.jpg" alt="" /> </SwiperSlide>  
        <SwiperSlide><img src="https://i.ibb.co/zQyWKW8/tesla2.jpg" alt="" /></SwiperSlide>
     
        
        </div>
      </Swiper>
</div>
);
};

export default Slider;