export interface TimelineItemData {
  id: string;
  period: string;
  role: string;
  description: string;
  isCurrent?: boolean;
}

interface TimelineProps {
  items: TimelineItemData[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative ml-3 space-y-8">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.id} className="relative group pl-8 transition-all duration-300 hover:-translate-y-1">
            {/* 세로 연결선 */}
            <div
              className={`absolute left-0 top-3 w-[2px] -translate-x-1/2 bg-emerald-700/60 dark:bg-indigo-900/60 ${
                isLast ? 'bottom-1' : '-bottom-8'
              }`}
            />

            {/* 타임라인 포인트 점 (현재 항목에 2중 Ripple 물결 파동 및 네온 글로우 추가) */}
            {item.isCurrent && (
              <>
                <span className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-emerald-400/80 dark:bg-indigo-400/80 animate-ripple pointer-events-none" />
                <span className="absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-1/2 rounded-full bg-emerald-400/60 dark:bg-indigo-400/60 animate-ripple-delayed pointer-events-none" />
              </>
            )}
            <div
              className={`absolute left-0 top-1.5 w-3.5 h-3.5 -translate-x-1/2 rounded-full ring-4 ring-emerald-950 dark:ring-neutral-900 ${
                item.isCurrent
                  ? 'bg-emerald-400 dark:bg-indigo-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] dark:shadow-[0_0_12px_rgba(129,140,248,0.8)]'
                  : 'bg-emerald-800 dark:bg-gray-700'
              }`}
            />

            <span
              className={`text-sm font-semibold block ${
                item.isCurrent
                  ? 'text-emerald-400 dark:text-indigo-400'
                  : 'text-emerald-200/70 dark:text-gray-400'
              }`}
            >
              {item.period}
            </span>
            <h3 className="text-lg font-bold text-white dark:text-gray-100 mt-1">
              {item.role}
            </h3>
            <p className="text-sm text-emerald-100/80 dark:text-gray-400 mt-1">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
