import { DocPage } from "../components/Layout";
import { Callout, Code, H2, Table, Helpful, FileTree, Divider } from "../components/doc";
import { ArchDiagram } from "../components/interactive";

export function DevDocs() {
  return (
    <DocPage
      title="Dev docs"
      section="Developer"
      toc={[
        { id: "intro", label: "For engineers" },
        { id: "stack", label: "The stack" },
        { id: "run", label: "Run it locally" },
        { id: "diagram", label: "How it fits together" },
        { id: "structure", label: "Project structure" },
        { id: "theme", label: "Design tokens" },
        { id: "services", label: "External services" },
        { id: "security", label: "Security rules" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Dev docs</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        A technical orientation for engineers working on <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">astute-fe</code>,
        the Next.js web client. The rest of this guide is written for end users — this page is the
        map for the people building it.
      </p>

      <H2 id="intro">For engineers</H2>
      <p>
        astute-fe renders six role-specific dashboards on top of a Django REST backend, with AI
        matching, real-time deal rooms, and a wall of compliance integrations — all proxied
        server-side. The client's job is orchestration: show the right screens for a role, drive
        verification SDKs, cache server state, and stream real-time updates.
      </p>

      <H2 id="stack">The stack</H2>
      <Table
        head={["Layer", "Technology"]}
        rows={[
          ["Framework", "Next.js 16 (App Router), React 19, TypeScript"],
          ["UI", "Chakra UI v3 + Tailwind v4 utility layer"],
          ["Server state", "TanStack Query (one client, retry: 1, no refetch-on-focus)"],
          ["Forms", "react-hook-form + zod schemas"],
          ["Charts / PDF", "recharts · react-pdf · pdfjs-dist"],
          ["Fonts", "Dunbar (headings), Karla (body) via next/font"],
          ["Backend", "Django + DRF · PostgreSQL + pgvector · Celery + Redis"],
          ["Real-time", "Django Channels (WebSockets)"],
        ]}
      />
      <Callout type="warn" title="Force-dark theme">
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">next-themes</code> was removed (it caused a hydration error). The
        app renders dark-only — the color-mode provider is a pass-through and every{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">useColorModeValue(light, dark)</code> returns the dark value.
      </Callout>

      <H2 id="run">Run it locally</H2>
      <Code lang="bash" filename="terminal">{`yarn install
yarn dev            # next dev --webpack → http://localhost:3000
yarn build          # production build
yarn dev:theme      # regenerate Chakra theme types`}</Code>
      <p>One environment variable points the client at a backend:</p>
      <Code lang="bash" filename=".env">{`NEXT_PUBLIC_API_BASE_URL=https://staging-api.astuteapp.io`}</Code>
      <p>
        WebSocket URLs are derived from this base by swapping the protocol to{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">ws(s)://</code>. All data access goes through two wrappers in{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">src/lib/api.ts</code> — <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">apiFetch</code>{" "}
        (JSON &amp; FormData) and <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">apiStream</code> (SSE for the AI
        assistant) — both attaching a JWT bearer token and refreshing it transparently on a 401.
      </p>

      <H2 id="diagram">How it fits together</H2>
      <ArchDiagram />

      <H2 id="structure">Project structure</H2>
      <p>
        Route-first: routing and route-specific code live together in{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">src/app</code>. Shared folders exist only for code that serves
        multiple routes. Underscore-prefixed folders (<code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">_components</code>,{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">_data</code>, <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">_nav.ts</code>) are colocated
        and kept out of the router.
      </p>
      <FileTree>
        <div><span className="text-primary">src/</span></div>
        <div>├─ <span className="text-primary">app/</span></div>
        <div>│  ├─ <span className="text-primary">(auth)/</span> <span className="text-txt-dim"># login, register, verify, legal</span></div>
        <div>│  └─ <span className="text-primary">dashboard/</span></div>
        <div>│     ├─ <span className="text-primary">_components/</span> <span className="text-txt-dim"># shared dashboard UI</span></div>
        <div>│     └─ <span className="text-primary">(roles)/</span> <span className="text-txt-dim"># fund-seeker, investor, firm, lender, broker</span></div>
        <div>├─ <span className="text-primary">components/</span> <span className="text-txt-dim"># auth, layout, providers, ui</span></div>
        <div>├─ <span className="text-primary">hooks/</span> <span className="text-txt-dim"># TanStack Query hooks by domain</span></div>
        <div>├─ <span className="text-primary">lib/</span> <span className="text-txt-muted">api.ts</span> <span className="text-txt-muted">roles.ts</span> <span className="text-txt-muted">complycube.ts</span> …</div>
        <div>├─ <span className="text-primary">schemas/</span> <span className="text-primary">theme/</span> <span className="text-primary">types/</span> <span className="text-primary">utils/</span></div>
      </FileTree>
      <Callout type="note">
        Each role folder owns its <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">layout.tsx</code> (guards + providers +
        shell), a <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">_nav.ts</code>, and colocated components. Role gating reads
        three fields off <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">user.firm</code>:{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">membership_role</code>,{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">can_participate_deal_rooms</code>, and the top-level{" "}
        <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">role</code>.
      </Callout>

      <H2 id="theme">Design tokens</H2>
      <p>
        Defined in <code className="rounded-md border border-line bg-surface-strong px-1.5 py-[1.5px] font-mono text-[13px] text-primary">src/theme/colors.ts</code>. This documentation site reuses
        them exactly.
      </p>
      <Code lang="ts" filename="src/theme/colors.ts">{`primary:       "#01B7AB"   // teal accent
primaryHover:  "#00968D"
secondary:     "#7C79B8"
darkBg:        "#03030D"   // canvas
surface:       "#0B0B16"
surfaceStrong: "#111120"
textPrimary:   "#FFFFFFCC"
textGray:      "#848487"`}</Code>

      <H2 id="services">External services</H2>
      <Table
        head={["Service", "Used for"]}
        rows={[
          ["ComplyCube", "KYC identity, liveness, PEP/sanctions/AML"],
          ["Companies House", "Business (KYB) verification"],
          ["Creditsafe", "Credit Compass company score"],
          ["HMRC", "VAT number validation"],
          ["FCA Register", "Authorisation & permissions (firms, lenders)"],
          ["Stripe", "Subscriptions & billing"],
          ["PostHog / Sentry", "Analytics & error tracking"],
        ]}
      />
      <Callout type="note">
        The PRD names Smile Identity, ComplyAdvantage and GoCardless. The shipped client uses{" "}
        <strong>ComplyCube</strong> for identity + AML and <strong>Stripe</strong> for billing — this
        page reflects the actual code.
      </Callout>

      <H2 id="security">Security rules</H2>
      <ul>
        <li>All third-party API calls go through the backend — never from the browser.</li>
        <li>Raw identity documents aren't stored; only the verification result and a reference ID.</li>
        <li>Financial documents live encrypted in S3, reachable only via short-lived signed URLs.</li>
        <li>Every significant action is written to an immutable audit trail.</li>
      </ul>

      <Divider />
      <Callout type="tip" title="Want the deep reference?">
        This page is a deliberately light orientation. The full route map, hook catalogue and API
        surface live in the codebase and internal engineering docs — kept out of this user-facing
        guide on purpose.
      </Callout>

      <Helpful />
    </DocPage>
  );
}
