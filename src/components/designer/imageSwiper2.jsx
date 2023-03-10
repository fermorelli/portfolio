import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../projects/imageSwiper.css';
import skull from '../../assets/skull.jpg'
import cd from '../../assets/jelly-cd.jpg'
import mj from '../../assets/branding-mj.jpg'

export const ImageSwiper = ({ id }) => {
    if(id===2){
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
                    <img src={skull} alt="" />
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
                    <img src={cd} alt="" />
                </SwiperSlide>
            </Swiper>
            </div>
        )}else if(id===1){
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
                        <img src={mj} alt="" />
                    </SwiperSlide>
                </Swiper>
                </div>
        )};
};