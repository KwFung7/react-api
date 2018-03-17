export default {
  navigation: {
    appTitle: 'Admin',
    localeBtnLabel: '繁中',
    drawerMenu: {
      setting: 'System setting',
      portfolio: {
        label: 'Portfolio',
        subMenu: [
          'Header',
          'Intro',
          'Projects',
          'Contact'
        ]
      },
      feedback: 'Feedback',
      serverLog: 'Server Log'
    }
  },
  homePage: {
    title: 'Welcome to my Admin Panel',
    author: 'by Felix Kwan'
  },
  loginPage: {
    title: 'Login',
    userName: 'Account',
    enterUserName: 'Enter your account',
    password: 'Password',
    enterPassword: 'Enter your password',
    btnLabel: 'Next',
    guestLogin: 'Guest Login',
    guestUserName: 'account  : guest',
    guestPassword: 'password : 123456'
  },
  settingPage: {
    title: 'System Setting',
    selectedPortfolio: 'Selected portfolio'
  },
  portfolioPage: {
    title: 'Portfolio',
    header: {
      title: 'Portfolio Header'
    },
    intro: {
      title: 'Portfolio Intro'
    },
    projects: {
      title: 'Portfolio Projects'
    },
    contact: {
      title: 'Portfolio Contact'
    }
  },
  serverLogPage: {
    title: 'Server Log'
  },
  copyright: '© [currentYear] Felix Kwan. All rights reserved.'
};