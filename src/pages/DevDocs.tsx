import { DocPage } from "../components/Layout";
import { Callout, Code, H2, Table, Helpful, FileTree } from "../components/doc";

export function DevDocs() {
  return <DocPage title="Dev docs" section="Developer" toc={[{id:"purpose",label:"Purpose"},{id:"stack",label:"Stack"},{id:"run",label:"Run locally"},{id:"structure",label:"Structure"},{id:"content",label:"Adding documentation"},{id:"quality",label:"Quality checks"}]}>
    <h1 className="mb-3.5 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">Developer guide</h1>
    <p className="mb-[34px] mt-0 max-w-[720px] text-[18.5px] leading-[1.6] text-txt-muted">Technical guidance for this documentation application. Product architecture claims belong in an approved engineering reference—not in assumptions derived from the docs site.</p>

    <H2 id="purpose">Purpose</H2>
    <p>This repository publishes the end-user guide for Astute as a standalone single-page application. It contains editorial content, interactive explainers, role journeys, glossary data and the shared documentation shell.</p>
    <Callout type="info" title="Source hierarchy">Use the platform handbook for current product behaviour, the PRD for deeper intent and historical requirements, and shipped product contracts for implementation details. Where sources conflict, record and resolve the conflict rather than blending claims.</Callout>

    <H2 id="stack">Stack</H2>
    <Table head={["Layer","Technology"]} rows={[
      ["Application","React 19 + TypeScript"],
      ["Build","Vite 6"],
      ["Routing","React Router 7"],
      ["Styling","Tailwind CSS 4 with shared theme tokens"],
      ["Content model","Typed TSX pages plus structured glossary data"],
    ]}/>

    <H2 id="run">Run locally</H2>
    <Code lang="bash" filename="terminal">{`npm install
npm run dev      # local Vite server
npm run build    # TypeScript check + production bundle
npm run preview  # preview the production bundle`}</Code>

    <H2 id="structure">Project structure</H2>
    <FileTree>
      <div><span className="text-primary">src/</span></div>
      <div>├─ <span className="text-primary">pages/</span> <span className="text-txt-dim"># routed documentation modules</span></div>
      <div>├─ <span className="text-primary">components/</span> <span className="text-txt-dim"># layout, content primitives and interactive visuals</span></div>
      <div>├─ <span className="text-primary">data/</span> <span className="text-txt-dim"># structured glossary content</span></div>
      <div>├─ <span className="text-primary">styles/</span> <span className="text-txt-dim"># Tailwind theme and global styles</span></div>
      <div>├─ <span className="text-primary">nav.ts</span> <span className="text-txt-dim"># navigation and search catalogue</span></div>
      <div>└─ <span className="text-primary">App.tsx</span> <span className="text-txt-dim"># route registration</span></div>
    </FileTree>

    <H2 id="content">Adding documentation</H2>
    <ol><li>Create or extend a typed page component in <code>src/pages</code>.</li><li>Register its route in <code>src/App.tsx</code>.</li><li>Add the discoverable label and search keywords in <code>src/nav.ts</code>.</li><li>Use shared primitives such as <code>DocPage</code>, <code>H2</code>, <code>Table</code> and <code>Callout</code>.</li><li>State feature maturity explicitly when a workflow is switched, partial or planned.</li></ol>

    <H2 id="quality">Quality checks</H2>
    <ul><li>Use one product name and consistent role terminology.</li><li>Separate live behaviour from roadmap intent.</li><li>Describe trust and privacy gates without exposing eligibility internals.</li><li>Make every new page reachable through navigation and command search.</li><li>Run the production build before publishing and test desktop and mobile navigation.</li></ul>
    <Helpful />
  </DocPage>;
}
