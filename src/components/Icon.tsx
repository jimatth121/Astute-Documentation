import type { CSSProperties } from "react";

type IconName =
  | "home" | "book" | "layers" | "shield" | "users" | "route" | "sparkles"
  | "search" | "menu" | "sun" | "moon" | "arrow-right" | "arrow-up-right"
  | "chevron" | "check" | "copy" | "info" | "bulb" | "warn" | "note"
  | "code" | "cube" | "plug" | "lock" | "chart" | "bell" | "credit-card"
  | "file" | "database" | "server" | "flow" | "star" | "handshake"
  | "briefcase" | "bank" | "user-check" | "grid" | "message" | "external"
  | "seedling" | "compass" | "gauge" | "git" | "terminal" | "palette"
  | "bot" | "send" | "coins";

const paths: Record<IconName, React.ReactNode> = {
  home: <path d="M3 10.5 12 3l9 7.5M5 9.5V21h5v-6h4v6h5V9.5" />,
  book: <><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 1 2-2h13" /></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></>,
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 5.5a3 3 0 0 1 0 5.8M21 20c0-2.5-1.5-4.6-3.6-5.5" /></>,
  route: <><circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="5" r="2.5" /><path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6" /></>,
  sparkles: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 9 .7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />,
  search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />,
  "arrow-right": <path d="M5 12h14M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  chevron: <path d="m9 6 6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  copy: <><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  bulb: <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3Z" /></>,
  warn: <><path d="M12 3 2 20h20L12 3Z" /><path d="M12 9v5M12 17h.01" /></>,
  note: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  code: <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />,
  cube: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /></>,
  plug: <path d="M9 3v6M15 3v6M6 9h12v3a6 6 0 0 1-12 0V9ZM12 18v3" />,
  lock: <><rect x="4.5" y="10" width="15" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  chart: <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6" />,
  bell: <path d="M6 10a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6M10 21h4" />,
  "credit-card": <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h4" /></>,
  file: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  server: <><rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01M7 16.5h.01" /></>,
  flow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6a3 3 0 0 1 3 3v6" /></>,
  star: <path d="M12 3.5 14.6 9l6 .7-4.5 4.1 1.3 5.9L12 16.7 6.6 19.7l1.3-5.9L3.4 9.7l6-.7L12 3.5Z" />,
  handshake: <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2M3 11l3-3 5 4 2-2 5 4M8 8 6 6M13 13l4 4a1.4 1.4 0 0 0 2-2l-1-1" />,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
  bank: <path d="M4 10h16M4 10 12 4l8 6M6 10v7M10 10v7M14 10v7M18 10v7M3 21h18" />,
  "user-check": <><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6 1.3 0 2.5.4 3.5 1M16 16l2 2 4-4" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  message: <path d="M4 5h16v11H9l-4 4V5Z" />,
  external: <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />,
  seedling: <path d="M12 21v-8M12 13C12 9 9 6 4 6c0 4 3 7 8 7ZM12 13c0-3 2-6 8-6 0 3-2 6-8 6Z" />,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></>,
  gauge: <><path d="M12 13a1 1 0 0 0 1-1l3-5" /><path d="M4.5 18a9 9 0 1 1 15 0" /></>,
  git: <><circle cx="6" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="8" r="2.5" /><path d="M6 8.5v7M18 10.5c0 4-4 3.5-8 5.5" /></>,
  terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  palette: <path d="M12 3a9 9 0 1 0 0 18c1 0 1.5-.8 1.5-1.5 0-1.5-1-1.7-1-2.5 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4-4-7.5-9-7.5ZM7.5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3-3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />,
  bot: <><rect x="4" y="8" width="16" height="12" rx="3" /><path d="M12 8V4M8 3h8" /><circle cx="9" cy="13.5" r="1.1" fill="currentColor" stroke="none" /><circle cx="15" cy="13.5" r="1.1" fill="currentColor" stroke="none" /><path d="M9.5 17h5" /></>,
  send: <path d="M4 12 20 4l-6 16-2.5-6.5L4 12Z" />,
  coins: <><ellipse cx="9" cy="7" rx="5" ry="2.6" /><path d="M4 7v4c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V7" /><path d="M10 15.5c.9 1 3 1.7 5.5 1.7 2.8 0 5-1.2 5-2.6v-4c0-1.3-1.8-2.4-4.3-2.6" /></>,
};

export function Icon({
  name,
  size = 18,
  className,
  style,
  strokeWidth = 1.8,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
