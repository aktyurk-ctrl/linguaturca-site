import type { ReactNode } from 'react';
export default function ContentLayout({ children }: { children: ReactNode }) {
  return <div className="legacy-content">{children}</div>;
}
