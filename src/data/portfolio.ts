export const LINKS = {
  github: "https://github.com/hruthik-gowda-ht",
  linkedin: "#",
  resume: "#",
  email: "hruthikgowda@example.com",
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  flow?: string[];
  features?: string[];
  highlight?: string;
  cta: string;
  hasGithub?: boolean;
  caseStudy: {
    problem: string;
    approach: string;
    architecture: string[];
    keyFeatures: string[];
    technology: string[];
    challenges: string[];
    outcome: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "no-due-clearance-management-system",
    index: "01",
    title: "No-Due Clearance Management System",
    category: "Full-stack system",
    description:
      "An online college clearance workflow designed to replace fragmented manual verification with a centralized, role-based system.",
    tech: ["React", "Supabase", "PostgreSQL", "Authentication", "Row Level Security"],
    flow: ["Student", "Faculty", "Departments", "HOD", "No-Due Cleared"],
    features: [
      "Role-based access",
      "Department-wise clearance",
      "Attendance eligibility",
      "Rejection and resubmission workflow",
      "HOD approval",
      "Notifications",
      "Audit logs",
      "Verification ID",
      "Row Level Security",
    ],
    cta: "View Case Study",
    hasGithub: true,
    caseStudy: {
      problem:
        "College clearance is usually handled on paper: a student walks between departments collecting signatures, with no shared record of who approved what, why something was rejected, or what is still pending.",
      approach:
        "Model clearance as an explicit state machine with roles instead of a document. Every request moves through defined stages, every action is attributable, and access to data is enforced at the database layer rather than only in the UI.",
      architecture: [
        "Student submits a clearance request",
        "Faculty verifies attendance and subject-level eligibility",
        "Departments clear their own scope independently",
        "HOD performs the final approval",
        "System issues a verification ID for the cleared record",
      ],
      keyFeatures: [
        "Role-based access control for student, faculty, department and HOD",
        "Department-wise parallel clearance instead of one linear queue",
        "Attendance eligibility check before a request can progress",
        "Rejection with reason plus a resubmission path for the student",
        "Notifications on every state change",
        "Audit logs recording who acted, when, and on what",
        "Verification ID so a cleared record can be checked later",
      ],
      technology: [
        "React for the interface",
        "Supabase for auth, data and realtime updates",
        "PostgreSQL schema modelling roles, departments and request states",
        "Row Level Security policies scoping every read and write to the acting role",
      ],
      challenges: [
        "Designing policies so a department can only ever see and act on its own scope",
        "Keeping the request state consistent when several departments act in parallel",
        "Making rejection recoverable without losing the earlier approval history",
      ],
      outcome:
        "Centralized a multi-role clearance workflow into a single auditable system, with database-enforced permissions and a traceable history for each request.",
    },
  },
  {
    slug: "delta-health",
    index: "02",
    title: "Delta Health",
    category: "AI / Federated learning",
    description:
      "A privacy-focused disease outbreak prediction concept that allows multiple clinics to contribute model improvements without sharing raw patient records.",
    tech: ["Python", "Machine Learning", "Federated Learning", "Analytics"],
    flow: ["Local data", "Local training", "Model delta", "Aggregation", "Global model"],
    highlight: "Privacy-preserving analytics",
    cta: "View Case Study",
    caseStudy: {
      problem:
        "Outbreak prediction improves with more data, but patient records cannot leave the clinic that holds them. Centralizing raw health data is both a privacy and a compliance problem.",
      approach:
        "Move the model to the data. Each clinic trains locally on its own records and shares only the resulting model update, which is aggregated into a shared global model.",
      architecture: [
        "Local data stays inside each clinic",
        "Local training runs on that private data",
        "Only the model delta leaves the clinic",
        "Deltas are aggregated centrally",
        "An improved global model is distributed back",
      ],
      keyFeatures: [
        "No raw patient record ever leaves its source",
        "Aggregation of weight updates from multiple participants",
        "Shared global model redistributed to every clinic",
        "Analytics layer for outbreak signal exploration",
      ],
      technology: [
        "Python for training and aggregation",
        "Machine learning models for outbreak signal prediction",
        "Federated learning round structure for update exchange",
      ],
      challenges: [
        "Handling participants with uneven and non-identically distributed data",
        "Deciding what a useful aggregation round looks like with few participants",
        "Keeping the shared update small enough to be practical to exchange",
      ],
      outcome:
        "Produced a working concept for privacy-preserving collaborative analytics, where model quality can improve across institutions without pooling sensitive records.",
    },
  },
  {
    slug: "emotion-sharing-platform",
    index: "03",
    title: "Emotion Sharing Platform",
    category: "Web application",
    description:
      "A web platform focused on allowing users to express and share emotions through a simple social experience.",
    tech: ["React", "JavaScript", "Supabase", "Web Development"],
    cta: "View Project",
    caseStudy: {
      problem:
        "Most social interfaces optimise for reach and performance. There is little space designed simply for expressing how you feel, briefly and without an audience-building layer.",
      approach:
        "Keep the surface deliberately small: post an emotion, read what others posted, and nothing else competing for attention.",
      architecture: [
        "Authenticated user session",
        "Emotion post creation",
        "Shared feed of recent posts",
        "Persistent storage with scoped access",
      ],
      keyFeatures: [
        "Simple authenticated posting flow",
        "Shared feed of expressions",
        "Minimal, distraction-free interface",
      ],
      technology: ["React and JavaScript on the front end", "Supabase for auth and data storage"],
      challenges: [
        "Resisting feature creep to keep the experience simple",
        "Designing an interface that stays calm rather than attention-seeking",
      ],
      outcome:
        "Delivered a small, focused social experience that stays readable and intentional rather than over-featured.",
    },
  },
];

export const SKILL_GROUPS = [
  { label: "Languages", items: ["C++", "JavaScript", "Python", "SQL"] },
  { label: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
  { label: "Backend / Database", items: ["Supabase", "PostgreSQL", "REST APIs"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code"] },
  {
    label: "Concepts",
    items: [
      "Data Structures & Algorithms",
      "Authentication",
      "Role-Based Access Control",
      "Database Design",
      "Machine Learning",
      "Federated Learning",
    ],
  },
];

export const PRINCIPLES = [
  { n: "01", title: "Understand", body: "Start with the actual problem." },
  { n: "02", title: "Design", body: "Break the problem into systems and workflows." },
  { n: "03", title: "Build", body: "Turn the design into working software." },
  { n: "04", title: "Iterate", body: "Test, improve, and refine." },
];

export const EXPERIENCE = [
  {
    title: "Engineering Education",
    body: "Information Science & Engineering",
    meta: "Ongoing",
  },
  {
    title: "Software Projects",
    body: "Multiple full-stack and software projects",
    meta: "Self-directed",
  },
  {
    title: "Hackathons & Problem Solving",
    body: "Building solutions under real constraints",
    meta: "Practice",
  },
];
