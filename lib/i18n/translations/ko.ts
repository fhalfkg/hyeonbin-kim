import { TranslationSchema } from '../types';

export const ko: TranslationSchema = {
  headline: '배워놓으면 언젠가는 쓸모가 있다는 생각으로 살아갑니다.\n항상 목이 마르기에, 수도 없이 우물을 팝니다.',
  careerTitle: '경력',
  educationTitle: '학력',
  certificationsTitle: '자격',
  militaryTitle: '병역',
  projectsTitle: '프로젝트',
  acquiredLabel: '취득',
  career: [
    {
      id: '1',
      period: '2024.07 ~ 현재',
      role: '인디 개발자',
      description: '개인 웹 서비스 및 백엔드 프로젝트 설계/개발',
      isCurrent: true,
    },
    {
      id: '2',
      period: '2020.03 ~ 2024.07',
      role: '유한책임회사 코지 - SW개발팀 백엔드 개발자',
      description: '학교 협동조합 매점 상품권 판매/교환 시스템 서버 개발',
      isCurrent: false,
    },
  ],
  education: [
    {
      id: '1',
      period: '2022.03 ~ 현재',
      role: '순천향대학교',
      description: '컴퓨터소프트웨어공학과 2학년 재학',
      isCurrent: true,
    },
    {
      id: '2',
      period: '2019.03 ~ 2022.02',
      role: '서전고등학교',
      description: '졸업',
      isCurrent: false,
    },
  ],
  certifications: [
    {
      id: '1',
      title: 'BJT (비즈니스일본어능력테스트)',
      score: 'J1',
      date: '2026. 07. 01',
      url: 'http://www.bjttest.com/',
    },
    {
      id: '2',
      title: 'JLPT (일본어능력시험)',
      score: 'N1',
      date: '2024. 01. 11',
      url: 'https://www.jlpt.or.kr/html/intro.html',
    },
    {
      id: '3',
      title: '리눅스마스터',
      score: '2급',
      date: '2017. 06. 23',
      url: 'https://www.ihd.or.kr/introducesubject1.do',
    },
  ],
  military: {
    branch: '대한민국 육군',
    status: '병장 만기전역',
    specialty: '전술C4I운용병',
    unit: '수도방위사령부 제56보병사단 직할대 기동대대',
  },
  projects: [
    {
      id: '1',
      title: 'LightMediaBox',
      subtitle: '개인 프로젝트',
      description: '초경량 개인용 미디어 서버',
      tags: ['TypeScript', 'Vibe Coding'],
      githubUrl: 'https://github.com/fhalfkg/LightMediaBox',
    },
    {
      id: '2',
      title: 'H4Pay-Backend',
      subtitle: '유한책임회사 코지 프로젝트',
      description: '학교 협동조합 매점 상품권 판매/교환 시스템 백엔드 서버',
      tags: ['Kotlin', 'Spring Boot'],
      githubUrl: 'https://github.com/COZYLLC/h4pay-backend',
    },
  ],
};
