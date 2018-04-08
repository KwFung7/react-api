export default {
  navigation: {
    appTitle: '管理平台',
    localeBtnLabel: 'EN',
    drawerMenu: {
      setting: '系統設置',
      portfolio: {
        label: '作品集',
        subMenu: [
          '頁頭',
          '介紹',
          '項目',
          '聯繫'
        ]
      },
      feedback: '反饋',
      serverLog: '服務器日誌'
    }
  },
  common: {
    editBtnLabel: '編輯',
    completeBtnLabel: '完成'
  },
  homePage: {
    title: '歡迎來到我的管理平台',
    author: 'by Felix Kwan',
    notice: '訪客用戶無法更改資料以及訪問服務器日誌。'
  },
  loginPage: {
    title: '登入',
    userName: '帳戶名稱',
    enterUserName: '輸入你的帳戶名稱',
    password: '密碼',
    enterPassword: '輸入你的密碼',
    btnLabel: '下一步',
    guestLogin: '訪客登入',
    guestUserName: '帳戶 : guest',
    guestPassword: '密碼 : 123456'
  },
  settingPage: {
    title: '系統設置',
    selectedPortfolio: '已選作品集'
  },
  portfolioPage: {
    title: '作品集',
    header: {
      title: '作品集 - 頁頭',
      userName: '作品集標題',
      userNameHintText: '輸入作品集標題',
      position: '職位',
      positionHintText: '輸入你的職位'
    },
    intro: {
      title: '作品集 - 介紹',
      general: '基本資料',
      experience: '工作經驗',
      skill: '技能',
      education: '學曆',
      language: '語言能力',
      message: {
        label: '歡迎訊息',
        hintText: '輸入歡迎訊息'
      },
      // General
      birth: {
        label: '生日日期',
        hintText: '輸入你的生日日期'
      },
      gender: {
        label: '性別',
        hintText: '輸入你的性別'
      },
      name: {
        label: '姓名',
        hintText: '輸入你的姓名'
      },
      position: {
        label: '職位',
        hintText: '輸入你的職位'
      },
      // Experience
      company: {
        label: '公司名稱',
        hintText: '輸入公司名稱'
      },
      current: {
        label: '在職',
        hintText: '輸入在職與否 (true / false)'
      },
      details: {
        label: '工作詳情',
        hintText: '輸入工作詳情'
      },
      start: {
        label: '就職月份',
        hintText: '輸入就職月份(e.g. July 2017)'
      },
      start_for_moment: {
        label: '就職日期(YYYY/MM/DD)',
        hintText: '輸入就職日期'
      },
      end: {
        label: '離職月份',
        hintText: '輸入離職月份'
      },
      info: {
        label: '簡介',
        hintText: '輸入簡介'
      },
      // Skill
      skill_details: {
        label: '技能',
        hintText: '輸入技能'
      },
      // Education
      period: {
        label: '時期',
        hintText: '輸入時期'
      },
      programme: {
        label: '課程',
        hintText: '輸入課程'
      },
      school: {
        label: '學校',
        hintText: '輸入學校'
      },
      // Language
      qualifications: {
        label: '資格',
        hintText: '輸入資格'
      },
      results: {
        label: '成績',
        hintText: '輸入資格'
      }
    },
    projects: {
      title: '作品集 - 項目',
      pageTitle: {
        label: '頁面標題',
        hintText: '輸入你的頁面標題'
      },
      name: {
        label: '項目名稱',
        hintText: '輸入項目名稱'
      },
      short_name: {
        label: '項目短名',
        hintText: '輸入項目短名'
      },
      type: {
        label: '項目類別',
        hintText: '輸入項目類別'
      },
      code_images: {
        label: '截圖',
        hintText: '輸入截圖連結'
      },
      details: {
        label: '項目詳情',
        hintText: '輸入項目詳情'
      },
      scenes: {
        label: '場景圖片',
        hintText: '輸入場景圖片連結'
      },
      site: {
        label: '項目網址',
        hintText: '輸入項目網址'
      }
    },
    contact: {
      title: '作品集 - 聯繫',
      email: {
        label: '電郵地址',
        hintText: '輸入你的電郵地址'
      },
      github_link: {
        label: 'Github 網址',
        hintText: '輸入網址'
      },
      linkedin_link: {
        label: 'Linkedin 網址',
        hintText: '輸入網址'
      },
      phone: {
        label: '電話號碼',
        hintText: '輸入你的電話號碼'
      }
    }
  },
  serverLogPage: {
    title: '服務器日誌',
    warning: '目前用戶無法訪問服務器日誌，請使用管理員權限登錄。'
  },
  iconBtnTooltip: {
    add: '添加',
    remove: '移除',
    logout: '登出'
  },
  copyright: '© [currentYear] Felix Kwan 版權所有'
};