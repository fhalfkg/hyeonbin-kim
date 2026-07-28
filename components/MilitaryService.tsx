export interface MilitaryServiceData {
  branch: string;
  status: string;
  unit: string;
  specialty?: string;
  period?: string;
}

interface MilitaryServiceProps {
  data: MilitaryServiceData;
}

export default function MilitaryService({ data }: MilitaryServiceProps) {
  return (
    <div className="flex items-center justify-between p-4.5 rounded-xl bg-emerald-900/40 border border-emerald-700/50 backdrop-blur-sm dark:bg-neutral-800/60 dark:border-neutral-700/60 mt-4">
      <div className="flex items-center gap-4 min-w-0">
        {/* 방패 / 방위 아이콘 */}
        <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 dark:bg-indigo-500/20 dark:text-indigo-300 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h3 className="font-bold text-white dark:text-gray-100 text-base">
              {data.branch}
            </h3>
            <span className="px-2.5 py-0.5 text-xs font-extrabold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-400/30">
              {data.status}
            </span>
            {data.specialty && (
              <span className="px-2.5 py-0.5 text-xs font-extrabold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-400/30">
                {data.specialty}
              </span>
            )}
          </div>
          <p className="text-sm text-emerald-100/80 dark:text-gray-400 mt-1 break-keep">
            {data.unit}
          </p>
        </div>
      </div>

      {data.period && (
        <span className="text-xs text-emerald-200/70 dark:text-gray-400 shrink-0 ml-3 hidden sm:inline">
          {data.period}
        </span>
      )}
    </div>
  );
}
