import React, { useEffect } from 'react';

const Notification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      zIndex: 1000,
      fontSize: '14px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      transition: 'opacity 0.3s ease-in-out',
      pointerEvents: 'none' // Prevent blocking clicks underneath
    }}>
      <i className="fa-solid fa-check-circle" style={{ marginRight: '8px', color: '#4ade80' }}></i>
      {message}
    </div>
  );
};

export default Notification;

