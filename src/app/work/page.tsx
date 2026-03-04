import Image from "next/image";

type CaseStudy = {
  title: string;
  sector: string;
  summary: string;
  imageSrc: string;
};

const work: CaseStudy[] = [
  {
    title: "Youth engagement campaign",
    sector: "Events & Entertainment",
    summary:
      "Always-on social, influencer, and performance campaigns that turned a festival into a year-round conversation.",
    imageSrc: "/work/case-1.jpg", // TODO: replace with your uploaded image path
  },
  {
    title: "B2B lead engine",
    sector: "Manufacturing & Automotive",
    summary:
      "Multi-market performance strategy combining search, social, and landing pages to consistently feed the sales pipeline.",
    imageSrc: "/work/case-2.jpg", // TODO: replace with your uploaded image path
  },
  {
    title: "Brand refresh & launch",
    sector: "Consumer Services",
    summary:
      "New digital identity, website, and launch campaigns that repositioned the brand and unlocked new audiences.",
    imageSrc: "/work/case-3.jpg", // TODO: replace with your uploaded image path
  },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
            Our Work
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Case studies from MetaPulse clients.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-neutral-700">
            A look at how MetaPulse combines strategy, creative, and
            performance to solve real problems for brands across categories.
          </p>
        </div>
      </section>

      {/* Work grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Selected case studies
              </h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-neutral-700">
                These are representative examples. When you&apos;re ready, we
                can walk you through work closer to your industry and goals.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {work.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full bg-neutral-100">
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                    {item.sector}
                  </p>
                  <h3 className="text-base font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-neutral-700">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

