"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type TransitionEvent,
} from "react";
import Link from "next/link";
import SearchToggle from "@/components/SearchToggle";

const TRANSITION_MS = 420;
const TOP_ALWAYS_SHOW_PX = 8;
const MIN_Y_TO_HIDE = 56;
const SCROLL_UP_PX = 5;
const SCROLL_DOWN_PX = 8;

export default function HeaderClient({
  navLinks,
}: {
  navLinks: { href: string; label: string }[];
}) {
  const [logoVisible, setLogoVisible] = useState(true);
  const logoVisibleRef = useRef(true);
  const lastScrollY = useRef(0);
  const tickingRef = useRef(false);
  const lockedRef = useRef(false);
  const compensationBeforeRef = useRef<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const logoInnerRef = useRef<HTMLDivElement>(null);
  const [logoBarHeight, setLogoBarHeight] = useState(0);

  const syncHeaderHeight = useCallback(() => {
    const height = headerRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty(
      "--site-header-height",
      `${height}px`,
    );
  }, []);

  const measureLogoBar = useCallback(() => {
    if (logoInnerRef.current) {
      setLogoBarHeight(logoInnerRef.current.offsetHeight);
    }
  }, []);

  const compensateScrollForHeaderChange = useCallback((before: number, after: number) => {
    const diff = after - before;
    if (diff === 0) return;
    window.scrollTo(0, Math.max(0, window.scrollY + diff));
    lastScrollY.current = window.scrollY;
  }, []);

  const setLogoVisibleSafe = useCallback(
    (next: boolean) => {
      if (lockedRef.current || logoVisibleRef.current === next) return;

      const beforeHeight = headerRef.current?.offsetHeight ?? 0;

      lockedRef.current = true;
      logoVisibleRef.current = next;
      setLogoVisible(next);
      compensationBeforeRef.current = beforeHeight;

      window.setTimeout(() => {
        lockedRef.current = false;
        lastScrollY.current = window.scrollY;
        syncHeaderHeight();
      }, TRANSITION_MS + 60);
    },
    [syncHeaderHeight],
  );

  useLayoutEffect(() => {
    if (compensationBeforeRef.current === null) return;

    const before = compensationBeforeRef.current;
    compensationBeforeRef.current = null;
    const after = headerRef.current?.offsetHeight ?? 0;
    compensateScrollForHeaderChange(before, after);
    syncHeaderHeight();
  }, [logoVisible, logoBarHeight, compensateScrollForHeaderChange, syncHeaderHeight]);

  useLayoutEffect(() => {
    measureLogoBar();
    const observer = new ResizeObserver(measureLogoBar);
    if (logoInnerRef.current) observer.observe(logoInnerRef.current);
    window.addEventListener("resize", measureLogoBar);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measureLogoBar);
    };
  }, [measureLogoBar]);

  useLayoutEffect(() => {
    syncHeaderHeight();
  }, [logoVisible, logoBarHeight, syncHeaderHeight]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const evaluate = () => {
      tickingRef.current = false;
      if (lockedRef.current) return;

      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y <= TOP_ALWAYS_SHOW_PX) {
        setLogoVisibleSafe(true);
        return;
      }

      if (delta === 0) return;

      if (delta < -SCROLL_UP_PX) {
        setLogoVisibleSafe(true);
        return;
      }

      if (delta > SCROLL_DOWN_PX && y > MIN_Y_TO_HIDE) {
        setLogoVisibleSafe(false);
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setLogoVisibleSafe]);

  const logoShellStyle = {
    height: logoVisible ? logoBarHeight : 0,
    opacity: logoVisible ? 1 : 0,
    transition: [
      `height ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      `opacity ${TRANSITION_MS - 100}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    ].join(", "),
  } as const;

  const onLogoTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "height") return;
    syncHeaderHeight();
    lastScrollY.current = window.scrollY;
  };

  const navLinkClass =
    "nav-link text-[13px] font-black hover:text-accent transition-colors whitespace-nowrap shrink-0";

  return (
    <header
      ref={headerRef}
      className="bg-background sticky top-0 z-30"
      style={{ overflowAnchor: "none" }}
    >
      <div className="bg-black text-white text-center text-[11px] sm:text-xs font-normal tracking-[0.02em] py-2 px-4">
        no shop. no fast fashion. just the writing.{" "}
        <a
          href="https://theselvage.substack.com"
          className="underline underline-offset-2 hover:opacity-90"
        >
          read on substack →
        </a>
      </div>

      <div
        className={`overflow-hidden border-black/25 ${logoVisible ? "border-b" : ""}`}
        style={logoShellStyle}
        aria-hidden={!logoVisible}
        onTransitionEnd={onLogoTransitionEnd}
      >
        <div
          ref={logoInnerRef}
          className="py-6 sm:py-7 flex items-center justify-center"
        >
          <Link href="/" className="inline-block text-center">
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              The Selvage
            </span>
          </Link>
        </div>
      </div>

      <div className="border-b border-black/25 bg-background">
        <div className="w-full px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <nav
            className="flex flex-1 min-w-0 items-center gap-x-5 sm:gap-x-6 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <SearchToggle />
            <a
              href="https://theselvage.substack.com"
              className="bg-black text-white! hover:text-white! text-[11px] font-bold uppercase tracking-[0.1em] px-4 py-2 hover:opacity-90 transition-opacity"
            >
              Newsletter
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
