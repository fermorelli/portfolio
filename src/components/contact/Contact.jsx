/* eslint-disable react/jsx-no-target-blank */
import './contact.css';
import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';


export const Contact = ({lan})=>{

    const form = useRef();

    const sendEmail = (e) => {

      e.preventDefault();

      emailjs.sendForm('service_xa1uhvy', 'template_t6ey4lc', form.current, 'UXd9m92vtBRbeiIVn');

      swal({
        text: "Email sent",
        icon: "success",
        className: "swal"
      })

      e.target.reset();

    };

    if(lan==='eng'){
        return (
            <section id='contact' className='contact'>
                <h5>Get in Touch</h5>
                <h2>Contact Me</h2>
    
                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <AiOutlineMail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>fer.cmorelli@gmail.com</h5>
                            <a href="mailto:fer.cmorelli@gmail.com">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Messenger</h4>
                            <h5>Fer Morelli</h5>
                            <a target="_blank" href="https://m.me/ilcosme18">Send a message</a>
                        </article>
                        <article className="contact__option">
                            <AiOutlineWhatsApp className='contact__option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>3413417126</h5>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=543413417126">Send a message</a>
                        </article>
                    </div>
                    <form id='form' ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your full name' required />
                        <input type="email" name='email' placeholder='Your email' required />
                        <textarea name="message" placeholder='Your message' rows="7" required></textarea>
                        <button type='submit' className='btn btn-primary'  id='btn-form'>Send Message</button>
                    </form>
                </div>
            </section>
        )
    }else if(lan==='es'){
        return (
            <section id='contact' className='contact'>
                <h5>Contacto</h5>
                <h2>¡Hablemos!</h2>
    
                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <AiOutlineMail className='contact__option-icon' />
                            <h4>Email</h4>
                            <h5>fer.cmorelli@gmail.com</h5>
                            <a href="mailto:fer.cmorelli@gmail.com">Enviame un mensaje</a>
                        </article>
                        <article className="contact__option">
                            <RiMessengerLine className='contact__option-icon' />
                            <h4>Messenger</h4>
                            <h5>Fer Morelli</h5>
                            <a target="_blank" href="https://m.me/ilcosme18">Enviame un mensaje</a>
                        </article>
                        <article className="contact__option">
                            <AiOutlineWhatsApp className='contact__option-icon' />
                            <h4>WhatsApp</h4>
                            <h5>3413417126</h5>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=543413417126">Enviame un mensaje</a>
                        </article>
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Tu nombre completo' required />
                        <input type="email" name='email' placeholder='Tu email' required />
                        <textarea name="message" placeholder='Tu mensaje' rows="7" required></textarea>
                        <button type='submit' className='btn btn-primary' id='btn-form'>Enviar mensaje</button>
                    </form>
                </div>
            </section>
        )
    }
};