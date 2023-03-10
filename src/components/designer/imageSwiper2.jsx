import '../projects/imageSwiper.css';
import skull from '../../assets/skull.jpg'
import cd from '../../assets/jelly-cd.jpg'
import mj from '../../assets/branding-mj.jpg'

export const ImageSwiper = ({ id }) => {
    if(id===2){
    return (
        <div className='swiper__container'>
            <img src={skull} alt="" />
        </div>
    )}else if(id===3){
        return(
            <div className='swiper__container'>
                <img src={cd} alt="" />
            </div>
        )}else if(id===1){
            return(
                <div className='swiper__container'>
                    <img src={mj} alt="" />
                </div>
        )};
};