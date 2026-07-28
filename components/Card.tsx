import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 shadow-xl border border-emerald-700/50 dark:border-neutral-800 text-white overflow-hidden ${className}`}
    >
      {/* 라이트 모드 그래디언트 레이어 */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-teal-900 to-emerald-950 transition-opacity duration-500 ease-in-out dark:opacity-0 -z-10 pointer-events-none" />

      {/* 다크 모드 솔리드/그래디언트 레이어 */}
      <div className="absolute inset-0 bg-neutral-900 transition-opacity duration-500 ease-in-out opacity-0 dark:opacity-100 -z-10 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
