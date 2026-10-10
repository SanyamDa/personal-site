// All the words on the site live here. Edit this file to fill in your content.
// Anything left empty shows a quiet "coming soon" slot on the page.

export const profile = {
  name: 'Sanyam Jain',
  first: 'Sanyam',
  last: 'Jain',
  subline: 'Entrepreneurship × Software',
  email: 'sanyambkk@gmail.com',
  github: 'https://github.com/SanyamDa',
  linkedin: 'https://www.linkedin.com/in/sanyam-jain-140830320/',
  resume: '/resume.pdf',
  photo: '/photo.jpg',
};

// Social links next to your name. Paste your profile URLs in.
// Any left as '' still show up, but link nowhere until you fill them in.
export const socials = {
  linkedin: 'https://www.linkedin.com/in/sanyam-jain-140830320/',
  x: '',
  youtube: '',
  instagram: '',
};

// The players on the homepage pitch. 'me' is you, the striker; tapping you opens your résumé.
export const squad = [
  { key: 'problems', label: 'Problems', number: 1, position: 'Goalkeeper', line: 'The problems I want to stop.', href: '/problems' },
  { key: 'people', label: 'People', number: 6, position: 'Holding mid', line: 'The people who have my back.', href: '/people' },
  { key: 'passions', label: 'Passions', number: 7, position: 'Winger', line: 'What drives everything I do.', href: '/passions' },
  { key: 'projects', label: 'Projects', number: 10, position: 'Playmaker', line: 'Everything I have built.', href: '/projects' },
  { key: 'me', label: 'Sanyam', number: 24, position: 'Striker', line: "That's me. Tap for my résumé.", href: '/resume.pdf' },
] as const;

// ---------- Projects ----------

export type Media =
  | { type: 'youtube'; id: string; caption?: string }   // id from youtube.com/watch?v=THIS_PART
  | { type: 'image'; src: string; alt: string; caption?: string } // put images in /public/projects/
  | { type: 'video'; src: string; caption?: string };  // an .mp4 in /public/projects/

export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  period: string;
  status: 'Full time' | 'In play';      // Full time = finished, In play = still building
  tags: string[];
  goal: string;                          // 15 to 20 words
  media: Media[];
  learnings: { title: string; body: string }[];   // your top 3
  mentalNote: string;
  grateful: string[];                    // names of people who helped
  improvements?: { title: string; body: string }[]; // leave out entirely to hide the section
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'misty',
    name: 'Misty',
    subtitle: 'Giving a social robot a real voice',
    period: 'Aug to Dec 2025',
    status: 'Full time',
    tags: ['Python', 'LLM APIs', 'Whisper', 'Speech I/O', 'Robotics'],
    goal: "Turn our school's Misty robot from a dozen canned phrases into something you could actually have a real conversation with.",
    media: [
      // Example: { type: 'youtube', id: 'abc123XYZ', caption: 'First full conversation' },
      // Example: { type: 'image', src: '/projects/misty-1.jpg', alt: 'Misty on the desk', caption: 'Day one' },
    ],
    learnings: [
      // { title: 'Short punchy title', body: 'Two or three sentences on what you learned and what you would tell someone starting out.' },
    ],
    mentalNote: '',
    grateful: [
      // 'Name One', 'Name Two',
    ],
    // No improvements section for Misty, since the project is wrapped up.
  },
];

// ---------- People ----------

export type Person = { name: string; role: string; note: string; link?: string };

export const people: Person[] = [
  // { name: 'Full Name', role: 'Mentor, Psycray', note: 'One line on how they helped you.', link: 'https://linkedin.com/in/...' },
];

// ---------- Problems ----------

export type Problem = { title: string; why: string; status: 'Scouting' | 'Training' | 'On the pitch' };

export const problems: Problem[] = [
  // { title: 'The problem in a few words', why: 'Why it matters to you.', status: 'Scouting' },
];

// ---------- Passions ----------

export type Passion = { title: string; place: string; body: string; sport: 'football' | 'cricket' | 'drums' | 'outdoors' };

export const passions: Passion[] = [
  { title: 'Club football', place: 'Bangkok, Thailand', body: 'Played club soccer in Thailand for several years.', sport: 'football' },
  { title: 'Cricket', place: 'Thailand', body: 'Played for a Thai cricket team.', sport: 'cricket' },
  { title: 'Drums', place: 'Anywhere with a kit', body: 'Drummer.', sport: 'drums' },
  { title: 'Outdoors', place: 'Happiest on a field', body: 'Sporty and outdoorsy, a nature person at heart.', sport: 'outdoors' },
];
