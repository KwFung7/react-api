const portfolioExample = {
  name: 'felixkwan',
  header: {
    name: 'Felix Kwan',
    position: 'Programmer'
  },
  intro: {
    message: ['Welcome to my portfolio ! Current <b>responsive</b> portfolio web created with <b>React app framework</b> and material-ui on my own. Project page currently include my individual product details and part of source code.'],
    general: {
      type: 'General',
      name: 'Kwan Ling Fung Felix 關凌鋒',
      gender: 'Male',
      year: '1995',
      birth: '30/11/1994',
      position: 'Programmer'
    },
    experience: {
      type: 'Experience',
      jobs: [{
        id: 1,
        start: 'July 2017',
        start_for_moment: '20170712',
        end: 'Current',
        current: true,
        company: 'Tofugear Limited',
        position: 'Programmer',
        info: 'Mostly work for frontend development e.g. Ecommerce web / app',
        details: [
          'Develop / maintain huge web project e.g. Ecommerce platform with Ruby on Rails web framework & React (react-rails gem) or adding new feature on existing web',
          'WebView on app using React / Redux or utilizing famous react component e.g. Material-ui',
          'Responsive web development',
          'Experience of React native app development',
          'CSS Styling, with Perfect Pixel following design'
        ]
      }]
    },
    skill: {
      type: 'Skill',
      details: [
        'Ruby on Rails web framework',
        'JavaScript ES6',
        'Responsive web',
        'React / Redux',
        'React native app development',
        'CSS Styling',
        'Git, UI with SourceTree',
        'Objective-C, Swift programming, Xcode for IOS app development',
        'Usually Java for programming task',
        'C++, Python programming language learning experience',
        'Typing Speed: 50 w.p.m. English, 25 w.p.m. Chinese'
      ]
    },
    education: {
      type: 'Education',
      details: [{
        period: '2017 – 2018',
        programme: 'MSc in Biomedical Engineering (Studying)',
        school: 'The Hong Kong Polytechnic University'
      },
      {
        period: '2012 – 2016',
        programme: 'Bachelor of Medical Science (Hons)',
        school: 'Tung Wah College'
      }]
    },
    language: {
      type: 'Language',
      qualifications: [
        'IELTS English Language Test',
        'CRE Chinese & English',
        'Spoken Language'
      ],
      results: [
        'Level 6.5',
        'Level 2',
        'Native Cantonese & Fluent English'
      ]
    }
  },
  projects: {
    title: 'Individual Products',
    ios_app: [
      {
        id: 1,
        short_name: 'arrofly',
        name: 'Arrofly',
        type: 'iOS game app',
        site: 'https://itunes.apple.com/us/app/id1156974562',
        details: [
          'Universal game app developed independently by Xcode with Sprite framework. It is a simple tap game, with graphics provided by Kenney.nl. Player must keep tapping to move UFO, simultaneously avoid to collide with various obstacles !',
          'The following screenshot shows part of my source code. It includes the function touchesBegan which control the action after player tapping screen.'
        ],
        code_images: ['arrofly-code.png'],
        scenes: [
          'arrofly-scene-1.jpg',
          'arrofly-scene-2.jpg',
          'arrofly-scene-3.jpg',
          'arrofly-scene-4.jpg'
        ]
      },
      {
        id: 2,
        short_name: 'sanguosha-data',
        name: '資料庫 for 三國殺',
        type: 'iOS reference app',
        site: 'https://itunes.apple.com/hk/app/zi-liao-ku-for-san-guo-sha/id1166250519?mt=8',
        details: [
          'Reference app developed by Objective-C for a famous card game called SanGuoSha. User can check the cards image or details, and conveniently search for particular card !',
          'The following screenshot shows part of my source code. This part controls numerous cards display by UICollectionView. It shows the search results only when the search controller is active.',
          'The following screenshot shows the storyboard in Xcode. This app has simple structure and UI design, but most difficult part is the local data storage and display.'
        ],
        code_images: [
          'sanguosha-code-1.png',
          'sanguosha-code-2.png'
        ],
        scenes: [
          'sanguosha-scene-1.png',
          'sanguosha-scene-2.png',
          'sanguosha-scene-3.png',
          'sanguosha-scene-4.png'
          // 'sanguosha-scene-5.png'
        ]
      }
    ]
  },
  contact: {
    email: 'kwfxng@gmail.com',
    phone: '(852) 98213628',
    github_link: 'https://github.com/KwFung7',
    linkedin_link: 'https://www.linkedin.com/in/felix-kwan-827212144/'
  }
};

module.exports = portfolioExample;