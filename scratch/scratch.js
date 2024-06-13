const projectDetails = {
  title: 'Hourglass',

  text: 'A multiplatform time tracking app designed for professionals working on an hourly billing basis (such as consultants, lawyers, tutors, freelancers, and contractors) where users can allocate predetermined hours, deduct hours as the timer runs, and alerts users when client hours approaches the user\'s set threshold.\nApparently "I couldn\'t find an app I liked so I built my own" is the most Hojoon sentence ever.\nApp is available for iOS, iPadOS, macOS, and visionOS.',

  links: [
    { button: 'Download on TestFlight', url: 'https://testflight.apple.com/join/yyHqLv7f' },
    { button: 'Github', url: 'https://github.com/hojoon0724/hourglass' },
  ],
};
projectDetails.links.map((link) => {
  console.log(link);
});
