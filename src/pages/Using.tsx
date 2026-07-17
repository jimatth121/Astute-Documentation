import { DocPage } from "../components/Layout";
import { Callout, H2, Helpful, Pill, Table, CardGrid, DocCard } from "../components/doc";
import { RoleFlow, Steps, Split } from "../components/flow";
import { Icon } from "../components/Icon";

/* ============================================================ VERIFICATION */
export function UsingVerification() {
  return (
    <DocPage
      title="Getting verified"
      section="Using Astute"
      toc={[
        { id: "why", label: "Why verify" },
        { id: "phone", label: "First: confirm your phone" },
        { id: "id", label: "Verifying your identity" },
        { id: "company", label: "Verifying your company" },
        { id: "checks", label: "The trust checks" },
        { id: "safe", label: "Is my data safe?" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Getting verified</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        Verification is how you earn your badge and unlock the platform. It's quick, guided, and you
        only do each step once.
      </p>

      <H2 id="why">Why verify</H2>
      <p>
        Trust is the whole point of Astute. Verifying proves you're real and unlocks features — and
        it means everyone you deal with has been checked too.
      </p>

      <H2 id="phone">First: confirm your phone</H2>
      <p>
        Right after you verify your email, Astute asks for your mobile number and texts you a{" "}
        <strong>6-digit code</strong>. Enter it and you're done. This one-time step is required before
        you can start identity or company verification.
      </p>
      <Callout type="info" title="Didn't get the code?">
        A “Resend code” link appears after 30 seconds. Codes expire after 5 minutes — just request a
        fresh one.
      </Callout>

      <H2 id="id">Verifying your identity</H2>
      <p>Takes a couple of minutes on your phone or computer:</p>
      <Steps
        items={[
          { title: "Take a photo of your ID", body: "A passport or driving licence. Astute reads it automatically — you don't type anything." },
          { title: "Take a live selfie", body: "A quick liveness check confirms it's really you, not a photo." },
          { title: "Add proof of address", body: "A recent bank statement or utility bill." },
        ]}
      />
      <Callout type="tip" title="Instant most of the time">
        Most checks pass in seconds. Occasionally one needs a human to review it — you'll see a
        'in review' status and we'll notify you when it clears.
      </Callout>

      <H2 id="company">Verifying your company</H2>
      <p>
        If you represent a business, just enter your <strong>Companies House number</strong>. Astute
        pulls your official name, address and details automatically, and lists your directors. You
        confirm the people with significant control, and you're done.
      </p>

      <H2 id="checks">The trust checks</H2>
      <p>Different roles need different checks to reach TRUSTED. Here's the plain-English version:</p>
      <Table
        head={["Check", "What it means"]}
        rows={[
          [<strong>Identity (KYC)</strong>, "Confirms you are who you say you are."],
          [<strong>Business (KYB)</strong>, "Confirms your company legally exists."],
          [<strong>Screening (AML/PEP)</strong>, "A background check against sanctions and watch-lists."],
          [<strong>Source of funds</strong>, "Shows where your money comes from."],
          [<strong>Tax (HMRC)</strong>, "Validates your VAT number (fund-seekers)."],
          [<strong>Regulator (FCA)</strong>, "Confirms permissions (firms, lenders, brokers)."],
        ]}
      />

      <H2 id="safe">Is my data safe?</H2>
      <Split
        canTitle="What we do"
        lockedTitle="What we never do"
        can={[
          "Store only the result of ID checks, not your raw documents",
          "Keep financial files encrypted and access-controlled",
          "Log every action for a secure audit trail",
        ]}
        locked={[
          "Keep copies of your passport photo",
          "Share your documents without permission",
          "Let anyone reach your files without a signed, expiring link",
        ]}
      />

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ MATCHES */
export function UsingMatches() {
  return (
    <DocPage
      title="Matches & interest"
      section="Using Astute"
      toc={[
        { id: "how", label: "How matching works" },
        { id: "cards", label: "Reading a match" },
        { id: "interest", label: "Expressing interest" },
        { id: "pipeline", label: "Your pipeline" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Matches &amp; interest</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        Astute's AI does the introductions. Instead of cold outreach, you get a ranked list of people
        who actually fit — with a clear reason for each.
      </p>

      <H2 id="how">How matching works</H2>
      <p>
        The AI looks at the obvious things — sector, stage, amount — and also the <em>meaning</em>{" "}
        behind your descriptions, so it can spot fits a keyword search would miss. Fund-seekers see
        providers; providers see funding requests.
      </p>
      <RoleFlow
        legend={false}
        stages={[
          { icon: "route", tier: "use", title: "You set the scene", desc: "A fund-seeker posts a request; a provider sets their criteria." },
          { icon: "sparkles", tier: "use", title: "AI ranks matches", desc: "You get a ranked feed, each with a plain-English 'why'." },
          { icon: "handshake", tier: "use", title: "Someone expresses interest", desc: "A note is sent; the other side accepts or declines." },
          { icon: "message", tier: "use", title: "A Deal Room opens", desc: "On a mutual yes, a private room appears for both of you." },
        ]}
      />

      <H2 id="cards">Reading a match</H2>
      <p>Every match card shows you, at a glance:</p>
      <ul>
        <li>Their <strong>name and trust badge</strong> — so you know they're verified.</li>
        <li>The <strong>key numbers</strong> — amount, sector, stage.</li>
        <li>A <strong>reason</strong>, like “Sector match: CleanTech” or “Both mention sustainable energy.”</li>
      </ul>

      <H2 id="interest">Expressing interest</H2>
      <Callout type="warn" title="You'll need TRUSTED">
        Only <Pill variant="trusted">TRUSTED</Pill> members can express formal interest and open Deal
        Rooms. If the button's locked, finish your remaining checks first.
      </Callout>
      <p>
        Tap <strong>Express Interest</strong>, add a short note, and send. The other side gets a
        notification. If they accept, you're connected and a Deal Room opens automatically.
      </p>

      <H2 id="pipeline">Your pipeline</H2>
      <p>Everything you're pursuing lives in one list, moving through clear stages:</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "18px 0" }}>
        {["Interest", "Awaiting response", "Connected", "Negotiation", "Closed"].map((s, i) => (
          <span
            key={s}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-[11px] py-[3px] text-[13px] font-semibold text-txt-muted"
          >
            <span className="h-[7px] w-[7px] rounded-full" style={{ background: "var(--primary)" }} /> {i + 1}. {s}
          </span>
        ))}
      </div>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ DEAL ROOMS */
export function UsingDealRooms() {
  return (
    <DocPage
      title="Deal rooms"
      section="Using Astute"
      toc={[
        { id: "what", label: "What is a Deal Room?" },
        { id: "inside", label: "What's inside" },
        { id: "milestones", label: "Deal stages" },
        { id: "safe", label: "Staying safe" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Deal rooms</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        A Deal Room is your private space to take a match forward — chat, share documents, and track
        the deal, all in one place, visible only to the people involved.
      </p>

      <H2 id="what">What is a Deal Room?</H2>
      <p>
        When you and another party both say yes, Astute opens a Deal Room just for the two of you.
        No one else can see inside. It's where a promising match becomes a real conversation.
      </p>

      <H2 id="inside">What's inside</H2>
      <CardGrid cols={2}>
        <DocCard icon="message" title="Messages" desc="Chat directly with the other party. Firms also get a private internal channel for their team." to="/using/deal-rooms" />
        <DocCard icon="file" title="Documents" desc="Share files from your vault. Downloads use secure, expiring links." to="/using/documents" />
        <DocCard icon="route" title="Milestones" desc="See exactly what stage the deal is at, updated as you progress." to="/using/deal-rooms" />
        <DocCard icon="chart" title="Polls" desc="Run a quick vote inside the room when a group needs to decide." to="/using/deal-rooms" />
      </CardGrid>

      <H2 id="milestones">Deal stages</H2>
      <p>Deals move through clear milestones so everyone knows where things stand:</p>
      <RoleFlow
        legend={false}
        stages={[
          { icon: "handshake", tier: "use", title: "Connected", desc: "The room just opened — introductions and first questions." },
          { icon: "file", tier: "use", title: "Due Diligence", desc: "Sharing documents and digging into the detail." },
          { icon: "star", tier: "use", title: "Term Sheet Issued", desc: "Real terms are on the table. This is the milestone that matters." },
          { icon: "check", tier: "use", title: "Closed", desc: "The deal is done — won or parked." },
        ]}
      />

      <H2 id="safe">Staying safe</H2>
      <Callout type="note" title="Report anything off">
        If someone behaves inappropriately or tries to take the deal off-platform, you can report
        them from inside the room. Keeping deals on Astute keeps everyone protected.
      </Callout>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ DOCUMENTS */
export function UsingDocuments() {
  return (
    <DocPage
      title="Your documents"
      section="Using Astute"
      toc={[
        { id: "vault", label: "Your document vault" },
        { id: "add", label: "Adding documents" },
        { id: "ai", label: "Smart labelling" },
        { id: "safe", label: "How it's protected" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Your documents</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        Every file you add lives in one secure vault — so when an investor or lender asks for
        something, it's already there and ready to share.
      </p>

      <H2 id="vault">Your document vault</H2>
      <p>
        The vault holds your pitch deck, financials, statements and more, organised into folders. You
        upload once and reuse everywhere — in your readiness score, in matches, and in Deal Rooms.
      </p>

      <H2 id="add">Adding documents</H2>
      <Steps
        items={[
          { title: "Drag and drop", body: "Drop a file into the vault, or browse to it. That's it." },
          { title: "It's saved securely", body: "Each file shows who uploaded it and when. You can replace it with a newer version anytime." },
          { title: "Share when you choose", body: "Add a document to a Deal Room, or generate a secure link — nothing is shared without your say-so." },
        ]}
      />

      <H2 id="ai">Smart labelling</H2>
      <Callout type="tip" title="Astute recognises your files">
        Upload a pitch deck and Astute labels it “Pitch Deck” automatically. If it ever gets it
        wrong, you can relabel it yourself.
      </Callout>

      <H2 id="safe">How it's protected</H2>
      <Split
        canTitle="Built-in protection"
        lockedTitle="What can't happen"
        can={[
          "Financial files are stored encrypted",
          "Downloads use links that expire in minutes",
          "Only you decide who sees what",
        ]}
        locked={[
          "Nobody browses your vault without access",
          "Links don't stay live forever",
          "Files aren't shared behind your back",
        ]}
      />

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ NOTIFICATIONS & SETTINGS */
export function UsingNotifications() {
  return (
    <DocPage
      title="Alerts & settings"
      section="Using Astute"
      toc={[
        { id: "bell", label: "Your notifications" },
        { id: "types", label: "What you'll hear about" },
        { id: "prefs", label: "Choosing your alerts" },
        { id: "profile", label: "Profile & security" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Alerts &amp; settings</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        Astute keeps you posted when something needs you — a new match, an expression of interest, a
        message — without drowning you in noise.
      </p>

      <H2 id="bell">Your notifications</H2>
      <p>
        The bell in the top bar shows a count of anything unread. Click a notification to jump
        straight to what it's about — a match, a Deal Room, or your next task.
      </p>

      <H2 id="types">What you'll hear about</H2>
      <ul>
        <li>A new <strong>match</strong> or someone <strong>expressing interest</strong>.</li>
        <li>A <strong>message</strong> in one of your Deal Rooms.</li>
        <li>A check that <strong>passed</strong> — or one that needs your attention.</li>
        <li>A <strong>suggested next step</strong> to raise your readiness.</li>
      </ul>

      <H2 id="prefs">Choosing your alerts</H2>
      <p>
        In settings you can turn on desktop push notifications and choose which emails you get. Mute
        the types you don't care about and keep the ones you do.
      </p>

      <H2 id="profile">Profile &amp; security</H2>
      <CardGrid cols={3}>
        <DocCard icon="user-check" title="Profile" desc="Your name, contact details and verification status." to="/using/notifications" />
        <DocCard icon="lock" title="Password" desc="Change your password anytime." to="/using/notifications" />
        <DocCard icon="bell" title="Notifications" desc="Pick exactly what you're alerted about." to="/using/notifications" />
      </CardGrid>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ BILLING */
export function UsingBilling() {
  return (
    <DocPage
      title="Plans & billing"
      section="Using Astute"
      toc={[
        { id: "upfront", label: "Pay to get started" },
        { id: "fund-seeker", label: "If you're a fund-seeker" },
        { id: "others", label: "Everyone else" },
        { id: "success-fee", label: "The 1.5% success fee" },
        { id: "manage", label: "Managing your plan" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Plans &amp; billing</h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        Astute is a paid platform — you subscribe before you start using it. Fund-seekers get a
        discount coupon on their subscription (and pay a small 1.5% fee on deals they win); every
        other role gets a 14-day free trial to explore first.
      </p>

      <H2 id="upfront">Pay to get started</H2>
      <Callout type="tip" title="A subscription unlocks the app">
        Astute is subscription-based — there's <strong>no free tier</strong>. You choose a plan and
        pay before you get access. What's included depends on your role, and it's spelled out on the
        secure checkout before you confirm.
      </Callout>
      <p>
        Your subscription unlocks the full platform for your role — funding requests, matches, deal
        rooms, document storage, and the AI features. How you start differs by role:
      </p>
      <Table
        head={["Role", "How you start"]}
        rows={[
          ["Fund-seeker", <span>Pay upfront with a <strong>discount coupon</strong> applied</span>],
          ["Investor", <span><strong>14-day free trial</strong>, then subscription</span>],
          ["Investment firm", <span><strong>14-day free trial</strong>, then subscription</span>],
          ["Lender", <span><strong>14-day free trial</strong>, then subscription</span>],
          ["Broker", <span><strong>14-day free trial</strong>, then subscription</span>],
        ]}
      />

      <H2 id="fund-seeker">If you're a fund-seeker</H2>
      <p>
        Fund-seekers subscribe like everyone else, but you don't pay full price to start — a
        discount coupon is applied automatically at checkout, so you'll see the reduced price before
        you confirm.
      </p>
      <Callout type="tip" title="Two things you pay">
        A discounted <strong>subscription</strong> to use Astute, plus a <strong>1.5% success
        fee</strong> on every deal you win. There's no free trial for fund-seekers — the coupon is
        your discount instead.
      </Callout>

      <H2 id="others">Everyone else</H2>
      <p>
        Investors, investment firms, lenders and brokers start with a <strong>14-day free
        trial</strong>. Explore the whole platform, and your subscription only begins when the trial
        ends — cancel any time before then and you won't be charged. These roles pay their
        subscription only; there's no success fee.
      </p>

      <H2 id="success-fee">The 1.5% success fee</H2>
      <Callout type="warn" title="Fund-seekers only">
        Only fund-seekers pay a success fee. It's <strong>1.5% of every deal you win</strong> —
        charged on the amount you raise when a deal closes. If a deal doesn't close, there's{" "}
        <strong>no success fee</strong>.
      </Callout>
      <p>
        Payment is handled securely through our payment provider. Your subscription switches on as
        soon as checkout is confirmed, and any success fee is reported within 14 days of a deal
        closing.
      </p>

      <H2 id="manage">Managing your plan</H2>
      <Split
        canTitle="You can always"
        lockedTitle="No surprises"
        can={[
          "Change to a different plan",
          "See every invoice in one place",
          "Cancel — you keep access until the period ends",
        ]}
        locked={[
          "Getting locked in with no way out",
          "Hidden charges you didn't agree to",
          "Losing access the moment you cancel",
        ]}
      />
      <Callout type="note">
        If a payment fails, Astute shows a friendly banner and gives you time to fix it before
        anything changes.
      </Callout>

      <Helpful />
    </DocPage>
  );
}

/* ============================================================ ASTUTE ASSISTANT (CHATBOT) */
function ChatPreview() {
  return (
    <div className="my-[26px] overflow-hidden rounded-card border border-line bg-surface shadow-[0_16px_40px_rgba(0,0,0,0.3)]">
      {/* header */}
      <div className="flex items-center gap-2.5 border-b border-line bg-surface-strong px-4 py-3">
        <span className="grid h-8 w-8 place-items-center rounded-[9px] bg-selected text-primary">
          <Icon name="bot" size={18} />
        </span>
        <div className="flex-1">
          <div className="font-head text-sm font-semibold text-txt-bright">Astute AI Assistant</div>
          <div className="text-[11px] text-txt-gray">Always here to help</div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-selected px-2.5 py-1 text-[11px] font-semibold text-primary">
          <Icon name="coins" size={13} /> 34 of 50 left
        </span>
      </div>
      {/* messages */}
      <div className="space-y-4 px-4 py-5">
        {/* user */}
        <div className="flex justify-end">
          <div className="max-w-[78%] rounded-2xl rounded-br-md bg-primary/15 px-3.5 py-2.5 text-[13.5px] text-txt-bright">
            What should I do next to reach TRUSTED?
          </div>
        </div>
        {/* assistant */}
        <div className="flex gap-2.5">
          <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-selected text-primary">
            <Icon name="bot" size={15} />
          </span>
          <div className="max-w-[82%]">
            <div className="rounded-2xl rounded-tl-md border border-line bg-canvas px-3.5 py-2.5 text-[13.5px] leading-[1.55] text-txt-muted">
              You're <b className="text-txt-bright">2 steps away</b>. Add 6 months of bank statements
              to verify your cashflow, then complete your HMRC tax check. That should take you past 85.
            </div>
          </div>
        </div>
      </div>
      {/* input */}
      <div className="flex items-center gap-2 border-t border-line px-3 py-3">
        <div className="flex-1 rounded-full border border-line bg-canvas px-4 py-2.5 text-[13px] text-txt-gray">
          Ask Astute AI something…
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white shadow-[0_6px_18px_rgba(1,183,171,0.4)]">
          <Icon name="send" size={17} />
        </button>
      </div>
    </div>
  );
}

export function UsingAssistant() {
  return (
    <DocPage
      title="Astute Assistant"
      section="Using Astute"
      toc={[
        { id: "what", label: "Meet the assistant" },
        { id: "find", label: "Where to find it" },
        { id: "ask", label: "What to ask" },
        { id: "answers", label: "Smarter answers" },
        { id: "credits", label: "AI credits" },
        { id: "who", label: "Who can use it" },
      ]}
    >
      <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">
        Astute Assistant
      </h1>
      <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">
        A built-in AI chatbot that knows Astute inside out. Ask it what to do next, how a feature
        works, or what's missing from your profile — and it answers in plain language, with buttons
        that take you straight there.
      </p>

      <H2 id="what">Meet the assistant</H2>
      <p>
        The Astute Assistant is your always-on coach. Ask it a question and it types a clear,
        plain-language answer back to you live. Here's what a conversation looks like:
      </p>
      <ChatPreview />

      <H2 id="find">Where to find it</H2>
      <p>
        Look for the floating <strong>chat button</strong> in the corner of your dashboard. Tap it to
        open the assistant, tap again to close. Don't like where it sits? <strong>Drag it</strong>{" "}
        anywhere on screen — it remembers the spot for next time.
      </p>

      <H2 id="ask">What to ask</H2>
      <CardGrid cols={2}>
        <DocCard icon="gauge" title="“What should I do next?”" desc="It reads your readiness and tells you the highest-impact task to tackle now." to="/readiness-score" />
        <DocCard icon="shield" title="“What checks do I still need?”" desc="It explains exactly which verification steps remain for your role." to="/using/verification" />
        <DocCard icon="file" title="“Which documents do I need?”" desc="It lists exactly what's expected for your role." to="/using/documents" />
        <DocCard icon="sparkles" title="“Why did I get this match?”" desc="It explains how matching works and what improves your ranking." to="/using/matches" />
      </CardGrid>

      <H2 id="answers">Smarter answers</H2>
      <p>Replies are formatted for easy reading, not walls of text:</p>
      <Table
        head={["Format", "What you'll see"]}
        rows={[
          [<strong>Clear explanations</strong>, "Plain-language answers with headings and bullet points."],
          [<strong>Tables</strong>, "Quick comparisons laid out neatly when it helps."],
        ]}
      />

      <H2 id="credits">AI credits</H2>
      <p>
        Each plan includes a monthly pool of <strong>AI credits</strong>. The assistant shows how
        many you have left at the top of the chat.
      </p>
      <Split
        canTitle="Good to know"
        lockedTitle="When you run low"
        can={[
          "Your credits refresh every month",
          "The meter warns you as you get close",
          "Some plans include unlimited use — no meter at all",
        ]}
        locked={[
          "At zero, sending pauses until it resets",
          "You can upgrade your plan to get more",
          "Nothing is charged without you choosing to upgrade",
        ]}
      />
      <Callout type="tip" title="Out of credits?">
        You'll see a friendly “you've reached your limit” note with an <strong>Upgrade</strong> button.
        Upgrade your plan or wait for the monthly reset — your conversation stays put.
      </Callout>

      <H2 id="who">Who can use it</H2>
      <Callout type="note" title="Fund-seekers today">
        The AI Assistant is currently built for <strong>fund-seekers</strong>, where guidance matters
        most on the journey to fundable. If you don't see the chat button, it isn't enabled for your
        role yet.
      </Callout>

      <Helpful />
    </DocPage>
  );
}
