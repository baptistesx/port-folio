/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Baptiste Seux",
  title: "Hi all, I'm Baptiste",
  subTitle: emoji(
    "A curious Full Stack Software Engineer 🚀 specialized in the amazing Flutter framework."
  ),
  resumeLink: "https://cvdesignr.com/p/63e3db039336b", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/baptistesx",
  linkedin: "https://www.linkedin.com/in/baptiste-seux-11b793132/",
  gmail: "seuxbaptiste@gmail.com",
  malt: "https://www.malt.fr/profile/baptisteseux",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "ENJOY LEADING TECH PROJECTS AND DEVELOPING AWESOME FLUTTER MOBILE APPS",
  skills: [
    emoji(
      "⚡ Develop highly interactive cross-platforms apps from the idea to production"
    ),
    emoji(
      "⚡ Integration of third party services such as OAuth / Firebase / Google Maps"
    ),
    emoji("⚡ Agile development, step by step"),
    emoji(
      "⚡ Full stack with node.js/typescript/express, mongoDB or postgresql "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "INP ENSIMAG, Grenoble, FRANCE",
      logo: require("./assets/images/ensimagLogo.png"),
      subHeader: "Master's specialty, Embedded Systems and Connected Objects",
      duration: "September 2019 - September 2021",
      desc: "Link, a proximity social network:",
      descBullets: [
        "Connect with people around you",
        "Stack: Cordova (HTML, css, js), node.js, MongoDB"
      ]
    },
    {
      schoolName: "INP PHELMA, Grenoble, FRANCE",
      logo: require("./assets/images/phelmaLogo.png"),
      subHeader: "Master of Science in Physics, Electronics and Materials",
      duration: "September 2018 - September 2019",
      desc: "Cult'Connect, a smart greenhouse management system:",
      descBullets: [
        "Smart modules conception (hardware & software)",
        "Mobile Flutter app management with Clean Architecture + backend",
        "Stack: C++, Flutter, node.js, MongoDB"
      ]
    },
    {
      schoolName: "University Institute of Technology, Grenoble, FRANCE",
      logo: require("./assets/images/iut1Logo.png"),
      subHeader: "Bachelor of Science in Electronics and Computering",
      duration: "September 2016 - September 2018",
      desc: "Ranked top 4 in the program. Took courses about:",
      descBullets: [
        "Software Engineering, Electronics, ...",
        "Participation in a national robotics competition"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mobile: Flutter", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Web: React/Next.js",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend: Node.js, mongoDB, postgresql",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  title: "Experiences",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  experience: [
    {
      role: "Mobile Apps Lead Developer",
      company: "Meowtel",
      place: "San Francisco, CA, USA (remote)",
      companylogo: require("./assets/images/meowtelLogo.png"),
      date: "May 2022 – May 2023",
      desc1:
        "Meowtel is the #1 Cat sitting Marketplace in the United States. 100,000+ times and almost half a million visits were already booked.",
      desc2:
        "I led Meowtel's new Flutter App development from its conception to launch. The app is now ~60% faster and offers a better UI/UX leading to an increased conversion rate.",
      desc3:
        "The app is split into two distinct parts: one for cat owners to view and book local sitters, and another for sitters to manage their availability and clients.",
      descBullets: [
        "Passwordless OTP auth, third parties OAuth",
        "Google Maps api",
        "Checkout process",
        "Live chat",
        "Push Notification (FCM)",
        "..."
      ],
      recommendations: [
        {link: "https://www.linkedin.com/in/bruno42/", name: "Bruno Leveque"},
        {
          link: "https://www.linkedin.com/in/sonyapetcavich/",
          name: "Sonya Petcavich"
        }
      ],
      pdfTitle: "Meowtel PDF",
      pdfUrl: "https://pitch.com/embed/8267b542-129e-4d5c-8ce1-7c3d5314e2fd",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://meowtel.com/"
        }
      ]
    },
    {
      role: "Fullstack & Mobile Lead Developer",
      company: "Yakadir",
      place: "Lille, FRANCE (remote)",
      companylogo: require("./assets/images/yakadirLogo.png"),
      date: "May 2023 – September 2023",
      desc1:
        "Yakadir is an emerging startup dedicated to promoting open dialogue on diverse healthcare topics",
      desc2:
        "As a freelance developer, I reworked 90% of the Flutter mobile app & backoffice to release the version 2.",
      descBullets: [
        "Rework the projects architecture & design",
        "Add KPIs page on the backoffice",
        "Backend with Hasura, graphql, postgresql, node.js, google cloud (cloud functions, cloud run...)"
      ],
      recommendations: [
        {
          link: "https://www.linkedin.com/in/philippemougin/",
          name: "Philippe Mougin"
        },
        {
          link: "https://www.linkedin.com/in/sergebesnard/",
          name: "Serge Besnard"
        },
        {
          link: "https://www.linkedin.com/in/estherboulanger/",
          name: "Esther Boulanger"
        }
      ],
      pdfTitle: "Yakadir",
      pdfUrl: "https://pitch.com/public/564be052-7113-41ad-b050-f0579f0e5e5c",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://yakadir.org/"
        }
      ]
    },

    {
      role: "CTO",
      company: "La carte green",
      place: "Lausanne, Switzerland",
      companylogo: require("./assets/images/la_carte_green.png"),
      date: "Since Aug 2023",
      desc1:
        "La carte green is the app to enjoy the best of Lausanne with FREE offers and discounts.",
      desc2:
        "I started as a freelance developer then got into the adventure as associate in the role of CTO. I have developed the mobile app from scratch to production. I have also led the dev of our backoffice, with an external fullstack freelance developer.",
      recommendations: [
        {
          link: "https://www.linkedin.com/in/matthieu-saussaye-0023a114a/",
          name: "Matthieu SAUSSAYE"
        },
        {
          link: "https://www.linkedin.com/in/paul-margain",
          name: "Paul Margain"
        }
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lacartegreen.ch/"
        }
      ]
    },
    {
      role: "Fullstack engineer",
      company: "Winchat",
      place: "Paris, FRANCE (remote)",
      companylogo: require("./assets/images/winchat.png"),
      date: "Sept 2023",
      desc1: "Winchat is the AI concierge for premium eCommerce brands.",
      desc2:
        "As a freelance developer, I have helped Winchat in emergency 2 days before the final relase to production, to fix an issue with Firebase/Google Cloud Functions & Firestore.",
      recommendations: [
        {
          link: "https://www.linkedin.com/in/elise-perpetua-1596803a/",
          name: "Elise Perpetua"
        }
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.winchat.ai/"
        }
      ]
    },
    {
      role: "Web & Mobile Lead Developer",
      company: "Capgemini",
      place: "Paris, FRANCE (remote)",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "August 2022 – Present",
      desc1:
        "Capgemini's Visual Production Studio, Studio 147, manages a vast array of device references.",
      desc2:
        "As a freelance developer, I oversaw the creation of the Studio 147 inventory app, which features a back-office ReactJS web application for registering devices and users, and a Flutter mobile app for Studio 147's team to easily borrow and return these devices.",
      descBullets: [
        "QR code scanner to identify & book hundreds of products & devices",
        "Access all the products description & availability",
        "Backend with Nestjs/Typescript & Postgresql"
      ],
      recommendations: [
        {
          link: "https://www.linkedin.com/in/vincent-cornut-1219b15/",
          name: "Vincent Cornut"
        },
        {
          link: "https://www.linkedin.com/in/arthur-tran-77196955/",
          name: "Arthur Tran"
        }
      ],
      pdfTitle: "GDE147",
      pdfUrl: "https://pitch.com/embed/fc058cf9-29cd-4f25-8576-7dac9b39e8a0"
    },
    {
      role: "Mobile Apps Lead Developer",
      company: "Minute Drone",
      place: "Grenoble, FRANCE (hybrid)",
      companylogo: require("./assets/images/minuteDroneLogo.png"),
      date: "Nov 2022 – Jan 2023",
      desc1:
        "MinuteDrone is one of the premier providers of professional drone education in France.",
      desc2:
        "As a freelance developer, I created the Flutter mobile app to configure MinuteDrones' new custom drone.",

      recommendations: [
        {
          link: "https://www.linkedin.com/in/aymenahmed/",
          name: "Aymen Ahmed"
        }
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://minutedrone.com/"
        }
      ]
    }
  ]
};

const otherProjects = {
  display: true, //Set it to true to show workExperiences Section
  title: "Other Projects",
  subtitle: "SOME ASSOCIATIONS I HELPED OR PERSONAL PROJECTS",
  experience: [
    {
      role: "Fullstack Lead Developer",
      company: "ENTPE",
      place: "Lyon, FRANCE (remote)",
      companylogo: require("./assets/images/tramsLogo.png"),
      date: "Oct 2020 – Present",
      desc1: "ENTPE is a renowned French engineering school located in Lyon.",
      desc2:
        "As a freelance developer, I created version 1 and 2 of the back office and mobile app for TRAMS, a major annual student sports competition.",
      desc3:
        "The back office, accessible to administrators, facilitates the registration of data that is displayed on the Flutter mobile app. The app features an information feed, game schedules and results, teams and schools ranking, rules, sponsors, and an interactive map.",
      // descBullets: [
      //   "Passwordless OTP auth, third parties OAuth",
      //   "Google Maps api",
      //   "Checkout process",
      //   "Live chat",
      //   "Push Notification (FCM)",
      //   "..."
      // ],
      // recommendations: [
      //   {
      //     link: "https://www.linkedin.com/in/aymenahmed/",
      //     name: "Aymen Ahmed"
      //   }
      // ],
      pdfTitle: "Meowtel PDF",
      pdfUrl: "https://pitch.com/embed/d37faa0c-12b8-4428-8bac-cadf36fae74e"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://meowtel.com/"
      //   }
      // ]
    },
    {
      role: "Fullstack Engineer",
      company: "FOM",
      place: "(personal project)",
      companylogo: require("./assets/images/fomLogo.png"),
      date: "2022 – 2023",
      desc1:
        "A fully synchronized mobile app to streamline restaurant order management, developed using Flutter, Firebase, and Firestore with real-time data streams for seamless cross-device syncing.",

      videoTitle: "FOM app (Food Orders Management)",
      videoUrl: "https://www.youtube.com/embed/wQRvYt0_1II"
    },
    {
      role: "Fullstack Engineer",
      company: "Cult'Connect",
      place: "(personal project)",
      companylogo: require("./assets/images/cultconnectLogo.png"),
      date: "2021",
      desc1:
        "A Flutter mobile app for registering smart modules such as sensors and actuators, allowing you to monitor their data in real-time, configure automatic thresholds, and manually control them. The back-end was created using Node.js, Express, and MongoDB, and the embedded components were developed using ESP32s. The smart module hardware and software were designed and created in-house.",
      // recommendations: [
      //   {
      //     link: "https://www.linkedin.com/in/aymenahmed/",
      //     name: "Aymen Ahmed"
      //   }
      // ],
      videoTitle: " Cult'Connect v1 - Presentation ",
      videoUrl: "https://www.youtube.com/embed/E9dBVZ1cW04"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showOpenSourceProjects: false,
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+33 6 78 10 82 43",
  email_address: "seuxbaptiste@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  achievementSection,
  bigProjects,
  blogSection,
  contactInfo,
  educationInfo,
  greeting,
  illustration,
  isHireable,
  openSource,
  otherProjects,
  podcastSection,
  skillsSection,
  socialMediaLinks,
  splashScreen,
  talkSection,
  techStack,
  twitterDetails,
  workExperiences
};
