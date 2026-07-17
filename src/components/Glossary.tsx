import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Icon } from "./Icon";
import { CAT_META, type Cat, type GlossaryTerm } from "../data/glossary";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function firstLetter(term: string) {
  const c = term[0]?.toUpperCase() ?? "#";
  return /[A-Z]/.test(c) ? c : "#";
}

/** Wrap the matched substring of `text` in a highlight mark. */
function highlight(text: string, q: string): ReactNode {
  if (!q) return text;
  const i = text.toLowerCase().indexOf(q.toLowerCase());
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark className="rounded-[3px] bg-primary/25 px-[1px] text-txt-bright">
        {text.slice(i, i + q.length)}
      </mark>
      {text.slice(i + q.length)}
    </>
  );
}

function CatDot({ cat }: { cat: Cat }) {
  const m = CAT_META[cat];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border px-2 py-[2px] text-[10px] font-semibold tracking-[0.02em]"
      style={{ color: m.color, borderColor: m.color + "44", background: m.color + "14" }}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-current" />
      {m.label}
    </span>
  );
}

export function Glossary({
  terms,
  categories,
}: {
  terms: GlossaryTerm[];
  /** Show category filter chips (only when the set spans more than one module). */
  categories?: Cat[];
}) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<"all" | Cat>("all");
  const [activeLetter, setActiveLetter] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const showCats = !!categories && categories.length > 1;

  const catCounts = useMemo(() => {
    const counts: Record<string, number> = { all: terms.length };
    for (const c of categories ?? []) counts[c] = terms.filter((t) => t.cats.includes(c)).length;
    return counts;
  }, [terms, categories]);

  // Category filter first; the rail + letter set are based on this so they stay
  // stable while the user types a prefix.
  const catFiltered = useMemo(
    () => (cat === "all" ? terms : terms.filter((t) => t.cats.includes(cat))),
    [terms, cat],
  );

  // Search is a prefix match on the term name: the first letter picks the list,
  // each further letter narrows within it (dictionary-style).
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return catFiltered;
    return catFiltered.filter((t) => t.term.toLowerCase().startsWith(q));
  }, [catFiltered, query]);

  const groups = useMemo(() => {
    const m = new Map<string, GlossaryTerm[]>();
    for (const t of filtered) {
      const L = firstLetter(t.term);
      (m.get(L) ?? m.set(L, []).get(L)!).push(t);
    }
    return [...m.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const groupsRef = useRef(groups);
  groupsRef.current = groups;

  const present = useMemo(() => {
    const s = new Set<string>();
    for (const t of catFiltered) s.add(firstLetter(t.term));
    return s;
  }, [catFiltered]);

  // "/" focuses search; Escape clears it.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === "Escape" && document.activeElement === inputRef.current) {
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll-spy: highlight the letter currently near the top.
  useEffect(() => {
    const onScroll = () => {
      let cur = "";
      for (const [L] of groups) {
        const el = document.getElementById(`gloss-${L}`);
        if (el && el.getBoundingClientRect().top <= 150) cur = L;
      }
      setActiveLetter(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [groups]);

  const jump = (L: string) => {
    document.getElementById(`gloss-${L}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Typing (or picking a letter) jumps to the matching letter's section.
  useEffect(() => {
    if (!query.trim()) return;
    const g = groupsRef.current;
    if (g.length) jump(g[0][0]);
  }, [query]);

  return (
    <div className="my-6">
      {/* sticky toolbar: search + filters + A–Z */}
      <div className="sticky top-16 z-20 -mx-2 rounded-card border border-line bg-[color-mix(in_srgb,var(--surface)_88%,transparent)] px-3 py-3 backdrop-blur-[14px]">
        <div className="flex items-center gap-2.5">
          <div className="flex h-11 flex-1 items-center gap-2.5 rounded-[11px] border border-line bg-canvas px-3.5 transition-colors focus-within:border-primary/50">
            <Icon name="search" size={17} className="shrink-0 text-txt-gray" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a letter to jump, keep typing to search…"
              className="h-full flex-1 border-0 bg-transparent text-[14.5px] text-txt-bright outline-none placeholder:text-txt-gray"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="grid h-6 w-6 shrink-0 place-items-center rounded-full text-txt-gray transition-colors hover:bg-surface-strong hover:text-txt-bright"
              >
                <Icon name="arrow-right" size={13} className="rotate-45" />
              </button>
            ) : (
              <kbd className="hidden shrink-0 rounded-md border border-line bg-surface-strong px-[7px] py-0.5 font-mono text-[11px] text-txt-gray sm:block">
                /
              </kbd>
            )}
          </div>
          <span className="hidden shrink-0 font-mono text-[12px] text-txt-gray sm:block">
            {filtered.length} term{filtered.length === 1 ? "" : "s"}
          </span>
        </div>

        {showCats && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {(["all", ...(categories as Cat[])] as const).map((c) => {
              const isAll = c === "all";
              const meta = isAll ? null : CAT_META[c as Cat];
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[12.5px] font-semibold transition-all ${
                    active
                      ? "text-canvas"
                      : "border-line bg-surface text-txt-muted hover:border-line-strong hover:text-txt-bright"
                  }`}
                  style={
                    active
                      ? {
                          background: meta?.color ?? "var(--primary)",
                          borderColor: meta?.color ?? "var(--primary)",
                        }
                      : undefined
                  }
                >
                  {meta && (
                    <span
                      className="h-[7px] w-[7px] rounded-full"
                      style={{ background: active ? "currentColor" : meta.color }}
                    />
                  )}
                  {isAll ? "All" : meta!.label}
                  <span className={active ? "opacity-80" : "text-txt-gray"}>{catCounts[c] ?? 0}</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-2.5 flex flex-wrap gap-[3px]">
          {ALPHABET.map((L) => {
            const has = present.has(L);
            const isActive = activeLetter === L;
            return (
              <button
                key={L}
                disabled={!has}
                onClick={() => setQuery((q) => (q.trim().toUpperCase() === L ? "" : L))}
                className={`grid h-[26px] w-[26px] place-items-center rounded-md font-head text-[12px] font-bold transition-all ${
                  isActive
                    ? "bg-primary text-canvas"
                    : has
                      ? "text-txt-muted hover:bg-selected hover:text-primary"
                      : "cursor-default text-txt-dim opacity-40"
                }`}
              >
                {L}
              </button>
            );
          })}
        </div>
      </div>

      {/* term groups */}
      {groups.length === 0 ? (
        <div className="mt-8 grid place-items-center rounded-card border border-dashed border-line bg-surface px-6 py-14 text-center">
          <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-selected text-primary">
            <Icon name="search" size={22} />
          </span>
          <div className="font-head text-[16px] font-semibold text-txt-bright">No terms found</div>
          <div className="mt-1 text-[13.5px] text-txt-gray">
            Nothing matches “{query}”. Try a shorter or different word.
          </div>
        </div>
      ) : (
        <div className="mt-2">
          {groups.map(([L, items]) => (
            <section key={L} id={`gloss-${L}`} className="scroll-mt-[172px] pt-6">
              <div className="mb-2.5 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-selected font-head text-[15px] font-bold text-primary">
                  {L}
                </span>
                <div className="h-px flex-1 bg-line" />
                <span className="font-mono text-[11px] text-txt-gray">{items.length}</span>
              </div>
              <div className="grid gap-2">
                {items.map((t) => (
                  <div
                    key={t.term + t.cats.join()}
                    className="group rounded-card border border-line bg-surface px-4 py-3 transition-all duration-150 hover:border-primary/25 hover:bg-surface-strong"
                  >
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                      <h4 className="font-head text-[15px] font-semibold text-txt-bright">
                        {highlight(t.term, query.trim())}
                      </h4>
                      {t.cats.map((c) => (
                        <CatDot key={c} cat={c} />
                      ))}
                    </div>
                    <p className="mt-1 text-[13.8px] leading-[1.55] text-txt-muted">
                      {highlight(t.def, query.trim())}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
