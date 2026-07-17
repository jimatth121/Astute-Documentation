import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FLAT } from "../nav";
import { Icon } from "./Icon";

export function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const nav = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQ("");
      setSel(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return FLAT;
    return FLAT.filter((i) =>
      (i.label + " " + i.section + " " + (i.keywords ?? "")).toLowerCase().includes(term),
    );
  }, [q]);

  useEffect(() => {
    if (sel >= results.length) setSel(0);
  }, [results, sel]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSel((s) => Math.min(s + 1, results.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSel((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && results[sel]) {
        nav("/" + results[sel].slug);
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, sel, nav, onClose]);

  if (!open) return null;

  const grouped = results.reduce<Record<string, typeof results>>((acc, r) => {
    (acc[r.section] ??= []).push(r);
    return acc;
  }, {});

  let idx = -1;
  return (
    <div
      className="fixed inset-0 z-[100] flex animate-fade-in items-start justify-center bg-[rgba(3,3,13,0.7)] pt-[12vh] backdrop-blur-[6px]"
      onClick={onClose}
    >
      <div
        className="w-[min(640px,92vw)] animate-fade-up overflow-hidden rounded-2xl border border-line-strong bg-surface-strong shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <Icon name="search" size={19} style={{ color: "var(--text-gray)" }} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the documentation…"
            className="flex-1 border-none bg-transparent font-body text-[16.5px] text-txt-bright outline-none placeholder:text-txt-gray"
          />
          <span className="rounded-md border border-line px-[7px] py-0.5 font-mono text-[11px] text-txt-gray">ESC</span>
        </div>
        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 && (
            <div className="p-[30px] text-center text-sm text-txt-gray">No results for “{q}”</div>
          )}
          {Object.entries(grouped).map(([section, items]) => (
            <div key={section}>
              <div className="px-3 pb-1.5 pt-2.5 text-[11px] font-bold uppercase tracking-[0.06em] text-txt-gray">
                {section}
              </div>
              {items.map((it) => {
                idx++;
                const myIdx = idx;
                const selected = myIdx === sel;
                return (
                  <div
                    key={it.slug}
                    className={`flex cursor-pointer items-center gap-3 rounded-[10px] px-3 py-2.5 ${
                      selected ? "bg-selected text-txt-bright" : "text-txt-muted"
                    }`}
                    onMouseEnter={() => setSel(myIdx)}
                    onClick={() => {
                      nav("/" + it.slug);
                      onClose();
                    }}
                  >
                    <span className={selected ? "text-primary" : "text-txt-gray"}>
                      <Icon name={it.icon ?? "book"} size={16} />
                    </span>
                    {it.label}
                    {it.badge && <span className="ml-auto text-xs text-txt-dim">{it.badge}</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
