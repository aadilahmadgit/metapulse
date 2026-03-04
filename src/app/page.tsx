export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20">
        {/* Yellow angled band */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 -skew-x-12 bg-yellow-400" />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div className="max-w-xl space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-600">
              We create super-rich
            </p>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Experiences online for brands that want to stand out.
            </h1>
            <p className="max-w-md text-sm md:text-base text-neutral-700">
              MetaPulse is a full-scale digital marketing partner. We blend
              strategy, creativity, and performance to build campaigns that
              connect with people and move the needle.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-neutral-900 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-neutral-800">
                Our Services
              </button>
              <button className="rounded-full border border-neutral-900 px-6 py-2 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-neutral-100">
                Our Work
              </button>
            </div>
          </div>

          <div className="flex-1">
            <div className="ml-auto h-48 w-full max-w-xs rounded-3xl bg-neutral-900/90 p-6 text-white shadow-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
                Digital. And more digital.
              </p>
              <p className="mt-4 text-sm text-neutral-100">
                Always-on campaigns, content, performance marketing, and data-led
                optimization for ambitious brands.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-semibold">20+ brands</p>
                  <p className="text-neutral-300">across industries</p>
                </div>
                <div>
                  <p className="font-semibold">Multi-market</p>
                  <p className="text-neutral-300">India & beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-neutral-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-[1.2fr,1fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
                What we do
              </p>
              <h2 className="mt-4 text-2xl font-bold md:text-3xl">Digital.</h2>
              <p className="mt-4 max-w-xl text-sm md:text-base text-neutral-700">
                We craft digital experiences that feel premium and perform
                relentlessly. From always-on social media to full-funnel paid
                media, websites, and experiences – we design, build, and
                optimize everything with outcomes in mind.
              </p>
            </div>

            <div className="space-y-4 rounded-3xl bg-neutral-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
                Services snapshot
              </p>
              <ul className="space-y-2 text-sm text-neutral-800">
                <li>Social media & content marketing</li>
                <li>Performance & growth marketing</li>
                <li>Web design & development</li>
                <li>SEO & search marketing</li>
                <li>Analytics, reporting & optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Our Services
          </h2>
          <p className="mt-3 text-center text-sm text-neutral-700 md:text-base">
            Strategy, creativity, and performance working together.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Social Media Marketing",
              "Performance Marketing",
              "Web Analytics",
              "Search Engine Optimization",
              "Website Design & Development",
              "Integrated Digital Solutions",
            ].map((item) => (
              <div
                key={item}
                className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-5 text-sm shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-base font-semibold">{item}</h3>
                <p className="mt-3 text-xs text-neutral-700">
                  Tailored strategies, creative assets, and always-on
                  optimization built around your business goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">What our clients say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "Reassuring to work with people who treat your properties as their own and think pro‑actively.",
                name: "Ankita Dasgupta",
                role: "Marketing Manager, Teamwork Arts",
              },
              {
                quote:
                  "A fantastic partner in helping us define and optimize our digital objectives.",
                name: "Harkaran Malhotra",
                role: "Deputy Director, ACMA",
              },
              {
                quote:
                  "If I have a story, they are the storytellers. They make your story heard and understood.",
                name: "Gaurav Sandilya",
                role: "S.R. Overseas",
              },
            ].map((item) => (
              <figure
                key={item.name}
                className="flex h-full flex-col justify-between rounded-3xl bg-neutral-50 p-6 text-sm"
              >
                <p className="text-neutral-800">&ldquo;{item.quote}&rdquo;</p>
                <figcaption className="mt-4 text-xs text-neutral-600">
                  <div className="font-semibold text-neutral-900">
                    {item.name}
                  </div>
                  <div>{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 text-xs text-neutral-600">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div>MetaPulse © {new Date().getFullYear()}. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <span>New Delhi · Dubai · Toronto</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
