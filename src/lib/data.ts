// =============================================================================
// LINCHPIN Learning — Course & Instructor Data
// Hardcoded from SQLite prototype (13 courses, 9 instructors)
// =============================================================================

export type SubBrand = "STORY" | "SOURCE" | "SIGNAL" | null;

export interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorSlug: string;
  price: number; // cents, 0 = free
  category: string;
  modules: number;
  lessons: number;
  signature: boolean;
  subBrand: SubBrand;
  accentColor: string;
  description: string;
}

export interface Instructor {
  name: string;
  slug: string;
  initials: string;
  courseCount: number;
}

// Sub-brand accent colors
export const ACCENT_COLORS: Record<string, string> = {
  "Crisis Communications": "#dc2626",
  "Grant Writing": "#16a34a",
  "Authority Building": "#c2a05b",
  "AI & Innovation": "#2563eb",
  "Community Leadership": "#7c3aed",
  "Civic Leadership": "#0891b2",
  "Coalition Building": "#059669",
  "Community Development": "#d97706",
  "Political Strategy": "#be185d",
  "Strategic Communications": "#6366f1",
  "Legislative Strategy": "#9333ea",
  "Systems Design": "#0d9488",
};

export const CATEGORIES = [
  "All",
  "Crisis Communications",
  "Grant Writing",
  "Authority Building",
  "AI & Innovation",
  "Community Leadership",
  "Civic Leadership",
  "Coalition Building",
  "Community Development",
  "Political Strategy",
  "Strategic Communications",
  "Legislative Strategy",
  "Systems Design",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const courses: Course[] = [
  {
    id: 1,
    title: "CrisisReady 360",
    instructor: "Damon Gardenhire",
    instructorSlug: "damon-gardenhire",
    price: 49700,
    category: "Crisis Communications",
    modules: 5,
    lessons: 15,
    signature: true,
    subBrand: "STORY",
    accentColor: "#dc2626",
    description:
      "The definitive crisis communications framework. Five modules that transform reactive communicators into strategic operators who control the narrative before, during, and after the crisis hits.",
  },
  {
    id: 2,
    title: "GrantPath",
    instructor: "Damon Gardenhire",
    instructorSlug: "damon-gardenhire",
    price: 39700,
    category: "Grant Writing",
    modules: 4,
    lessons: 13,
    signature: true,
    subBrand: "SOURCE",
    accentColor: "#16a34a",
    description:
      "A systematic approach to grant writing that has secured millions in funding. From prospect research to post-award compliance, learn the methodology that turns proposals into funded programs.",
  },
  {
    id: 3,
    title: "Authority Architect",
    instructor: "Damon Gardenhire",
    instructorSlug: "damon-gardenhire",
    price: 59700,
    category: "Authority Building",
    modules: 4,
    lessons: 13,
    signature: true,
    subBrand: "SIGNAL",
    accentColor: "#c2a05b",
    description:
      "Build an unassailable professional reputation. Authority Architect teaches you to engineer visibility, credibility, and influence through strategic content, media placement, and thought leadership.",
  },
  {
    id: 4,
    title: "AI for the Real World",
    instructor: "Damon Gardenhire",
    instructorSlug: "damon-gardenhire",
    price: 29700,
    category: "AI & Innovation",
    modules: 4,
    lessons: 15,
    signature: false,
    subBrand: null,
    accentColor: "#2563eb",
    description:
      "Cut through the hype. This course teaches practical AI integration for communications professionals, government teams, and nonprofit leaders who need results, not theory.",
  },
  {
    id: 5,
    title: "The Connective Leader",
    instructor: "Pastor Phillip Abode",
    instructorSlug: "phillip-abode",
    price: 29700,
    category: "Community Leadership",
    modules: 3,
    lessons: 10,
    signature: false,
    subBrand: null,
    accentColor: "#7c3aed",
    description:
      "Leadership begins with listening. Pastor Abode draws on decades of community organizing to teach the relational infrastructure that turns neighborhoods into movements.",
  },
  {
    id: 6,
    title: "The Mayor's Playbook",
    instructor: "Mick Cornett",
    instructorSlug: "mick-cornett",
    price: 39700,
    category: "Civic Leadership",
    modules: 3,
    lessons: 10,
    signature: false,
    subBrand: null,
    accentColor: "#0891b2",
    description:
      "Four-term Oklahoma City Mayor Mick Cornett reveals the strategies behind one of America's great municipal turnarounds. Coalition building, public narrative, and the art of civic ambition.",
  },
  {
    id: 7,
    title: "Building Schools That Work",
    instructor: "Brent Bushey",
    instructorSlug: "brent-bushey",
    price: 0,
    category: "Coalition Building",
    modules: 3,
    lessons: 9,
    signature: false,
    subBrand: null,
    accentColor: "#059669",
    description:
      "A masterclass in building coalitions that deliver results. Brent Bushey shares the playbook from successful school bond campaigns and community partnerships that reshaped districts.",
  },
  {
    id: 8,
    title: "Visionary Ground Game",
    instructor: "Chris Brewster",
    instructorSlug: "chris-brewster",
    price: 34700,
    category: "Community Development",
    modules: 3,
    lessons: 9,
    signature: false,
    subBrand: null,
    accentColor: "#d97706",
    description:
      "Turn neighborhood vision into neighborhood reality. Chris Brewster teaches the ground-level strategy that transforms underinvested communities through economic development and civic engagement.",
  },
  {
    id: 9,
    title: "AI for the Rest of Us",
    instructor: "Michael Hanegan",
    instructorSlug: "michael-hanegan",
    price: 24700,
    category: "AI & Innovation",
    modules: 3,
    lessons: 9,
    signature: false,
    subBrand: null,
    accentColor: "#2563eb",
    description:
      "Demystifying artificial intelligence for professionals who need to understand it, use it, and lead through it. No coding required. Just clear thinking and practical application.",
  },
  {
    id: 10,
    title: "The Fundraiser's Edge",
    instructor: "Karma Robinson",
    instructorSlug: "karma-robinson",
    price: 34700,
    category: "Political Strategy",
    modules: 3,
    lessons: 9,
    signature: false,
    subBrand: null,
    accentColor: "#be185d",
    description:
      "Karma Robinson reveals the fundraising strategies that power winning campaigns. From donor psychology to event design, learn to build the financial engine behind political movements.",
  },
  {
    id: 11,
    title: "On Camera",
    instructor: "Damon Gardenhire",
    instructorSlug: "damon-gardenhire",
    price: 19700,
    category: "Strategic Communications",
    modules: 3,
    lessons: 13,
    signature: false,
    subBrand: null,
    accentColor: "#6366f1",
    description:
      "Master the on-camera presence that commands attention. From media interviews to video content, learn the techniques that separate forgettable talking heads from magnetic communicators.",
  },
  {
    id: 12,
    title: "Anatomy of Reform",
    instructor: "Sen. Ally Seifried",
    instructorSlug: "ally-seifried",
    price: 34700,
    category: "Legislative Strategy",
    modules: 4,
    lessons: 17,
    signature: false,
    subBrand: null,
    accentColor: "#9333ea",
    description:
      "Senator Ally Seifried pulls back the curtain on legislative strategy. From bill drafting to floor management, learn how laws actually get made by someone who makes them.",
  },
  {
    id: 13,
    title: "The Listening System",
    instructor: "Dr. Marshall Baker",
    instructorSlug: "marshall-baker",
    price: 34700,
    category: "Systems Design",
    modules: 3,
    lessons: 16,
    signature: false,
    subBrand: null,
    accentColor: "#0d9488",
    description:
      "Dr. Marshall Baker introduces a systems-thinking approach to organizational listening. Build feedback architectures that surface the signals your institution is designed to ignore.",
  },
];

export const instructors: Instructor[] = [
  { name: "Damon Gardenhire", slug: "damon-gardenhire", initials: "DG", courseCount: 5 },
  { name: "Pastor Phillip Abode", slug: "phillip-abode", initials: "PA", courseCount: 1 },
  { name: "Mick Cornett", slug: "mick-cornett", initials: "MC", courseCount: 1 },
  { name: "Brent Bushey", slug: "brent-bushey", initials: "BB", courseCount: 1 },
  { name: "Chris Brewster", slug: "chris-brewster", initials: "CB", courseCount: 1 },
  { name: "Michael Hanegan", slug: "michael-hanegan", initials: "MH", courseCount: 1 },
  { name: "Karma Robinson", slug: "karma-robinson", initials: "KR", courseCount: 1 },
  { name: "Sen. Ally Seifried", slug: "ally-seifried", initials: "AS", courseCount: 1 },
  { name: "Dr. Marshall Baker", slug: "marshall-baker", initials: "MB", courseCount: 1 },
];

export function formatPrice(cents: number): string {
  if (cents === 0) return "Free";
  return `$${(cents / 100).toFixed(0)}`;
}
