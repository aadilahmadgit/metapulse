export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
            About MetaPulse
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            A digital-first partner for brands that want to grow faster.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-neutral-700">
            MetaPulse is a full-service digital marketing studio helping brands
            design, launch, and scale performance-driven campaigns. We mix
            strategy, creativity, and analytics to build work that looks good
            and works even better.
          </p>
        </div>
      </section>

      {/* Story & philosophy */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold md:text-3xl">
              We create super-rich experiences online.
            </h2>
            <p className="text-sm md:text-base text-neutral-700">
              Our team comes from brand, agency, and product backgrounds. That
              means we understand the pressures on marketing teams as well as
              the realities of building digital products. We bring all of that
              experience together to create integrated campaigns that span
              social, search, web, and performance media.
            </p>
            <p className="text-sm md:text-base text-neutral-700">
              Every engagement starts with understanding your business, your
              audience, and the outcomes that matter. From there we map a clear
              strategy, build the creative, and continuously optimize based on
              data and real-world results.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl bg-neutral-50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-neutral-700">
              MetaPulse at a glance
            </h3>
            <dl className="grid gap-4 text-sm text-neutral-800">
              <div>
                <dt className="font-semibold">Multi-disciplinary team</dt>
                <dd className="text-neutral-700">
                  Strategists, performance marketers, designers, writers, and
                  developers working together under one roof.
                </dd>
              </div>
              <div>
                <dt className="font-semibold">End-to-end capability</dt>
                <dd className="text-neutral-700">
                  From campaign planning and content to landing pages,
                  optimization, and reporting.
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Performance mindset</dt>
                <dd className="text-neutral-700">
                  Every idea is tied to clear KPIs and measured against real
                  outcomes, not just impressions.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Approach columns */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-semibold md:text-3xl">
            How we work with brands
          </h2>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-700">
            Our process is collaborative, transparent, and designed to keep
            marketing, product, and leadership teams aligned.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 text-sm shadow-sm">
              <h3 className="text-base font-semibold">Discover & define</h3>
              <p className="mt-3 text-neutral-700">
                Deep dive into your brand, audience, competition, and goals. We
                identify opportunities and define what success looks like for
                MetaPulse and your team.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-sm shadow-sm">
              <h3 className="text-base font-semibold">Design & launch</h3>
              <p className="mt-3 text-neutral-700">
                We translate strategy into creative, content, journeys, and
                media plans. Then we launch, measure, and refine quickly.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 text-sm shadow-sm">
              <h3 className="text-base font-semibold">Optimize & scale</h3>
              <p className="mt-3 text-neutral-700">
                Structured experimentation, reporting, and insights to keep your
                digital presence improving month after month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations / presence */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Based in New Delhi, working with teams everywhere.
              </h2>
              <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-700">
                MetaPulse partners with brands across India and beyond. Our
                distributed teams make it easy to collaborate across time zones
                while staying closely connected to local markets.
              </p>
            </div>

            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div className="rounded-3xl bg-neutral-50 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
                  New Delhi
                </h3>
                <p className="mt-3 text-neutral-700">
                  Headquarters and core strategy, design, and performance teams.
                </p>
              </div>
              <div className="rounded-3xl bg-neutral-50 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
                  Global clients
                </h3>
                <p className="mt-3 text-neutral-700">
                  Experience working with brands across different regions and
                  categories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ready to talk about what&apos;s next for your brand?
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-neutral-700">
              Share a brief about your goals and timelines, and we&apos;ll come
              back with ideas on how MetaPulse can help.
            </p>
          </div>
          <button className="rounded-full bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-neutral-800">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
}

