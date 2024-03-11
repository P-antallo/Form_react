import React from 'react';

const Alert = ({ message, type }) => {
  return (
    <div className="alert-transition">
      {message && (
        <div className={`alert alert-${type}`} role="alert">
          {message}
        </div>
      )}
    </div>
  );
};

export default Alert;

