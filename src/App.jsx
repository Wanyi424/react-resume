import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import PrintButton from './components/PrintButton';
import PmResume from './components/PmResume';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // 监听 URL 路径的变化
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 从本地存储初始化暗色模式状态，默认为亮色
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // 切换主题
  const handleToggleTheme = () => {
    setIsDarkMode(prev => {
      const nextMode = !prev;
      localStorage.setItem('theme', nextMode ? 'dark' : 'light');
      return nextMode;
    });
  };

  // 控制 document.body 上的 dark-mode class
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  // 打印事件监听：在打印预览前临时移除暗色模式，打印完后恢复
  useEffect(() => {
    const handleBeforePrint = () => {
      document.body.classList.remove('dark-mode');
    };

    const handleAfterPrint = () => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      }
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);

    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, [isDarkMode]);

  // 如果访问 /pm，渲染产品经理岗位的简历
  if (currentPath === '/pm') {
    return <PmResume isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />;
  }

  return (
    <>
      <PrintButton isDarkMode={isDarkMode} onToggleTheme={handleToggleTheme} />
      <div className="resume-container">
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;

