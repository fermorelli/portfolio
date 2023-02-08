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
import CAN1 from '../../assets/landing1.jpg';
import CAN2 from '../../assets/landing2.jpg';
import CAN3 from '../../assets/addplant.jpg';
import CAN4 from '../../assets/singleplant.jpg';
import SPL1 from '../../assets/shopping1.jpg';
import SPL2 from '../../assets/shopping2.jpg';
import SPL3 from '../../assets/shopping3.jpg';
import SPL4 from '../../assets/shopping4.jpg';
import CAL1 from '../../assets/calculadora.png';
import MUS from '../../assets/musicPlayer.jpg';


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
        )}else if(id===4){
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
                        <img src={CAN1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slider'>
                        <img src={CAN2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slider'>
                        <img src={CAN3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className='slider'>
                        <img src={CAN4} alt="" />
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
                            <img src={SPL1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='slider'>
                            <img src={SPL2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='slider'>
                            <img src={SPL3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide className='slider'>
                            <img src={SPL4} alt="" />
                        </SwiperSlide>
                    </Swiper>
                    </div>
                )}else if(id===6){
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
                                <img src={CAL1} alt="calculator" />
                            </SwiperSlide>
                        </Swiper>
                        </div>
                    )}else if(id===5){
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
                                    <img src={MUS} alt="music_player" />
                                </SwiperSlide>
                            </Swiper>
                            </div>
                        )};
};