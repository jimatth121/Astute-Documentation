import { DocPage } from "../components/Layout";
import {
  Hero,
  CardGrid,
  DocCard,
  Callout,
  H2,
  Divider,
  Stats,
  Helpful,
  Pill,
  Reveal,
} from "../components/doc";
import { TrustLadder, ReadinessSimulator } from "../components/interactive";
import { Split } from "../components/flow";
import { JourneyExplorer, AiAlongTheWay } from "../components/journey";
import { Link } from "react-router-dom";
import { Icon } from "../components/Icon";

/* ============================================================ OVERVIEW */
export function Overview() {
  return (
    <DocPage
      title="What is Astute?"
      section="Welcome"
      toc={[
        { id: "what", label: "In one line" },
        { id: "for", label: "Who it's for" },
        { id: "how", label: "How it helps you" },
        { id: "start", label: "Start here" },
      ]}
    >
      <Hero
        badge="Your guide to the Astute app"
        title={
          <>
            Raise or deploy capital,
            <br />
            <span style={{ color: "var(--primary)" }}>with confidence.</span>
          </>
        }
        sub="Astute connects UK businesses that need funding with investors, lenders and brokers. It uses AI to match you with the right people, a readiness score to get you investment-ready, and trust badges so everyone knows who they're dealing with. This guide shows you how to use it."
      >
        <div className="mb-3 flex flex-wrap gap-3">
          <Link
            className="inline-flex h-12 cursor-pointer items-center gap-[9px] rounded-full border border-transparent bg-primary px-[22px] text-[15px] font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_10px_30px_1px_var(--primary-glow)]"
            to="/how-it-works"
          >
            <Icon name="route" size={17} /> See how it works
          </Link>
          <Link
            className="inline-flex h-12 cursor-pointer items-center gap-[9px] rounded-full border border-primary/30 bg-transparent px-[22px] text-[15px] font-bold text-primary transition-all duration-200 hover:bg-selected"
            to="/roles/fund-seeker"
          >
            <Icon name="seedling" size={17} /> Find your role
          </Link>
        </div>
        <p style={{ fontSize: 13.5, color: "var(--text-gray)" }}>
          Press <kbd className="rounded-md border border-line border-b-2 bg-surface-strong px-[7px] py-0.5 font-mono text-[11.5px] text-txt-muted">⌘K</kbd> anytime to search this guide.
        </p>
      </Hero>

      <Divider />

      <H2 id="what">In one line</H2>
      <p>
        Astute is <strong>not just a listing site</strong>. It's a tool that builds trust, saves you
        time, and actively helps you become the kind of opportunity investors and lenders want to
        back — through a clear, guided journey from <em>findable</em> to <em>fundable</em>.
      </p>
      <Callout type="tip" title="The promise">
        Astute diagnoses how ready you are, gives you a simple to-do list, and tracks your progress
        until you're fundable. No guesswork, no dead ends.
      </Callout>

      <H2 id="for">Who it's for</H2>
      <p>Pick the guide that matches you — each one is a short, step-by-step walkthrough.</p>
      <CardGrid cols={3}>
        <DocCard icon="seedling" title="Fund-seeker" desc="A startup or SME looking to raise money." to="/roles/fund-seeker" />
        <DocCard icon="compass" title="Investor" desc="An individual angel deploying your own capital." to="/roles/investor" />
        <DocCard icon="briefcase" title="Investment firm" desc="A VC or fund investing on behalf of others." to="/roles/firm" />
        <DocCard icon="bank" title="Lender" desc="A bank or credit provider lending to SMEs." to="/roles/lender" />
        <DocCard icon="handshake" title="Broker" desc="Discover, represent and advise clients with their consent." to="/roles/broker" />
        <DocCard icon="shield" title="Not sure yet?" desc="Start with how the whole platform works." to="/how-it-works" />
      </CardGrid>

      <H2 id="how">How it helps you</H2>
      <Split
        canTitle="What Astute does for you"
        lockedTitle="What you no longer have to do"
        can={[
          "Matches you with the right capital partners automatically",
          "Tells you exactly what's missing from your profile",
          "Keeps all your documents in one secure place",
          "Gives you a visible trust badge others recognise",
        ]}
        locked={[
          "Sending 100 cold emails and hearing nothing",
          "Guessing what a 'good' profile looks like",
          "Scrambling for documents when someone asks",
          "Wondering who you can actually trust",
        ]}
      />

      <H2 id="start">Start here</H2>
      <Stats
        items={[
          { val: "3 steps", label: "Sign up → get verified → get matched" },
          { val: "0–100", label: "Your readiness score" },
          { val: "4", label: "Trust levels to climb" },
        ]}
      />
      <Reveal>
        <CardGrid cols={3}>
          <DocCard icon="route" title="How it works" desc="The whole journey, start to finish." to="/how-it-works" />
          <DocCard icon="book" title="Glossary" desc="Every term on the platform, A–Z." to="/glossary" />
          <DocCard icon="gauge" title="Readiness score" desc="Get investment-ready, step by step." to="/readiness-score" />
        </CardGrid>
      </Reveal>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ HOW IT WORKS */
export function HowItWorks() {
  return (
    <DocPage
      title="How it works"
      section="Welcome"
      toc={[
        { id: "journey", label: "The journey" },
        { id: "ai", label: "AI along the way" },
        { id: "twosides", label: "Two sides, one deal" },
        { id: "north", label: "The finish line" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">How Astute works</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        Everyone follows the same simple path: sign up, prove who you are, and get connected. Click
        through it below.
      </p>

      <H2 id="journey">The journey: findable → fundable</H2>
      <p>Tap any step (or use Next) to see what happens and what it unlocks.</p>
      <JourneyExplorer
        steps={[
          { label: "Sign up", tier: "basic", title: "Create your account", desc: "Pick your role and get in the door.", points: ["Email + password, accept the privacy policy", "Click the link in your verification email"], unlock: "BASIC" },
          { label: "Verify phone", tier: "basic", title: "Confirm your phone", desc: "A quick one-time code proves your number is real.", points: ["Enter your mobile, get a 6-digit SMS code", "Required before you can start verification"] },
          { label: "Get verified", tier: "verified", title: "Prove who you are", desc: "Identity for everyone; company details for businesses.", points: ["Photo ID + a live selfie", "Businesses confirm via Companies House"], unlock: "VERIFIED" },
          { label: "Clear checks", tier: "trusted", title: "Pass compliance", desc: "Background and source-of-funds checks run automatically.", points: ["PEP / sanctions screening", "Source of funds reviewed"], unlock: "TRUSTED" },
          { label: "Get matched", tier: "use", title: "Meet the right people", desc: "AI ranks your best-fit partners and explains each one.", points: ["A ranked, personalised feed", "A plain-English reason for every match"], unlock: "Matches" },
          { label: "Close", tier: "use", title: "Close in a Deal Room", desc: "A private space to talk, share documents and agree terms.", points: ["Chat, documents and milestones in one place", "Progress to Term Sheet Issued"], unlock: "Deal Rooms" },
        ]}
      />

      <H2 id="ai">AI along the way</H2>
      <p>Astute isn't just a directory — AI guides you at every step:</p>
      <AiAlongTheWay />

      <H2 id="twosides">Two sides, one deal</H2>
      <p>
        Fund-seekers and capital providers (investors, firms, lenders) see mirror images of each
        other. A fund-seeker posts a request; providers see it in their feed. When both say yes, a{" "}
        <strong>Deal Room</strong> opens for just the two of you.
      </p>
      <div className="my-6 grid grid-cols-2 gap-3.5 max-[720px]:grid-cols-1">
        <div className="rounded-card border border-line bg-surface px-5 py-[18px]">
          <h4 className="m-0 mb-3 flex items-center gap-2 font-head text-sm" style={{ color: "var(--primary)" }}>
            <Icon name="seedling" size={16} /> If you're raising money
          </h4>
          <ul className="m-0 list-none pl-0.5 [&_li]:mb-[9px] [&_li]:flex [&_li]:gap-[9px] [&_li]:text-[13.8px] [&_li]:leading-[1.45] [&_li]:text-txt-muted [&_svg]:mt-0.5 [&_svg]:shrink-0 [&_svg]:text-primary">
            <li><Icon name="check" size={15} />Post a funding request</li>
            <li><Icon name="check" size={15} />Receive interest from matched providers</li>
            <li><Icon name="check" size={15} />Accept, then negotiate in a Deal Room</li>
          </ul>
        </div>
        <div className="rounded-card border border-line bg-surface px-5 py-[18px]">
          <h4 className="m-0 mb-3 flex items-center gap-2 font-head text-sm" style={{ color: "var(--violet)" }}>
            <Icon name="compass" size={16} /> If you're providing capital
          </h4>
          <ul className="m-0 list-none pl-0.5 [&_li]:mb-[9px] [&_li]:flex [&_li]:gap-[9px] [&_li]:text-[13.8px] [&_li]:leading-[1.45] [&_li]:text-txt-muted [&_svg]:mt-0.5 [&_svg]:shrink-0 [&_svg]:text-primary">
            <li><Icon name="check" size={15} />Set your criteria (sectors, amounts)</li>
            <li><Icon name="check" size={15} />Browse a ranked feed of opportunities</li>
            <li><Icon name="check" size={15} />Express interest to open a Deal Room</li>
          </ul>
        </div>
      </div>

      <H2 id="north">The finish line</H2>
      <Callout type="tip" title="Term Sheet Issued">
        A deal is a success when it reaches a <strong>term sheet</strong> — the point where real
        terms are on the table. Everything in Astute is designed to get you there faster.
      </Callout>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ TRUST LEVELS */
export function TrustLevels() {
  return (
    <DocPage
      title="Trust levels & badges"
      section="Welcome"
      toc={[
        { id: "why", label: "Why badges matter" },
        { id: "levels", label: "The four levels" },
        { id: "unlock", label: "What each unlocks" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Trust levels &amp; badges</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        Astute isn't wide open on day one. You earn a badge by completing checks, and each badge
        unlocks more of the platform. Your badge is visible to everyone — it's your reputation at a
        glance.
      </p>

      <H2 id="why">Why badges matter</H2>
      <p>
        When someone sees your <Pill variant="trusted">TRUSTED</Pill> badge, they know your identity,
        business and finances have been checked. That trust is what gets you into the room — and it
        works both ways, so you know who <em>you're</em> dealing with too.
      </p>

      <H2 id="levels">The four levels</H2>
      <p>Click a badge to see how to earn it and what it unlocks.</p>
      <TrustLadder />

      <H2 id="unlock">What each unlocks</H2>
      <Split
        canTitle="At VERIFIED you can"
        lockedTitle="You'll need TRUSTED for"
        can={[
          "Submit funding requests",
          "Browse your match feed",
          "See who might be a good fit",
        ]}
        locked={[
          "Express formal interest",
          "Enter private Deal Rooms",
          "Get boosted in match rankings",
        ]}
      />
      <Callout type="note" title="Keep going">
        The top level, <Pill variant="institutional">INSTITUTIONAL</Pill>, adds premium visibility
        and reporting tools for firms and lenders who complete every check and keep them up to date.
      </Callout>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ READINESS SCORE */
export function ReadinessScore() {
  return (
    <DocPage
      title="Your readiness score"
      section="Welcome"
      toc={[
        { id: "what", label: "What it is" },
        { id: "try", label: "Try it" },
        { id: "raise", label: "How to raise it" },
        { id: "why", label: "Why it matters" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Your readiness score</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        A single number from 0 to 100 that shows how investment-ready you are — with a clear to-do
        list telling you exactly what to improve next. This is the heart of the fund-seeker
        experience.
      </p>

      <H2 id="what">What it is</H2>
      <p>
        Think of it as a coach, not just a grade. The dashboard doesn't only show your score — it
        tells you <strong>what to do next</strong> and how many points each action is worth, so you
        always know your best move.
      </p>

      <H2 id="try">Try it</H2>
      <p>Tick the tasks below and watch your score and trust level climb. This is exactly how it feels in the app.</p>
      <ReadinessSimulator />

      <H2 id="raise">How to raise it</H2>
      <p>Every item you complete adds points. Typical tasks the AI suggests:</p>
      <div className="my-6">
        {[
          "Upload your pitch deck",
          "Add 6 months of bank statements (shows your cashflow)",
          "Complete your HMRC tax compliance check",
          "Write a clear Source of Funds statement",
          "Confirm your directors and owners",
        ].map((t, i) => (
          <div
            className="relative flex gap-[15px] pb-5 pt-1 [&:not(:last-child)]:before:absolute [&:not(:last-child)]:before:bottom-0 [&:not(:last-child)]:before:left-4 [&:not(:last-child)]:before:top-9 [&:not(:last-child)]:before:w-0.5 [&:not(:last-child)]:before:bg-line [&:not(:last-child)]:before:content-['']"
            key={i}
          >
            <div className="z-[1] grid h-[33px] w-[33px] shrink-0 place-items-center rounded-full border border-primary/30 bg-selected font-head text-sm font-bold text-primary">
              <Icon name="check" size={14} />
            </div>
            <div className="flex-1 pt-1">
              <h4 className="m-0 font-head text-[15.5px] text-txt-bright">{t}</h4>
            </div>
          </div>
        ))}
      </div>

      <H2 id="why">Why it matters</H2>
      <Callout type="tip" title="A higher score = more visibility">
        Your readiness score influences your <strong>match ranking</strong>. The more ready you are,
        the higher you appear in investors' and lenders' feeds — and the more serious you look.
      </Callout>

      <Helpful />
    </DocPage>
  );
}
