"use client";

import { useState } from "react";
import { profile } from "../../data/portfolio";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="on-night fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-moon"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-haze transition-colors hover:text-lamp"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 rounded-full border border-lamp/60 px-4 py-1.5 text-sm text-lamp transition-colors hover:bg-lamp hover:text-night"
            >
              <DownloadIcon width={16} height={16} />
              CV
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="text-moon md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-white/10 bg-night px-6 pb-5 pt-3 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2.5 text-haze hover:text-lamp"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.cv}
              className="mt-2 inline-flex items-center gap-2 text-lamp"
              onClick={() => setOpen(false)}
            >
              <DownloadIcon width={16} height={16} />
              Download CV
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
