import { DocPage } from "../components/Layout";
import { Divider, Callout, Helpful } from "../components/doc";
import { Glossary } from "../components/Glossary";
import { Icon } from "../components/Icon";
import { ALL_TERMS } from "../data/glossary";

export function GlossaryPage() {
  return (
    <DocPage
      title="Glossary"
      section="Welcome"
      toc={[{ id: "terms", label: "Browse all terms" }]}
    >
      <div className="mb-2 flex items-start gap-4">
        <span className="grid h-[54px] w-[54px] shrink-0 place-items-center rounded-[14px] bg-selected text-primary">
          <Icon name="book" size={26} />
        </span>
        <div>
          <h1 className="mb-2 bg-[linear-gradient(120deg,#fff_30%,var(--primary)_130%)] bg-clip-text font-head text-[40px] font-bold leading-[1.18] text-transparent light:bg-[linear-gradient(120deg,#0a0a14_30%,var(--primary)_140%)] max-[900px]:text-3xl">
            Glossary
          </h1>
          <p className="m-0 text-[17px] text-txt-muted">
            Every term used across Astute, in one searchable place — search by word, filter by
            module, or jump to a letter.
          </p>
        </div>
      </div>
      <Divider />

      <Callout type="tip" title="Quick tip">
        Press <strong>/</strong> anywhere on this page to jump straight into the search box, and{" "}
        <strong>Esc</strong> to clear it.
      </Callout>

      <div id="terms">
        <Glossary terms={ALL_TERMS} categories={["investor", "firm", "lender", "admin"]} />
      </div>

      <Helpful />
    </DocPage>
  );
}
