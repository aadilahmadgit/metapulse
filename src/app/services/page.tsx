const services = [
  {
    title: "Social Media Marketing",
    description:
      "Channel-specific strategies, content calendars, and always-on campaigns designed to grow communities and engagement across platforms.",
  },
  {
    title: "Performance Marketing",
    description:
      "Full-funnel paid campaigns on search, social, and display with clear KPIs, real-time optimization, and transparent reporting.",
  },
  {
    title: "Web Analytics & Measurement",
    description:
      "Instrumentation, dashboards, and insight frameworks that turn your data into clear decisions and next steps.",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Technical, on-page, and content SEO that improves discoverability and builds a durable foundation for organic growth.",
  },
  {
    title: "Website Design & Development",
    description:
      "Fast, responsive websites and landing pages that combine brand storytelling with conversion-focused UX.",
  },
  {
    title: "Integrated Digital Solutions",
    description:
      "Joined-up campaigns that connect channels, audiences, and journeys into a single performance-focused ecosystem.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
            Our Services
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Digital services built for brands that take performance seriously.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-neutral-700">
            MetaPulse brings strategy, creative, media, and analytics together
            to create campaigns that don&apos;t just look good, they move key
            metrics. Whether you&apos;re launching, scaling, or refreshing, we
            plug in as an extension of your team.
          </p>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-start">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Strategy, creativity & results.
              </h2>
              <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-700">
                In a world where every touchpoint is connected, your digital
                presence has to be joined-up too. Our approach connects
                storytelling with performance – from social feeds and landing
                pages to ads, email, and analytics.
              </p>
              <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-700">
                We work with MetaPulse clients through retainers, projects, or
                sprints depending on where you are in your growth journey.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-neutral-50 p-6 text-sm">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
                How we partner with you
              </h3>
              <ul className="space-y-2 text-neutral-800">
                <li>End-to-end ownership or embedded team support</li>
                <li>Clear KPIs, roadmaps, and check-ins</li>
                <li>Experimentation, testing, and continuous optimization</li>
                <li>Transparent performance dashboards and reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                What MetaPulse can help with
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-700">
                Pick a single service or combine multiple to build an
                integrated plan. We&apos;ll help you shape the right mix.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div>
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="mt-3 text-neutral-700">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-3 max-w-xl text-sm md:text-base text-neutral-700">
              Share a quick brief about your brand, and we&apos;ll map a
              MetaPulse services stack that matches your goals and budgets.
            </p>
          </div>
          <button className="rounded-full bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-neutral-800">
            Talk to our team
          </button>
        </div>
      </section>
    </div>
  );
}

