"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/site-content";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 py-5">
        <Link href="/" className="min-w-fit">
          <span className="block text-sm font-semibold tracking-[0.2em] text-text-subtle uppercase">
            BSM Portfolio
          </span>
          <span className="mt-1 block text-sm text-text-main">
            Problem solving and UX-focused frontend work
          </span>
        </Link>

        <nav aria-label="Primary" className="overflow-x-auto">
          <ul className="flex min-w-fit items-center gap-2">
            {navigationItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex rounded-pill px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary text-text-inverse shadow-soft"
                        : "text-text-subtle hover:bg-surface hover:text-text-main",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
