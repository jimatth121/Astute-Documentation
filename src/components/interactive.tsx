import { useState, type ReactNode } from "react";
import { Icon } from "./Icon";

/* ================= Trust Ladder ================= */
type TrustLevel = {
  level: string;
  name: string;
  tint: string;
  desc: string;
  achieve: string[];
  unlock: string[];
};

const TRUST: TrustLevel[] = [
  {
    level: "LEVEL 01",
    name: "BASIC",
    tint: "#848487",
    desc: "Sign up, verify email & phone, accept privacy policy.",
    achieve: [
      "Pick a role and register with email + password",
      "Verify email (token link) and phone (OTP)",
      "Accept the privacy policy & cookie consent",
    ],
    unlock: ["Browse public pages", "Cannot create requests or express interest"],
  },
  {
    level: "LEVEL 02",
    name: "VERIFIED",
    tint: "#38bdf8",
    desc: "Pass identity (ComplyCube) + business existence checks.",
    achieve: [
      "KYC identity + liveness via ComplyCube",
      "Proof of address uploaded",
      "Companies House lookup confirms the business (companies)",
    ],
    unlock: ["Submit funding requests", "View the match feed", "Deal Rooms still locked"],
  },
  {
    level: "LEVEL 03",
    name: "TRUSTED",
    tint: "#01b7ab",
    desc: "PEP/sanctions + source of funds + role-specific checks.",
    achieve: [
      "PEP/sanctions & AML screening (ComplyCube)",
      "Source of funds declared and reviewed",
      "Companies: PSCs confirmed, FCA/HMRC checks, bank statements",
    ],
    unlock: ["Unlock Deal Rooms", "Express formal interest", "Boosted match ranking"],
  },
  {
    level: "LEVEL 04",
    name: "INSTITUTIONAL",
    tint: "#a78bfa",
    desc: "All TRUSTED items + ICO registration + compliance officer.",
    achieve: [
      "ICO registration confirmed",
      "Compliance officer named",
      "All re-screenings up to date",
    ],
    unlock: ["Highest visibility", "Premium deal flow", "Reporting tools"],
  },
];

export function TrustLadder() {
  const [active, setActive] = useState(2);
  const cur = TRUST[active];
  return (
    <div>
      <div className="my-7 grid grid-cols-4 gap-3 max-[760px]:grid-cols-2">
        {TRUST.map((t, i) => (
          <div
            key={t.name}
            className={`relative cursor-pointer overflow-hidden rounded-card border bg-surface px-4 py-[18px] transition-all duration-200 hover:-translate-y-[3px] hover:border-[var(--tint,var(--primary))] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3)] ${
              i === active
                ? "-translate-y-[3px] border-[var(--tint,var(--primary))] shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                : "border-line"
            }`}
            style={{ ["--tint" as string]: t.tint }}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            <span className="absolute bottom-0 left-0 top-0 w-[3px] bg-[var(--tint,var(--primary))]" />
            <div className="mb-2 text-[11px] font-bold tracking-[0.06em] text-txt-gray">{t.level}</div>
            <div className="mb-2 font-head text-[18px] font-bold text-[var(--tint,var(--primary))]">{t.name}</div>
            <div className="text-[12.8px] leading-[1.5] text-txt-gray">{t.desc}</div>
          </div>
        ))}
      </div>
      <div
        className="my-5 animate-fade-in rounded-card border border-line bg-surface-strong px-6 py-[22px]"
        style={{ borderColor: cur.tint + "44" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-[11px] py-[3px] text-xs font-semibold text-txt-muted"
            style={{ color: cur.tint, borderColor: cur.tint + "55", background: cur.tint + "18" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-current" /> {cur.name}
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
          <div>
            <div
              className="mb-[9px] text-[11px] font-bold uppercase tracking-[0.08em] text-txt-gray"
              style={{ color: cur.tint }}
            >
              How to achieve it
            </div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {cur.achieve.map((a, i) => (
                <li key={i} style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 6 }}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className="mb-[9px] text-[11px] font-bold uppercase tracking-[0.08em] text-txt-gray"
              style={{ color: cur.tint }}
            >
              What it unlocks
            </div>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {cur.unlock.map((a, i) => (
                <li key={i} style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 6 }}>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Readiness Score Simulator ================= */
type Task = { id: string; label: string; done: boolean };

const START_TASKS: Task[] = [
  { id: "profile", label: "Complete company profile & financials", done: true },
  { id: "credit", label: "Run Credit Compass company check", done: false },
  { id: "pitch", label: "Upload your pitch deck", done: false },
  { id: "bank", label: "Upload 6 months of bank statements", done: false },
  { id: "hmrc", label: "Complete HMRC tax compliance (VAT)", done: false },
  { id: "sof", label: "Provide a Source of Funds statement", done: false },
];

export function ReadinessSimulator() {
  const [tasks, setTasks] = useState(START_TASKS);
  const doneCount = tasks.reduce((s, t) => (t.done ? s + 1 : s), 0);
  // Even weighting so ticking every task lands exactly on 100.
  const clamped = Math.round((doneCount / tasks.length) * 100);
  const tier = clamped >= 85 ? "TRUSTED" : clamped >= 40 ? "VERIFIED" : "BASIC";
  const tierColor = clamped >= 85 ? "#01b7ab" : clamped >= 40 ? "#38bdf8" : "#848487";
  const R = 54;
  const C = 2 * Math.PI * R;
  const toggle = (id: string) =>
    setTasks((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

  return (
    <div className="my-[26px] rounded-card border border-line bg-surface p-6">
      <div className="mb-[22px] flex items-center gap-6">
        <div className="relative h-32 w-32 shrink-0">
          <svg width="128" height="128" className="-rotate-90">
            <circle cx="64" cy="64" r={R} fill="none" stroke="var(--border)" strokeWidth="10" />
            <circle
              cx="64"
              cy="64"
              r={R}
              fill="none"
              stroke={tierColor}
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={C}
              strokeDashoffset={C - (clamped / 100) * C}
              style={{ transition: "stroke-dashoffset .5s ease, stroke .3s" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center font-head leading-none">
            <b className="text-[34px] leading-none text-txt-bright">{clamped}</b>
            <span className="mt-1 text-xs text-txt-gray">/ 100</span>
          </div>
        </div>
        <div className="flex-1">
          <h4 className="m-0 mb-1.5 text-base">
            Readiness Score{" "}
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-[11px] py-[3px] text-xs font-semibold text-txt-muted"
              style={{ color: tierColor, borderColor: tierColor + "55", background: tierColor + "18" }}
            >
              {tier}
            </span>
          </h4>
          <p className="m-0 text-[13.5px] text-txt-gray">
            Tick the AI-generated tasks to watch the score climb. At <strong>85+</strong> the
            fund-seeker reaches TRUSTED and unlocks Deal Rooms &amp; Express Interest. The real score
            is computed server-side from these same signals.
          </p>
        </div>
      </div>
      {tasks.map((t) => (
        <div
          className={`mb-[9px] flex cursor-pointer items-center gap-[13px] rounded-field border border-line bg-canvas px-3.5 py-3 transition-all duration-150 hover:border-primary/30 ${
            t.done ? "opacity-55" : ""
          }`}
          key={t.id}
          onClick={() => toggle(t.id)}
        >
          <span
            className={`grid h-[22px] w-[22px] shrink-0 place-items-center rounded-md border-2 transition-all duration-150 ${
              t.done ? "border-primary bg-primary text-[#03030d]" : "border-line-strong text-transparent"
            }`}
          >
            <Icon name="check" size={14} />
          </span>
          <span
            className={`flex-1 text-sm ${t.done ? "text-txt-gray line-through" : "text-txt"}`}
          >
            {t.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ================= Architecture Diagram ================= */
export function ArchDiagram() {
  const layers: { label: string; nodes: { name: string; sub: string }[] }[] = [
    {
      label: "Client — astute-fe",
      nodes: [
        { name: "Next.js 16 App Router", sub: "React 19 · TypeScript" },
        { name: "Chakra UI v3 + Tailwind v4", sub: "force-dark theme" },
        { name: "TanStack Query", sub: "server-state cache" },
      ],
    },
    {
      label: "Transport",
      nodes: [
        { name: "apiFetch / apiStream", sub: "JWT bearer · auto-refresh" },
        { name: "WebSockets", sub: "notifications · deal rooms" },
      ],
    },
    {
      label: "Backend — Django + DRF",
      nodes: [
        { name: "/api/v1/*", sub: "REST endpoints" },
        { name: "PostgreSQL + pgvector", sub: "AI similarity" },
        { name: "Celery + Redis", sub: "background tasks" },
      ],
    },
    {
      label: "External services",
      nodes: [
        { name: "ComplyCube", sub: "KYC · liveness · AML" },
        { name: "Companies House", sub: "KYB" },
        { name: "Creditsafe · HMRC · FCA", sub: "credit · VAT · permissions" },
        { name: "Stripe", sub: "subscriptions" },
      ],
    },
  ];
  return (
    <div className="my-7 rounded-card border border-line bg-[radial-gradient(600px_circle_at_50%_0%,rgba(1,183,171,0.05),transparent),var(--surface)] px-[22px] py-[26px]">
      {layers.map((l, i) => (
        <div key={i}>
          <div className="mb-4 last:mb-0">
            <div className="mb-[9px] text-[11px] font-bold uppercase tracking-[0.08em] text-txt-gray">{l.label}</div>
            <div className="flex flex-wrap gap-2.5">
              {l.nodes.map((n) => (
                <div
                  className="min-w-[120px] flex-1 cursor-default rounded-[10px] border border-line-strong bg-canvas px-3.5 py-3 transition-all duration-[180ms] hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                  key={n.name}
                >
                  <b className="mb-[3px] block font-head text-sm text-txt-bright">{n.name}</b>
                  <span className="text-[11.5px] text-txt-gray">{n.sub}</span>
                </div>
              ))}
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="my-1 text-center text-primary opacity-60">
              <Icon name="chevron" size={18} style={{ transform: "rotate(90deg)" }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ================= Role matrix ================= */
export function RoleMatrix() {
  const roles = [
    { name: "Fund-Seeker", slug: "fund_seeker", status: "Live", color: "#01b7ab" },
    { name: "Investor (Angel)", slug: "investor", status: "Live", color: "#38bdf8" },
    { name: "Investment Firm", slug: "investment_firm", status: "Live", color: "#a78bfa" },
    { name: "Lender", slug: "lender", status: "Live", color: "#fbbf24" },
    { name: "Broker", slug: "broker", status: "Planned", color: "#848487" },
    { name: "Team Member", slug: "team_member", status: "Live", color: "#7c79b8" },
  ];
  return (
    <div className="my-[26px] grid grid-cols-3 gap-4 max-[720px]:grid-cols-1">
      {roles.map((r) => (
        <div
          className="relative block cursor-default overflow-hidden rounded-card border border-line bg-surface p-5"
          key={r.slug}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span
              className="grid h-[38px] w-[38px] place-items-center rounded-[10px]"
              style={{ background: r.color + "1e", color: r.color, marginBottom: 12 }}
            >
              <Icon name="user-check" size={18} />
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-[11px] py-[3px] text-[10px] font-semibold text-txt-muted"
              style={{
                color: r.status === "Live" ? "#01b7ab" : "#848487",
                borderColor: r.status === "Live" ? "#01b7ab55" : "var(--border)",
              }}
            >
              {r.status}
            </span>
          </div>
          <div className="mb-1 flex items-center gap-[7px] font-head text-base font-semibold text-txt-bright">
            {r.name}
          </div>
          <code
            className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-primary"
            style={{ fontSize: 11.5 }}
          >
            {r.slug}
          </code>
        </div>
      ))}
    </div>
  );
}
