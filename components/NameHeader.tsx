'use client';

import { useState, useEffect, useRef } from 'react';
import { Language } from '@/lib/i18n';

interface NameHeaderProps {
  initialLang: Language;
}

export default function NameHeader({ initialLang }: NameHeaderProps) {
  // 고정된 이름 배열 (0: 영어, 1: 한국어, 2: 일본어)
  const NAMES = ['Hyeonbin Kim', '김현빈', 'キム・ヒョンビン'];

  const SEQUENCE_MAP: Record<Language, number[]> = {
    ko: [1, 0, 2], // 한국어 -> 영어 -> 일본어
    en: [0, 1, 2], // 영어 -> 한국어 -> 일본어
    ja: [2, 0, 1], // 일본어 -> 영어 -> 한국어
  };

  // current: 현재 띄울 이름 인덱스, prev: 밀려날 이름 인덱스, step: 현재 언어 시퀀스에서의 단계
  const [{ current, prev, step }, setIndexState] = useState({
    current: SEQUENCE_MAP[initialLang][0],
    prev: 0,
    step: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const prevLangRef = useRef<Language>(initialLang);

  // 언어가 변경될 때 즉각적으로 바뀌지 않고 애니메이션을 타도록 처리
  useEffect(() => {
    if (prevLangRef.current !== initialLang) {
      prevLangRef.current = initialLang;
      setHasAnimated(true);
      setIndexState((s) => ({
        prev: s.current,
        current: SEQUENCE_MAP[initialLang][0],
        step: 0,
      }));
    }
  }, [initialLang]);

  useEffect(() => {
    // 3초마다 언어별 시퀀스에 맞춰 이름 슬라이드
    const interval = setInterval(() => {
      setHasAnimated(true);
      setIndexState((s) => {
        const nextStep = (s.step + 1) % 3;
        return {
          prev: s.current,
          current: SEQUENCE_MAP[initialLang][nextStep],
          step: nextStep,
        };
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [initialLang]); // 언어가 바뀌면 인터벌도 리셋

  return (
    <h1 className="relative grid text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-gray-100">
      {NAMES.map((name, index) => {
        // 최초 로딩 시 (애니메이션 발생 전)
        if (!hasAnimated) {
          if (index === current) {
            return (
              <span key={`${name}-initial`} className="col-start-1 row-start-1 opacity-100 block transition-none">
                {name}
              </span>
            );
          }
          return null; // 안 쓰이는 이름은 DOM에서 아예 제거
        }

        // 애니메이션 작동 시
        if (index === current) {
          return (
            <span key={`${name}-in`} className="col-start-1 row-start-1 opacity-100 block animate-slide-in-right transition-none">
              {name}
            </span>
          );
        }

        if (index === prev) {
          return (
            <span key={`${name}-out`} className="col-start-1 row-start-1 opacity-0 block animate-slide-out-left transition-none">
              {name}
            </span>
          );
        }

        // current도 prev도 아니면 DOM에서 완전히 제거하여 사파리 잔상/깜빡임 근본 차단
        return null;
      })}
    </h1>
  );
}
