import { cookies } from 'next/headers';
import Card from '@/components/Card';
import MailIcon from '@/components/MailIcon';
import GithubIcon from '@/components/GithubIcon';
import Timeline from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import MilitaryService from '@/components/MilitaryService';
import Projects from '@/components/Projects';
import ScrollReveal from '@/components/ScrollReveal';
import HeaderControls from '@/components/HeaderControls';
import NameHeader from '@/components/NameHeader';
import { getTranslation, Language } from '@/lib/i18n';
import { Analytics } from '@vercel/analytics/next';

export default async function Home() {
  // Next.js 15+ 에서는 cookies()가 Promise를 반환할 수 있으므로 await 처리
  const cookieStore = await cookies();
  const savedLang = cookieStore.get('NEXT_LOCALE')?.value as Language | undefined;

  // 쿠키에 유효한 값이 없으면 기본값 'ko' 사용
  const lang: Language = (savedLang && ['ko', 'en', 'ja'].includes(savedLang)) ? savedLang : 'ko';
  const t = getTranslation(lang);

  return (
    <div className="relative flex flex-col flex-1 items-center justify-center font-sans min-h-screen">
      {/* 라이트 모드 전체 배경 그래디언트 레이어 */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-100/70 via-gray-50 to-slate-100/90 transition-opacity duration-500 ease-in-out dark:opacity-0 -z-20 pointer-events-none" />

      {/* 다크 모드 전체 배경 그래디언트 레이어 */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-gray-950 transition-opacity duration-500 ease-in-out opacity-0 dark:opacity-100 -z-20 pointer-events-none" />

      {/* 도트 패턴 오버레이 (화면 중앙 집중형 페이드 효과) */}
      <div className="fixed inset-0 bg-dot-pattern mask-radial-faded pointer-events-none -z-10" />

      {/* 우측 상단 고정 컨트롤러 (언어 선택기 & 다크모드 토글) */}
      <HeaderControls currentLang={lang} />

      <main className="flex flex-1 w-full max-w-3xl lg:max-w-7xl flex-col items-center justify-center py-32 px-8 sm:px-16 gap-12">
        {/* 상단 프로필 헤더 */}
        <ScrollReveal delay={100} className="w-full">
          <div className="flex w-full flex-col items-start justify-start gap-4">

            {/* 인터랙티브 텍스트 애니메이션은 별도 클라이언트 컴포넌트로 분리 */}
            <NameHeader initialLang={lang} />

            <p className="text-2xl font-sans text-gray-400 font-bold">Backend Developer</p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-2">
              <a
                href="mailto:bin3635@gmail.com"
                title="이메일 보내기 (bin3635@gmail.com)"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
              >
                <MailIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="font-semibold text-lg tracking-tight">bin3635@gmail.com</span>
              </a>
              <a
                href="https://github.com/bin3635"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub 프로필 방문 (github.com/bin3635)"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
              >
                <GithubIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                <span className="font-semibold text-lg tracking-tight">@bin3635</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 메인 이력 카드 */}
        <ScrollReveal delay={300} className="w-full">
          <Card className="w-full p-8">
            <h1 className="text-2xl font-bold whitespace-pre-line leading-relaxed">{t.headline}</h1>
            <h2 className="text-xl font-bold mt-10 mb-6">{t.careerTitle}</h2>
            <Timeline items={t.career} />
            <h2 className="text-xl font-bold mt-10 mb-6">{t.educationTitle}</h2>
            <Timeline items={t.education} />
            <h2 className="text-xl font-bold mt-10 mb-6">{t.certificationsTitle}</h2>
            <Certifications items={t.certifications} acquiredLabel={t.acquiredLabel} />
            <h2 className="text-xl font-bold mt-10 mb-6">{t.militaryTitle}</h2>
            <MilitaryService data={t.military} />
          </Card>
        </ScrollReveal>

        {/* 프로젝트 카드 */}
        <ScrollReveal delay={500} className="w-full">
          <div className="flex w-full flex-col gap-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t.projectsTitle}</h1>
            <Card className="w-full p-8">
              <Projects items={t.projects} />
            </Card>
          </div>
        </ScrollReveal>
      </main>
      <Analytics />
    </div>
  );
}
