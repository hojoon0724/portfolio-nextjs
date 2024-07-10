import { iconsData } from './iconsData';

export const techProjectsData = [
  {
    title: 'Hourglass',
    text: 'A multiplatform time tracking app designed for professionals working on an hourly billing basis (such as consultants, lawyers, tutors, freelancers, and contractors) where users can allocate predetermined hours, deduct hours as the timer runs, and alerts users when client hours approaches the user\'s set threshold.\nApparently "I couldn\'t find an app I liked so I built my own" is the most Hojoon sentence ever.\nApp is available for iOS, iPadOS, macOS, and visionOS.',
    stack: [
      iconsData.swift,
      iconsData.swiftui,
      iconsData.swiftdata,
    ],
    links: [
      {
        button: 'Download on TestFlight',
        url: 'https://testflight.apple.com/join/yyHqLv7f',
        icon: '/testflight.svg',
      },
      {
        button: 'Github',
        url: 'https://github.com/hojoon0724/hourglass',
        icon: '/github.svg',
      },
    ],
  },

  {
    title: 'Blackjack Count Trainer',
    text: 'Write project description',
    stack: [
      iconsData.react,
      iconsData.mongodb,
      iconsData.jwt,
      iconsData.html5,
      iconsData.css3,
    ],
    links: [
      {
        button: 'Github',
        url: 'https://github.com/hojoon0724/hourglass',
        icon: '/github.svg',
      },
    ],
  },

  {
    title: 'bkmrkd',
    text: 'Description about bookmark saving full crud and user auth with JWT',
    stack: [
      iconsData.react,
      iconsData.mongodb,
      iconsData.jwt,
      iconsData.html5,
      iconsData.css3,
    ],
    links: [
      {
        button: 'Github Front',
        url: 'https://github.com/hojoon0724/bkmrkd-frontend',
        icon: '/github.svg',
      },
      {
        button: 'Github Back',
        url: 'https://github.com/hojoon0724/bkmrkd-backend',
        icon: '/github.svg',
      },
    ],
  },
];
