import type { PropsWithChildren, ReactNode } from 'react';

type CardProps = PropsWithChildren<{
  logo?: ReactNode;
  appName?: string;
  title?: string;              // e.g., "Log in" | "Sign up"
  description?: string;
  actions?: ReactNode;
  className?: string;
}>;

export function Card({
  logo,
  appName,
  title,
  description,
  actions,
  children,
  className = '',
}: CardProps) {
  const hasHeader = logo || appName || title;
  const hasFooter = Boolean(actions);

  return (
    <div
      className={`w-full max-w-md rounded-3xl border-2 border-red-500 bg-red-50 shadow-xl ${className}`}
    >
      {/* CARD HEADER (branding + title) */}
      {hasHeader && (
        <div className="flex items-center gap-3 border-b-2 border-blue-400 bg-blue-50 px-6 py-4">
          {logo && (
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow">
              {logo}
            </div>
          )}
          <div className="flex flex-col">
            {appName && (
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {appName}
              </span>
            )}
            {title && (
              <span className="text-lg font-semibold text-slate-900">
                {title}
              </span>
            )}
          </div>
        </div>
      )}

      {/* CARD CONTENT (forms / main content) */}
      <div className="space-y-4 bg-green-50 px-6 py-5 border-y-2 border-green-400">
        {description && <p className="text-sm text-slate-600">{description}</p>}
        {children}
      </div>

      {/* CARD FOOTER (actions) */}
      {hasFooter && (
        <div className="flex items-center justify-end gap-3 border-t-2 border-purple-400 bg-purple-50 px-6 py-4">
          {actions}
        </div>
      )}
    </div>
  );
}
