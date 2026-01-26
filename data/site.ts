export type Project = {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  highlights?: string[];
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type Social = {
  name: string;
  url: string;
  icon: string;
};

export const siteConfig = {
  name: "Amresh Balakrishnan",
  title: "Software Engineer | AI/ML | Systems & Data",
  location: "Hoboken, NJ",
  email: "amreshbalakrishnan@gmail.com",
  tagline: "Building reliable systems and intelligent products.",
  heroSubheadline: "I’m a computer engineering student and software engineer focused on data-driven systems, AI tooling, and clean, scalable infrastructure.",
  about: "I’m a Computer Engineering student at Stevens Institute of Technology with experience building data pipelines, cloud-based systems, and AI-driven applications. I enjoy working close to data, performance constraints, and real-world use cases, and I’m especially interested in applied ML, systems engineering, and infrastructure.",
  interests: [
    "Distributed systems",
    "Data infrastructure",
    "Applied machine learning",
    "Full-stack product engineering",
  ],
  leadership: [
    "Founder & Mentor, Stevens Venture Capitalist Fund",
    "NCAA Division III Varsity Baseball Player, Leadership Council",
    "Pledge Class President Alpha Kappa Psi",
  ],
  hobbies: [
    { 
      name: "Baseball", 
      icon: "baseball",
      images: [
        { src: "/hobbies/baseball/IMG_9615.jpg", alt: "Tournaments" },
        { src: "/hobbies/baseball/baseball_2.png", alt: "College Team" },
        { src: "/hobbies/baseball/baseball_3.png", alt: "Player of the Game" },
      ]
    },
    { 
      name: "Fishing", 
      icon: "fish",
      images: [
        { src: "/hobbies/fishing/IMG_9610.jpg", alt: "Freshwater Bass" },
        { src: "/hobbies/fishing/IMG_9611.jpg", alt: "Sea Flounder" },
        { src: "/hobbies/fishing/IMG_9614.jpg", alt: "More Bass!!!" },
      ]
    },
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Amresh-Bala29", icon: "github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/amreshbalakrishnan/", icon: "linkedin" },
    { name: "Resume", url: "/resume.pdf", icon: "file-text" },
  ],
  projects: [
    {
      title: "Agentic Infrastructure Development Advisor",
      description: "An agent-based AI platform that analyzes infrastructure opportunities and computes ROI from public datasets.",
      tags: ["React", "TypeScript", "Node.js", "IBM watsonX", "REST APIs"],
      highlights: [
        "Built a six-agent AI pipeline for document parsing, opportunity detection, and ranking.",
        "Delivered end-to-end analysis with automated reporting and geospatial visualization.",
      ],
      liveUrl: undefined,
      githubUrl: "https://github.com/Amresh-Bala29",
    },
    {
      title: "Smart IoT Watering System",
      description: "A sensor-driven IoT system for automated plant watering and environmental monitoring.",
      tags: ["ESP32", "C++", "MQTT", "SolidWorks", "Excel"],
      highlights: [
        "Collected and published real-time environmental data to a cloud dashboard.",
        "Designed and 3D-modeled a compact hardware enclosure.",
        "Validated system performance using multi-day moisture trend analysis.",
      ],
      liveUrl: undefined,
      githubUrl: "https://github.com/Amresh-Bala29",
    },
  ],
  experience: [
    {
      company: "The Wharton School",
      role: "Symbal Growth Intern & Researcher",
      dates: "Jan 2026 – Present",
      bullets: [
        "Applied machine learning using PyTorch, TensorFlow, and LangChain to optimize talent acquisition, forecast employee attrition risk, and build a data flywheel.",
        "Designed and implemented a Python-based automation pipeline leveraging REST APIs and workflow orchestration tools to automate outreach to senior industry leaders.",
        "Collaborated with industry partners including CHROs at Oracle, NYC government, Penn Medicine, and Liberty Mutual to inform strategic HR decision-making.",
      ],
    },
    {
      company: "NovaFlow (YC S25)",
      role: "Software Engineering Intern",
      dates: "June 2025 – August 2025",
      bullets: [
        "Built Python data pipelines using Pandas, NumPy, and Dask to ingest and normalize large biological datasets.",
        "Designed and deployed a PostgreSQL star-schema database, improving query performance by ~60%.",
        "Supported scalable analytics for a natural-language based platform.",
      ],
    },
    {
      company: "The Valley Hospital",
      role: "Database Intern",
      dates: "February 2024 – June 2024",
      bullets: [
        "Developed Python and SQL workflows to consolidate patient survey data across systems.",
        "Cleaned legacy datasets to improve reporting accuracy.",
        "Supported AWS migration and integrated Spring Boot REST APIs for internal dashboards.",
      ],
    },
  ],
};
