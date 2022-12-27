import CV from '../../assets/CVFernandoMorelli.pdf'

export const CTA = () =>{
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
    )
}