// =============================================
// Resume Data — Het Shah Portfolio
// =============================================

export const personalInfo = {
  name: "Het Shah",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "Web Developer", "Cloud Engineer", "AI Enthusiast"],
  email: "hetshah.genai@gmail.com",
  phone: "+91 7984291743",
  location: "Ahmedabad, India",
  github: "https://github.com/hetshah-188",
  linkedin: "https://www.linkedin.com/in/hetshah188",
  bio: "I'm a Computer Engineering student at GTU with a passion for building scalable, user-centric digital experiences. From architecting RESTful APIs to integrating AI models, I love turning complex problems into elegant solutions. When I'm not coding, I'm exploring new cloud technologies and contributing to open source.",
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Gujarat Technological University (GTU)",
    period: "August 2024 – September 2027",
    icon: "🎓",
    color: "#0066CC",
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "Bhagwan Mahavir University",
    period: "May 2021 – June 2024",
    icon: "📜",
    color: "#4D9FE8",
  },
];

export const projects = [
  {
    id: 1,
    title: "Life4U",
    subtitle: "Blood Bank Management System",
    description:
      "A scalable Blood Bank Management System supporting four distinct roles — donor, patient, hospital staff, and admin — with role-based access control, reducing blood wastage through real-time inventory tracking.",
    longDesc:
      "Engineered real-time data management modules for direct booking, streamlined coordination of blood resources, and hospital records. Designed and implemented RESTful APIs for cross-platform data synchronisation between donors, hospitals, and administrators.",
    stack: ["Node.js", "JavaScript", "MongoDB", "React.js", "REST API"],
    features: [
      "Role-based access control (4 roles)",
      "Real-time inventory tracking",
      "Direct blood booking system",
      "RESTful API architecture",
      "High availability & low-latency responses",
    ],
    period: "March 2026 – Present",
    color: "#FF3B30",
    gradient: "from-red-500/20 to-rose-600/10",
    icon: "🩸",
    github: "https://github.com/hetshah-188",
    status: "In Progress",
  },
  {
    id: 2,
    title: "FarmAssist",
    subtitle: "AI-Powered Farming Solution",
    description:
      "An end-to-end AI-powered web application enabling farmers to upload plant images for automated disease detection, leveraging computer vision models to deliver real-time diagnostic insights via a smart chatbot.",
    longDesc:
      "Integrated multilingual NLP support, live weather prediction APIs, real-time crop market pricing, and NGO geo-mapping. Delivered a full-stack scalable solution with modular backend architecture and responsive frontend for low-connectivity rural environments.",
    stack: ["Node.js", "Python", "CSS", "Machine Learning", "Computer Vision", "NLP"],
    features: [
      "AI-based plant disease detection",
      "Multilingual NLP chatbot",
      "Live weather prediction",
      "Real-time crop market pricing",
      "NGO geo-mapping integration",
    ],
    period: "March 2025 – April 2025",
    color: "#34C759",
    gradient: "from-green-500/20 to-emerald-600/10",
    icon: "🌱",
    github: "https://github.com/hetshah-188",
    status: "Completed",
  },
  {
    id: 3,
    title: "Justice Lawyer",
    subtitle: "Legal Services Platform",
    description:
      "A full-stack legal services platform enabling users to search, compare, and connect with lawyers by expertise and location, replacing manual discovery with an intelligent matching algorithm.",
    longDesc:
      "Implemented secure communication channels, appointment scheduling, user review systems, and integrated payment flows. Designed a responsive admin dashboard featuring dynamic filters, profile management, and real-time analytics visualisations.",
    stack: ["JavaScript", "CSS", "Node.js", "MongoDB", "REST API"],
    features: [
      "Intelligent lawyer matching algorithm",
      "Secure communication channels",
      "Appointment scheduling system",
      "User review & rating system",
      "Integrated payment flows",
    ],
    period: "November 2023 – January 2024",
    color: "#5856D6",
    gradient: "from-violet-500/20 to-purple-600/10",
    icon: "⚖️",
    github: "https://github.com/hetshah-188",
    status: "Completed",
  },
];

export const skills = {
  Languages: [
    { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 90 },
    { name: "Python", icon: "devicon-python-plain colored", level: 82 },
    { name: "Java", icon: "devicon-java-plain colored", level: 70 },
    { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
    { name: "CSS3", icon: "devicon-css3-plain colored", level: 90 },
    { name: "SQL", icon: "devicon-mysql-plain colored", level: 75 },
  ],
  Frontend: [
    { name: "React.js", icon: "devicon-react-original colored", level: 88 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: 90 },
  ],
  Backend: [
    { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 85 },
    { name: "Express.js", icon: "devicon-express-original", level: 82 },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored", level: 65 },
  ],
  Databases: [
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 82 },
    { name: "MySQL", icon: "devicon-mysql-plain colored", level: 75 },
  ],
  "Cloud & Tools": [
    { name: "GCP", icon: "devicon-googlecloud-plain colored", level: 70 },
    { name: "Git", icon: "devicon-git-plain colored", level: 88 },
    { name: "GitHub", icon: "devicon-github-original", level: 88 },
    { name: "VS Code", icon: "devicon-vscode-plain colored", level: 92 },
  ],
};

export const certifications = [
  {
    title: "Google Cloud Skills Boost",
    issuer: "Google Cloud",
    year: "2024",
    achievements: [
      "Monitoring in Google Cloud",
      "App Engine: 3 Ways",
      "Build a Website on Google Cloud",
      "Google Cloud Diwali in the Arcade",
      "The Arcade Trivia November 2024 Week 1",
    ],
    icon: "☁️",
    color: "#4285F4",
  },
  {
    title: "Smart India Hackathon (SIH)",
    issuer: "Government of India",
    year: "2024",
    achievements: [
      "Selected as SIH participant",
      "Solved real-world government problem statements",
      "Demonstrated agile development & rapid prototyping",
    ],
    icon: "🏆",
    color: "#FF9500",
  },
];

export const interests = [
  "Software Engineering",
  "Full-Stack Web Development",
  "Cloud Computing (GCP)",
  "Machine Learning",
  "Data Structures & Algorithms",
  "System Design",
  "OOP",
  "Agile Methodologies",
  "Open Source",
  "API Development",
];
