import { DocPage } from "../components/Layout";
import { Callout, CardGrid, DocCard, H2, Helpful, Journey, Pill, Table } from "../components/doc";

const titleClass = "mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl";
const introClass = "mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted";

export function FundingRequests() {
  return <DocPage title="Funding requests" section="Using Astute" toc={[{id:"types",label:"The five products"},{id:"lifecycle",label:"Request lifecycle"},{id:"quality",label:"What makes a strong request"},{id:"after",label:"What happens next"}]}>
    <h1 className={titleClass}>Funding requests</h1>
    <p className={introClass}>A funding request is the structured brief that tells capital providers what a business needs, why it needs it, and whether the opportunity fits their mandate.</p>
    <H2 id="types">The five products</H2>
    <Table head={["Type","Use it for","Information unique to it"]} rows={[
      ["Loan","A defined amount repaid over time","Term, target rate, collateral, existing borrowing and repayment record"],
      ["Debt financing","Structured or specialist borrowing","Debt structure, term, security and existing obligations"],
      ["Credit","A reusable or revolving facility","Credit limit, existing credit and repayment cadence"],
      ["Equity","Capital exchanged for ownership","Stage, valuation, equity offered, previous raises and close timeline"],
      ["Grant","Non-dilutive programme funding","Grant body, category, previous impact, goals and vision"],
    ]}/>
    <Callout type="info" title="More than one request">A fund-seeker may have several active requests. Where a screen needs one primary request, Astute uses the newest active request.</Callout>
    <H2 id="lifecycle">Request lifecycle</H2>
    <Journey steps={[
      {title:"Draft",body:"Save incomplete work privately and return later."},
      {title:"Active",body:"Publish the request so eligible, verified capital providers can be matched to it."},
      {title:"Closed or funded",body:"Retire the request when it is no longer seeking capital and preserve its deal history."},
    ]}/>
    <H2 id="quality">What makes a strong request</H2>
    <p>Use a precise amount and purpose, keep the company profile current, upload the supporting documents appropriate to the product, and resolve the highest-impact readiness actions. A stronger request improves the evidence behind matching; it does not guarantee funding.</p>
    <H2 id="after">What happens next</H2>
    <p>Publishing starts an asynchronous matching run. Hard eligibility checks narrow the pool before AI ranks candidates. Each result includes a score and a plain-language, per-dimension explanation. Mutual interest creates a private deal room.</p>
    <CardGrid><DocCard icon="sparkles" title="Understand matching" desc="Learn how scores, reports and mutual interest work." to="/using/matches"/><DocCard icon="gauge" title="Improve readiness" desc="Strengthen the evidence behind your raise." to="/readiness-score"/></CardGrid>
    <Helpful />
  </DocPage>;
}

export function AiCapabilities() {
  return <DocPage title="AI capabilities" section="Using Astute" toc={[{id:"principles",label:"How AI behaves"},{id:"capabilities",label:"Capabilities"},{id:"control",label:"Your control"},{id:"roadmap",label:"Not yet surfaced"}]}>
    <h1 className={titleClass}>AI across Astute</h1>
    <p className={introClass}>Astute uses one secure AI service for coaching, analysis, matching and document intelligence. AI supports decisions; verification and human judgement remain decisive.</p>
    <H2 id="principles">How AI behaves</H2>
    <Callout type="tip" title="A consistent pattern">An action starts processing, a visible working state appears, and the result is saved in place. Refreshing the page does not discard completed work.</Callout>
    <H2 id="capabilities">Capabilities</H2>
    <Table head={["Capability","Who benefits","What it does"]} rows={[
      ["Readiness score","Fund-seekers","Scores fundability from 0–100 across evidence pillars and explains weak areas."],
      ["Next Best Action","Main roles","Surfaces short, context-aware tasks and retires them when completed or obsolete."],
      ["Pitch analysis","Fund-seekers","Extracts team, market, traction and financial signals from a pitch deck."],
      ["Intelligent matching","Seekers and providers","Ranks eligible counterparties and explains sector, ticket, stage and geography fit."],
      ["AI chat","All main roles","Answers context-aware questions using plan-based AI credits."],
      ["Document intelligence","All document users","Classifies uploads and progressively extracts financial signals."],
      ["Deal-packaging suggestions","Brokers","Finds genuine client gaps and creates grounded recommendations with projected impact."],
    ]}/>
    <H2 id="control">Your control</H2>
    <p>Review extracted pitch values and override mistakes; user corrections take precedence. Treat financial extraction as progressively arriving, and treat an empty result as valid—zero matches or suggestions can mean there is nothing honest to recommend yet.</p>
    <H2 id="roadmap">Not yet surfaced</H2>
    <p>Due-diligence memo generation and anomaly-detection interfaces exist as planned capabilities but are not yet product surfaces. They should not be presented as available user actions.</p>
    <Helpful />
  </DocPage>;
}

export function AdminGuide() {
  return <DocPage title="Platform admin" section="Guides by role" toc={[{id:"scope",label:"Admin scope"},{id:"trust",label:"Trust operations"},{id:"governance",label:"Governance rules"},{id:"controls",label:"Platform controls"}]}>
    <h1 className={titleClass}>Platform admin</h1>
    <p className={introClass}>The operations workspace for keeping Astute trustworthy, supportable and commercially accountable.</p>
    <H2 id="scope">Admin scope</H2>
    <Table head={["Area","Responsibilities"]} rows={[
      ["Subscribers","Review plans, status and subscription history."],
      ["Revenue","Monitor invoices, refunds, summaries and trends."],
      ["Verification","Review source-of-funds cases, screening outcomes and admin-locked trust tiers."],
      ["Moderation","Review flagged rooms and reasons using the approved workflow."],
      ["Audit","Trace sensitive trust, moderation and billing actions in the append-only log."],
      ["Rollout","Enable or disable controlled capabilities by environment."],
    ]}/>
    <H2 id="trust">Trust operations</H2>
    <p>Tier 3 Institutional status is admin-awarded. Tier changes and source-of-funds decisions require evidence and create audit records; trust standing is never changed as an informal support shortcut.</p>
    <H2 id="governance">Governance rules</H2>
    <ul><li>Use least-privilege access and MFA for admin accounts.</li><li>Moderation is review-led; opening a flagged room is a sensitive action.</li><li>Do not disclose why another user's inaccessible profile appears as “not found.”</li><li>Preserve history: archived rooms and ended representations are soft-deleted, not erased.</li></ul>
    <H2 id="controls">Platform controls</H2>
    <p>Feature switches support progressive rollout for matching, AI chat, pitch analysis, Next Best Action, billing enforcement and broker suggestions. A switch changes availability, not the underlying user record or audit history.</p>
    <Helpful />
  </DocPage>;
}

export function FeatureStatus() {
  return <DocPage title="Feature availability" section="Using Astute" toc={[{id:"why",label:"How to read this page"},{id:"status",label:"Current status"},{id:"rules",label:"Product boundaries"}]}>
    <h1 className={titleClass}>Feature availability</h1>
    <p className={introClass}>A clear boundary between what users can rely on, what is still maturing, and what belongs to the roadmap.</p>
    <H2 id="why">How to read this page</H2><p>Availability can vary by environment when a live capability sits behind a platform switch. “Designed” means do not promise it in user journeys.</p>
    <H2 id="status">Current status</H2>
    <Table head={["Status","Capabilities"]} rows={[
      [<Pill variant="trusted">Live</Pill>,"Role onboarding, verification and trust, five funding products, matching reports, mutual interest, deal rooms, firm voting, broker representation/marketplace/portfolio, readiness, Next Best Action, pitch analysis, AI chat, documents, billing, notifications, admin and audit."],
      [<Pill variant="verified">Controlled rollout</Pill>,"Broker AI suggestions, billing enforcement, matching, chat, pitch analysis and Next Best Action may be switched per environment."],
      [<Pill variant="should">Maturing</Pill>,"Deep financial extraction and readiness-signal coverage; investor accreditation remains admin-set."],
      [<Pill>Designed</Pill>,"Broker interest on behalf of clients, three-way rooms, pending-offer withdrawal, suggestion actions, due-diligence memos and anomaly surfaces."],
      [<Pill>Dormant</Pill>,"Pipeline boards, meetings, e-signature records and fund listings."],
    ]}/>
    <H2 id="rules">Product boundaries</H2>
    <p>Broker representation is live, but brokers cannot yet express interest for a client. Document classification is live, but extracted figures may arrive later. Billing exists while enforcement walls can remain switched off. Present these distinctions wherever a workflow depends on them.</p>
    <Helpful />
  </DocPage>;
}
