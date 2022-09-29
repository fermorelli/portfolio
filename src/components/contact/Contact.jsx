/* eslint-disable react/jsx-no-target-blank */
import './contact.css';
import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


export const Contact = ()=>{

    const form = useRef();

    const sendEmail = (e) => {

      e.preventDefault();

      emailjs.sendForm('service_xa1uhvy', 'template_t6ey4lc', form.current, 'UXd9m92vtBRbeiIVn');

      e.target.reset();

    };

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
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your full name' required />
                    <input type="email" name='email' placeholder='Your email' required />
                    <textarea name="message" placeholder='Your message' rows="7" required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
};