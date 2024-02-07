import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+91 9619932786'; // Replace with your phone number
    const message = 'Hello! I have a question.'; // Replace with your predefined message
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-2 right-5 z-40 p-2 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 flex items-center justify-center"
      style={{ width: '50px', height: '50px' }}
    >
      <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '35px' }} />
    </button>
  );
};

export default WhatsAppButton;
