import type { ReactNode, PropsWithChildren } from 'react';
import './appLayout.css';

export interface AppLayoutProps extends PropsWithChildren {
  header?: ReactNode;
}

export function AppLayout({ header, children }: AppLayoutProps) {
  return (
    <div className="app-layout">
      {header && <header className="app-layout__header">{header}</header>}

      <main className="app-layout__content">
        {children}
      </main>
    </div>
  );
}
