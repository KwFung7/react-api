export default {
  navigation: {
    appTitle: 'Admin Panel',
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
    author: 'by Felix Kwan',
    notice: 'Guest account cannot edit data and access server log.'
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
      title: 'Portfolio Intro',
      general: 'General',
      experience: 'Experience',
      skill: 'Skill',
      education: 'Education',
      language: 'Language',
      message: {
        label: 'Welcome Message',
        hintText: 'Enter your welcome message'
      },
      // General
      birth: {
        label: 'Birthday',
        hintText: 'Enter your birthday'
      },
      gender: {
        label: 'Gender',
        hintText: 'Enter your gender'
      },
      name: {
        label: 'Full Name',
        hintText: 'Enter your full name'
      },
      position: {
        label: 'Position',
        hintText: 'Enter your position'
      },
      // Experience
      company: {
        label: 'Company Name',
        hintText: 'Enter company name'
      },
      current: {
        label: 'Current working or not',
        hintText: 'true / false'
      },
      details: {
        label: 'Working Details',
        hintText: 'Enter working details'
      },
      start: {
        label: 'Start Working Month',
        hintText: 'Enter start working month (e.g. July 2017)'
      },
      start_for_moment: {
        label: 'Start Working Date',
        hintText: 'Enter start working date (YYYY/MM/DD)'
      },
      end: {
        label: 'Last Working Month',
        hintText: 'Enter last working month'
      },
      info: {
        label: 'Job Info',
        hintText: 'Enter job information'
      },
      // Skill
      skill_details: {
        label: 'Skills',
        hintText: 'Enter your skills'
      },
      // Education
      period: {
        label: 'Period',
        hintText: 'Enter period'
      },
      programme: {
        label: 'Programme',
        hintText: 'Enter study programme'
      },
      school: {
        label: 'School',
        hintText: 'Enter school name'
      },
      // Language
      qualifications: {
        label: 'Qualification',
        hintText: 'Enter your qualifications'
      },
      results: {
        label: 'Result',
        hintText: 'Enter your testing result'
      }
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
    title: 'Server Log',
    warning: 'Current account cannot access server log. Please login with admin account.'
  },
  iconBtnTooltip: {
    add: 'Add',
    remove: 'Remove',
    logout: 'Logout'
  },
  copyright: '© [currentYear] Felix Kwan. All rights reserved.'
};