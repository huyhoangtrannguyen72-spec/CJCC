export enum ViewState {
  DASHBOARD = 'DASHBOARD',
  HIERARCHY = 'HIERARCHY',
  PHILOSOPHY = 'PHILOSOPHY',
  WORKSHOPS = 'WORKSHOPS',
  TRAINING = 'TRAINING',
  NEWS = 'NEWS',
  WHITELIST = 'WHITELIST',
  ADMIN = 'ADMIN'
}

export type UserRole = 'ADMIN' | 'MEMBER' | 'GUEST';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  organization?: string;
  status?: 'ACTIVE' | 'PENDING' | 'BANNED';
  joinedDate?: string;
}

export interface Rank {
  id: string;
  title: string;
  level: number;
  description: string;
  requirements: string[];
  perks: string[];
  color: string;
}

export interface Department {
  id: string;
  name: string;
  leader: string;
  membersCount: number;
  description: string;
  icon: string;
}

export interface Workshop {
  id: string;
  title: string;
  date: string;
  speaker: string;
  category: 'Digital Economy' | 'Journalism' | 'Tech' | 'Soft Skills';
  description: string;
  image: string;
  highlights?: string[];
  content?: string;
  materials?: { name: string; url: string }[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  content?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  modules: CourseModule[];
  progress: number; // 0-100
  author: string;
  thumbnail: string;
  description: string;
  category: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author?: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}