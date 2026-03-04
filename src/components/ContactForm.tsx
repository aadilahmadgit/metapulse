"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
            First name
          </label>
          <input
            type="text"
            name="first_name"
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
            Last name
          </label>
          <input
            type="text"
            name="last_name"
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
            Company
          </label>
          <input
            type="text"
            name="company"
            className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
            Phone number
          </label>
          <input
            type="tel"
            name="number"
            className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
            Budget
          </label>
          <input
            type="text"
            name="budget"
            className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700">
          Project details
        </label>
        <textarea
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-xl border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-neutral-900"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-xs text-emerald-600">
          Thank you. Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-600">
          Something went wrong. Please try again or use the Google Form link.
        </p>
      )}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </form>
  );
}

