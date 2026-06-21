import React from 'react';

const PrintButton = ({ isDarkMode, onToggleTheme }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="no-print floating-controls">
      {/* Dark Mode Toggle Button */}
      <button
        className="control-btn theme-toggle-btn"
        onClick={onToggleTheme}
        title={isDarkMode ? '切换为亮色模式' : '切换为暗色模式'}
      >
        <i
          className={`fa-solid ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}
          style={{
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isDarkMode ? 'rotate(360deg) scale(1.1)' : 'rotate(0) scale(1)'
          }}
        ></i>
      </button>

      {/* Print / Download Button */}
      <button
        className="control-btn print-btn"
        onClick={handlePrint}
        title="下载/打印 PDF 简历"
      >
        <i className="fa-solid fa-print"></i>
        <span>下载/打印简历</span>
      </button>
    </div>
  );
};

export default PrintButton;
