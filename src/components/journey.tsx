import { useState } from "react";
import { Icon } from "./Icon";

const TIER: Record<string, string> = {
  basic: "#848487",
  verified: "#38bdf8",
  trusted: "#01b7ab",
  use: "#a78bfa",
};
const TIER_LABEL: Record<string, string> = {
  basic: "BASIC",
  verified: "VERIFIED",
  trusted: "TRUSTED",
  use: "USING ASTUTE",
};

export type JourneyStep = {
  label: string; // short rail label
  tier: "basic" | "verified" | "trusted" | "use";
  title: string;
  desc: string;
  points: string[];
  unlock?: string;
};

/** Interactive click-through journey: a progress rail + a synced detail card. */
export function JourneyExplorer({ steps }: { steps: JourneyStep[] }) {
  const [active, setActive] = useState(0);
  const cur = steps[active];
  const color = TIER[cur.tier];
  const pct = steps.length > 1 ? (active / (steps.length - 1)) * 100 : 0;

  return (
    <div className="my-7">
      {/* progress rail */}
      <div className="relative px-1">
        <div className="absolute left-3 right-3 top-[18px] h-[2px] rounded bg-line" />
        <div
          className="absolute left-3 top-[18px] h-[2px] rounded bg-primary transition-all duration-300"
          style={{ width: `calc((100% - 24px) * ${pct / 100})` }}
        />
        <div className="relative flex justify-between">
          {steps.map((s, i) => {
            const done = i <= active;
            const c = TIER[s.tier];
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex flex-col items-center gap-2"
                aria-label={s.label}
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-full border-2 font-head text-[13px] font-bold transition-all duration-200"
                  style={
                    done
                      ? { borderColor: c, background: c + "22", color: c }
                      : { borderColor: "var(--border-strong)", color: "var(--text-dim)" }
                  }
                >
                  {i + 1}
                </span>
                <span
                  className={`hidden max-w-[92px] text-center text-[11px] leading-tight sm:block ${
                    i === active ? "font-semibold text-txt-bright" : "text-txt-gray"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* detail card */}
      <div
        key={active}
        className="mt-6 animate-fade-in rounded-card border bg-surface-strong p-5 sm:p-6"
        style={{ borderColor: color + "44" }}
      >
        <div className="mb-3 flex items-center gap-2.5">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold tracking-[0.04em]"
            style={{ color, borderColor: color + "55", background: color + "18" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-current" />
            {TIER_LABEL[cur.tier]}
          </span>
          <span className="font-mono text-[11px] text-txt-dim">
            Step {active + 1} of {steps.length}
          </span>
        </div>

        <h4 className="mb-1.5 font-head text-lg font-semibold text-txt-bright">{cur.title}</h4>
        <p className="mb-3.5 text-[14.5px] leading-[1.55] text-txt-muted">{cur.desc}</p>

        <ul className="mb-1 space-y-2">
          {cur.points.map((p, i) => (
            <li key={i} className="flex items-start gap-2.5 text-[13.8px] text-txt-muted">
              <Icon name="check" size={15} className="mt-0.5 shrink-0" style={{ color }} />
              {p}
            </li>
          ))}
        </ul>

        {cur.unlock && (
          <span
            className="mt-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold"
            style={{ color, borderColor: color + "4d", background: color + "14" }}
          >
            <Icon name="check" size={12} /> Unlocks: {cur.unlock}
          </span>
        )}

        {/* controls */}
        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <button
            onClick={() => setActive((i) => Math.max(0, i - 1))}
            disabled={active === 0}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-semibold text-txt-muted transition-colors enabled:hover:border-line-strong enabled:hover:text-txt-bright disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Icon name="arrow-right" size={15} className="rotate-180" /> Back
          </button>
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to step ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-200"
                style={{
                  width: i === active ? 18 : 6,
                  background: i === active ? color : "var(--border-strong)",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((i) => Math.min(steps.length - 1, i + 1))}
            disabled={active === steps.length - 1}
            className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-selected px-3.5 py-1.5 text-[13px] font-semibold text-primary transition-colors enabled:hover:bg-primary/[0.18] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next <Icon name="arrow-right" size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Compact visual of the AI touches woven through every journey. */
const AI_TOUCHES: { icon: Parameters<typeof Icon>[0]["name"]; title: string; desc: string }[] = [
  { icon: "compass", title: "Next-Best-Action", desc: "A widget that always tells you your single highest-impact next step." },
  { icon: "sparkles", title: "Match reasons", desc: "Every match comes with a plain-English “why it fits”." },
  { icon: "file", title: "Due-diligence summary", desc: "One click turns a deal room's docs into a structured memo." },
  { icon: "gauge", title: "Financial parsing", desc: "Bank statements are read automatically to surface cashflow." },
];

export function AiAlongTheWay() {
  return (
    <div className="my-6 grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
      {AI_TOUCHES.map((a) => (
        <div
          key={a.title}
          className="flex gap-3 rounded-card border border-line bg-surface p-4 transition-colors hover:border-primary/30"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-selected text-primary">
            <Icon name={a.icon} size={18} />
          </span>
          <div>
            <div className="mb-0.5 font-head text-[14px] font-semibold text-txt-bright">{a.title}</div>
            <div className="text-[12.8px] leading-[1.45] text-txt-gray">{a.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
