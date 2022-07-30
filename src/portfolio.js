/* Change this file to get your personal Porfolio */
import React from "react";
// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Milan",
  logo_name: "milan.p()",
  nickname: "milaan / fanta",
  full_name: "Milan Panta",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1jsCHdKwdZQ4ZAkOrCb2ItVuuH0S45n-l/view?usp=sharing",
  mail: "pantamilan2021@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/kingmaker9841",
  linkedin: "https://www.linkedin.com/in/milan-panta-874a691b3/",
  gmail: "pantamilan2021@gmail.com",
  gitlab: "https://gitlab.com/kingmaker9841",
  facebook: "https://www.facebook.com/Knowntoevery/",
  twitter: "https://twitter.com/poppygloria2021",
  instagram: "https://www.instagram.com/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using ReactNative",
        "⚡ Creating application backend in Node & Express",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Java",
        //   fontAwesomeClassname: "simple-icons:java",
        //   style: {
        //     color: "#f89820",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        // {
        //   skillName: "Apache",
        //   fontAwesomeClassname: "simple-icons:apache",
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Amrit Science Campus (ASCOL)",
      subtitle:
        "Bachelor in Computer Science and Information Technology (CSIT)",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2014-2018",
      descriptions: [
        // "⚡ I'm currently pursuing my bachelors in Information Technology."
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://amritcampus.edu.np/",
    },
    {
      title: "Bagmati Modern College",
      subtitle: "Major in Physics and Math",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2011-2013",
      descriptions: [
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://bagmaticollege.edu.np/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "General Technology",
          company_url: "https://generaltechnology.com.np/",
          logo_path: "gentech.jpeg",
          duration: "Jan 2019 - May 2020",
          location: "Office",
          description: (() => {
            return (
              <div>
                <b>Operation Risk Register</b>
                <p>
                  The aim of the project is to calculate the risk score of any
                  institution based on some variables like internal fraud,
                  external fraud, business disruptions, system failures, and so
                  on.
                </p>
                <p>
                  My role in this project was as a Full-stack developer working
                  with the tech stack vanilla Javascript, HTML5, CSS3, React on
                  the frontend, NodeJS on the backend, SQL as database, JIRA for
                  project management, and Redux as a state management tool.
                </p>
                <p>
                  My responsibility was to create an interface that provides the
                  admin user to select appropriate operational risks from the
                  dropdowns which in turn would provide a dynamic risk score
                  that would be helpful for the administration to make critical
                  decisions based on the scores generated.
                </p>
                <p>
                  The project is already deployed to multiple private and
                  government banks. With the help of this app, the admin user is
                  now able to generate quarterly, monthly, or yearly reports of
                  the operational risk at their banks and branches make critical
                  decision accordingly.
                </p>
              </div>
            );
          })(),
          //   `Train, manage and provide guidance to junior software development staff.
          // Work closely with the Project Manager and Team Leads on change request functions.
          // Develops new and maintains existing applications.
          // Increased productivity and problem-solving technics by 20%.
          // We primarily used MERN Stack.
          // `,
          // "My responsibility was to create an interface that provides the admin user to select appropriate operational risks from the dropdowns which in turn would provide a dynamic risk score that would be helpful for the administration to make critical decisions based on the scores generated.";
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Front End Developer",
          company: "Identv Solutions",
          company_url: "https://nepal.identv.com/",
          logo_path: "identv.jpeg",
          duration: "Jun 2020 - Feb 2021",
          location: "Work From Home",
          description: (() => {
            return (
              <div>
                <ul>
                  <li>Managed two projects of the company itself.</li>
                  <li>Mentored junior developers and intern</li>
                  <li>
                    Worked closely with business manager to better design the
                    product.
                  </li>
                </ul>
                <div>
                  <br />
                  <b>Video Tagging (Vader)</b>
                  <p>
                    This project was a company based with the aim of providing a
                    platform where the user could trim a section of a media and
                    provide the information of the trimmed media accordingly
                    like related company, brand, categories, quality, length,
                    and so on.
                  </p>
                  <p>
                    Led a team of 3 engineers in building a Video tagging
                    system. Here, I created multiple reports of the user
                    interacting with the video and the details of the video like
                    the channel it's related to, maximum aired time weekly,
                    biweekly, and monthly. I also developed Plugins for ad
                    cutting, selecting timestamps, and reporting ad quality.
                  </p>
                  <p>
                    The tech stacks that I used here were Javascript,
                    typescript, and React in the front-end, NodeJS on the
                    backend, SQL, and used MongoDB as the primary database.
                  </p>
                  <p>
                    The product was of the company itself that requires more
                    than 100 users to tag the video. So, it made life easier for
                    them with more productivity. Superusers could constantly
                    monitor about video data and activity of the users.
                  </p>
                </div>
              </div>
            );
          })(),
          //   `Work closely with the Client and Team on change request functions.
          // We Primarily used MERN Stack. 60% of my work was doing frontend development, 30% of my work was on the backend, and 10% of my work was backend designing database schemas.
          // `,
          // "Led a team of 3 engineers in building a Video tagging system. Here, I created multiple reports of the user interacting with the video and the details of the video like the channel it's related to, maximum aired time weekly, biweekly, and monthly.I also developed Plugins for ad cutting, selecting timestamps, and reporting ad quality.";
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Software Engineer",
          company: "Neptune Mutual",
          company_url: "https://neptunemutual.com/",
          logo_path: "neptunemutual.jpg",
          duration: "Jul 2021 - Present",
          location: "Work From Everywhere (WFE)",
          description: (() => {
            return (
              <div>
                <b>Neptune mutual faucet</b>
                <p>
                  The main aim of this project was to allow users a platform to
                  create insurance for their crypto. Our platform worked as a
                  middle man that would provide users options to choose from
                  multiple crypto- insurance companies.
                </p>
                <p>
                  My role was designated as ReactJS Engineer who would be
                  responsible for mostly design aspects, use functions from the
                  blockchain SDK and use it to build business logic.
                </p>
                <p>
                  I led a team of 3 mid-level engineers working with a tech
                  stack that comprised vanilla Javascript, HTML5, CSS3,
                  Typescript, React, NodeJS, MongoDB, and Redux as state
                  management tools.
                </p>
                <p>
                  The project is still in the pre-production phase and is being
                  tested rigorously.
                </p>
              </div>
            );
          })(),
          //   `The main aim of this project was to allow users a platform to create insurance for their crypto.Our
          // platform worked as a middle man that would provide users options to choose from multiple crypto-insurance companies.
          // My role is designated as ReactJS Engineer who would be responsible for mostly design aspects, use functions from the blockchain SDK and use it to build business logic.
          // `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Freelance",
      experiences: [
        {
          title: "Mobile app Developer",
          company: "Dzangolab",
          company_url: "https://dzangolab.com/",
          logo_path: "dzangolab.png",
          duration: "Mar 2021 - Jun 2021",
          location: "Work From Home",
          description: (() => {
            return (
              <div>
                <ul>
                  <li>
                    Worked closely with Developers, UI team, and the client to
                    better develop the product. Mentored Junior Developers on
                    living up to the coding standards of the company
                  </li>
                </ul>
                <br />
                <div>
                  <b>Sama</b>
                  <p>
                    Created a native app that helps parents to manage their
                    children by hiring a nanny, scheduling an event, and
                    scheduling children's activities. Developed frontend with
                    typescript and react-native and web API backend using
                    graphql and strapi. Led a team of 3 engineers and
                    coordinated with the client closely.
                  </p>
                  <p>
                    Our client was happy with providing them the product they
                    wanted on time. The product made it easy for the users to
                    look after their children.
                  </p>
                </div>
              </div>
            );
          })(),
          // "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        // {
        //   title: "Google Local Guide",
        //   company: "Google Map",
        //   company_url: "https://maps.google.com/localguides/",
        //   logo_path: "localguide.png",
        //   duration: "Sep 2018 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "GDG Student Volunteer",
        //   company: "Google Developer Groups",
        //   company_url: "https://gdg.community.dev/",
        //   logo_path: "gdg.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Google Developer Group Surat Student Volunteer and Member.",
        //   color: "#D83B01",
        // },
        {
          title: "E. F. N. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF Nepal",
          // company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "milan.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/poppygloria2021",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "AutomateTiktokBot",
      url: "https://github.com/kingmaker9841/tiktok-live-auto-comment",
      description:
        "This is Tiktok Bot. This will login to your Tiktok account. Goto tiktok users videos, comment on it, comment on live tiktok videos",
      languages: [
        {
          name: "Nodejs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Puppeteer",
          iconifyClass: "logos-puppeteer",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "Apollo-upload",
      url: "https://github.com/kingmaker9841/apollo-multiple-upload",
      description:
        "A simple multiple file upload to S3 and local storage with apollo server express (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "GraphQl",
          iconifyClass: "logos-graphql",
        },
        {
          name: "ApolloGrpahQl",
          iconifyClass: "simple-icons:apollographql",
        },
      ],
    },
    {
      id: "3",
      name: "stack-implementation",
      url: "https://github.com/kingmaker9841/stack-implementation",
      description:
        "Stack Implementation using Javascript in local store (for learning purposes)",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      url: "https://github.com/harikanani/node_express_crud_api_starter",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "node-web-scrapper",
      url: "https://github.com/harikanani/node-web-scrapper",
      description:
        "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "5",
      name: "harikanani.github.io",
      url: "https://github.com/harikanani/harikanani.github.io",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },
    {
      id: "6",
      name: "Automate Attendace",
      url: "https://github.com/harikanani/Node_Python",
      description: "Automation of Online Attendance using node js and python",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Automate Discord Bot",
      url: "https://github.com/harikanani/AutomateDiscordBot",
      description:
        "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Python Selenium",
          iconifyClass: "logos-selenium",
        },
        {
          name: "Chromium Browser",
          iconifyClass: "openmoji-chromium",
        },
      ],
    },
    {
      id: "8",
      name: "Flask Blog",
      url: "https://github.com/harikanani/flask_blog",
      description: "A Simple Blog Web Application made using Flask Framework",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "9",
      name: "Netflix top series",
      url: "https://github.com/harikanani/netflix-top-series",
      description: "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/harikanani/Covid19TrackerReact",
      description:
        "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "11",
      name: "Food Order Static Website",
      url: "https://github.com/harikanani/food-order-website",
      description:
        "A simple static website related to food restaurants service. this is reasponsive as well.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "PHP",
          iconifyClass: "logos-php",
        },
      ],
    },
    {
      id: "12",
      name: "NFT Launchpad",
      url: "https://deliquescent-cents.000webhostapp.com/",
      description: "NFT Launchpad crypto site portfolio",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
