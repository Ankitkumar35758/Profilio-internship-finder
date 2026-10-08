import { Guidelines } from './parts';

export function BrandLogoPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-primary p-8 text-primary-foreground">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
          Primary mark
        </p>
        <div className="mt-6 inline-flex rounded-xl bg-[#FBF9F5] px-5 py-3">
          <img
            src={`${import.meta.env.BASE_URL}profilio-logo.png`}
            alt="Profilio logo"
            className="h-12 w-auto"
          />
        </div>
        <p className="mt-5 max-w-xl text-sm text-primary-foreground/80">
          The retained product logo is shown on the warm cream lockup so its
          green wordmark stays legible against both the application sidebar and
          light product surfaces.
        </p>
      </section>

      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Placement</h2>
        <div className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <p>Use the mark in the persistent navigation and product entry points.</p>
          <p>Keep the logo visually quiet; the product headline carries the page hierarchy.</p>
          <p>Use the original raster asset rather than redrawing the wordmark.</p>
          <p>Preserve the surrounding breathing room from the source product.</p>
        </div>
      </section>
    </div>
  );
}

export function PrinciplesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Make the next step feel possible</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Profilio pairs a calm, editorial surface with direct calls to action.
          It should feel like a thoughtful studio, not a noisy job board.
        </p>
        <div className="mt-5">
          <Guidelines
            items={[
              { kind: 'do', text: 'Lead with a clear, human headline and one useful next action.' },
              { kind: 'do', text: 'Use the forest-green and cream contrast to make discovery feel trustworthy.' },
              { kind: 'do', text: 'Keep helper text concise, warm, and specific to the student or company context.' },
              { kind: 'dont', text: 'Do not stack competing accents or turn every surface into a callout.' },
              { kind: 'dont', text: 'Do not use generic, overly corporate copy when a direct sentence will do.' },
            ]}
          />
        </div>
      </section>

      <section className="rounded-2xl border bg-card p-6 text-card-foreground">
        <h2 className="font-semibold">Hierarchy and rhythm</h2>
        <div className="mt-4">
          <Guidelines
            items={[
              { kind: 'do', text: 'Use Plus Jakarta Sans for display headings and Inter for body, labels, and metadata.' },
              { kind: 'do', text: 'Build layouts from the 4px spacing rhythm, with 24–32px page and card breathing room.' },
              { kind: 'do', text: 'Use soft 12–16px corners for cards and controls; keep the overall silhouette approachable.' },
              { kind: 'dont', text: 'Do not compress key profile or opportunity content into dense tables when a card can clarify it.' },
              { kind: 'dont', text: 'Do not rely on color alone for active, match, or visibility states.' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}