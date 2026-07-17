import { DocPage } from "../components/Layout";
import { Callout, H2, Helpful, Pill, Divider, CardGrid, DocCard } from "../components/doc";
import { Split } from "../components/flow";
import { JourneyExplorer } from "../components/journey";
import { Glossary } from "../components/Glossary";
import { INVESTOR_TERMS, FIRM_TERMS, LENDER_TERMS } from "../data/glossary";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

function RoleHero({
  icon,
  name,
  who,
  color,
}: {
  icon: Parameters<typeof Icon>[0]["name"];
  name: string;
  who: string;
  color: string;
}) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 8 }}>
      <span
        style={{
          width: 54,
          height: 54,
          borderRadius: 14,
          display: "grid",
          placeItems: "center",
          background: color + "1e",
          color,
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={26} />
      </span>
      <div>
        <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl" style={{ margin: "2px 0 8px" }}>
          {name}
        </h1>
        <p style={{ margin: 0, color: "var(--text-muted)", fontSize: 17 }}>{who}</p>
      </div>
    </div>
  );
}

/* ============================================================ FUND-SEEKER */
export function FundSeeker() {
  return (
    <DocPage
      title="Fund-seeker"
      section="Guides by role"
      toc={[
        { id: "you", label: "Is this you?" },
        { id: "journey", label: "Your journey" },
        { id: "screens", label: "Your screens" },
        { id: "unlock", label: "What unlocks when" },
      ]}
    >
      <RoleHero
        icon="seedling"
        name="Fund-seeker"
        who="A startup or growing business looking to raise capital — equity, a loan, or a grant."
        color="#01b7ab"
      />
      <Divider />

      <H2 id="you">Is this you?</H2>
      <p>
        You have a business and you need funding, but you're not sure who to approach or whether
        you're ready. Astute turns that guesswork into a clear checklist and puts you in front of the
        right investors and lenders.
      </p>

      <H2 id="journey">Your journey</H2>
      <JourneyExplorer
        steps={[
          { label: "Sign up", tier: "basic", title: "Register & verify phone", desc: "Choose Fund-seeker, then confirm your email and mobile.", points: ["Verify your email link", "Enter a 6-digit SMS code to continue"], unlock: "BASIC" },
          { label: "Add company", tier: "verified", title: "Company & ID checks", desc: "Enter your Companies House number — we auto-fill the rest.", points: ["Name, address and directors pulled automatically", "A director completes a quick ID check (KYC)"], unlock: "VERIFIED" },
          { label: "Directors", tier: "verified", title: "Directors & screening", desc: "Confirm your directors and persons of significant control.", points: ["Add each director and PSC", "PEP / sanctions screening runs on them"], unlock: "Screening cleared" },
          { label: "Post request", tier: "verified", title: "Post a funding request", desc: "You can't be matched until you've posted a request — this is the step people miss.", points: ["Pick a type: equity, loan, debt, credit or grant", "Fill the details, then submit to activate it"], unlock: "Matching" },
          { label: "Build score", tier: "verified", title: "Build your readiness score", desc: "Work the AI to-do list; your score climbs and your request ranks higher.", points: ["Pitch deck, 6 months of bank statements, HMRC check", "AI reads your statements to verify cashflow"], unlock: "Higher ranking" },
          { label: "Match & close", tier: "use", title: "Match & close in a Deal Room", desc: "Matches are scored against your request; accept interest to go private.", points: ["A plain-English reason for each match", "Connected → Due Diligence → Term Sheet → Closed"], unlock: "Deal Rooms" },
        ]}
      />

      <H2 id="screens">Your screens</H2>
      <CardGrid cols={3}>
        <DocCard icon="gauge" title="Readiness Score" desc="Your score and to-do list — the screen you'll use most." to="/readiness-score" />
        <DocCard icon="sparkles" title="My Match" desc="Investors and lenders matched to your request." to="/using/matches" />
        <DocCard icon="route" title="Tracker" desc="Every funding request you've sent and its status." to="/using/matches" />
        <DocCard icon="message" title="Deals Room" desc="Private spaces to negotiate with a provider." to="/using/deal-rooms" />
        <DocCard icon="file" title="Documents" desc="Your secure vault of everything you've uploaded." to="/using/documents" />
        <DocCard icon="credit-card" title="Subscription" desc="Your plan and billing." to="/using/billing" />
      </CardGrid>

      <H2 id="unlock">What unlocks when</H2>
      <Split
        canTitle="Once verified"
        lockedTitle="Until you post a request"
        can={["Build your readiness score", "Post a funding request", "Improve your ranking"]}
        locked={["See your ranked match feed", "Express interest to a match", "Enter Deal Rooms"]}
      />
      <Callout type="tip" title="No request, no matches">
        Matches are scored against a specific funding request, so nothing shows in <strong>My Match</strong>
        until you've posted one. Keep working the to-do list afterwards — a higher readiness score ranks
        your request above the rest.
      </Callout>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ INVESTOR */
export function Investor() {
  return (
    <DocPage
      title="Investor"
      section="Guides by role"
      toc={[
        { id: "you", label: "Is this you?" },
        { id: "journey", label: "Your journey" },
        { id: "screens", label: "Your screens" },
        { id: "glossary", label: "Investor glossary" },
      ]}
    >
      <RoleHero
        icon="compass"
        name="Investor"
        who="An individual angel investor deploying your own capital into businesses you believe in."
        color="#38bdf8"
      />
      <Divider />

      <H2 id="you">Is this you?</H2>
      <p>
        You want quality deal flow that fits your thesis — not a flood of irrelevant pitches. Astute
        verifies both sides, learns what you're looking for, and only shows you matches that fit.
      </p>

      <H2 id="journey">Your journey</H2>
      <JourneyExplorer
        steps={[
          { label: "Sign up", tier: "basic", title: "Register & verify phone", desc: "Choose Investor, confirm your email and mobile.", points: ["Verify your email link", "Enter a 6-digit SMS code to continue"], unlock: "BASIC" },
          { label: "Verify & declare", tier: "verified", title: "Verify identity & declare", desc: "Prove who you are and declare your investor category.", points: ["Photo ID + a live selfie", "HNW / sophisticated declaration", "PEP / sanctions screening"], unlock: "VERIFIED" },
          { label: "Prove funds", tier: "trusted", title: "Prove your funds", desc: "Show where your investment capital comes from.", points: ["Upload a bank statement or accountant letter", "Amounts over £10k get a quick review"], unlock: "TRUSTED" },
          { label: "Set thesis", tier: "use", title: "Set your thesis", desc: "Tell Astute what you back; the feed narrows to fit.", points: ["Sectors, stage, ticket size, geography", "AI shows a match reason on every deal"], unlock: "Filtered feed" },
          { label: "Express", tier: "use", title: "Express interest", desc: "Reach out to a great match with a short note.", points: ["A personalised note lifts acceptance", "A mutual yes opens a Deal Room"], unlock: "Deal Rooms" },
          { label: "Pipeline", tier: "use", title: "Run your pipeline", desc: "Move deals from interest to close, with AI nudges.", points: ["Connected → Due Diligence → Term Sheet → Closed", "One-click AI due-diligence summary"], unlock: "Pipeline" },
        ]}
      />

      <H2 id="screens">Your screens</H2>
      <CardGrid cols={3}>
        <DocCard icon="grid" title="Marketplace" desc="Your ranked feed of funding opportunities." to="/using/matches" />
        <DocCard icon="compass" title="My Thesis" desc="The criteria that shape what you see." to="/roles/investor" />
        <DocCard icon="route" title="My Interest" desc="Your pipeline of deals in progress." to="/using/matches" />
        <DocCard icon="message" title="Deals Room" desc="Negotiate privately with a fund-seeker." to="/using/deal-rooms" />
        <DocCard icon="chart" title="Portfolio" desc="Track capital deployed over time." to="/roles/investor" />
        <DocCard icon="credit-card" title="Plan" desc="Your subscription and billing." to="/using/billing" />
      </CardGrid>

      <Callout type="note" title="Fees">
        Investors agree to a small platform fee on deals won — you'll confirm this when you set up
        your thesis. It's shown clearly before you commit.
      </Callout>

      <H2 id="glossary">Investor glossary</H2>
      <p>Every term you'll meet as an investor — search by word or jump to a letter.</p>
      <Glossary terms={INVESTOR_TERMS} />

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ FIRM */
export function Firm() {
  return (
    <DocPage
      title="Investment firm"
      section="Guides by role"
      toc={[
        { id: "you", label: "Is this you?" },
        { id: "journey", label: "Your journey" },
        { id: "team", label: "Working as a team" },
        { id: "screens", label: "Your screens" },
        { id: "glossary", label: "Firm glossary" },
      ]}
    >
      <RoleHero
        icon="briefcase"
        name="Investment firm"
        who="A VC or fund deploying institutional capital, often with a team of partners and analysts."
        color="#a78bfa"
      />
      <Divider />

      <H2 id="you">Is this you?</H2>
      <p>
        You invest on behalf of others, so you carry more compliance — and you work as a team.
        Astute handles the firm's verification once, then lets your people work matched deal flow
        together.
      </p>

      <H2 id="journey">Your journey</H2>
      <JourneyExplorer
        steps={[
          { label: "Register", tier: "basic", title: "Register the firm", desc: "Add your legal entity and verify your phone.", points: ["Legal name + company number", "Verify email and a 6-digit SMS code"], unlock: "BASIC" },
          { label: "Verify & FCA", tier: "verified", title: "Verify entity & FCA", desc: "Confirm the company and your regulatory permissions.", points: ["Companies House + FCA authorisation", "Set your fund mandate (sectors, stage, ticket)"], unlock: "VERIFIED" },
          { label: "Directors", tier: "verified", title: "Directors & owners", desc: "Your GPs and beneficial owners complete checks.", points: ["Individual KYC for each GP", "PSC / beneficial-owner declaration"], unlock: "Team set up" },
          { label: "Prove capital", tier: "trusted", title: "Prove capital & AML", desc: "Evidence your dry powder and pass screening.", points: ["Proof of available capital", "PEP / sanctions on the firm and GPs"], unlock: "TRUSTED" },
          { label: "Deal flow", tier: "use", title: "Receive matched deal flow", desc: "Your feed shows requests that fit your mandate.", points: ["Invite colleagues with set permissions", "Assign each deal to a partner or analyst"], unlock: "Deal flow" },
          { label: "Work deals", tier: "use", title: "Work deals as a team", desc: "Run the pipeline together with private IC notes.", points: ["Connected → Negotiation → Deal Won / Cancelled", "Team-only Investment Committee tab"], unlock: "Deal Rooms" },
        ]}
      />

      <H2 id="team">Working as a team</H2>
      <p>
        A firm admin invites colleagues by email — they click a link, set a password, and they're in.
        Admins see everything, including <strong>Team Performance</strong> (who's working which
        deals). Regular members get the deal tools without the admin controls.
      </p>

      <H2 id="screens">Your screens</H2>
      <CardGrid cols={3}>
        <DocCard icon="grid" title="Marketplace" desc="Requests ranked against your mandate." to="/using/matches" />
        <DocCard icon="route" title="Interest" desc="Opportunities your team is pursuing." to="/using/matches" />
        <DocCard icon="chart" title="Team Performance" desc="Admin view of each member's deals." to="/roles/firm" />
        <DocCard icon="message" title="Deals Room" desc="Collaborate with fund-seekers." to="/using/deal-rooms" />
        <DocCard icon="briefcase" title="Portfolio" desc="Your firm's active investments." to="/roles/firm" />
        <DocCard icon="user-check" title="Profile & team" desc="Manage members and firm details." to="/using/notifications" />
      </CardGrid>

      <Callout type="note" title="Team member?">
        If you were invited to join a firm, you don't sign up separately — just open your invite link,
        set a password, and you'll land straight in the firm's dashboard.
      </Callout>

      <H2 id="glossary">Firm glossary</H2>
      <p>The terms that show up across the investment-firm experience, from AUM to voting rights.</p>
      <Glossary terms={FIRM_TERMS} />

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ LENDER */
export function Lender() {
  return (
    <DocPage
      title="Lender"
      section="Guides by role"
      toc={[
        { id: "you", label: "Is this you?" },
        { id: "journey", label: "Your journey" },
        { id: "screens", label: "Your screens" },
        { id: "glossary", label: "Lender glossary" },
      ]}
    >
      <RoleHero
        icon="bank"
        name="Lender"
        who="A regulated bank or credit provider that originates loans to small and medium businesses."
        color="#fbbf24"
      />
      <Divider />

      <H2 id="you">Is this you?</H2>
      <p>
        You want a steady pipeline of eligible borrowers, pre-screened against your criteria. Astute
        checks your regulatory permissions, then matches you with businesses that fit your lending
        rules.
      </p>

      <H2 id="journey">Your journey</H2>
      <JourneyExplorer
        steps={[
          { label: "Register", tier: "basic", title: "Register the institution", desc: "Add your details and verify your phone.", points: ["Institution name + company number", "Verify email and a 6-digit SMS code"], unlock: "BASIC" },
          { label: "Verify & FCA", tier: "verified", title: "Verify & regulator", desc: "Confirm the company and your credit permissions.", points: ["Companies House active status", "FCA checked against the lending you'll do"], unlock: "VERIFIED" },
          { label: "Directors", tier: "verified", title: "Directors & screening", desc: "Signatories and beneficial owners are checked.", points: ["Director KYC + proof of address", "PEP / sanctions screening"], unlock: "Checks done" },
          { label: "Lending rules", tier: "trusted", title: "Prove capital & set rules", desc: "Show lending capacity and define your criteria.", points: ["Proof of available capital", "Products, loan sizes, rates, sectors, collateral"], unlock: "TRUSTED" },
          { label: "Borrower feed", tier: "use", title: "Get a borrower feed", desc: "Businesses appear scored against your rules.", points: ["Eligibility score per borrower", "AI-parsed financials from their documents"], unlock: "Borrower feed" },
          { label: "Fund deals", tier: "use", title: "Fund the deal", desc: "Express interest and manage the loan to close.", points: ["Add indicative rates and terms to your interest", "Connected → Due Diligence → Term Sheet → Closed"], unlock: "Deal Rooms" },
        ]}
      />

      <H2 id="screens">Your screens</H2>
      <CardGrid cols={3}>
        <DocCard icon="grid" title="Marketplace" desc="Your borrower feed, filtered by rate and type." to="/using/matches" />
        <DocCard icon="route" title="Pipeline" desc="Loans moving through your stages." to="/roles/lender" />
        <DocCard icon="star" title="Saved Interest" desc="Borrowers you've bookmarked." to="/roles/lender" />
        <DocCard icon="message" title="Deals Room" desc="Work directly with the borrower." to="/using/deal-rooms" />
        <DocCard icon="chart" title="Portfolio" desc="Capital deployed and interest earned." to="/roles/lender" />
        <DocCard icon="credit-card" title="Subscription" desc="Your plan and billing." to="/using/billing" />
      </CardGrid>

      <H2 id="glossary">Lender glossary</H2>
      <p>The terms you'll meet as a lender — collateral types, credit ratings, funding structures and more.</p>
      <Glossary terms={LENDER_TERMS} />

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ BROKER */
export function Broker() {
  return (
    <DocPage
      title="Broker"
      section="Guides by role"
      toc={[
        { id: "you", label: "Is this you?" },
        { id: "soon", label: "Coming soon" },
        { id: "planned", label: "What to expect" },
      ]}
    >
      <RoleHero
        icon="handshake"
        name="Broker"
        who="A finance intermediary who represents several clients and connects them to capital providers."
        color="#7c79b8"
      />
      <Divider />

      <H2 id="you">Is this you?</H2>
      <p>
        You manage relationships with multiple businesses and match them to the right lenders or
        investors. Astute will let you do that from one dashboard — with each client's consent and
        documents in order.
      </p>

      <H2 id="soon">Coming soon</H2>
      <Callout type="warn" title="Not available yet">
        The broker experience is planned but not switched on yet. You can see the role during
        sign-up, but the client and submission tools are still being built. This page previews what's
        coming.
      </Callout>

      <H2 id="planned">What to expect</H2>
      <JourneyExplorer
        steps={[
          { label: "Sign up", tier: "basic", title: "Register & verify phone", desc: "Choose Broker, confirm your email and mobile.", points: ["Verify your email link", "Enter a 6-digit SMS code to continue"], unlock: "BASIC" },
          { label: "Credentials", tier: "verified", title: "Verify your credentials", desc: "Prove who you are and your permission to broke.", points: ["Photo ID + a live selfie", "FCA credit-broking permissions checked"], unlock: "VERIFIED" },
          { label: "Track record", tier: "trusted", title: "Prove your track record", desc: "Show past deals and accept the fee terms.", points: ["Case studies + AML training", "Commission agreement signed"], unlock: "TRUSTED" },
          { label: "Link clients", tier: "use", title: "Link your clients", desc: "Represent businesses with their consent.", points: ["Invite a client or accept a connection", "Each link needs a signed authorisation"], unlock: "Client board" },
          { label: "Submit", tier: "use", title: "Submit & facilitate", desc: "Send clients to providers and track every deal.", points: ["Attach documents from the client's vault", "Follow status: Sent → Under Review → Approved"], unlock: "Submissions" },
        ]}
      />
      <p>
        Until then, if you're raising for your own business or investing directly, one of the other{" "}
        <Link to="/">role guides</Link> will fit.
      </p>

      <Helpful />
    </DocPage>
  );
}
