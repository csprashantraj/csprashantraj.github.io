import profileImagePrashant from '../assets/Prashant_portfolio.jpeg';
import profileImageAshita from '../assets/ashita_portfolio.jpeg';

export const teamMembers = [
    {
    id: 1,
    name: "Prashant Raj",
    role: "Full Stack Developer",
    bio: "Computer Science undergraduate at NIT Warangal with experience at Amazon and Microsoft. Passionate about building scalable web applications and AI solutions.",
    photoUrl: profileImagePrashant,
    skills: ["ReactJS", "NodeJS", "Python", "Flask", "AI/ML", "System Design", "Cloud Deployment", "Competitive Programming", "Database", "UI/UX", "API Development", "Version Control", "Agile Methodologies"],
    careerPath: [
        { year: "2022", title: "Started B.Tech CSE at NIT Warangal" },
        { year: "2025", title: "Software Engineer Intern at Microsoft" },
        { year: "2026", title: "Software Dev Engineer Intern at Amazon" },
        { year: "2026", title: "Started Freelancing" }
    ],
    github: "https://github.com/csprashantraj",
    linkedin: "https://linkedin.com/in/csprashantraj",
    email: "prashant77399@gmail.com"
    },
    {
    id: 2,
    name: "Ashita Goyal",
    role: "Software Development Engineer & Full Stack Developer",
    bio: "Computer Science undergraduate at NIT Warangal and Software Development Engineer at Okta. Experienced in building scalable web applications, APIs, and intelligent systems. Passionate about full-stack development, cybersecurity, and modern backend architectures.",
    
    photoUrl: profileImageAshita,

    skills: [
        "Java",
        "ReactJS",
        "NodeJS",
        "Flask",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "API Development",
    ],

    careerPath: [
        { year: "2022", title: "Started B.Tech CSE at NIT Warangal" },
        { year: "2025", title: "Programming Intern at Programiz" },
        { year: "2026", title: "Software Development Engineer at Okta" },
        { year: "2026", title: "Started Freelancing (Web Development & APIs)" }
    ],

    github: "https://github.com/Ashita7890",
    linkedin: "https://www.linkedin.com/in/ag0712/",
    email: "ashugo9848@gmail.com"
    }
  // Add more team members here following the same structure
  // Example:
  // {
  //   id: 2,
  //   name: "Team Member Name",
  //   role: "Frontend Developer",
  //   bio: "Brief description of the team member's background and expertise.",
  //   photoUrl: "https://via.placeholder.com/150",
  //   skills: ["ReactJS", "TailwindCSS", "UI/UX"],
  //   careerPath: [
  //     { year: "2021", title: "Started B.Tech" },
  //     { year: "2024", title: "Joined Freelancing Team" }
  //   ],
  //   github: "https://github.com/username",
  //   linkedin: "https://linkedin.com/in/username",
  //   email: "email@example.com"
  // }
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Full-stack web applications using modern frameworks like React, Node.js, and databases",
    icon: "FaCode"
  },
  {
    id: 2,
    title: "AI/ML Solutions",
    description: "Custom AI solutions including RAG systems, chatbots, and intelligent automation",
    icon: "FaBrain"
  },
  {
    id: 3,
    title: "API Development",
    description: "RESTful APIs and backend services with robust authentication and security",
    icon: "FaServer"
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Modern, responsive user interfaces with focus on user experience and accessibility",
    icon: "FaPalette"
  },
  {
    id: 5,
    title: "Database Architecture",
    description: "Scalable database design and optimization for SQL and NoSQL databases",
    icon: "FaDatabase"
  },
  {
    id: 6,
    title: "Cloud Deployment",
    description: "Deploy and manage applications on AWS, Azure, and other cloud platforms",
    icon: "FaCloud"
  }
];
