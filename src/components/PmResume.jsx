import React, { useState } from 'react';
import avatar from '../assets/头像.jpeg';
import Notification from './Notification';
import PrintButton from './PrintButton';
import './PmResume.css';

const PmResume = ({ isDarkMode, onToggleTheme }) => {
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
    <>
      <PrintButton isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
      
      <div className="pm-resume-container">
        <Notification
          message={notification.message}
          isVisible={notification.show}
          onClose={closeNotification}
        />

        <div className="pm-header-top-title">个人简历</div>

        {/* 1. Header (Top-Left) */}
        <header className="pm-header">
          <div className="pm-header-title-row">
            <span className="pm-name">田润</span>
            <span className="pm-intent">求职意向：</span>
          </div>

          <div className="pm-contact-grid">
            <div className="pm-contact-item">
              <i className="fa-solid fa-calendar-days"></i>
              <span>出生年月：2005年5月</span>
            </div>

            <div 
              className="pm-contact-item copyable"
              onClick={() => handleCopy('19113012275', '电话')}
              title="点击复制电话"
            >
              <i className="fa-solid fa-phone"></i>
              <span>电话：19113012275</span>
            </div>

            <div 
              className="pm-contact-item copyable"
              onClick={() => handleCopy('wanyi_424@foxmail.com', '邮箱')}
              title="点击复制邮箱"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>邮箱：wanyi_424@foxmail.com</span>
            </div>
          </div>
        </header>

        {/* 2. Avatar (Top-Right) */}
        <div className="pm-avatar-cell">
          <img src={avatar} alt="田润的头像" />
        </div>

        {/* 3. Main Content (Bottom-Left) */}
        <main className="pm-main">
          <div className="pm-main-timeline">
            <div className="pm-main-line"></div>

            {/* 工作经历 Section */}
            <section className="pm-timeline-section">
              <div className="pm-section-header">
                <h2 className="pm-section-title">工作经历</h2>
                <div className="pm-section-line"></div>
              </div>

              <div className="pm-section-content">
                {/* 工作经历 1 */}
                <div className="pm-work-item pm-timeline-item">
                  <div className="pm-timeline-dot solid"></div>
                  <div className="pm-item-header">
                    <span className="pm-item-company">北京针库文化</span>
                    <span className="pm-item-title">AI 产品内容运营</span>
                    <span className="pm-item-date">2024.09 - 2025.02</span>
                  </div>
                  <ul className="pm-item-desc">
                    <li>长期关注<strong>海外 AI 产品、Agent 应用、AIGC 工具</strong>与前沿资讯，通过实际体验产品，分析其功能亮点、目标用户、使用门槛、典型场景与差异化卖点。</li>
                    <li>参与国内 AI 产品商单内容制作，提炼产品亮点与Agent / AIGC典型应用场景，输出图文或视频的内容选题和表达方案。</li>
                  </ul>
                </div>

                {/* 工作经历 2 */}
                <div className="pm-work-item pm-timeline-item">
                  <div className="pm-timeline-dot solid"></div>
                  <div className="pm-item-header">
                    <span className="pm-item-company">独立开发实践</span>
                    <span className="pm-item-title">AI 应用落地</span>
                    <span className="pm-item-date">2024.06 - 至今</span>
                  </div>
                  <ul className="pm-item-desc">
                    <li>独立完成多个 Web、小程序、后台系统与 AI 功能从需求拆解、原型验证、接口设计到开发上线的完整闭环。</li>
                    <li>具备与开发团队围绕 API、数据库、任务状态、模型调用、异常处理等问题进行高效沟通的能力，可降低 AI 产品从需求到实现的沟通成本。</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 项目经历 Section */}
            <section className="pm-timeline-section" style={{ marginBottom: 0 }}>
              <div className="pm-section-header">
                <h2 className="pm-section-title">项目经历</h2>
                <div className="pm-section-line"></div>
              </div>

              <div className="pm-section-content">
                {/* 项目 1 */}
                <div className="pm-project-item pm-timeline-item">
                  <div className="pm-timeline-dot hollow"></div>
                  <div className="pm-item-header">
                    <div className="pm-item-title-wrapper">
                      <span className="pm-item-title">年轻用户内容社区小程序</span>
                      <span className="pm-tag highlight">用户量 100,000+</span>
                    </div>
                    <span className="pm-item-date">2024.10 - 2025.04</span>
                  </div>
                  <ul className="pm-item-desc">
                    <li><strong>产品从 0 到 1：</strong>独立负责产品定位、核心功能规划、用户路径设计与上线验证，围绕年轻用户的情感表达、内容发布、互动反馈等场景设计社区产品闭环。</li>
                    <li><strong>关键转化优化：</strong>针对账号绑定转化不足问题，从用户心理、入口位置、按钮文案、页面布局与交互反馈等维度重构转化链路，新版本上线后绑定人数提升 <strong>50%-70%</strong>。</li>
                    <li><strong>数据驱动迭代：</strong>根据后台数据、用户反馈与<strong>近 7 万人</strong>自己运营的情感内容社群观察，关注页面访问、功能点击、内容发布、账号绑定等行为，用<strong>版本前后数据变化</strong>调整功能优先级和内容冷启动策略，积累了大量 UGC 内容互动经验。</li>
                  </ul>
                </div>

                {/* 项目 2 */}
                <div className="pm-project-item pm-timeline-item" style={{ marginBottom: 0 }}>
                  <div className="pm-timeline-dot hollow"></div>
                  <div className="pm-item-header">
                    <div className="pm-item-title-wrapper">
                      <span className="pm-item-title">AI Native 产品开发工作流</span>
                      <span className="pm-tag code">Vibe Coding</span>
                    </div>
                    <span className="pm-item-date">长期实践</span>
                  </div>
                  <p className="pm-project-desc-text">
                    长期使用 <strong>Claude、ChatGPT、Gemini</strong> 梳理需求、页面逻辑、异常情况和功能规则，并用 <strong>v0、Lovable、Claude Design</strong> 快速生成原型；开发前整理好 <strong>PRD、功能说明、接口字段、数据表</strong> 等文档，让后续 AI 开发更加明确高效。
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* 4. Sidebar Content (Bottom-Right) */}
        <aside className="pm-sidebar">
          {/* 个人概述 Section */}
          <section className="pm-sidebar-section">
            <h3 className="pm-sidebar-title"><i className="fa-solid fa-user-tie"></i>个人概述</h3>
            <p className="pm-summary-text">
              具备 C 端产品从 0 到 1 落地经验与全栈开发背景。独立负责过用户量 10 万+ 的年轻用户内容社区产品，具备 UI/UX、转化漏斗、埋点分析与数据驱动迭代经验。长期深度使用 Claude code、Codex、Gemini、v0、Lovable、Claude Design 等 AI 工具完成需求拆解、PRD、原型生成与开发协作；熟悉 AIGC、Agent等 AI 应用场景，能够在产品、用户、数据与技术实现之间建立高效协作闭环。
            </p>
          </section>

          {/* 核心技能 Section */}
          <section className="pm-sidebar-section">
            <h3 className="pm-sidebar-title"><i className="fa-solid fa-brain"></i>核心技能</h3>
            <div className="pm-skill-group">
              <div>
                <div className="pm-skill-category">1. AI Native 产品方法：</div>
                <ul className="pm-sidebar-skills-list">
                  <li>AI 辅助需求拆解 | PRD 编写 | 原型生成 | 方案评估 | Vibe Coding 工作流</li>
                </ul>
              </div>

              <div>
                <div className="pm-skill-category">2. C 端产品与增长：</div>
                <ul className="pm-sidebar-skills-list">
                  <li>用户路径设计 | UI/UX 优化 | 功能入口设计 | 关键转化提升 | 社区冷启动</li>
                </ul>
              </div>

              <div>
                <div className="pm-skill-category">3. 数据分析与迭代：</div>
                <ul className="pm-sidebar-skills-list">
                  <li>产品埋点 | 转化漏斗 | 功能使用率 | 用户行为路径 | 版本前后数据对比</li>
                </ul>
              </div>

              <div>
                <div className="pm-skill-category">4. 技术理解与协作：</div>
                <ul className="pm-sidebar-skills-list">
                  <li>理解前后端开发 | API 设计 | 数据库结构</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 荣誉与活动 Section */}
          <section className="pm-sidebar-section">
            <h3 className="pm-sidebar-title"><i className="fa-solid fa-trophy"></i>荣誉与活动</h3>
            <ul className="pm-honors-list">
              <li>2025 AWS 中国上海峰会 · 1000Aider 应用大赛 全国 30 强</li>
              <li>受邀参与行业大会活动交流(如百度/AWS等)，具备公开表达与方案阐述能力</li>
              <li>快手 KwaiK AT 开发挑战赛 · 最佳项目奖 & 二等奖</li>
            </ul>
          </section>
        </aside>
        
        {/* Footer color blocks */}
        <div className="pm-footer-left"></div>
        <div className="pm-footer-right"></div>
      </div>
    </>
  );
};

export default PmResume;
