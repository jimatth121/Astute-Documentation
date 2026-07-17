import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";
import { Link } from "react-router-dom";
import { Icon, type IconName } from "./Icon";

/* ---------- Hero ---------- */
export function Hero({
  badge,
  title,
  sub,
  children,
}: {
  badge?: string;
  title: ReactNode;
  sub: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="relative mb-5">
      {badge && (
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-selected px-3.5 py-[5px] text-[12.5px] font-semibold text-primary">
          <Icon name="sparkles" size={14} /> {badge}
        </span>
      )}
      <h1 className="mb-[18px] text-[52px] leading-[1.05] max-[720px]:text-[34px]">{title}</h1>
      <p className="mb-[26px] max-w-[640px] text-[19px] leading-[1.55] text-txt-muted">{sub}</p>
      {children}
    </div>
  );
}

/* ---------- Card grid ---------- */
export function CardGrid({
  cols = 2,
  children,
}: {
  cols?: 2 | 3;
  children: ReactNode;
}) {
  return (
    <div
      className={`my-[26px] grid gap-4 max-[720px]:grid-cols-1 ${
        cols === 3 ? "grid-cols-3" : "grid-cols-2"
      }`}
    >
      {children}
    </div>
  );
}

export function DocCard({
  icon,
  title,
  desc,
  to,
  badge,
}: {
  icon: IconName;
  title: string;
  desc: string;
  to: string;
  badge?: string;
}) {
  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const cardClass =
    "group relative block cursor-pointer overflow-hidden rounded-card border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-[3px] hover:border-primary/[0.32] hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-[250ms] before:content-[''] before:bg-[radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,0%),rgba(1,183,171,0.1),transparent_45%)] hover:before:opacity-100";
  const inner = (
    <>
      <span className="absolute right-[18px] top-5 text-txt-dim transition-all duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-primary">
        <Icon name="arrow-up-right" size={17} />
      </span>
      <span className="mb-3.5 grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-selected text-primary">
        <Icon name={icon} size={19} />
      </span>
      <span className="mb-[5px] flex items-center gap-[7px] font-head text-base font-semibold text-txt-bright">
        {title}
        {badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-selected px-[11px] py-[3px] text-[10px] font-semibold text-primary">
            {badge}
          </span>
        )}
      </span>
      <span className="text-[13.8px] leading-[1.5] text-txt-gray">{desc}</span>
    </>
  );
  const isExternal = to.startsWith("http");
  if (isExternal)
    return (
      <a className={cardClass} href={to} target="_blank" rel="noreferrer" onMouseMove={onMove}>
        {inner}
      </a>
    );
  return (
    <Link className={cardClass} to={to} onMouseMove={onMove as never}>
      {inner}
    </Link>
  );
}

/* ---------- Callout ---------- */
const calloutIcon: Record<string, IconName> = {
  info: "info",
  tip: "bulb",
  warn: "warn",
  note: "note",
};
const calloutStyle: Record<string, { box: string; ico: string }> = {
  info: { box: "border-sky/[0.28] bg-sky/[0.06]", ico: "text-sky" },
  tip: { box: "border-primary/30 bg-primary/[0.06]", ico: "text-primary" },
  warn: { box: "border-amber/30 bg-amber/[0.06]", ico: "text-amber" },
  note: { box: "border-violet/30 bg-violet/[0.06]", ico: "text-violet" },
};
export function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "tip" | "warn" | "note";
  title?: string;
  children: ReactNode;
}) {
  const s = calloutStyle[type];
  return (
    <div
      className={`my-[22px] flex gap-[13px] rounded-field border px-[17px] py-[15px] text-[14.5px] leading-[1.55] ${s.box}`}
    >
      <span className={`mt-px h-5 w-5 shrink-0 ${s.ico}`}>
        <Icon name={calloutIcon[type]} size={19} />
      </span>
      <div className="text-txt-muted [&_strong]:text-txt-bright">
        {title && <strong>{title}. </strong>}
        {children}
      </div>
    </div>
  );
}

/* ---------- Code block with copy + tokenization ---------- */
function tokenize(code: string, lang: string): ReactNode[] {
  const out: ReactNode[] = [];
  const lines = code.split("\n");
  lines.forEach((line, li) => {
    if (li > 0) out.push("\n");
    // comment lines
    if (/^\s*(\/\/|#)/.test(line) && lang !== "http") {
      out.push(
        <span key={`c${li}`} className="italic text-txt-dim">
          {line}
        </span>,
      );
      return;
    }
    // http method line
    if (lang === "http") {
      const m = line.match(/^(GET|POST|PUT|PATCH|DELETE)\s+(.*)$/);
      if (m) {
        out.push(
          <span key={`m${li}`}>
            <span className="text-sky">{m[1]}</span>{" "}
            <span className="text-primary">{m[2]}</span>
          </span>,
        );
        return;
      }
    }
    const parts = line.split(
      /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b\d+(?:\.\d+)?\b|\b(?:const|let|var|function|return|import|from|export|await|async|new|if|else|type|interface|useQuery|useMutation)\b)/g,
    );
    parts.forEach((p, pi) => {
      if (!p) return;
      const key = `${li}-${pi}`;
      if (/^["']/.test(p)) out.push(<span key={key} className="text-primary">{p}</span>);
      else if (/^\d/.test(p)) out.push(<span key={key} className="text-amber">{p}</span>);
      else if (
        /^(const|let|var|function|return|import|from|export|await|async|new|if|else|type|interface)$/.test(p)
      )
        out.push(<span key={key} className="text-secondary">{p}</span>);
      else if (/^(useQuery|useMutation)$/.test(p))
        out.push(<span key={key} className="text-sky">{p}</span>);
      else out.push(<span key={key}>{p}</span>);
    });
  });
  return out;
}

export function Code({
  children,
  lang = "ts",
  filename,
}: {
  children: string;
  lang?: string;
  filename?: string;
}) {
  const [copied, setCopied] = useState(false);
  const code = children.trim();
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="relative my-[22px] overflow-hidden rounded-field border border-line bg-[#06060f] light:bg-[#0b0b16]">
      <div className="flex items-center gap-2 border-b border-line bg-white/[0.02] px-3.5 py-[9px]">
        <span className="flex gap-1.5">
          <i className="block h-[11px] w-[11px] rounded-full" style={{ background: "#fb7185" }} />
          <i className="block h-[11px] w-[11px] rounded-full" style={{ background: "#fbbf24" }} />
          <i className="block h-[11px] w-[11px] rounded-full" style={{ background: "#01b7ab" }} />
        </span>
        {filename && <span className="ml-1.5 font-mono text-xs text-txt-gray">{filename}</span>}
        <span className="ml-auto font-mono text-[10.5px] uppercase tracking-[0.06em] text-txt-dim">{lang}</span>
        <button
          className="inline-flex cursor-pointer items-center gap-[5px] rounded-[7px] border border-line bg-surface-strong px-[9px] py-[3px] text-[11.5px] text-txt-gray transition-colors duration-150 hover:border-primary hover:text-primary"
          onClick={copy}
          style={{ marginLeft: filename ? 10 : "auto" }}
        >
          <Icon name={copied ? "check" : "copy"} size={12} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="m-0 overflow-x-auto px-[18px] py-4 font-mono text-[13px] leading-[1.7] text-[#d5d9e0]">
        <code>{tokenize(code, lang)}</code>
      </pre>
    </div>
  );
}

/* ---------- Endpoint list ---------- */
export type Endpoint = { method: string; path: string; desc?: string };
const methodStyle: Record<string, string> = {
  get: "text-sky bg-sky/[0.12]",
  post: "text-primary bg-primary/[0.13]",
  put: "text-amber bg-amber/[0.12]",
  patch: "text-amber bg-amber/[0.12]",
  delete: "text-rose bg-rose/[0.12]",
};
export function Endpoints({ items }: { items: Endpoint[] }) {
  return (
    <div className="my-6 overflow-hidden rounded-card border border-line">
      {items.map((e, i) => (
        <div
          className="grid grid-cols-[78px_1fr] items-center gap-3.5 border-b border-line px-4 py-[13px] transition-colors duration-150 last:border-b-0 hover:bg-surface"
          key={i}
        >
          <span
            className={`rounded-md py-1 text-center font-mono text-[11px] font-bold tracking-[0.03em] ${
              methodStyle[e.method.toLowerCase()] ?? ""
            }`}
          >
            {e.method}
          </span>
          <div>
            <div className="break-all font-mono text-[12.8px] text-txt">{e.path}</div>
            {e.desc && <div className="mt-[3px] text-[12.5px] text-txt-gray">{e.desc}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Table ---------- */
export function Table({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="my-[22px] w-full overflow-hidden rounded-card border border-line text-sm [border-collapse:collapse] [&_tr:hover_td]:bg-surface [&_tr:last-child_td]:border-b-0 [&_code]:font-mono [&_code]:text-xs [&_code]:text-primary">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                className="border-b border-line bg-surface-strong px-4 py-3 text-left font-head text-[12.5px] uppercase tracking-[0.05em] text-txt-gray"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j} className="border-b border-line px-4 py-3 align-top text-txt-muted">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Pill ---------- */
const pillVariant: Record<string, string> = {
  "": "",
  basic: "text-txt-gray",
  verified: "text-sky border-sky/30 bg-sky/[0.08]",
  trusted: "text-primary border-primary/30 bg-selected",
  institutional: "text-violet border-violet/30 bg-violet/[0.08]",
  must: "text-primary border-primary/30",
  should: "text-amber border-amber/30",
};
export function Pill({
  children,
  variant = "",
}: {
  children: ReactNode;
  variant?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-[11px] py-[3px] text-xs font-semibold text-txt-muted ${
        pillVariant[variant] ?? ""
      }`}
    >
      {children}
    </span>
  );
}

/* ---------- Tabs ---------- */
export function Tabs({
  tabs,
}: {
  tabs: { label: string; content: ReactNode }[];
}) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-6">
      <div className="flex gap-1 overflow-x-auto border-b border-line">
        {tabs.map((t, i) => (
          <button
            key={i}
            className={`-mb-px cursor-pointer whitespace-nowrap border-b-2 px-[15px] py-2.5 font-body text-sm font-semibold transition-colors duration-150 ${
              i === active
                ? "border-b-primary text-primary"
                : "border-transparent text-txt-gray hover:text-txt-muted"
            }`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in pt-[18px]" key={active}>
        {tabs[active].content}
      </div>
    </div>
  );
}

/* ---------- Stat tiles ---------- */
export function Stats({
  items,
}: {
  items: { val: string; label: string }[];
}) {
  return (
    <div className="my-[26px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3.5">
      {items.map((s, i) => (
        <div
          className="rounded-card border border-line bg-surface p-[18px] transition-colors duration-[180ms] hover:border-primary/25"
          key={i}
        >
          <div className="font-head text-[30px] font-bold leading-none text-primary">{s.val}</div>
          <div className="mt-[7px] text-[12.5px] text-txt-gray">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Feature rows ---------- */
export function Feature({
  code,
  name,
  desc,
  priority,
}: {
  code: string;
  name: string;
  desc: string;
  priority?: "must" | "should";
}) {
  return (
    <div className="mb-2.5 flex items-start gap-3.5 rounded-field border border-line bg-surface px-4 py-3.5 transition-all duration-150 hover:translate-x-[3px] hover:border-primary/25">
      <span className="shrink-0 rounded-[7px] bg-selected px-[9px] py-1 font-mono text-[13px] font-bold text-primary">
        {code}
      </span>
      <div className="flex-1">
        <div className="mb-0.5 text-[14.5px] font-semibold text-txt-bright">{name}</div>
        <div className="text-[13px] text-txt-gray">{desc}</div>
      </div>
      {priority && (
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-surface px-[11px] py-[3px] text-xs font-semibold ${pillVariant[priority]}`}
        >
          {priority === "must" ? "Must" : "Should"}
        </span>
      )}
    </div>
  );
}

/* ---------- Journey stepper ---------- */
export function Journey({
  steps,
}: {
  steps: { title: ReactNode; body: ReactNode }[];
}) {
  const [on, setOn] = useState(0);
  return (
    <div className="relative my-[28px]">
      {steps.map((s, i) => (
        <div className="flex gap-[18px] pb-1.5" key={i} onMouseEnter={() => setOn(i)}>
          <div className="flex shrink-0 flex-col items-center">
            <div
              className={`z-[1] grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border-2 font-head text-sm font-bold text-primary transition-all duration-200 ${
                i <= on
                  ? "border-primary bg-selected shadow-[0_0_0_4px_rgba(1,183,171,0.12)]"
                  : "border-line-strong bg-surface-strong"
              }`}
            >
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div className="my-1 min-h-[18px] w-0.5 flex-1 bg-gradient-to-b from-line-strong to-line" />
            )}
          </div>
          <div className="flex-1 pb-[26px]">
            <div className="mb-1 flex flex-wrap items-center gap-2.5 font-head text-base font-semibold text-txt-bright">
              {s.title}
            </div>
            <div className="text-sm leading-[1.55] text-txt-gray [&_ul]:mb-0 [&_ul]:mt-2">{s.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- File tree ---------- */
export function FileTree({ children }: { children: ReactNode }) {
  return (
    <div className="my-[22px] overflow-x-auto rounded-field border border-line bg-[#06060f] px-[18px] py-4 font-mono text-[13px] leading-[1.9]">
      {children}
    </div>
  );
}

/* ---------- Section heading with anchor ---------- */
export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="group relative mb-4 mt-[46px] cursor-pointer scroll-mt-[90px] pt-2 text-[25px]"
    >
      {children}
      <a
        className="ml-2 font-normal text-txt-gray opacity-0 transition-opacity duration-150 group-hover:opacity-100"
        href={`#${id}`}
      >
        #
      </a>
    </h2>
  );
}
export function H3({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3
      id={id}
      className="group relative mb-3 mt-8 cursor-pointer scroll-mt-[90px] text-[18.5px] text-txt-bright"
    >
      {children}
    </h3>
  );
}

/* ---------- Divider ---------- */
export function Divider() {
  return <div className="my-10 h-px bg-line" />;
}

/* ---------- "Was this helpful" ---------- */
export function Helpful() {
  const [v, setV] = useState<null | boolean>(null);
  return (
    <div className="mt-10 flex items-center gap-3 text-sm text-txt-muted">
      {v === null ? (
        <>
          <span>Was this page helpful?</span>
          <button
            className="cursor-pointer rounded-[9px] border border-line bg-surface px-3.5 py-1.5 text-[13px] text-txt-muted transition-colors duration-150 hover:border-primary hover:text-primary"
            onClick={() => setV(true)}
          >
            👍 Yes
          </button>
          <button
            className="cursor-pointer rounded-[9px] border border-line bg-surface px-3.5 py-1.5 text-[13px] text-txt-muted transition-colors duration-150 hover:border-primary hover:text-primary"
            onClick={() => setV(false)}
          >
            👎 No
          </button>
        </>
      ) : (
        <span>{v ? "Thanks for the feedback!" : "Thanks — we'll improve this page."}</span>
      )}
    </div>
  );
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(16px)",
        transition: `opacity .5s ${delay}ms, transform .5s ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
