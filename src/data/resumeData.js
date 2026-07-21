// =============================================
// Resume Data — Het Shah Portfolio
// =============================================

export const personalInfo = {
  name: "Het Shah",
  title: "Aspiring Cloud Engineer & Full Stack Developer",
  roles: ["Aspiring Cloud Engineer | Full Stack Developer", "AWS Certified Cloud Practitioner", "Data Analytics & ML Intern"],
  email: "shahhets188@gmail.com",
  phone: "+91 7984291743",
  location: "Ahmedabad, India",
  github: "https://github.com/hetshah-188",
  linkedin: "https://www.linkedin.com/in/hetshah188",
  bio: "👋 Hey, I'm Het — a Computer Engineering student who fell down the cloud computing rabbit hole and never climbed back out.\n\nI build things, then get curious about how they'd actually run at scale. That curiosity turned into an AWS Certified Cloud Practitioner badge, hands-on time with EC2/IAM/S3, and a couple of Google Cloud certs for good measure.\n\nCurrently interning in Data Analytics & ML at InfoLabz, learning how data and cloud actually meet in production.\n\nRight now: chasing my next AWS cert, and open to Cloud/DevOps internships. Let's talk.",
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Gujarat Technological University (GTU)",
    period: "August 2024 – May 2027",
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

export const experience = [
  {
    id: 1,
    role: "Data Analytics and Machine Learning Intern",
    company: "InfoLabz IT Services",
    location: "Ahmedabad, India",
    period: "July 2026 – Present",
    description: "Working at the intersection of data infrastructure and cloud systems, developing core skills in data handling, machine learning, and visualization.",
    achievements: [
      "Worked with API data, applying pandas for comprehensive data analysis and manipulation.",
      "Created impactful visualizations using matplotlib and Power BI to communicate analytical insights.",
      "Implemented basic regression models to solidify understanding of machine learning principles."
    ],
    skills: ["Python", "Pandas", "matplotlib", "Microsoft Power BI", "Machine Learning"],
    icon: "📊",
    color: "#0066CC",
  }
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
    period: "March 2026 – June 2026",
    color: "#FF3B30",
    gradient: "from-red-500/20 to-rose-600/10",
    icon: "🩸",
    github: "https://github.com/hetshah-188/Life4U",
    status: "Completed",
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
  Frontend: [
    { name: "React.js", icon: "devicon-react-original colored", level: 58 },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 50 },
    { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
    { name: "CSS3", icon: "devicon-css3-plain colored", level: 80 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: 70 },
  ],
  Backend: [
    { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 45 },
    { name: "Express.js", icon: "devicon-express-original", level: 42 },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored", level: 55 },
    { name: "Python", icon: "devicon-python-plain colored", level: 72 },
    { name: "Java", icon: "devicon-java-plain colored", level: 60 },
  ],
  Databases: [
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 82 },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 75 },
  ],
  "Cloud & DevOps": [
    { name: "AWS (EC2, IAM, S3)", icon: "devicon-amazonwebservices-original colored", level: 85 },
    { name: "GCP", icon: "devicon-googlecloud-plain colored", level: 70 },
    { name: "Git", icon: "devicon-git-plain colored", level: 88 },
    { name: "GitHub", icon: "devicon-github-original", level: 88 },
    { name: "VS Code", icon: "devicon-vscode-plain colored", level: 92 },
  ],
};

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    achievements: [
      "AWS Fundamentals",
      "Amazon S3",
      "Identity and Access Management (IAM)"
    ],
    icon: "☁️",
    color: "#FF9900",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2026",
    achievements: [
      "Completed AWS Cloud Quest: Cloud Practitioner - Training Badge",
      "Gained hands-on experience in AWS Core services: EC2, IAM, S3, RDS, CloudWatch, etc.",
      "Demonstrated capability in configuring cloud computing infrastructure and secure IAM policies."
    ],
    icon: "☁️",
    color: "#FF9900",
  },
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
      "Solved real-world government problem statements under tight deadlines",
      "Demonstrated agile development & rapid prototyping",
    ],
    icon: "🏆",
    color: "#FF9500",
  },
];

export const interests = [
  "Cloud Computing (AWS & Google Cloud Platform)",
  "Cloud Infrastructure & Deployment (EC2, IAM, S3)",
  "DevOps",
  "Data Analytics & Machine Learning",
  "Full-Stack Web Development (MERN/PostgreSQL)",
  "AI/ML Applications",
];
