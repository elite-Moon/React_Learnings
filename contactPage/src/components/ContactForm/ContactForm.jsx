import React, { useState } from 'react';
import './ContactForm.css';
import Button from '../Button';
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form data submitted');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);

    console.log(e);
  };
  return (
    <div className='global-form'>
      <div className='main-contact'>
        <div className='contactForm'>
          <Button text='VIA CHAT' />
          <Button text='VIA CALL' />
        </div>
        <div className='btn-form'>
          <Button text='VIA FILL FORM' />
        </div>
        <form onSubmit={onSubmit} id='onSubmit' className='inputs'>
          <div className='input-name'>
            <label htmlFor=''>Name</label>
            <input type='text' name='' id='' />
          </div>
          <div className='input-email'>
            <label htmlFor=''>Email</label>
            <input type='text' name='' id='' />
          </div>
          <div className='input-msg'>
            {' '}
            <label htmlFor=''>Message</label>
            <textarea name='' id=''></textarea>
          </div>
          <div className='inputbtn'>
            <Button text='SUBMIT' />
          </div>
          <div>
            {'name is---  ' +
              name +
              '    ' +
              'email is---  ' +
              email +
              '    ' +
              'message is---  ' +
              message}
          </div>
        </form>
      </div>

      <div className='contact-img'>
        <img
          src='/public/Service.png'
          alt='contactlogo'
          height={543}
          width={608}
        />
      </div>
    </div>
  );
}

export default ContactForm;
