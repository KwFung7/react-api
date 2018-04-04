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
  common: {
    editBtnLabel: 'Edit',
    completeBtnLabel: 'Complete'
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
      title: 'Portfolio Header',
      userName: 'Portfolio Title',
      userNameHintText: 'Enter your portfolio title',
      position: 'Position',
      positionHintText: 'Enter your position'
    },
    intro: {
      title: 'Portfolio Intro'
    },
    projects: {
      title: 'Portfolio Projects',
      pageTitle: {
        label: 'Page Title',
        hintText: 'Enter your project page title'
      },
      name: {
        label: 'Project Name',
        hintText: 'Enter project name'
      },
      short_name: {
        label: 'Project short name',
        hintText: 'Enter project short name'
      },
      type: {
        label: 'Project Type',
        hintText: 'Enter project type'
      },
      code_images: {
        label: 'Screenshot',
        hintText: 'Enter screenshot link'
      },
      details: {
        label: 'Project Details',
        hintText: 'Enter project details'
      },
      scenes: {
        label: 'Scenes Image',
        hintText: 'Enter scenes image link'
      },
      site: {
        label: 'Project Site',
        hintText: 'Enter project website'
      }
    },
    contact: {
      title: 'Portfolio Contact',
      email: {
        label: 'Email',
        hintText: 'Enter your email'
      },
      github_link: {
        label: 'Github Link',
        hintText: 'Enter your github link'
      },
      linkedin_link: {
        label: 'Linkedin Link',
        hintText: 'Enter your linkedin link'
      },
      phone: {
        label: 'Phone no.',
        hintText: 'Enter your phone number'
      }
    }
  },
  serverLogPage: {
    title: 'Server Log'
  },
  copyright: '© [currentYear] Felix Kwan. All rights reserved.'
};