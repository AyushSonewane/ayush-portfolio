export interface ProjectLinks {
  website?: string;
  microsoftStore?: string;
  github?: string;
  demo?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  oneLiner: string;
  tagline: string;
  badge?: string;
  storeBadge?: string;
  featured: boolean;
  stack: string[];
  highlights: string[];
  stats?: {
    speed?: string;
    privacy?: string;
    fileLimit?: string;
    latency?: string;
  };
  links: ProjectLinks;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  details: string;
}

export interface SkillCategory {
  name: string;
  skills: { name: string; isPrimary?: boolean }[];
}

export const portfolioContent = {
  personal: {
    name: "Ayush Sonewane",
    roles: ["Flutter Developer", "Full-Stack Builder", "MCA Student"],
    tagline: "I build fast, real-time apps that work across devices.",
    bio: "MCA student at G H Raisoni College of Engineering and Management, Nagpur (CGPA 9.14) and BCCA graduate (CGPA 8.16). Passionate about cross-platform architecture, socket networking, and creative problem solving.",
    location: "Nagpur, India",
    email: "sonewaneayush8320@gmail.com",
    phone: "+91 93255 96488",
    resumeUrl: "/resume.pdf", // PLACEHOLDER: User to supply resume PDF
    avatarPlaceholder: "/avatar-placeholder.png", // PLACEHOLDER: User to supply photo
  },

  stats: [
    { value: 9.14, label: "MCA CGPA", suffix: "" },
    { value: 2, label: "Major Products", suffix: "" },
    { value: 8, label: "Programming Languages", suffix: "+" },
    { value: 3, label: "Spoken Languages", suffix: "" },
  ],

  projects: [
    {
      id: "localshare",
      title: "LocalShare",
      oneLiner: "Fast offline LAN file sharing for Android & Windows. Zero cloud, zero accounts, pure local speed.",
      tagline: "Cross-Platform LAN File Sharing Mesh",
      badge: "LIVE",
      storeBadge: "Available on Microsoft Store",
      featured: true,
      stack: ["Flutter", "Dart", "TCP Sockets", "UDP Broadcast", "LAN Mesh"],
      highlights: [
        "Direct TCP socket transfers saturating local Wi-Fi at 100+ MB/s",
        "Automatic device discovery across Android & Windows with zero manual IP config",
        "Native Windows drag-and-drop file staging & background daemon",
        "Zero-cache stream processing engineered for multi-gigabyte transfers",
        "100% private: no data touches the internet or cloud servers"
      ],
      stats: {
        speed: "78.4 MB/s ⚡",
        privacy: "100% Offline & Private",
        fileLimit: "∞ File Size Limit",
        latency: "0 ms Cloud Latency"
      },
      links: {
        website: "https://www.localshare.co.in/",
        // TODO: Supply official Microsoft Store URL when ready
        microsoftStore: "TODO_MICROSOFT_STORE_URL",
        // Render only if non-empty / valid repository exists
        github: "",
      }
    },
    {
      id: "higherup",
      title: "HigherUp",
      oneLiner: "Startup networking & career ecosystem connecting Investors, Entrepreneurs, and Job Seekers.",
      tagline: "Startup Networking & Job Portal",
      featured: false,
      stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      highlights: [
        "Tri-role authentication and profile governance for Investors, Startups, and Candidates",
        "Dynamic venture pitch showcase and direct investor message conduits",
        "Full CRUD pipeline for active job postings, resume drops, and applicant tracking",
        "Structured MySQL database schema optimized for real-time querying",
        "Lightweight, zero-bloat responsive front-end design"
      ],
      links: {
        // TODO: Supply HigherUp repo when ready. Currently empty to show disabled 'Repo coming soon' state.
        github: "",
      }
    }
  ] as ProjectItem[],

  skillsGrid: [
    {
      name: "Languages",
      skills: [
        { name: "Dart", isPrimary: true },
        { name: "JavaScript", isPrimary: true },
        { name: "Java" },
        { name: "Python" },
        { name: "C" },
        { name: "C++" },
        { name: "C#" },
        { name: "PHP" },
      ]
    },
    {
      name: "Frameworks & UI",
      skills: [
        { name: "Flutter", isPrimary: true },
        { name: "React", isPrimary: true },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", isPrimary: true },
        { name: "Firebase" },
      ]
    },
    {
      name: "Developer Tools",
      skills: [
        { name: "Android Studio", isPrimary: true },
        { name: "Git & GitHub", isPrimary: true },
        { name: "VS Code" },
      ]
    }
  ] as SkillCategory[],

  marqueeTech: [
    "Flutter", "Dart", "React", "TypeScript", "JavaScript", "TCP/IP Sockets",
    "Java", "Python", "MySQL", "Firebase", "PHP", "C++", "C#", "Git", "Android Studio"
  ],

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/AyushSonewane",
      handle: "@AyushSonewane",
      color: "#7C5CFF",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ayush-sonewane",
      handle: "in/ayush-sonewane",
      color: "#22D3EE",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/Ayush_Sonewane/",
      handle: "u/Ayush_Sonewane",
      color: "#C6FF3D",
    }
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "G H Raisoni College of Engineering and Management, Nagpur",
      period: "2025 — 2027",
      cgpa: "9.14 CGPA",
      details: "Focusing on advanced cross-platform architectures, network communications, and software engineering practices."
    },
    {
      degree: "Bachelor of Computer Commerce & Application (BCCA)",
      institution: "J. M. Patel College, Bhandara (RTMNU)",
      period: "2022 — 2025",
      cgpa: "8.16 CGPA",
      details: "Core foundation in algorithms, systems design, database management systems, and commercial software development."
    }
  ] as EducationItem[],

  softSkills: [
    "Problem Solving",
    "Team Collaboration",
    "Leadership",
    "Adaptability",
    "Quick Learning"
  ],

  spokenLanguages: [
    { language: "English", proficiency: "Fluent" },
    { language: "Hindi", proficiency: "Native" },
    { language: "Marathi", proficiency: "Native" }
  ]
};
