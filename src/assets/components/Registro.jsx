import React, { useState } from 'react';
import Alert from './Alert';
import Formulario from './Formulario';
import SocialButton from './SocialButton';

const Registro = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleFormSubmit = (data) => {
    console.log('Datos del formulario:', data);
    setAlertType('success');
    setAlertMessage('¡Registro exitoso!');
  };

  return (
    <div className="container">
      <h1>Crea una cuenta</h1>
      <div className="social-buttons">
        <SocialButton icon="facebook" />
        <SocialButton icon="twitter" />
        <SocialButton icon="linkedin" />
      </div>
      <p className="text-center">o usa tu mail para registrarte</p>
      <Formulario onSubmit={handleFormSubmit} />
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
    </div>
  );
};

export default Registro;
