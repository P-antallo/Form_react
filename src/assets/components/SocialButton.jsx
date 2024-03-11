import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialButton = ({ icon }) => {
  const icons = {
    facebook: faFacebook,
    twitter: faTwitter,
    linkedin: faLinkedin,
  };

  return (
    <button className="btn btn-secondary me-2">
      <FontAwesomeIcon icon={icons[icon]} style={{ color: '#63E6BE' }} />
    </button>
  );
};

export default SocialButton;



