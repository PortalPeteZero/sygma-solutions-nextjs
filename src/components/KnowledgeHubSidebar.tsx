import Link from 'next/link';
import { knowledgeHubItems } from '@/data/knowledgeHubItems';

const sidebarItems = knowledgeHubItems.filter(
  (item) => item.href.startsWith('/knowledge-hub/')
);

export default function KnowledgeHubSidebar() {
  return (
    <nav className="space-y-1">
      <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
        More Articles
      </h2>
      <ul className="space-y-1">
        {sidebarItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded px-2 py-1.5 transition-colors leading-snug"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-border">
        <Link
          href="/knowledge-hub"
          className="block text-sm font-semibold text-primary hover:underline px-2 py-1.5"
        >
          &#8592; Back to Knowledge Hub
        </Link>
      </div>
    </nav>
  );
}
