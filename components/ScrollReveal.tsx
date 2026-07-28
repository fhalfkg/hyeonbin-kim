'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [activeDelay, setActiveDelay] = useState(delay);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 아이폰 구형 브라우저나 인앱 브라우저에서 IntersectionObserver를 미지원할 경우
    // 영원히 opacity-0 상태로 화면이 멈추는 것을 방지하기 위한 예외 처리 (즉시 표시)
    if (typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    // 초기 렌더링 50ms 이후에 감지되는 요소는 '스크롤에 의한 등장'으로 간주
    let isInitialMount = true;
    const timeoutId = setTimeout(() => {
      isInitialMount = false;
    }, 50);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 스크롤로 나중에 등장하는 요소는 답답하지 않도록 딜레이(500ms 등)를 즉시 제거
          if (!isInitialMount) {
            setActiveDelay(0);
          }
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0,
        // 모바일(iOS Safari)에서 % 단위 마이너스 마진(rootMargin) 버그로 인해 화면이 안 보이는 현상 방지
        // -15% 대신 안전한 px 단위(-50px)로 변경하여 교차를 정상적으로 감지하도록 수정
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(el);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${activeDelay}ms` }}
      className={`${
        isRevealed ? 'animate-fade-in-up' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
