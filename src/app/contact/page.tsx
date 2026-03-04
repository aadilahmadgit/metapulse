import { ContactForm } from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Hero + intro */}
      <section className="border-b border-neutral-200 bg-neutral-50 pt-28 pb-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-600">
            Get in touch
          </p>
          <h1 className="mt-4 text-3xl font-bold md:text-4xl">
            Tell MetaPulse a bit about your project.
          </h1>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-neutral-700">
            Share your details and a quick overview of what you&apos;re looking
            to achieve. We&apos;ll review your form and get back to you with
            next steps.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-700">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                Email
              </div>
              <div>hello@metapulse.agency</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-600">
                Locations
              </div>
              <div>New Delhi · Dubai · Toronto</div>
            </div>
          </div>

        </div>
      </section>

      {/* EmailJS form */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

