import CV1 from '../../assets/CVFernandoMorelliENG.pdf'
import CV2 from '../../assets/CVFernandoMorelliES.pdf'

export const CTA = ({lan}) =>{
    if(lan==='eng'){
        return (
            <div className="cta">
                <a href={CV1} download className='btn'>Download CV</a>
                <a href="#contact" className='btn btn-primary'>Let's talk</a>
            </div>
        )
    }else if(lan==='es'){
        return (
            <div className="cta">
                <a href={CV2} download className='btn'>Descargar CV</a>
                <a href="#contact" className='btn btn-primary'>Hablemos</a>
            </div>
        )
    }
}