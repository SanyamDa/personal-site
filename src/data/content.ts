export const profile = {
  name: 'Sanyam Jain',
  subline: 'Thai-Indian, chasing big dreams at Purdue.',
  email: 'sanyambkk@gmail.com',
  github: 'https://github.com/SanyamDa',
  linkedin: 'https://www.linkedin.com/in/sanyam-jain-140830320/',
  resume: '/resume.pdf',
};

export const now = {
  items: [
    'Interning at Psycray',
    'Developing an AI trading bot',
    'Building the next college party platform',
  ],
};

export const about = [
  'Thai-Indian, born and raised in Bangkok, Thailand.',
  'High school at St. Andrews International School Bangkok.',
  'Played club soccer in Thailand for several years.',
  'Played for a Thai cricket team.',
  'Drummer.',
  'Sporty and outdoorsy, happiest outside or on a field.',
  'A nature person at heart.',
];

export type Project = {
  name: string;
  tag: string;
  period: string;
  bullets: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: 'AI Automation Practice',
    tag: 'Founder · Freelance',
    period: 'May 2024 – May 2025',
    bullets: [
      'Founded and ran a freelance AI automation practice for Bangkok restaurants, bars, and hotels.',
      'Owned the full cycle: client scoping, pricing, deployment, and support.',
      'Built a stateful WhatsApp/LINE reservation bot with Airtable-backed memory.',
      'Deployed Retell AI voice agents to handle inbound reservation calls.',
      'Built a GPT-4o-mini lead-scoring pipeline; generated over ฿60,000 in revenue solo.',
    ],
    stack: ['n8n', 'Airtable', 'Retell AI', 'Make.com', 'GPT-4o-mini', 'WhatsApp Business API', 'LINE Messaging API'],
  },
  {
    name: 'Misty Social Robot',
    tag: 'Conversational AI Layer',
    period: 'Aug – Dec 2025',
    bullets: [
      'School’s Misty social robot was limited to a fixed phrase bank.',
      'Re-engineered it with a custom LLM layer for open-ended spoken conversation.',
      'Bridged hardware, speech I/O, and model APIs into one real-time loop.',
      'Handled turn-taking and latency on constrained onboard hardware.',
      'Took the robot from a dozen fixed phrases to sustained conversation.',
    ],
    stack: ['Python', 'LLM APIs', 'Whisper', 'Speech I/O'],
  },
  {
    name: 'Personal Budgeting App',
    tag: 'In progress',
    period: 'Jul 2025 – Present',
    bullets: [
      'Replaced a manually maintained spreadsheet tracking THB and USD spending.',
      'Built and deployed a live web app with React and Firebase.',
      'Added a receipt scanner that extracts transaction details from a photo.',
      'Logs transactions automatically with no manual entry.',
      'Currently building direct bank integration to import debit card activity.',
    ],
    stack: ['React', 'JavaScript', 'Firebase'],
    links: [{ label: 'GitHub', href: 'https://github.com/SanyamDa' }],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: 'Intern',
    org: 'Psycray',
    period: '2026 – Present',
    location: '',
    bullets: [],
    current: true,
  },
  {
    role: 'AI Automation Consultant',
    org: 'Self-Employed',
    period: 'May 2024 – May 2025',
    location: 'Bangkok, Thailand',
    bullets: [
      'Founded and ran a freelance practice building conversational AI systems for restaurants, bars, and hotels.',
      'Built the reservation bots, voice agents, and lead-scoring pipeline detailed under Projects.',
    ],
  },
  {
    role: 'Product Design & Developer',
    org: 'IBM High School Internship',
    period: 'Aug 2024',
    location: 'Bangkok, Thailand',
    bullets: [
      'Designed and built Yapp, a public speaking practice app that scores delivery against criteria like intonation and diction using a trained LLM.',
      'Won Best App of the internship, selected from 9 teams of high school students across Bangkok.',
    ],
  },
];

export const achievements = [
  {
    stat: '22/23 VEX V5 National Champion',
    detail: 'Represented Thailand at the VEX Robotics World Championship, then moved into coaching newer teams.',
  },
  {
    stat: 'CERN Beamline for Schools',
    detail: 'Selected worldwide to design and run an original particle-accelerator experiment.',
  },
  {
    stat: '20+ Member Hacking Community, Founder',
    detail: 'Grew MakerSpace from scratch and ran Bangkok’s first free teen hackathon, hosted by IBM.',
  },
  {
    stat: '200-Person MUN Conference, Director',
    detail: 'Directed STAMUN XI, coordinating committee structure and logistics across 5 committees.',
  },
];

export const education = [
  {
    school: 'Purdue University',
    detail: 'B.S. Computer Science',
    period: '2026 – 2030',
    location: 'West Lafayette, IN',
  },
];

export const skills = [
  'Python', 'Java', 'SQL',
  'OpenAI API', 'Claude API', 'Whisper', 'RAG', 'ChromaDB',
  'n8n', 'Make.com', 'Airtable', 'Retell AI', 'REST APIs',
  'React', 'Firebase', 'GitHub', 'Arduino', 'CAD Design',
];
