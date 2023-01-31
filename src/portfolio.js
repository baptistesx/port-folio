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
    "A curious Full Stack Software Engineer 🚀 specialized with the amazing Flutter framework."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1E_9BPjg1tEaJKtGUkjpHXg45wJ-kGurx/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/baptistesx",
  linkedin: "https://www.linkedin.com/in/baptiste-seux-11b793132/",
  gmail: "seuxbaptiste@gmail.com",
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
      "⚡ Integration of third party services such as OAauth / Firebase / Google Maps"
    ),
    emoji("⚡ Agile development, step by step")
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
      schoolName: "INP ENSIMAG, FRANCE",
      logo: require("./assets/images/ensimagLogo.png"),
      subHeader: "Masters specialty, Embedded Systems and Connected Objects",
      duration: "September 2019 - September 2021",
      desc: "Link, a proximity social network:",
      descBullets: [
        "Connect with people around you",
        "Stack: Cordova (HTML, css, js), node.js, MongoDB"
      ]
    },
    {
      schoolName: "INP PHELMA, FRANCE",
      logo: require("./assets/images/phelmaLogo.png"),
      subHeader: "Master of Science in Physics, Electronics and Materials",
      duration: "September 2018 - September 2019",
      desc: "Cult'Connect, a smart greenhouse managment system:",
      descBullets: [
        "Smart modules conception (hardware & software)",
        "Mobile app managment + backend",
        "Stack: C++, Flutter, node.js, MongoDB"
      ]
    },
    {
      schoolName: "University Institutes of Technology, Grenoble, FRANCE",
      logo: require("./assets/images/iut1Logo.png"),
      subHeader: "Bachelor of Science in Electronics and Computering",
      duration: "September 2016 - Septembre 2018",
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
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
      Stack: "Backend: Node.js",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  experience: [
    {
      role: "Mobile app tech lead",
      company: "Meowtel",
      companylogo: require("./assets/images/meowtelLogo.png"),
      date: "Mai 2022 – Present",
      desc: "As a freelance, developed and led the developement of Meowtel's mobile app v2.",
      descBullets: [
        "Passwordless auth: OTP & OAuth third parties",
        "Google Maps api",
        "Checkout process",
        "Live chat",
        "..."
      ],
      recommendationTitle: "Bruno Leveque",
      recommendationLink: "https://www.linkedin.com/in/bruno42/"
    },
    {
      role: "Web & mobile tech lead",
      company: "Capgemini",
      companylogo: require("./assets/images/capgeminiLogo.png"),
      date: "August 2022 – Present",
      desc: "As a freelance, developed and led the Studio 147 inventory app.",
      descBullets: [
        "QR code scanner to identify & book hundreads of products & devices",
        "Admin backoffice React web app",
        "Users Flutter mobile app",
        "Backend with Nestjs/Typescript & Postgresql",
        "..."
      ],
      recommendationTitle: "Vincent Cornut",
      recommendationLink: "https://www.linkedin.com/in/vincent-cornut-1219b15/"
    },
    {
      role: "Mobile app tech lead",
      company: "Minute Drone",
      companylogo: require("./assets/images/minuteDroneLogo.png"),
      date: "Nov 2022 – Jan 2023",
      desc: "As a freelance, developed the mobile app to configure Minute Drone's new custom drone.",
      recommendationTitle: "Aymen Ahmed",
      recommendationLink: "https://www.linkedin.com/in/aymenahmed/"
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
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
