import React, { useState } from 'react'
import { RiMap2Line,RiUser3Line,RiMailLine,RiBook2Line,RiSendPlaneLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import './contacto.css';



const Contacto = () => {
const [formData, setFormData] = useState({
  name:'',
  email:'',
  asunto:'',
  mensaje:''
});

const [feedbackMessage,  setFeedbackMessage]= useState('');
const [messageCoIor, setMessageCoIor]= useState('');

const handleChange = (e) =>{
  setFormData({...formData, [e.target.name]: e.target.value});
};

const sendEmail = (e) =>{
  e.preventDefault();

  if(!formData.name || !formData.email ||!formData.asunto ||!formData.mensaje){
    setMessageCoIor('color-red');
    setFeedbackMessage('Rellene todos los apartados');
    setTimeout(()=> setFeedbackMessage(''),3000);
    return;
  }

  emailjs
  .send('service_8wnu1vj', 'template_r6v5h7j', formData,'bDkBOoEsF8_fDwlMN')
  .then(
    () => {
      setMessageCoIor('color-first');
      setFeedbackMessage('Mensaje enviado ✓');
      setTimeout(()=> setFeedbackMessage(''),3000);

      setFormData({name:'',email:'',subject:'',message:''})

    },
    (error) => {
      alert('OOOPS! Algo ha fallado...', error)
    },
  );
}

  return (
    <>
      <section className='contact section'>
        <h2 className='section-title'> Contacta<span>me</span></h2>

        <div className='contact-container container grid'>
          <div className='contact-content grid'>
            <div className='contact-card'>
              <span className="contact-icon">
                <RiMap2Line />
              </span>
              <div>
                <h3 className="contact-title"> Dirección </h3>
                <p className="contact-data">Málaga, España</p>
              </div>
            </div>
            
            <div className='contact-card'>
              <span className="contact-icon">
              <RiUser3Line />
              </span>
              <div>
                <h3 className="contact-title">Freelance</h3>
                <p className="contact-data">Actualmente disponible</p>
              </div>
            </div>

            <div className='contact-card'>
              <span className="contact-icon">
              <RiMailLine />

              </span>
              <div>
                <h3 className="contact-title">Correo</h3>
                <p className="contact-data">maldonadogarciafran@gmail.com</p>
              </div>
            </div>

            <div className='contact-card'>
              <span className="contact-icon">
                <RiBook2Line />
              </span>
              <div>
                <h3 className="contact-title">Teléfono</h3>
                <p className="contact-data">+34692170738</p>
              </div>
            </div>
          </div>

          <form action='' className='contact-form grid' onSubmit={sendEmail}>  
            <div className='contact-form-group grid'>
              <div className='contact-form-div'>
                <label htmlFor='' className='contact-form-label'>
                  Nombre <b>*</b>
                </label>
                <input
                  type='text'
                  name='name'
                  onChange={handleChange}
                  value={formData.name}
                  className='contact-form-input'
                />
              </div>

              <div className='contact-form-div'>
                <label htmlFor='' className='contact-form-label'>
                  Dirección de correo <b>*</b>
                </label>
                <input
                  type='email'
                  name='email'
                  onChange={handleChange}
                  value={formData.email}
                  className='contact-form-input'
                />
              </div>
            </div>
            <div className='contact-form-div'>
                <label htmlFor='' className='contact-form-label'>
                  Asunto <b>*</b>
                </label>
                <input
                  type='text'
                  name='asunto'
                  onChange={handleChange}
                  value={formData.asunto}
                  className='contact-form-input'
                  />
              </div>

              <div className='contact-form-div'>
                <label htmlFor='' className='contact-form-label'>
                  Mensaje <b>*</b>
                </label>
                <textarea
                  name='mensaje'
                  onChange={handleChange}
                  value={formData.mensaje}
                  className='contact-form-input contact-form-area'></textarea>
              </div>

              {feedbackMessage && (
                <p className={`contact-message ${messageCoIor}`}>
                  {feedbackMessage}
                </p>
              )}

              <div className="contact-button">
                <button className="button">
                  Enviar mensaje
                  <span className='button-icon'>
                  <RiSendPlaneLine />
                  </span>
                </button>
              </div>
          </form>
        </div>
      </section>

      
    </>
  );
}

export default Contacto