import { iconsData } from './iconsData';

export const techProjectsData = [
  {
    title: 'Hourglass',
    logo: '/hourglass-logo-white.svg',
    text: 'I couldn’t find a time tracking app that I liked so I built my own. Hourglass is designed for professionals working on an hourly billing basis (such as consultants, lawyers, tutors, freelancers, and contractors) where users can allocate predetermined hours, deduct hours as the timer runs, and alerts users when client hours approaches the user’s set threshold.\nApp is available for iOS, iPadOS, macOS, and visionOS.',
    stack: [iconsData.xcode, iconsData.swift, iconsData.swiftui, iconsData.swiftdata, iconsData.testflight],
    repoLinks: [
      {
        button: 'Source Code',
        icon: '/github.png',
        openOnNewWindow: true,
        url: 'https://github.com/hojoon0724/hourglass',
      },
    ],
    mainLink: {
      // button: 'Download on TestFlight',
      icon: '/appstore.svg',
      openOnNewWindow: true,
      url: 'https://testflight.apple.com/join/yyHqLv7f',
      appStore: true,
    },
  },

  {
    title: 'Blackjack Card Counter',
    logo: '',
    text: 'The house always wins… unless you know how to count cards, at which point you can gain a small advantage of around 1%. You can practice card counting, but you’ll need an accomplice who’s also a skilled card counter and finding someone who’s perfect at it can be tough. Instead, you can use this web application I made to practice on your own. The app will automatically keep track of the count and lets you compare your count against the actual count. \nOr, you can just play blackjack for funsies for free.',
    //  \nBy the way, if you like statistics, it also keeps track of your long term performance.',
    stack: [iconsData.vscode, iconsData.react, iconsData.framermotion, iconsData.html5, iconsData.css3],
    repoLinks: [
      {
        button: 'Source Code',
        icon: '/github.png',
        openOnNewWindow: true,
        url: 'https://github.com/hojoon0724/blackjackCounter',
      },
    ],
    mainLink: {
      button: 'Go Play Blackjack',
      icon: '/website.png',
      openOnNewWindow: true,
      url: 'https://blackjackcardcounter.netlify.app',
    },
  },

  {
    title: 'bkmrkd',
    logo: '/bkmrkdLogo.svg',
    text: 'It’s your average bookmarks app that uses JWT for user authentication. The backend is built with Express, and Mongoose is used to get user data. The app has everything you need - routing, user authentication, and full CRUD functionality. Users can even create accounts and save their bookmarks in a special place. The front-end is made with React, and I wrote custom CSS to make it look just right on both desktop and mobile. And it has light mode and dark mode.',
    stack: [iconsData.vscode, iconsData.react, iconsData.mongodb, iconsData.jwt, iconsData.html5, iconsData.css3],
    repoLinks: [
      {
        button: 'Frontend',
        icon: '/github.png',
        openOnNewWindow: true,
        url: 'https://github.com/hojoon0724/bkmrkd-frontend',
      },
      {
        button: 'Backend',
        icon: '/github.png',
        openOnNewWindow: true,
        url: 'https://github.com/hojoon0724/bkmrkd-backend',
      },
    ],
    mainLink: {
      button: 'Start Bookmarking',
      icon: '/website.png',
      openOnNewWindow: true,
      url: 'https://bkmrkd-frontend-nine.vercel.app',
    },
    folder: '/assets/images/bkmrkd',
    images: ['/bkmrkd-landing.png'],
  },
];
