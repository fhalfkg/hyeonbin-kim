import { TranslationSchema } from '../types';

export const ja: TranslationSchema = {
  headline: '学んだことはいつか必ず役に立つと信じて生きています。\n常に知への渇きを感じており、無数の井戸を掘り続けています。',
  careerTitle: '職歴',
  educationTitle: '学歴',
  certificationsTitle: '資格',
  militaryTitle: '兵役',
  projectsTitle: 'プロジェクト',
  acquiredLabel: '取得',
  career: [
    {
      id: '1',
      period: '2024.07 ~ 現在',
      role: 'インディー開発者',
      description: '個人ウェブサービスおよびバックエンドプロジェクトの設計・開発',
      isCurrent: true,
    },
    {
      id: '2',
      period: '2020.03 ~ 2024.07',
      role: '韓国 有限責任会社COZY - SW開発チーム バックエンド開発者',
      description: '学校協同組合の売店商品券販売・交換システムサーバー開発',
      isCurrent: false,
    },
  ],
  education: [
    {
      id: '1',
      period: '2022.03 ~ 現在',
      role: '韓国 順天郷大学校',
      description: 'コンピュータソフトウェア工学科 2年生在学',
      isCurrent: true,
    },
    {
      id: '2',
      period: '2019.03 ~ 2022.02',
      role: '韓国 瑞田高等学校',
      description: '卒業',
      isCurrent: false,
    },
  ],
  certifications: [
    {
      id: '1',
      title: 'BJT (ビジネス日本語能力テスト)',
      score: 'J1',
      date: '2026. 07. 01',
      url: 'http://www.bjttest.com/',
    },
    {
      id: '2',
      title: 'JLPT (日本語能力試験)',
      score: 'N1',
      date: '2024. 01. 11',
      url: 'https://www.jlpt.or.kr/html/intro.html',
    },
    {
      id: '3',
      title: 'Linux Master',
      score: '2級',
      date: '2017. 06. 23',
      url: 'https://www.ihd.or.kr/introducesubject1.do',
    },
  ],
  military: {
    branch: '大韓民国陸軍',
    status: '兵長 満期除隊',
    specialty: '戦術C4I運用兵',
    unit: '首都防衛司令部 第56歩兵師団 直轄隊 機動大隊',
  },
  projects: [
    {
      id: '1',
      title: 'LightMediaBox',
      subtitle: '個人プロジェクト',
      description: '超軽量個人用メディアサーバー',
      tags: ['TypeScript', 'Vibe Coding'],
      githubUrl: 'https://github.com/fhalfkg/LightMediaBox',
    },
    {
      id: '2',
      title: 'H4Pay-Backend',
      subtitle: '韓国 有限責任会社COZYプロジェクト',
      description: '学校協同組合売店商品券販売・交換システムバックエンドサーバー',
      tags: ['Kotlin', 'Spring Boot'],
      githubUrl: 'https://github.com/COZYLLC/h4pay-backend',
    },
  ],
};
