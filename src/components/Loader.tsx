import logo from "../assets/logo.svg";

/**
 * The Astute logo wrapped in a rotating gradient ring.
 * Reused as a splash on first load and as the route-change indicator.
 */
export function LogoSpinner({ size = 56 }: { size?: number }) {
  const ring = size + 16;
  return (
    <div
      className="relative grid place-items-center"
      style={{ width: ring, height: ring }}
    >
      {/* rotating conic ring */}
      <span
        className="absolute inset-0 animate-spin-slow rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0%, var(--primary) 78%, transparent 100%)",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)",
        }}
      />
      {/* logo */}
      <img
        src={logo}
        alt="Astute"
        width={size}
        height={size}
        className="animate-pulse-glow rounded-[9px]"
        style={{ width: size, height: size }}
      />
    </div>
  );
}

/** Full-screen branded splash shown while the app boots. */
export function SplashLoader({ fading }: { fading: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[200] grid place-items-center bg-canvas transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-60 before:absolute before:left-1/2 before:top-1/2 before:h-[420px] before:w-[420px] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-[radial-gradient(circle,rgba(1,183,171,0.18),transparent_70%)] before:blur-[80px] before:content-['']" />
      <div className="relative flex animate-logo-pop flex-col items-center gap-5">
        <LogoSpinner size={64} />
        <div className="flex flex-col items-center gap-1">
          <b className="font-head text-lg tracking-[-0.02em] text-txt-bright">Astute Guide</b>
          <span className="text-xs uppercase tracking-[0.14em] text-txt-gray">
            Loading your guide…
          </span>
        </div>
      </div>
    </div>
  );
}

/** Compact top-corner indicator shown briefly on route changes. */
export function RouteLoader() {
  return (
    <div className="fixed right-5 top-[76px] z-[80] flex animate-fade-in items-center gap-2.5 rounded-full border border-line bg-surface-strong/90 px-3 py-1.5 shadow-[0_8px_28px_rgba(0,0,0,0.4)] backdrop-blur-md">
      <LogoSpinner size={20} />
      <span className="pr-1 font-mono text-[11px] tracking-[0.04em] text-txt-muted">
        Loading…
      </span>
    </div>
  );
}
