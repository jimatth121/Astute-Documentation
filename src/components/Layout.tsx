import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV, FLAT, pathToSlug } from "../nav";
import { Icon } from "./Icon";
import { CommandPalette } from "./CommandPalette";
import { SplashLoader, RouteLoader } from "./Loader";
import logo from "../assets/logo.svg";

function useTheme() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("astute-docs-theme");
    if (saved === "light") {
      setLight(true);
      document.documentElement.classList.add("light");
    }
  }, []);
  const toggle = () => {
    setLight((v) => {
      const nv = !v;
      document.documentElement.classList.toggle("light", nv);
      localStorage.setItem("astute-docs-theme", nv ? "light" : "dark");
      return nv;
    });
  };
  return { light, toggle };
}

const tbBtn =
  "inline-flex h-[38px] cursor-pointer items-center gap-[7px] rounded-[10px] border border-line bg-surface px-[13px] text-[13.5px] font-semibold text-txt-muted transition-all duration-150 hover:border-line-strong hover:bg-surface-strong hover:text-txt-bright";
const tbIcon = "w-[38px] justify-center px-0";

export function Layout({ children }: { children: ReactNode }) {
  const loc = useLocation();
  const slug = pathToSlug(loc.pathname);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [splash, setSplash] = useState<"show" | "fade" | "gone">("show");
  const [navLoading, setNavLoading] = useState(false);
  const firstRender = useRef(true);
  const { light, toggle } = useTheme();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Branded boot splash (logo loader) on first load.
  useEffect(() => {
    const t1 = setTimeout(() => setSplash("fade"), 750);
    const t2 = setTimeout(() => setSplash("gone"), 1250);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
    // Show the logo route-loader briefly on navigation (skip the very first paint,
    // which the boot splash already covers).
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setNavLoading(true);
    const t = setTimeout(() => setNavLoading(false), 450);
    return () => clearTimeout(t);
  }, [loc.pathname]);

  return (
    <div className="min-h-screen">
      {splash !== "gone" && <SplashLoader fading={splash === "fade"} />}
      {navLoading && <RouteLoader />}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden before:absolute before:-left-[120px] before:-top-[220px] before:h-[620px] before:w-[620px] before:rounded-full before:bg-[radial-gradient(circle,rgba(1,183,171,0.22),transparent_70%)] before:opacity-50 before:blur-[120px] before:content-[''] after:absolute after:-right-[180px] after:top-[30%] after:h-[560px] after:w-[560px] after:rounded-full after:bg-[radial-gradient(circle,rgba(124,121,184,0.18),transparent_70%)] after:opacity-50 after:blur-[120px] after:content-[''] light:before:opacity-[0.35] light:after:opacity-[0.35]" />
      <header className="sticky top-0 z-50 flex h-16 items-center gap-[18px] border-b border-line bg-[color-mix(in_srgb,var(--dark-bg)_78%,transparent)] px-[22px] backdrop-blur-[14px]">
        <button
          className="hidden h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[10px] border border-line bg-surface text-txt-muted transition-all duration-150 hover:border-line-strong hover:bg-surface-strong hover:text-txt-bright max-[900px]:flex"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <Icon name="menu" size={18} />
        </button>
        <Link
          to="/"
          className="flex min-w-[calc(288px-22px)] items-center gap-[11px] text-txt-bright max-[900px]:min-w-0"
        >
          <img
            src={logo}
            alt="Astute"
            width={34}
            height={34}
            className="h-[34px] w-[34px] shrink-0 rounded-[9px] shadow-[0_4px_18px_rgba(1,183,171,0.35)]"
          />
          <span className="flex flex-col leading-[1.1]">
            <b className="font-head text-base tracking-[-0.02em] text-txt-bright">Astute Guide</b>
            <span className="text-[11px] uppercase tracking-[0.04em] text-txt-gray max-[900px]:hidden">
              How to use the app
            </span>
          </span>
        </Link>
        <button
          className="flex h-10 max-w-[440px] flex-1 cursor-text items-center gap-[9px] rounded-[11px] border border-line bg-surface px-3.5 text-sm text-txt-gray transition-all duration-[180ms] hover:border-line-strong hover:bg-surface-strong max-[900px]:max-w-[44px] max-[900px]:justify-center"
          onClick={() => setPaletteOpen(true)}
        >
          <Icon name="search" size={16} />
          <span className="max-[900px]:hidden">Search documentation…</span>
          <kbd className="ml-auto rounded-md border border-line bg-surface-strong px-[7px] py-0.5 font-mono text-[11px] text-txt-muted max-[900px]:hidden">
            ⌘K
          </kbd>
        </button>
        <div className="flex-1" />
        <div className="flex items-center gap-2">
          <button className={`${tbBtn} border-primary/30 bg-selected text-primary`} onClick={() => setPaletteOpen(true)}>
            <Icon name="sparkles" size={15} /> Ask
          </button>
          <button className={`${tbBtn} ${tbIcon}`} onClick={toggle} title="Toggle theme">
            <Icon name={light ? "moon" : "sun"} size={16} />
          </button>
        </div>
      </header>

      <div className="relative z-[1] mx-auto flex max-w-[1600px]">
        <div
          className={`fixed inset-x-0 bottom-0 top-16 z-[44] bg-black/50 backdrop-blur-[2px] ${
            mobileOpen ? "max-[900px]:block" : "hidden"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`sticky top-16 h-[calc(100vh-64px)] w-72 shrink-0 overflow-y-auto border-r border-line pb-[60px] pl-[22px] pr-3.5 pt-[22px] max-[900px]:fixed max-[900px]:left-0 max-[900px]:top-16 max-[900px]:z-[45] max-[900px]:bg-canvas max-[900px]:shadow-[20px_0_60px_rgba(0,0,0,0.5)] max-[900px]:transition-transform max-[900px]:duration-[250ms] ${
            mobileOpen ? "max-[900px]:translate-x-0" : "max-[900px]:-translate-x-[105%]"
          }`}
        >
          {NAV.map((section) => (
            <div className="mb-[22px]" key={section.heading}>
              <div className="flex items-center gap-2 px-2.5 pb-2 text-[11px] font-bold uppercase tracking-[0.09em] text-txt-gray">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
                {section.heading}
              </div>
              {section.items.map((item) => {
                const active = item.slug === slug;
                return (
                  <Link
                    key={item.slug}
                    to={"/" + item.slug}
                    className={`flex items-center gap-2.5 rounded-[9px] border px-[11px] py-[7.5px] text-sm leading-[1.3] transition-all duration-[130ms] ${
                      active
                        ? "border-primary/[0.22] bg-selected font-semibold text-primary"
                        : "border-transparent text-txt-muted hover:bg-surface hover:text-txt-bright"
                    }`}
                  >
                    {item.icon && (
                      <Icon name={item.icon} size={17} className="h-[17px] w-[17px] shrink-0 opacity-85" />
                    )}
                    {item.label}
                    {item.badge && (
                      <span className="ml-auto rounded-full bg-surface-strong px-[7px] py-px text-[10px] font-bold tracking-[0.03em] text-txt-gray">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </aside>

        {children}
      </div>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  );
}

/* ---------- Content wrapper with TOC + page nav ---------- */
export type Toc = { id: string; label: string; lvl?: 2 | 3 };

export function DocPage({
  title,
  section,
  toc,
  children,
}: {
  title: string;
  section: string;
  toc: Toc[];
  children: ReactNode;
}) {
  const loc = useLocation();
  const slug = pathToSlug(loc.pathname);
  const [activeId, setActiveId] = useState<string>("");

  const idx = FLAT.findIndex((f) => f.slug === slug);
  const prev = idx > 0 ? FLAT[idx - 1] : null;
  const next = idx >= 0 && idx < FLAT.length - 1 ? FLAT[idx + 1] : null;

  useEffect(() => {
    const ids = toc.map((t) => t.id);
    const onScroll = () => {
      let cur = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) cur = id;
      }
      setActiveId(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [toc]);

  return (
    <>
      <main className="min-w-0 flex-1 animate-fade-up px-[52px] pb-[120px] pt-10 max-[900px]:px-5 max-[900px]:pb-[100px] max-[900px]:pt-7 [&_ol]:mb-[18px] [&_ol]:pl-[22px] [&_ol]:text-txt-muted [&_p]:mb-4 [&_p]:text-txt-muted [&_ul]:mb-[18px] [&_ul]:pl-[22px] [&_ul]:text-txt-muted [&_li]:mb-2 [&_strong]:font-semibold [&_strong]:text-txt-bright">
        <div className="mx-auto max-w-[860px]">
          <div className="mb-5 flex items-center gap-2 text-[13px] text-txt-gray [&_b]:font-semibold [&_b]:text-txt-muted">
            <b>Docs</b>
            <span className="opacity-50">/</span>
            <b>{section}</b>
            <span className="opacity-50">/</span>
            <span style={{ color: "var(--primary)" }}>{title}</span>
          </div>
          {children}

          <div className="mt-16 flex gap-4 border-t border-line pt-7">
            {prev ? (
              <Link
                to={"/" + prev.slug}
                className="flex-1 rounded-card border border-line bg-surface px-[18px] py-4 transition-all duration-150 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-strong"
              >
                <div className="mb-1 text-xs text-txt-gray">← Previous</div>
                <div className="text-[15.5px] font-semibold text-txt-bright">{prev.label}</div>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
            {next ? (
              <Link
                to={"/" + next.slug}
                className="flex-1 rounded-card border border-line bg-surface px-[18px] py-4 text-right transition-all duration-150 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-strong"
              >
                <div className="mb-1 text-xs text-txt-gray">Next →</div>
                <div className="text-[15.5px] font-semibold text-txt-bright">{next.label}</div>
              </Link>
            ) : (
              <span className="flex-1" />
            )}
          </div>
        </div>
      </main>

      <aside className="sticky top-16 h-[calc(100vh-64px)] w-[232px] shrink-0 overflow-y-auto pb-[60px] pl-2 pr-[22px] pt-11 max-[1200px]:hidden">
        <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.09em] text-txt-gray">On this page</div>
        {toc.map((t) => (
          <a
            key={t.id}
            href={`#${t.id}`}
            className={`block cursor-pointer border-l-2 py-[5px] leading-[1.4] transition-all duration-150 ${
              t.lvl === 3 ? "pl-[26px] text-[12.5px]" : "pl-3.5 text-[13px]"
            } ${
              activeId === t.id
                ? "border-l-primary text-primary"
                : "border-line text-txt-gray hover:text-txt-muted"
            }`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(t.id)?.scrollIntoView({ behavior: "smooth" });
              history.replaceState(null, "", `#${t.id}`);
            }}
          >
            {t.label}
          </a>
        ))}
      </aside>
    </>
  );
}
