import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './imageSwiper.css';

import ECM1 from '../../assets/ecommerce2.jpg';
import ECM2 from  '../../assets/ecommerce.jpg';
import ECM3 from  '../../assets/ecommerce3.jpg';
import ECM4 from  '../../assets/ecommerce4.jpg';
import TGX1 from '../../assets/trackgenix1.jpeg';
import TGX2 from '../../assets/trackgenix2.jpeg';
import TGX3 from '../../assets/trackgenix3.jpeg';
import CAL from '../../assets/calculadora.png';

export const ImageSwiper = ({ id }) => {
    if(id===1){
    return (
        <div className='swiper__container'>
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
    )}else if(id===2){
        return(
        <div className='swiper__container'>
        <Swiper modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className='my__swiper'
        >
            <SwiperSlide className='slider'>
                <img src={CAL} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider'>
                <img src={CAL} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider'>
                <img src={CAL} alt="" />
            </SwiperSlide>
            <SwiperSlide className='slider'>
                <img src={CAL} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
    )}else if(id===3){
        return(
            <div className='swiper__container'>
            <Swiper modules={[Navigation, EffectFade]}
            navigation
            effect
            speed={800}
            slidesPerView={1}
            loop
            className='my__swiper'
            >
                <SwiperSlide className='slider'>
                    <img src={TGX1} alt="" />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <img src={TGX2} alt="" />
                </SwiperSlide>
                <SwiperSlide className='slider'>
                    <img src={TGX3} alt="" />
                </SwiperSlide>
            </Swiper>
            </div>
        )};
};