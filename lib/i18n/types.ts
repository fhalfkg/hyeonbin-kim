import { TimelineItemData } from '@/components/Timeline';
import { CertificationItemData } from '@/components/Certifications';
import { MilitaryServiceData } from '@/components/MilitaryService';
import { ProjectItemData } from '@/components/Projects';

export type Language = 'ko' | 'en' | 'ja';

export interface TranslationSchema {
  headline: string;
  careerTitle: string;
  educationTitle: string;
  certificationsTitle: string;
  militaryTitle: string;
  projectsTitle: string;
  acquiredLabel: string;
  career: TimelineItemData[];
  education: TimelineItemData[];
  certifications: CertificationItemData[];
  military: MilitaryServiceData;
  projects: ProjectItemData[];
}
