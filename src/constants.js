// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import cLogo from "./assets/tech_logo/c.png";
// Experience Section Logo's
import tatvasoftLogo from "./assets/company_logo/tatvasoft.png";
// Education Section Logo's
import ldrpLogo from "./assets/education_logo/ldrp.jpg";
import faithLogo from "./assets/education_logo/faith.jpg"
// Project Section Logo's
import bidLogo from "./assets/work_logo/bid.jpeg"
import cropLogo from "./assets/work_logo/crop.jpg"
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "GSAP", logo: gsapLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: tatvasoftLogo,
    role: "Intern",
    company: "Tatvasoft",
    date: "May 2025 - June 2025",
    desc: "I worked as a Frontend Intern for one month, gaining hands-on experience in building responsive and user-friendly web interfaces. During this time, I worked with HTML, CSS, JavaScript, and React to develop components and enhance the overall user experience. This internship helped me strengthen my understanding of frontend development best practices and modern web technologies.",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
];
export const education = [
  {
    id: 0,
    img: ldrpLogo,
    school: "LDRP INSTITUE OF TECHNOLOGY & RESEARCH GANDHINAGAR",
    date: "August 2022 - June 2026",
    grade: "7.33 CPI",
    degree: "Bachelor of Engineering in Information Technology",
    desc: "Currently pursuing my Bachelor's degree in Information Technology. Gaining a strong foundation in programming, data structures, algorithms, OOP, DBMS, and web development. Actively involved in workshops and coding events to enhance practical skills and industry readiness."
  },
  {
    id: 1,
    img: faithLogo,
    school: "FAITH HIGHER SECONDARY SCHOOL HIMATNAGAR",
    date: "June 2021 - April 2022",
    grade: "65.69%",
    degree: "HSC",
    desc: "Completed Class 12 (Science stream) under GSHSEB board with focus on Physics, Chemistry, Mathematics, and Computer Science. Built analytical and problem-solving skills that laid the foundation for higher studies in technology."
  },
  {
    id: 2,
    img: faithLogo,
    school: "FAITH HIGHER SECONDARY SCHOOL HIMATNAGAR",
    date: "June 2019 - April 2020",
    grade: "73.83%",
    degree: "SSC",
    desc: "Completed Class 10 under GSHSEB board with subjects including Mathematics, Science, Social Science, and English. Developed logical thinking and core academic knowledge essential for further education."
  },
];


export const projects = [
  {
    id: 0,
    title: "BidWorld Online Auction Bidding System",
    description:
      "A full-stack auction web application where users can browse products, place bids, and track winning bids. Built with React 18 frontend, Redux Toolkit, and Tailwind CSS for responsive UI.",
    image: bidLogo,
    tags: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS","ExpressJS","MongoDB","API"],
    github:
      "https://github.com/Jayrajsinhzala1101/Bidworld-Online-Auction-Bidding-System"
  },
  {
    id: 1,
    title: "CropGuard AI Crop Disease Detection",
    description:
      "A full-stack web application for detecting crop diseases using machine learning, built with Django REST API backend and React frontend.",
    image: cropLogo,
    tags: [
      "ReactJS",
      "Django",
      "HTML",
      "CSS",
      "JS",
    ],
    github: "https://github.com/Jayrajsinhzala1101/CropGuard-AI-Crop-Disease-Detection"
  },
];
