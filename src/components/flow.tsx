import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

const TIER_COLOR: Record<string, string> = {
  basic: "#848487",
  verified: "#38bdf8",
  trusted: "#01b7ab",
  use: "#a78bfa",
};

export type Stage = {
  icon: IconName;
  title: string;
  desc: string;
  tier?: "basic" | "verified" | "trusted" | "use";
  unlock?: string;
};

/* Horizontal (mobile: vertical) journey flow diagram */
export function RoleFlow({ stages, legend = true }: { stages: Stage[]; legend?: boolean }) {
  return (
    <div className="my-[30px]">
      <div className="overflow-x-auto px-0.5 pb-4 pt-1.5">
        <div className="flex min-w-min items-stretch max-[760px]:flex-col max-[760px]:items-stretch">
          {stages.map((s, i) => {
            const color = TIER_COLOR[s.tier ?? "trusted"];
            return (
              <div key={i} style={{ display: "contents" }}>
                <div
                  className="relative w-[208px] min-w-[208px] shrink-0 overflow-hidden rounded-card border border-line bg-surface px-[15px] pb-[15px] pt-4 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--tier,var(--primary))] hover:shadow-[0_14px_34px_rgba(0,0,0,0.35)] max-[760px]:w-full max-[760px]:min-w-0"
                  style={{ ["--tier" as string]: color }}
                >
                  <span className="absolute left-0 right-0 top-0 h-[3px] bg-[var(--tier,var(--primary))] opacity-85" />
                  <div className="mb-[11px] flex items-center gap-[9px]">
                    <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[10px] bg-[color-mix(in_srgb,var(--tier,var(--primary))_16%,transparent)] text-[var(--tier,var(--primary))]">
                      <Icon name={s.icon} size={18} />
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-txt-dim">STEP {i + 1}</span>
                  </div>
                  <div className="mb-1.5 font-head text-[14.5px] font-semibold leading-[1.25] text-txt-bright">{s.title}</div>
                  <div className="text-[12.5px] leading-[1.5] text-txt-gray">{s.desc}</div>
                  {s.unlock && (
                    <span className="mt-[11px] inline-flex items-center gap-[5px] rounded-full border border-[color-mix(in_srgb,var(--tier,var(--primary))_30%,transparent)] bg-[color-mix(in_srgb,var(--tier,var(--primary))_12%,transparent)] px-[9px] py-[3px] text-[11px] font-semibold text-[var(--tier,var(--primary))]">
                      <Icon name="check" size={12} /> {s.unlock}
                    </span>
                  )}
                </div>
                {i < stages.length - 1 && (
                  <div className="grid w-[34px] shrink-0 place-items-center self-center text-txt-dim max-[760px]:h-[30px] max-[760px]:w-full">
                    <Icon
                      name="arrow-right"
                      size={18}
                      className="animate-nudge-x max-[760px]:rotate-90 max-[760px]:animate-nudge-y"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {legend && (
        <div className="mt-1.5 flex flex-wrap gap-4 text-xs text-txt-gray">
          <span className="inline-flex items-center gap-1.5">
            <i className="block h-2.5 w-2.5 rounded-[3px]" style={{ background: TIER_COLOR.basic }} /> Basic
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="block h-2.5 w-2.5 rounded-[3px]" style={{ background: TIER_COLOR.verified }} /> Verified
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="block h-2.5 w-2.5 rounded-[3px]" style={{ background: TIER_COLOR.trusted }} /> Trusted
          </span>
          <span className="inline-flex items-center gap-1.5">
            <i className="block h-2.5 w-2.5 rounded-[3px]" style={{ background: TIER_COLOR.use }} /> Using Astute
          </span>
        </div>
      )}
    </div>
  );
}

/* Simple numbered vertical steps */
export function Steps({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <div className="my-6">
      {items.map((s, i) => (
        <div
          className="relative flex gap-[15px] pb-5 pt-1 [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:left-4 [&:not(:last-child)]:before:top-9 [&:not(:last-child)]:before:w-0.5 [&:not(:last-child)]:before:bg-line [&:not(:last-child)]:before:content-['']"
          key={i}
        >
          <div className="z-[1] grid h-[33px] w-[33px] shrink-0 place-items-center rounded-full border border-primary/30 bg-selected font-head text-sm font-bold text-primary">
            {i + 1}
          </div>
          <div className="flex-1 pt-1">
            <h4 className="m-0 mb-1 font-head text-[15.5px] text-txt-bright">{s.title}</h4>
            <p className="m-0 text-sm leading-[1.55] text-txt-gray">{s.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* "What you can do" vs "What's still locked" */
export function Split({
  can,
  locked,
  canTitle = "What you can do",
  lockedTitle = "Still locked",
}: {
  can: string[];
  locked: string[];
  canTitle?: string;
  lockedTitle?: string;
}) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3.5 max-[720px]:grid-cols-1">
      <div className="rounded-card border border-line bg-surface px-5 py-[18px]">
        <h4 className="m-0 mb-3 flex items-center gap-2 font-head text-sm" style={{ color: "var(--primary)" }}>
          <Icon name="check" size={16} /> {canTitle}
        </h4>
        <ul className="m-0 list-none pl-0.5">
          {can.map((c, i) => (
            <li
              key={i}
              className="mb-[9px] flex gap-[9px] text-[13.8px] leading-[1.45] text-txt-muted [&_svg]:mt-0.5 [&_svg]:shrink-0 [&_svg]:text-primary"
            >
              <Icon name="check" size={15} />
              {c}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-card border border-line bg-surface px-5 py-[18px]">
        <h4 className="m-0 mb-3 flex items-center gap-2 font-head text-sm" style={{ color: "var(--text-gray)" }}>
          <Icon name="lock" size={15} /> {lockedTitle}
        </h4>
        <ul className="m-0 list-none pl-0.5">
          {locked.map((c, i) => (
            <li
              className="mb-[9px] flex gap-[9px] text-[13.8px] leading-[1.45] text-txt-muted [&_svg]:mt-0.5 [&_svg]:shrink-0 [&_svg]:text-txt-dim"
              key={i}
            >
              <Icon name="lock" size={14} />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
