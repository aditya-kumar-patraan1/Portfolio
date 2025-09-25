// data for Vikas Gulia's Portfolio
export const portfolioData = {
  personal: {
    name: "Aditya Kumar",
    title: "Full Stack Developer & DSA Enthusiastic",
    tagline: "Transforming logic into clarity and code into creativity.",
    email: "adityakrp2006@gmail.com",
    phone: "+91 7982489836",
    location: "Delhi, India",
    github: "https://github.com/aditya-kumar-patraan1/",
    linkedin: "https://www.linkedin.com/in/aditya-kumar--/",
    instagram: "https://www.instagram.com/adityakr_rajput",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
  },

  about: {
    description: "I'm a passionate about DSA and Web Developer with expertise in turning complex data into actionable insights and building seamless digital experiences. Currently pursuing B.C.A. and constantly exploring the intersection of Data Structure and web technologies. Recognized as a University Topper 🏆 and ranked in the Top 3% globally on LeetCode, where I have reached Knight level with a 1900+ rating.",
    highlights: [
      "2+ years of experience in DSA and web development",
      "Built 2 production-ready applications",
      "Expertise in Backend deployment and web integration",
      "Strong background in Front-end development"
    ],
    stats: [
      { label: "Projects Completed", value: "20+" },
      { label: "Technologies Knows", value: "10+" },
      { label: "Lines of Code", value: "50K+" },
      { label: "Coffee Cups", value: "∞" }
    ]
  },

  projects: [
    {
    id: 7,
    title: "CodeDoodle",
    description:
      "Built a robust data pipeline with automated weekly updates to analyze Amazon laptop prices, featuring an interactive dashboard with advanced filters and highlights for seamless price comparisons and brand insights.",
    tech: ["React", "MongoDB", "Sockets","Gemini Api", "Node.js","WebRTC","Express.js"],
    image: "./codedoodle.png",
    github: "https://github.com/aditya-kumar-patraan1/Code-Doodle-Editor",
    live: "https://code-doodle-editor.vercel.app/",
    category: "Full Stack",
    featured: true
  },
  {
    
    id: 1,
    title: "ElvaTree",
    description:
      "Developed a responsive AI assistant platform featuring an intuitive and conversational interface. Offers intelligent responses using Gemini API while ensuring seamless UX across devices.",
    tech: ["React", "Javascript", "Tailwind CSS"],
    image: "./elvatree.png",
    github: "https://github.com/aditya-kumar-patraan1/ElvaTree-Task",
    live: "https://evaltree-dashboard.vercel.app/",
    category: "Full Stack",
    featured: true
  },
  
  {
    id: 3,
    title: "IntelliCare",
    description:
      "Designed an ML model to predict student performance based on input factors. Deployed with Streamlit for user-friendly interaction and visualization.",
    tech: ["React", "MongoDB", "Sockets","Gemini Api", "Node.js","WebRTC","Express.js"],
      image: "/intellicare.png",
    github: "https://github.com/aditya-kumar-patraan1/Dr_IntelliCare",
    live: "https://intelli-care.vercel.app/",
    category: "Full Stack",
    featured: true
  },
  
  {
    id: 4,
    title: "Code Reviewer",
    description:
      "A self-growth dashboard to monitor personal progress in areas like skills, health, finances, and mood. Offers time tracking, AI-based suggestions, and dynamic visualizations.",
    tech: ["React", "Tailwind CSS", "Gemini API"],
    image: "/codereviewer.png",
    github: "https://github.com/aditya-kumar-patraan1/CodeReviewer",
    live: "https://codedoodle.onrender.com/",
    category: "Full Stack",
    featured: true
  }
  
  
]
,

  skills :{
  languages: [
    { name: "Python", level: 45, icon: "🐍" },
    { name: "JavaScript", level: 50, icon: "🟨" },
    { name: "C++", level: 96, icon: "⚡" },
    { name: "HTML", level: 90, icon: "🌐" },
    { name: "CSS", level: 90, icon: "🎨" }
  ],
  frameworks: [
    { name: "React", level: 84, icon: "⚛️" },
    { name: "Next.js", level: 20, icon: "▲" },
    { name: "Tailwind CSS", level: 87, icon: "💨" },
  ],
  dataScience: [
    { name: "pandas", level: 50, icon: "🐼" },
    { name: "Numpy", level: 45, icon: "🔢" },
  ],
  tools: [
    { name: "Git/GitHub", level: 95, icon: "🔧" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Vercel", level: 75, icon: "📉" },
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟩" },
    { name: "Express.js", level: 70, icon: "🚂" },
  ],
  databases: [
    { name: "MongoDB", level: 76, icon: "🍃" },
    { name: "SQL", level: 89, icon: "🗄️" },
  ],
  realtime: [
    { name: "Socket.IO", level: 65, icon: "🔌" },
    { name: "WebRTC", level: 60, icon: "📹" },
  ]},

 education : {
  degree: "Bachelor of Computer Applications",
  institution: "MSI Janakpuri",
  year: "2023 - 2026",
  status: "3rd Year (Currently Pursuing)",
  gpa: "9.873/10",
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Javascript",
    "Full Stack Web Development",
    "Software Engineering",
    "Computer Networks",
    "Sockets/WebRTC",
    "C/C++"
  ],
  achievements: [
    "University Topper 🏆",
    "SDC member",
    "AI Prompt Competition (2nd Position)",
    "Top 3% global ranking on LeetCode with Knight level",
    "Leetcode 1200+ Problem solved"
  ],
  certifications: [
    {
      name: "IBM SkillsBuild",
      issuer: "IBM",
      year: "2025",
      description: "Advanced certification covering statistical analysis, data visualization, and predictive modeling"
    },
    {
      name: "Problem Solving in Python",
      issuer: "HackerRank",
      year: "2025",
      description: "Intensive training program covering artificial intelligence algorithms and machine learning techniques"
    },
    {
      name: "SQL for Database",
      issuer: "OneRoadmap",
      year: "2025",
      description: "Comprehensive course covering Python programming for data analysis, pandas, numpy, and data visualization"
    },
    {
      name: "React.js Certification",
      issuer: "OneRoadmap",
      year: "2025",
      description: "Comprehensive course covering Python programming for data analysis, pandas, numpy, and data visualization"
    },
    {
      name: "Javascript Certification",
      issuer: "OneRoadmap",
      year: "2025",
      description: "Comprehensive course covering Python programming for data analysis, pandas, numpy, and data visualization"
    },
    {
      name: "Node.js Certification",
      issuer: "OneRoadmap",
      year: "2025",
      description: "Comprehensive course covering Python programming for data analysis, pandas, numpy, and data visualization"
    }
  ]
},


blogs: [
  {
    id: 1,
    title: "A Beginner's Guide to become Knight(1900+ Rating) on Leetcode",
    excerpt: "Build a solid programming foundation by mastering Python's core data types including integers, strings, and lists.",
    date: "2025-01-11",
    readTime: "6 min read",
    category: "DSA",
    image: "https://images.unsplash.com/photo-1690683789978-3cf73960d650?q=80&w=1809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "https://dev.to/vikas_gulia/exploring-python-data-types-a-beginners-guide-fe2",
    tags: ["Python", "Programming", "Data Types", "Beginners"] 
  }
]

};