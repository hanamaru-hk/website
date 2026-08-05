export default {
  nav: {
    home: '首頁',
    services: '服務',
    contact: '聯絡我們',
  },
  home: {
    slogan: 'Build it. Own it.',
    seeOffers: '看看我們的服務',
  },
  services: {
    title: '服務',
    intro:
      '我們原本是<a href="https://www.hanamaru.hk" target="_blank" rel="noopener noreferrer">花丸公司</a>內部的資訊科技部門，專注於語言教育。一次幸運的轉折，令我們開始服務外部客戶。在強勁需求與快速增長下，我們其後發展成為一間完全獨立的企業。',
    items: [
      {
        name: '定制軟件開發',
        description: '按照你的業務需求，量身打造網頁、流動、桌面及雲端應用程式。',
        tags: ['網頁', '流動', '桌面'],
      },
      {
        name: '網頁應用程式開發',
        description: '為你的團隊及客戶打造儀表板、客戶入口網站、預約系統及 SaaS 平台。',
        tags: ['儀表板', '入口網站', 'SaaS'],
      },
      {
        name: '流動應用程式開發',
        description: 'iOS 及 Android 原生應用程式，以及共享單一代碼庫的跨平台方案。',
        tags: ['iOS', 'Android'],
      },
      {
        name: 'AI 整合及自動化',
        description: '利用 AI 功能、聊天機器人及工作流程自動化，消除重複的繁瑣工序。',
        tags: ['AI', '自動化'],
      },
      {
        name: 'API 及第三方整合',
        description: '將你的工具連接至會計、CRM、ERP 及付款系統。',
        tags: ['API', 'CRM', 'ERP'],
      },
      {
        name: 'UI/UX 設計',
        description: '應用程式及網頁設計，涵蓋需求分析、線框圖至精美介面。',
        tags: ['UI', 'UX'],
      },
      {
        name: '舊系統現代化',
        description: '將過時的系統遷移、重組及現代化至易於維護的技術棧。',
        tags: ['遷移', '重組'],
      },
      {
        name: '維護及支援',
        description: '涵蓋安全更新、升級及持續功能開發的 SLA 支援計劃。',
        tags: ['支援', 'SLA'],
      },
      {
        name: '技術諮詢 / 兼任技術總監',
        description: '高級技術策略、架構審查及盡職審查。',
        tags: ['策略', '諮詢'],
      },
      {
        name: '雲端及 DevOps',
        description: '可靠的託管、CI/CD 流程及「基礎設施即程式碼」。',
        tags: ['AWS', 'CI/CD'],
      },
    ],
  },
  contact: {
    title: '聯絡我們',
    email: '電郵',
    emailDesc: '歡迎隨時電郵至 solutions{\'@\'}hanamaru.hk 聯絡我們。',
    sendEmail: '發送電郵',
    whatsapp: 'WhatsApp',
    chatOnWhatsApp: 'WhatsApp 對話',
    github: 'GitHub',
    githubDesc: '我們在 GitHub 上有一些實驗性專案，歡迎使用及提供意見。',
    viewOnGitHub: '瀏覽 GitHub',
    address: '地址',
    addressDesc:
      '香港九龍長沙灣青山道 500 號\n百美工廠大廈 11 樓 B7',
    bookingRequired: '敬請預約',
    viewOnMap: '在 Google 地圖查看',
    formTitle: '向我們發送訊息',
    name: '姓名',
    phone: '電話',
    emailField: '電郵',
    message: '訊息',
    placeholders: {
      name: '你的姓名',
      phone: '你的電話號碼',
      email: '你的電郵',
      message: '任何查詢',
    },
    rules: {
      nameRequired: '請輸入你的姓名',
      emailRequired: '請輸入你的電郵',
    },
    submit: '提交',
    success: '多謝你的查詢，我們會盡快回覆。',
    errors: {
      failed: '傳送訊息失敗，請再試一次。',
      timeout: '請求逾時，請再試一次。',
    },
  },
  footer: {
    rights: '© 2026 花丸有限公司',
  },
}
