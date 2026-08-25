export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  period?: string;
  highlight?: string;
}

export interface InternshipItem {
  company: string;
  domain: string;
  role: string;
  skillsAcquired: string[];
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  role: string;
  summary: string;
  description: string;
  image: string;
  keyFeatures: string[];
  impact: string;
  userType: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: 'NPTEL' | 'Workshop' | 'Summit' | 'Certification' | 'Course';
  year?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  type: 'languages' | 'domain' | 'tools';
  skills: { name: string; level: number; iconName: string }[];
}

export interface ContactInfo {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  portfolioUrl?: string;
}

export interface PreferredInterest {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  keyHighlights: string[];
  toolsAndMethods: string[];
  gradient: string;
}
