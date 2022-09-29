import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import ECM1 from '../../assets/ecommerce2.jpg';
import ECM2 from  '../../assets/ecommerce.jpg';
import ECM3 from  '../../assets/ecommerce3.jpg';
import ECM4 from  '../../assets/ecommerce4.jpg';
import TGX1 from '../../assets/trackgenix1.jpeg';
import TGX2 from '../../assets/trackgenix2.jpeg';
import TGX3 from '../../assets/trackgenix3.jpeg';
import CAL from '../../assets/calculadora.png';

export const ImageSwiper = () => {
    return (
        <div>
            <Swiper modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPerView={1}
            loop
            className='my__swiper'
            >
                <SwiperSlide className='slider'>
                    <img src={ECM1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <img src={ECM2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <img src={ECM3} alt="" />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <img src={ECM4} alt="" />

                </SwiperSlide>
            </Swiper>
        </div>
    );
};