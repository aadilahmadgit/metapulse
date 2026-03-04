import Image from "next/image";

type BlogPost = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageSrc: string;
};

const posts: BlogPost[] = [
  {
    title: "MetaPulse wins a Gold at the 2026 Digital Awards",
    date: "March 1, 2026",
    category: "News",
    excerpt:
      "Our work on a youth-focused, multi-platform campaign brought home a gold at one of the industry’s leading digital awards.",
    imageSrc: "/blog/post-1.jpg", // TODO: replace with your uploaded image path
  },
  {
    title: "Building performance-first social campaigns",
    date: "February 10, 2026",
    category: "Insights",
    excerpt:
      "How we structure MetaPulse social media campaigns to balance thumb-stopping creative with measurable business outcomes.",
    imageSrc: "/blog/post-2.jpg", // TODO: replace with your uploaded image path
  },
  {
    title: "Why integrated analytics matters more than ever",
    date: "January 22, 2026",
    category: "Analytics",
    excerpt:
      "From dashboards to decisions: a practical look at tying together web, media, and CRM data for better marketing choices.",
    imageSrc: "/blog/post-3.jpg", // TODO: replace with your uploaded image path
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="border-b border-neutral-200 bg-neutral-50 pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
            MetaPulse Blog
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            News, insights & stories from our team.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-neutral-700">
            The latest from MetaPulse on digital strategy, social, performance
            marketing, and analytics – plus updates on the work we&apos;re proud
            of.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full bg-neutral-100">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5 text-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                    {post.category}
                  </p>
                  <h2 className="text-base font-semibold text-neutral-900">
                    {post.title}
                  </h2>
                  <p className="text-xs text-neutral-500">{post.date}</p>
                  <p className="mt-1 text-neutral-700">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

