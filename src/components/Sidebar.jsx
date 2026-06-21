import React, { useState } from 'react';
import avatar from '../assets/头像.jpeg';
import Notification from './Notification';

const Sidebar = () => {
  const [notification, setNotification] = useState({ show: false, message: '' });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setNotification({ show: true, message: `已复制${label}: ${text}` });
    }).catch(err => {
      console.error('复制失败:', err);
      setNotification({ show: true, message: '复制失败，请重试' });
    });
  };

  const closeNotification = () => {
    setNotification(prev => ({ ...prev, show: false }));
  };

  return (
    <aside className="sidebar">
      <Notification
        message={notification.message}
        isVisible={notification.show}
        onClose={closeNotification}
      />

      <div className="profile-photo" style={{ backgroundImage: `url(${avatar})` }}>
      </div>

      <div className="name-title">
        <h1>田润</h1>
        <p>全栈开发工程师 / AI应用开发者</p>
      </div>

      <div className="contact-info">
        <div
          className="contact-item copyable"
          onClick={() => handleCopy('191 1301 2275', '电话')}
          title="点击复制电话"
        >
          <i className="fa-solid fa-phone"></i>
          <span>191 1301 2275</span>
          <i className="fa-regular fa-copy copy-hint"></i>
        </div>
        <div
          className="contact-item copyable"
          onClick={() => handleCopy('wanyi_424@foxmail.com', '邮箱')}
          title="点击复制邮箱"
        >
          <i className="fa-solid fa-envelope"></i>
          <span>wanyi_424@foxmail.com</span>
          <i className="fa-regular fa-copy copy-hint"></i>
        </div>
        <div className="contact-item">
          <i className="fa-solid fa-cake-candles"></i>
          <span>2004年5月</span>
        </div>
        <div className="contact-item linkable">
          <i className="fa-brands fa-github"></i>
          <a href="https://github.com/Wanyi424" target="_blank" rel="noreferrer">
            github.com/Wanyi424
            <i className="fa-solid fa-arrow-up-right-from-square link-hint"></i>
          </a>
        </div>
      </div>

      {/* 教育背景已移除 */}

      <div>
        <div className="section-title-side">技术栈</div>
        <ul className="skills-list">
          <li>
            <div className="skill-category">前端 / 多端</div>
            <div className="skill-items">React, Next.js, Vue3, TypeScript, Uni-app, HarmonyOS ArkTS</div>
          </li>
          <li>
            <div className="skill-category">后端 / 数据</div>
            <div className="skill-items">Python, Node.js, FastAPI, MySQL, PostgreSQL, Redis</div>
          </li>
          <li>
            <div className="skill-category">AI / Agent</div>
            <div className="skill-items"><strong>Claude Code</strong>, <strong>Codex</strong>, Function Calling, <strong>SKILL</strong>, MCP, RAG, Harness, Loop, LangChain</div>
          </li>
          <li>
            <div className="skill-category">工程 / 部署</div>
            <div className="skill-items">Linux, Nginx, Docker Compose, Git</div>
          </li>
        </ul>
      </div>

      <div>
        <div className="section-title-side">荣誉 & 奖项</div>
        <div style={{ fontSize: '12px', lineHeight: '1.4' }}>
          • 2025 AWS 中国上海峰会 · 1000Aider 应用大赛全国 30 强<br /><br />
          • 独立全栈开发累计用户超 100,000+<br /><br />
          • 快手 KwaiK AT 开发挑战赛 · 最佳项目奖 & 三等奖
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
