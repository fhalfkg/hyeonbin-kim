import GithubIcon from '@/components/GithubIcon';

export interface ProjectItemData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  badge?: string;
}

interface ProjectsProps {
  items: ProjectItemData[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {items.map((project) => (
        <div
          key={project.id}
          className="flex flex-col justify-between p-5 rounded-xl bg-emerald-900/40 border border-emerald-700/50 backdrop-blur-sm dark:bg-neutral-800/60 dark:border-neutral-700/60 gap-4"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                {/* 폴더/프로젝트 아이콘 */}
                <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 dark:bg-indigo-500/20 dark:text-indigo-300 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white dark:text-gray-100">
                      {project.title}
                    </h3>
                    {/* GitHub 저장소 링크 아이콘 */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-300 hover:text-white dark:text-indigo-300 dark:hover:text-white transition-colors"
                        title={`${project.title} GitHub 저장소 이동`}
                      >
                        <GithubIcon className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  {project.subtitle && (
                    <p className="text-xs text-emerald-200/70 dark:text-gray-400 font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <p className="text-sm text-emerald-100/90 dark:text-gray-300 mt-1">
              {project.description}
            </p>
          </div>

          {/* 태그 */}
          <div className="flex items-center gap-2 flex-wrap mt-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-semibold rounded-md bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 dark:bg-indigo-500/20 dark:text-indigo-200 dark:border-indigo-400/30"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
