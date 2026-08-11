// =============================================
// Resume Data — Het Shah Portfolio
// =============================================

export const personalInfo = {
  name: "Het Shah",
  title: "Aspiring Cloud Engineer & Full Stack Developer",
  roles: ["Aspiring Cloud Engineer | Full Stack Developer", "AWS Certified Cloud Practitioner", "Azure Cloud Intern"],
  email: "hetshah.genai@gmail.com",
  phone: "+91 7984291743",
  location: "Ahmedabad, India",
  github: "https://github.com/hetshah-188",
  linkedin: "https://www.linkedin.com/in/hetshah188",
  bio: "👋 Hey, I'm Het — a Computer Engineering student who fell down the cloud computing rabbit hole and never climbed back out.\n\nI build things, then get curious about how they'd actually run at scale. That curiosity turned into an AWS Certified Cloud Practitioner badge, hands-on time with EC2/IAM/S3, and a couple of Google Cloud certs for good measure.\n\nCompleted an Azure Cloud internship powered by CloudThat under the Microsoft Program, gaining hands-on expertise in Microsoft Azure services, cloud infrastructure, and resource management.\n\nRight now: chasing my next AWS & Azure certs, and open to Cloud/DevOps internships. Let's talk.",
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
    company: "CloudThat (Microsoft Program)",
    location: "Ahmedabad, India",
    period: "July 2026 – July 2026 (15 Days)",
    description: "Successfully completed skill-based cloud engineering training under the Microsoft Program powered by CloudThat, gaining hands-on expertise in Microsoft Azure services, cloud infrastructure deployment, and Azure Resource Management.",
    achievements: [
      "Completed hands-on skill-based Cloud Engineering training under the Microsoft Program delivered by CloudThat.",
      "Gained practical experience with core Microsoft Azure services, cloud infrastructure deployment, and Azure Resource Management.",
      "Learned foundational Azure architectural principles, cloud resource provisioning, and cloud management best practices."
    ],
    skills: ["Microsoft Azure", "Cloud Computing", "Azure Resource Management", "Cloud Infrastructure", "Azure Services"],
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
      "Architected a scalable Blood Bank Management System for four roles (donor, patient, hospital staff, admin) with role-based access, reducing wastage via real-time inventory tracking.",
    longDesc:
      "Designed RESTful APIs for real-time booking and cross-platform data sync between donors, hospitals, and administrators.",
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
    live: "https://life4u.me",
    status: "Completed",
  },
  {
    id: 2,
    title: "FarmAssist",
    subtitle: "AI-Powered Farming Solution",
    description:
      "Built an AI-powered web app for automated plant disease detection via computer vision, with real-time diagnostics through a smart chatbot.",
    longDesc:
      "Integrated multilingual NLP, live weather/crop pricing APIs, and NGO geo-mapping for data-driven farming decisions.",
    stack: ["Node.js", "Python", "CSS", "Machine Learning"],
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
      "Developed a full-stack legal services platform enabling users to search and connect with lawyers via an intelligent matching algorithm.",
    longDesc:
      "Added secure communication, appointment scheduling, payment integration, and a responsive admin dashboard with analytics.",
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
    issuer: "Amazon Web Services",
    year: "2026",
    achievements: [
      "Validated foundational knowledge of AWS Cloud concepts, core services (EC2, IAM, S3), security, architecture, pricing, and support."
    ],
    icon: "☁️",
    color: "#FF9900",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Training Badge – Amazon Web Services",
    year: "2026",
    achievements: [
      "Completed hands-on, gamified labs covering core AWS services including EC2, IAM, and S3."
    ],
    icon: "☁️",
    color: "#FF9900",
  },
  {
    title: "Google Cloud Skills Boost — Multiple Completions",
    issuer: "Google Cloud",
    year: "2024",
    achievements: [
      "Completed Monitoring in Google Cloud, App Engine: 3 Ways, Build a Website on Google Cloud, and Google Cloud Arcade badges — demonstrating hands-on GCP proficiency."
    ],
    icon: "☁️",
    color: "#4285F4",
  },
  {
    title: "Smart India Hackathon (SIH) Participant",
    issuer: "Government of India National Hackathon",
    year: "2024",
    achievements: [
      "Solved real-world government problem statements under tight deadlines, demonstrating collaborative problem-solving and rapid prototyping."
    ],
    icon: "🏆",
    color: "#FF9500",
  },
];

export const interests = [
  "Cloud Computing (AWS & GCP)",
  "DevOps & CI/CD",
  "Cloud Security",
  "Full-Stack Web Development",
  "Machine Learning",
  "System Design",
  "API Development & Integration",
];
