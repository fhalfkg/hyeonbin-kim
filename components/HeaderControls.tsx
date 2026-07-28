'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Language } from '@/lib/i18n';

interface HeaderControlsProps {
  currentLang: Language;
}

const languages: { code: Language; label: string; flag: string }[] = [
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

export default function HeaderControls({
  currentLang,
}: HeaderControlsProps) {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    let isDark = false;

    if (savedTheme) {
      isDark = savedTheme === 'dark';
    } else {
      isDark =
        document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    setIsDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLanguageChange = (langCode: Language) => {
    document.cookie = `NEXT_LOCALE=${langCode}; path=/; max-age=31536000`;
    setIsLangOpen(false);
    router.refresh(); // 서버 컴포넌트 재렌더링 트리거
  };

  if (!isMounted) return null;

  const currentLangObj = languages.find((l) => l.code === currentLang) || languages[0];

  return (
    <div
      ref={dropdownRef}
      className="fixed top-5 right-5 sm:top-8 sm:right-10 z-50 flex items-center gap-1.5 bg-white/90 border border-slate-200/80 dark:bg-neutral-900/90 dark:border-neutral-700/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md text-gray-700 dark:text-gray-200"
    >
      {/* 커스텀 글래스모피즘 언어 선택 버튼 */}
      <button
        onClick={() => setIsLangOpen(!isLangOpen)}
        type="button"
        className="flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
      >
        {/* 지구본(Globe) 아이콘 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.75"
          stroke="currentColor"
          className="w-4 h-4 text-gray-500 dark:text-gray-400 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.6 9h16.8M3.6 15h16.8"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.5 3a17.004 17.004 0 000 18M12.5 3a17.004 17.004 0 010 18"
          />
        </svg>
        <span className="font-bold">{currentLangObj.code.toUpperCase()}</span>
        {/* 화살표 아이콘 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
            isLangOpen ? 'rotate-180' : ''
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* 팝오버 언어 메뉴 드롭다운 (헤더 필 전체 우측 테두리에 좌우 기준 맞춤 및 여백 mt-3.5 적용) */}
      {isLangOpen && (
        <div className="absolute right-0 top-full mt-3.5 w-36 rounded-2xl bg-white/95 border border-slate-200/80 shadow-2xl backdrop-blur-xl dark:bg-neutral-900/95 dark:border-neutral-700/80 p-1.5 z-50 flex flex-col gap-1 animate-fade-in-down">
          {languages.map((lang) => {
            const isSelected = lang.code === currentLang;

            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center justify-between w-full px-3 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-500/10 text-emerald-700 dark:bg-indigo-500/20 dark:text-indigo-300 font-bold'
                    : 'text-gray-700 hover:bg-slate-100 dark:text-gray-200 dark:hover:bg-neutral-800'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <span>{lang.label}</span>
                </span>
                {isSelected && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-emerald-600 dark:text-indigo-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}

      <div className="w-[1px] h-4 bg-slate-300 dark:bg-neutral-700 mx-0.5" />

      {/* 라이트 / 다크모드 단색 아이콘 버튼 */}
      <button
        onClick={toggleDarkMode}
        type="button"
        title={isDarkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
        className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-slate-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-neutral-800 transition-colors cursor-pointer"
      >
        {isDarkMode ? (
          /* 해 (Sun Icon - 단색) */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.061l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        ) : (
          /* 달 (Moon Icon - 단색) */
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
