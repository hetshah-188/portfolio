// =============================================
// Resume Data — Het Shah Portfolio
// =============================================

export const personalInfo = {
  name: "Het Shah",
  title: "Cloud-Focused Full-Stack Developer",
  summary: "Cloud-focused full-stack developer with hands-on experience across AWS, GCP, and Azure, and three end-to-end MERN/Node.js applications. AWS Certified Cloud Practitioner seeking a Cloud/Full-Stack Engineering internship or entry-level role.",
  roles: ["Cloud-Focused Full-Stack Developer", "AWS Certified Cloud Practitioner", "Azure Cloud Intern"],
  email: "hetshah.genai@gmail.com",
  phone: "+91 7984291743",
  location: "Ahmedabad, India",
  github: "https://github.com/hetshah-188",
  linkedin: "https://www.linkedin.com/in/hetshah188",
  bio: "👋 Hey, I'm Het — a Cloud-focused full-stack developer with hands-on experience across AWS, GCP, and Azure, and three end-to-end MERN/Node.js applications.\n\nAWS Certified Cloud Practitioner with practical experience in EC2/IAM/S3, Google Cloud Arcade badges, and a 15-day Azure Cloud Internship at CloudThat Technologies.\n\nCurrently seeking a Cloud / Full-Stack Engineering internship or entry-level role. Let's talk.",
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

export const experience = [
  {
    id: 1,
    role: "Azure Cloud Intern",
    company: "CloudThat Technologies Private Limited",
    location: "Ahmedabad, India",
    period: "July 2026 (15 Days)",
    description: "Gained practical experience with Microsoft Azure across 15 hands-on labs and completed 6 hands-on assignments involving cloud infrastructure, deployment, and Azure resource management.",
    achievements: [
      "Gained practical experience with Microsoft Azure across 15 hands-on labs, covering cloud computing, resource management, and core Azure services.",
      "Completed 6 hands-on assignments involving cloud infrastructure, deployment, and Azure resource management as part of a 15-day intensive program."
    ],
    skills: ["Microsoft Azure", "Cloud Computing", "Resource Management", "Cloud Infrastructure", "Azure Deployment"],
    icon: "☁️",
    color: "#0078D4",
  }
];

export const projects = [
  {
    id: 1,
    title: "Life4U",
    subtitle: "Blood Bank Management System",
    description:
      "Architected a scalable Blood Bank Management System supporting 4 user roles (donor, patient, hospital staff, admin) with role-based access control and real-time inventory tracking across 5 blood banks/hospitals.",
    longDesc:
      "Designed 5 RESTful API endpoints for real-time booking and cross-platform data sync, handling 25 concurrent users / requests.",
    stack: ["Node.js", "JavaScript", "MongoDB", "React.js", "REST API"],
    features: [
      "Role-based access control (4 roles)",
      "Real-time inventory tracking across 5 blood banks/hospitals",
      "5 RESTful API endpoints for real-time booking",
      "Handles 25 concurrent users / requests",
      "Cross-platform data sync",
    ],
    period: "March 2026 – June 2026",
    color: "#FF3B30",
    gradient: "from-red-500/20 to-rose-600/10",
    icon: "🩸",
    github: "https://github.com/hetshah-188/Life4U",
    live: "https://life4u.me",
    status: "Completed",
  },
  {
    id: 2,
    title: "FarmAssist",
    subtitle: "AI-Powered Farming Solution",
    description:
      "Built an AI-powered web app for automated plant disease detection via computer vision, achieving 95% classification accuracy across 1000 plant diseases, with real-time diagnostics through a smart chatbot.",
    longDesc:
      "Integrated multilingual NLP (supporting 7 languages), live weather/crop-pricing APIs, and NGO geo-mapping to support data-driven farming decisions for 10+ farmers/users.",
    stack: ["Node.js", "Python", "CSS", "Machine Learning"],
    features: [
      "95% classification accuracy across 1000 plant diseases",
      "Automated plant disease detection via Computer Vision",
      "Multilingual NLP chatbot supporting 7 languages",
      "Live weather & crop-pricing APIs",
      "NGO geo-mapping for 10+ farmers/users",
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
      "Developed a full-stack legal services platform connecting users with 8+ lawyers via an intelligent matching algorithm, cutting manual search time by an estimated 70%.",
    longDesc:
      "Added secure communication, appointment scheduling, and payment integration, plus a responsive admin dashboard surfacing 6 key analytics metrics.",
    stack: ["JavaScript", "CSS", "Node.js", "MongoDB", "REST API"],
    features: [
      "Connects users with 8+ lawyers",
      "Intelligent matching algorithm cutting search time by 70%",
      "Secure communication & appointment scheduling",
      "Payment integration",
      "Responsive admin dashboard with 6 key analytics metrics",
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
    { name: "React.js", icon: "devicon-react-original colored", level: 60 },
    { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 55 },
    { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
    { name: "CSS3", icon: "devicon-css3-plain colored", level: 80 },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: 75 },
  ],
  Backend: [
    { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 50 },
    { name: "Express.js", icon: "devicon-express-original", level: 48 },
    { name: "FastAPI", icon: "devicon-fastapi-plain colored", level: 55 },
    { name: "Python", icon: "devicon-python-plain colored", level: 75 },
    { name: "REST API Design", icon: "devicon-fastapi-plain colored", level: 80 },
  ],
  Databases: [
    { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 82 },
    { name: "MySQL", icon: "devicon-mysql-plain colored", level: 75 },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", level: 75 },
  ],
  "Cloud & DevOps": [
    { name: "AWS (EC2, IAM, S3)", icon: "devicon-amazonwebservices-original colored", level: 88 },
    { name: "GCP (App Engine, Monitoring)", icon: "devicon-googlecloud-plain colored", level: 75 },
    { name: "Microsoft Azure", icon: "devicon-azure-plain colored", level: 75 },
    { name: "Git & GitHub", icon: "devicon-git-plain colored", level: 88 },
    { name: "CI/CD Pipelines", icon: "devicon-github-original", level: 75 },
  ],
};

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    year: "2026",
    achievements: [
      "Validated foundational knowledge of AWS Cloud concepts, core services (EC2, IAM, S3), security, architecture, pricing, and support.",
      "Completed AWS Cloud Quest: Cloud Practitioner – hands-on, gamified labs covering EC2, IAM, and S3."
    ],
    icon: "☁️",
    color: "#FF9900",
  },
  {
    title: "Google Cloud Skills Boost – Multiple Completions",
    issuer: "Google Cloud",
    year: "2024",
    achievements: [
      "Completed Monitoring in Google Cloud, App Engine: 3 Ways, Build a Website on Google Cloud, and Google Cloud Arcade badges."
    ],
    icon: "☁️",
    color: "#4285F4",
  },
  {
    title: "Smart India Hackathon (SIH) Participant",
    issuer: "Government of India National Hackathon",
    year: "2024",
    achievements: [
      "Solved real-world government problem statements under tight deadlines, demonstrating collaborative problem-solving."
    ],
    icon: "🏆",
    color: "#FF9500",
  },
];

export const interests = [
  "Cloud Computing (AWS, GCP, Azure)",
  "DevOps & CI/CD Pipelines",
  "Cloud Security & Infrastructure",
  "Full-Stack Web Development (MERN / REST API)",
  "Machine Learning & Computer Vision",
  "System Design & Computer Networks",
];

