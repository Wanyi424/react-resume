import React from 'react';

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="no-print" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 100 }}>
      <button 
        onClick={handlePrint} 
        style={{
          padding: '10px 20px',
          background: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
        }}
      >
        <i className="fa-solid fa-print"></i> 下载/打印简历
      </button>
    </div>
  );
};

export default PrintButton;

