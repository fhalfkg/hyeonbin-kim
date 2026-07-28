import { TranslationSchema } from '../types';

export const en: TranslationSchema = {
  headline: 'Living with the belief that everything learned will be useful someday.',
  careerTitle: 'Career',
  educationTitle: 'Education',
  certificationsTitle: 'Certifications',
  militaryTitle: 'Military Service',
  projectsTitle: 'Projects',
  acquiredLabel: 'Acquired',
  career: [
    {
      id: '1',
      period: '2024.07 ~ Present',
      role: 'Independent Developer',
      description: 'Designing and developing personal web services and backend projects',
      isCurrent: true,
    },
    {
      id: '2',
      period: '2020.03 ~ 2024.07',
      role: 'COZY LLC - SW Dev Team Backend Developer',
      description: 'Developed server for school coop store voucher sales & exchange system',
      isCurrent: false,
    },
  ],
  education: [
    {
      id: '1',
      period: '2022.03 ~ Present',
      role: 'Soonchunhyang University',
      description: 'Computer Software Engineering (Sophomore)',
      isCurrent: true,
    },
    {
      id: '2',
      period: '2019.03 ~ 2022.02',
      role: 'Seojeon High School',
      description: 'Graduated',
      isCurrent: false,
    },
  ],
  certifications: [
    {
      id: '1',
      title: 'BJT (Business Japanese Test)',
      score: 'J1',
      date: '2026. 07. 01',
      url: 'http://www.bjttest.com/',
    },
    {
      id: '2',
      title: 'JLPT (Japanese-Language Proficiency Test)',
      score: 'N1',
      date: '2024. 01. 11',
      url: 'https://www.jlpt.or.kr/html/intro.html',
    },
    {
      id: '3',
      title: 'Linux Master Class 2',
      score: 'Grade 2',
      date: '2017. 06. 23',
      url: 'https://www.ihd.or.kr/introducesubject1.do',
    },
  ],
  military: {
    branch: 'Republic of Korea Army',
    status: 'Sergeant (Honorably Discharged)',
    specialty: 'Tactical C4I Operator',
    unit: 'Capital Defense Command 56th Infantry Division Mobile Battalion',
  },
  projects: [
    {
      id: '1',
      title: 'LightMediaBox',
      subtitle: 'Personal Project',
      description: 'Lightweight personal media server',
      tags: ['TypeScript', 'Vibe Coding'],
      githubUrl: 'https://github.com/fhalfkg/LightMediaBox',
    },
    {
      id: '2',
      title: 'H4Pay-Backend',
      subtitle: 'COZY LLC Project',
      description: 'School coop store voucher sales & exchange backend server',
      tags: ['Kotlin', 'Spring Boot'],
      githubUrl: 'https://github.com/COZYLLC/h4pay-backend',
    },
  ],
};
