"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Get In Touch", href: "/contact" },
  { label: "Work With Us", href: "/#careers" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-semibold tracking-tight text-emerald-700">
            MetaPulse
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-neutral-800">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative whitespace-nowrap text-xs uppercase tracking-[0.25em] text-neutral-800 transition-colors hover:text-yellow-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search icon */}
          <button
            aria-label="Search"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 text-neutral-800 transition-colors hover:border-yellow-400 hover:text-yellow-500"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="6"
                className="fill-none stroke-current"
                strokeWidth="1.5"
              />
              <line
                x1="15"
                y1="15"
                x2="20"
                y2="20"
                className="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-neutral-800 p-2 text-neutral-800 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <ul className="space-y-3 text-sm font-medium text-neutral-900 bg-white/90 backdrop-blur rounded-xl shadow-md p-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block w-full py-1 text-left text-xs uppercase tracking-[0.25em]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

