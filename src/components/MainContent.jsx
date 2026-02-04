import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      {/* 个人简介 */}
      <section className="section">
        <div className="section-title">
          <i className="fa-solid fa-user"></i> 个人简介
        </div>
        <p style={{ fontSize: '14px', color: '#444', textAlign: 'justify' }}>
          具备全栈开发能力的开发者，主攻 <strong>React / Vue 3 + Node.js/Python</strong> 技术栈。精通<strong>Claude Code、codex、Opencode</strong>等AI编码工具，拥有从0到1独立构建高并发C端应用经验，独立开发的C端产品累计用户突破 <strong>10万+</strong>。擅长复杂系统架构设计与性能优化，熟练掌握 <strong>Linux/Nginx</strong> 部署环境。对 <strong>LLM Agent</strong> 开发、桌面端应用（Rust/Tauri）及协议逆向分析有深入实战经验，具备极强的工程落地能力。
        </p>
      </section>

      {/* 项目经历 */}
      <section className="section">
        <div className="section-title">
          <i className="fa-solid fa-code"></i> 项目经历
        </div>

        {/* 项目 1 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">多端 AI 生图 SaaS 平台</span>
            <span className="item-date">2024.09 - 至今</span>
          </div>
          <div className="item-subtitle">独立全栈开发 | 小程序 & React Web</div>
          <div className="tech-stack">
            <span className="tech-tag">React</span>
            <span className="tech-tag">Zustand</span>
            <span className="tech-tag">Vue3</span>
            <span className="tech-tag">FastAPI</span>
            <span className="tech-tag">Redis</span>
          </div>
          <ul className="item-desc">
            <li><strong>多端前端开发：</strong> Web 端基于 <strong>React + Zustand</strong> 构建响应式应用，小程序端采用 <strong>Uni-app (Vue 3)</strong> 开发；统一设计规范与 API 封装层，实现两端高效协同开发与一致的用户体验。</li>
            <li><strong>多端统一身份认证：</strong> 设计并实现 User 与 Credential 分离的数据库架构，通过 OAuth2 思想打通小程序 OpenID 与 Web 端账号体系，实现多端数据互通。</li>
            <li><strong>高并发异步架构：</strong> 针对 AI 生图长耗时痛点，采用 <strong>FastAPI + 异步任务队列</strong> 解耦生成逻辑，配合 Redis 缓存状态；前端采用 <strong>SSE</strong> 实现流式进度推送，显著降低服务器负载。</li>
          </ul>
        </div>

        {/* 项目 2 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">自动化招聘/邀约Agent</span>
            <span className="item-date">2024.05 - 2024.08</span>
          </div>
          <div className="item-subtitle">全栈开发 | Rust + Tauri + LLM</div>
          <div className="tech-stack">
            <span className="tech-tag">Rust</span>
            <span className="tech-tag">Tauri</span>
            <span className="tech-tag">LangChain</span>
            <span className="tech-tag">MCP Server</span>
          </div>
          <ul className="item-desc">
            <li><strong>协议逆向与数据采集：</strong> 独立完成目标平台的接口抓包与协议分析，通过伪造 Request Headers 与 Cookie 复用技术，安全绕过反爬策略，实现高价值数据的自动化获取。</li>
            <li><strong>Agent 智能体开发：</strong> 开发基于 <strong>Rust + Tauri</strong> 的轻量级桌面应用。利用 <strong>LangChain</strong> 编排工作流，并将数据抓取、简历筛选等能力封装为 <strong>Function Calling</strong> 工具，使 LLM 能够根据上下文自主调用工具完成从筛选到邀约的自动化全流程。</li>
          </ul>
        </div>

        {/* 项目 3 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">情感社交类小程序（UGC社区）</span>
            <span className="item-date">2023.10 - 2024.04</span>
          </div>
          <div className="item-subtitle">独立全栈开发 | 用户量 100,000+</div>
          <div className="tech-stack">
            <span className="tech-tag">Uni-app</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">MySQL</span>
          </div>
          <ul className="item-desc">
            <li><strong>系统架构重构：</strong> 主导系统从 Flask 单体应用重构为分层架构，重新设计用户权限模型，解决了早期架构扩展性差的问题，支撑了后续业务的快速迭代。</li>
            <li><strong>MySQL 深度优化：</strong> 面对 100k+ 用户量级，通过建立<strong>联合索引</strong>优化多条件筛选查询（遵循最左前缀原则），利用 <strong>EXPLAIN</strong> 分析并优化慢查询，将核心接口响应时间从 800ms+ 降低至 200ms 以内。</li>
            <li><strong>推荐算法逻辑：</strong> 实现了基于标签的冷启动推荐与基于活跃度的加权排序算法，有效提升了社区活跃度与留存率。</li>
          </ul>
        </div>
      </section>

      {/* 工作经历 */}
      <section className="section">
        <div className="section-title">
          <i className="fa-solid fa-briefcase"></i> 工作经历
        </div>

        {/* 新增：接单/独立开发经历 */}
        <div className="item">
          <div className="item-header">
            <span className="item-title">独立全栈开发者 / 自由接单</span>
            <span className="item-date">2023.06 - 至今</span>
          </div>
          <div className="item-subtitle">全栈开发 | 微信小程序 & Web 应用</div>
          <div className="tech-stack">
            <span className="tech-tag">Element Plus</span>
            <span className="tech-tag">Vue Admin</span>
            <span className="tech-tag">Linux</span>
            <span className="tech-tag">Nginx</span>
          </div>
          <ul className="item-desc">
            <li><strong>商业项目交付：</strong> 独立承接并交付多个商业项目，包括企业级管理后台（基于 <strong>Vue 3 + Element Plus</strong>）、垂直领域微信小程序uniapp及响应式 Web 官网。</li>
            <li><strong>服务器运维：</strong> 负责项目的全流程部署与维护，熟练配置 <strong>Linux</strong> 服务器环境，使用 <strong>Nginx</strong> 进行反向代理、负载均衡及 HTTPS 配置，确保服务的高可用性与安全性。</li>
          </ul>
        </div>

        <div className="item">
          <div className="item-header">
            <span className="item-title">北京针库文化</span>
            <span className="item-date">2024.09 - 2025.02</span>
          </div>
          <div className="item-subtitle">技术型运营 / AI 应用落地</div>
          <ul className="item-desc">
            <li>负责 AIGC 工具（文生图/视频）的商业化场景技术验证，探索 AI 工作流在内容生产中的自动化落地。</li>
            <li>作为技术接口人参与行业技术交流，调研前沿架构（RAG/Agent）并转化为内部生产力工具方案。</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MainContent;

