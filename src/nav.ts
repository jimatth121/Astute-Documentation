import type { IconName } from "./components/Icon";

export type NavItem = {
  label: string;
  slug: string; // route path (without leading slash), "" = home
  icon?: IconName;
  badge?: string;
  keywords?: string;
};
export type NavSection = { heading: string; items: NavItem[] };

export const NAV: NavSection[] = [
  {
    heading: "Welcome",
    items: [
      { label: "What is Astute?", slug: "", icon: "home", keywords: "intro home overview start" },
      { label: "How it works", slug: "how-it-works", icon: "route", keywords: "journey findable fundable flow big picture" },
      { label: "Trust levels & badges", slug: "trust-levels", icon: "shield", keywords: "basic verified trusted institutional badge unlock" },
      { label: "Your readiness score", slug: "readiness-score", icon: "gauge", keywords: "0-100 tasks score fundable improve" },
    ],
  },
  {
    heading: "Guides by role",
    items: [
      { label: "Fund-seeker", slug: "roles/fund-seeker", icon: "seedling", keywords: "startup sme raise capital money" },
      { label: "Investor", slug: "roles/investor", icon: "compass", keywords: "angel invest deals thesis" },
      { label: "Investment firm", slug: "roles/firm", icon: "briefcase", keywords: "vc fund team" },
      { label: "Lender", slug: "roles/lender", icon: "bank", keywords: "loan credit borrower" },
      { label: "Broker", slug: "roles/broker", icon: "handshake", badge: "Soon", keywords: "intermediary clients" },
    ],
  },
  {
    heading: "Using Astute",
    items: [
      { label: "Getting verified", slug: "using/verification", icon: "user-check", keywords: "kyc id identity company checks unlock" },
      { label: "Matches & interest", slug: "using/matches", icon: "sparkles", keywords: "match feed marketplace express interest" },
      { label: "Astute Assistant", slug: "using/assistant", icon: "bot", keywords: "chatbot ai assistant chat help credits coach bot" },
      { label: "Deal rooms", slug: "using/deal-rooms", icon: "message", keywords: "chat documents milestones negotiate" },
      { label: "Your documents", slug: "using/documents", icon: "file", keywords: "vault upload pitch deck bank statement" },
      { label: "Alerts & settings", slug: "using/notifications", icon: "bell", keywords: "notifications email preferences profile" },
      { label: "Plans & billing", slug: "using/billing", icon: "credit-card", keywords: "subscription pay plan trial" },
    ],
  },
  {
    heading: "Developer",
    items: [
      { label: "Dev docs", slug: "dev-docs", icon: "code", keywords: "architecture stack tech next.js engineering build" },
    ],
  },
];

export const FLAT: (NavItem & { section: string })[] = NAV.flatMap((s) =>
  s.items.map((it) => ({ ...it, section: s.heading })),
);

export function pathToSlug(pathname: string): string {
  return pathname.replace(/^\//, "");
}
