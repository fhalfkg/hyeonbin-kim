export interface CertificationItemData {
  id: string;
  title: string;
  score?: string;
  date: string;
  issuer?: string;
  url?: string;
}

interface CertificationsProps {
  items: CertificationItemData[];
  acquiredLabel?: string;
}

export default function Certifications({
  items,
  acquiredLabel = '취득',
}: CertificationsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4">
      {items.map((cert) => {
        const Content = (
          <>
            <div className="flex items-center gap-3.5 min-w-0">
              {/* 인증서 아이콘 */}
              <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 dark:bg-indigo-500/20 dark:text-indigo-300 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.307 4.491 4.491 0 01-1.307-3.497A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="truncate">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-white dark:text-gray-100 text-base truncate">
                    {cert.title}
                  </h3>
                  {/* 외부터치 링크 아이콘 */}
                  {cert.url && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-3.5 h-3.5 text-emerald-300/70 dark:text-indigo-300/70 shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M15.832 3.05a.75.75 0 01.418.657v4.5a.75.75 0 01-1.5 0V5.56l-6.22 6.22a.75.75 0 01-1.06-1.06l6.22-6.22h-2.25a.75.75 0 010-1.5h4.5c.16 0 .313.05.442.142z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <p className="text-xs text-emerald-200/70 dark:text-gray-400 mt-0.5 truncate">
                  {cert.date} {acquiredLabel}
                </p>
              </div>
            </div>

            {/* 급수 / 등급 배지 */}
            {cert.score && (
              <span className="ml-3 px-3 py-1 text-xs font-extrabold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-400/30 shrink-0">
                {cert.score}
              </span>
            )}
          </>
        );

        if (cert.url) {
          return (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-emerald-900/40 border border-emerald-700/50 backdrop-blur-sm dark:bg-neutral-800/60 dark:border-neutral-700/60 hover:border-emerald-400/80 dark:hover:border-indigo-400/80 transition-colors cursor-pointer"
            >
              {Content}
            </a>
          );
        }

        return (
          <div
            key={cert.id}
            className="flex items-center justify-between p-4 rounded-xl bg-emerald-900/40 border border-emerald-700/50 backdrop-blur-sm dark:bg-neutral-800/60 dark:border-neutral-700/60"
          >
            {Content}
          </div>
        );
      })}
    </div>
  );
}
