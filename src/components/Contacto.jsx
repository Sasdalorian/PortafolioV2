import React from 'react';
import styles from './Contacto.module.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = ({ title }) => {

  const mostrarAlerta = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se ha enviado correctamente.',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const mostrarError = () => {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'No se ha podido enviar el formulario.',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_p5osmka', 'template_y2hixur', event.target, '9W1wXcsuVlCkJP4Re')
    .then(response => mostrarAlerta())
    .catch(error => mostrarError());
  }
  return (

    <div id="contacto">
      <div className={`m-auto w-4/5 my-4`}>
        <h1 className={styles.titulo}>{title}</h1>
        <br />
        <form className={styles.formulario} onSubmit={sendEmail}>
          <div className={styles.formulario__nombres}>

            <div className="mb-6">
              <label htmlFor="user_name" className="form-label">
                Nombre *
              </label>
              <input type="name" className="form-control formulario__nombre" id="user_name" name='user_name' required />
            </div>

            <div className="mb-6">
              <label htmlFor="user_lastname" className="form-label">
                Apellidos *
              </label>
              <input type="name" className="form-control formulario__nombre" id="user_lastname" name='user_lastname' required />
            </div>
          </div>

          <br />

          <div className="mb-6">
            <label htmlFor="user_email" className="form-label">
              Email *
            </label>
            <input type="email" className="form-control" id="user_email" name='user_email' required />
          </div>

          <br />

          <div className="mb-6">
            <label htmlFor="message" className="form-label">
              Comentario
            </label>
            <textarea className="form-control" id="message" name='message' rows="3"></textarea>
          </div>

          <br />
          <br />

          <div className="d-grid gap-2 col-6 mx-auto">
            <input type="submit" id="btnEnviar" value="Enviar" className="btn btn-primary"></input>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export default Contacto;
