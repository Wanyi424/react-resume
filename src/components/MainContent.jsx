import React, { useState, useRef, useEffect } from 'react';
import githubScreenshot from '../assets/GitHub主页.jpeg';

const MainContent = () => {
  const isDev = import.meta.env.DEV;

  const [modalOpen, setModalOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const imgRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  useEffect(() => {
    const handleWheelRaw = (e) => {
      if (modalOpen) {
        e.preventDefault();
        const zoomIntensity = 0.1;
        setScale(prev => {
          let newScale = prev + (e.deltaY < 0 ? zoomIntensity : -zoomIntensity);
          return Math.max(0.5, Math.min(newScale, 4));
        });
      }
    };

    const imgElement = imgRef.current;
    if (imgElement && modalOpen) {
      imgElement.addEventListener('wheel', handleWheelRaw, { passive: false });
    }

    return () => {
      if (imgElement) {
        imgElement.removeEventListener('wheel', handleWheelRaw);
      }
    };
  }, [modalOpen]);

  return (
    <main className={`main-content ${isDev ? 'allow-select' : ''}`}>
      {/* 个人简介 */}
      <section className="section">
        <div className="section-title">
          <i className="fa-solid fa-user"></i> 个人简介
        </div>
        <p className="profile-summary" style={{ fontSize: '14px', textAlign: 'justify' }}>
          具备全栈开发能力的 AI 应用开发者，长期深度使用 <strong>Claude Code、Codex</strong> 参与 React / Next.js / UniApp/ FastAPI 项目开发，具备 Web、小程序、后台系统与 AI 功能<strong>从 0 到 1 落地经验</strong>，独立开发的 C 端产品累计用户突破 <strong>10 万+</strong>。熟悉 Linux / Nginx / Docker 部署环境。对 <strong>Agent 开发</strong>、<strong>SKILL</strong>、Function Calling、MCP、RAG、OCR 数据处理及 Rust / Tauri 桌面端应用有持续实践，具备较强的 AI 工程落地能力。
        </p>
      </section>

      {/* 工作经历 */}
      <section className="section">
        <div className="section-title">
          <i className="fa-solid fa-briefcase"></i> 工作经历
        </div>

        {/* 工作经历 1 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">
              杭州个性进化教育
              <span className="item-subtitle-inline">· 全栈开发</span>
            </span>
            <span className="item-date">2025.12 - 2026.05</span>
          </div>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">微信原生小程序</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">LLM</span>
          </div>
          <ul className="item-desc">
            <li><strong>教育 AI 产品开发：</strong> 负责教育类 AI 教师工作台的 Web 端、小程序端及后端服务开发，围绕教师备课、题库生成和教学内容生产等场景完成前后端功能实现与部署交付。</li>
            <li><strong>多端统一体系设计：</strong> 设计统一后端服务架构，打通 Web 账号与小程序 OpenID 的双表多凭证体系，完成教师身份、生成数据及历史记录等数据的统一管理。</li>
            <li><strong>Agent 开发：</strong> 设计并实现面向 LLM 的工具调用能力，通过 Function Calling 接入题库查询、内容生成、数据写入和结果校验等工具，负责参数设计、上下文管理、结果解析以及异常重试机制。</li>
            <li><strong>AI 工作流设计：</strong> 负责教师备课场景的流程设计与数据流转管理，构建从资料输入、模型生成到结果编辑和内容沉淀的完整业务闭环。</li>
            <li><strong>RAG 数据清洗：</strong> 基于 OCR 与 LLM 搭建批量试卷解析工作流，将非结构化试卷内容转换为结构化数据；针对 JSON 与 LaTeX 公式兼容问题，引入 XML 中间格式，使整体解析准确率提升至 95% 以上。</li>
          </ul>
        </div>

        {/* 工作经历 2 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">
              北京针库文化
              <span className="item-subtitle-inline">· 运营 / AI 应用落地</span>
            </span>
            <span className="item-date">2023.09 - 2024.08</span>
          </div>
          <div className="tech-stack">
            <span className="tech-tag">媒体</span>
            <span className="tech-tag">AIGC</span>
            <span className="tech-tag">RAG</span>
            <span className="tech-tag">Agent</span>
            <span className="tech-tag">内容工作流</span>
          </div>
          <ul className="item-desc">
            <li>负责 AIGC 工具（文生图/视频）的商业化场景技术验证，探索 AI 工作流在内容生产中的自动化落地。</li>
            <li>作为技术人员参与行业技术交流，调研前沿架构（RAG/Agent）并转化为内部生产力工具方案。</li>
          </ul>
        </div>

        {/* 工作经历 3 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">
              独立开发者
              <span className="item-subtitle-inline">· 微信小程序 & Web 应用</span>
            </span>
            <span className="item-date">2024.06 - 至今</span>
          </div>
          <div className="tech-stack">
            <span className="tech-tag">Vue3</span>
            <span className="tech-tag">Element Plus</span>
            <span className="tech-tag">Uni-app</span>
            <span className="tech-tag">Linux</span>
            <span className="tech-tag">Nginx</span>
          </div>
          <ul className="item-desc">
            <li><strong>独立项目交付：</strong> 独立承接并交付多个商业项目，包括企业级管理后台、微信小程序、响应式 Web 官网等，覆盖需求拆解、开发实现、服务器部署与上线维护。</li>
            <li><strong>服务器运维：</strong> 负责项目全流程部署与维护，熟悉 Linux 服务器环境配置，使用 Nginx 进行反向代理、HTTPS 配置与服务转发，保障项目稳定运行。</li>
          </ul>
        </div>
      </section>

      {/* 项目经历 */}
      <section className="section">
        <div className="section-title">
          <i className="fa-solid fa-code"></i> 项目经历
        </div>

        {/* 项目 1 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">
              情感社交类小程序
              <span className="item-subtitle-inline">· 独立开发｜用户量 100,000+</span>
            </span>
            <span className="item-date">2024.10 - 2025.04</span>
          </div>
          <div className="tech-stack">
            <span className="tech-tag">Uni-app</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">内容社区</span>
          </div>
          <ul className="item-desc">
            <li><strong>C 端社区产品开发：</strong> 独立完成用户体系搭建，并实现内容发布、评论互动、推荐排序和后台审核等核心功能，支撑产品从 0 到 1 完成上线。</li>
            <li><strong>业务数据建模：</strong> 围绕用户关系与内容生态设计数据结构和权限体系，完成内容流转、互动关系管理以及审核流程等核心业务链路开发。</li>
            <li><strong>产品体验优化：</strong> 基于用户使用路径和功能数据反馈，对核心功能入口、页面动线与交互流程进行 UI/UX 优化，使新功能使用率提升 50%。</li>
          </ul>
        </div>

        {/* 项目 2 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">
              商业小程序 / Web 项目交付
            </span>
            <span className="item-date">2024.06 - 2025.11</span>
          </div>
          <div className="tech-stack">
            <span className="tech-tag">微信小程序</span>
            <span className="tech-tag">Vue3</span>
            <span className="tech-tag">Element Plus</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">MySQL</span>
            <span className="tech-tag">支付接入</span>
          </div>
          <ul className="item-desc">
            <li><strong>商业项目交付：</strong> 独立交付商城、预约、会员、支付、内容管理、表单收集、企业后台等项目，覆盖需求沟通、数据库设计、接口开发、前端实现与部署上线。</li>
            <li><strong>小程序完整流程：</strong> 熟悉微信小程序从开发到上线的全生命周期，包括登录授权、微信支付接入、审核发布以及后续版本迭代维护。</li>
            <li><strong>后台与支付能力：</strong> 具备后台管理系统、常见 CRUD 业务、网页支付宝收款、订单状态流转、会员权益等商业化模块开发经验。</li>
          </ul>
        </div>
      </section>

      {/* GitHub 贡献展示 */}
      <section className="section no-print github-preview-section">
        <div className="section-title">
          <i className="fa-brands fa-github"></i> GitHub 主页与开源贡献
        </div>
        <div className="github-screenshot-container" onClick={openModal}>
          <div className="github-screenshot-link" style={{ cursor: 'zoom-in' }}>
            <img src={githubScreenshot} alt="GitHub Profile Screenshot" className="github-screenshot-img" />
            <div className="github-screenshot-overlay">
              <i className="fa-solid fa-magnifying-glass-plus"></i>
              <span>点击查看大图</span>
            </div>
          </div>
        </div>
      </section>

      {/* 全屏预览模态框 */}
      {modalOpen && (
        <div className="github-modal-overlay" onClick={closeModal}>
          <div className="github-modal-controls" onClick={(e) => e.stopPropagation()}>
            <a href="https://github.com/Wanyi424" target="_blank" rel="noreferrer" className="github-modal-btn github-link-btn">
              <i className="fa-brands fa-github"></i> 跳转主页
            </a>
            <button className="github-modal-btn reset-btn" onClick={handleDoubleClick}>
              <i className="fa-solid fa-arrows-rotate"></i> 重置缩放
            </button>
            <button className="github-modal-btn close-btn" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i> 关闭
            </button>
          </div>
          <div className="github-modal-tips">
            <i className="fa-solid fa-circle-info"></i> 滚动鼠标滚轮进行缩放，拖拽鼠标进行移动，双击图片恢复原状
          </div>
          <div 
            className="github-modal-img-container"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img 
              ref={imgRef}
              src={githubScreenshot} 
              alt="GitHub Big Preview" 
              className="github-modal-img" 
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onDoubleClick={handleDoubleClick}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default MainContent;
