export default {
  nav: {
    home: '首頁',
    services: '服務',
    contact: '聯絡我們',
  },
  home: {
    slogan: 'Build it. Own it.',
    subtitle: 'Hanamaru Software',
  },
  services: {
    title: '服務',
    intro: '我們提供的軟件供應商服務。',
    items: [
      {
        name: '定制軟件開發',
        description: '按照你的業務需求，量身打造網頁及流動應用程式。',
        tags: ['網頁', '流動'],
      },
      {
        name: '系統整合',
        description: '連接及整合你現有的工具、API 與數據管道。',
        tags: ['API', '自動化'],
      },
      {
        name: '雲端及 DevOps',
        description: '可靠的託管、CI/CD 流程及「基礎設施即程式碼」。',
        tags: ['AWS', 'CI/CD'],
      },
      {
        name: '維護及支援',
        description: '為運行中的系統提供持續監察、更新及支援。',
        tags: ['支援', '監察'],
      },
    ],
  },
  contact: {
    title: '聯絡我們',
    intro: '與花丸聯絡。',
    email: '電郵',
    sendEmail: '發送電郵',
    whatsapp: 'WhatsApp',
    chatOnWhatsApp: 'WhatsApp 對話',
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
  },
  footer: {
    rights: '© 2026 花丸有限公司',
  },
}
