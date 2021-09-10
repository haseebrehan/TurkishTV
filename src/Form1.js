import React from 'react';
import {send} from 'emailjs-com';
import { useState } from 'react';

export default function Form1() {
 
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  function sendEmail(e) {
    e.preventDefault();

    send('service_9xi66ik', 'template_kfefv4g', toSend,'user_L0LywTNdFOoL2vKlIsUa3')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name: '',
          message: '',
          reply_to: '',
        })
      alert('Message sent')
      
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  }
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  return (
    <>
    <section className="bg-secondary text-light mb-4 p-3 mt-3  center">
        <div className="container">
        <form  onSubmit={sendEmail}>
          <h3>Contact Us:</h3>
          <div className="form-group col-8 col-md-10">
          <label>Name</label>
          <input className="form-control" 
              type='text'
              name='from_name'
              placeholder='Name'
              value={toSend.from_name}
              onChange={handleChange} 

            />
          </div>
          <div className="form-group col-8 col-md-10">
          <label>Email</label>
          <input className="form-control" 
           name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange} 
          />
          </div>
          <div className="form-group col-8 col-md-10">
          <label>Message</label>
          <textarea className="form-control"
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
           />
          </div>
          <input className="bg-primary mt-1 text-light" type="submit" value="Send" />
        </form>
        </div>
    </section>
    </>
  );
}