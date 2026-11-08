"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, publications } from "../../data/portfolio";
import { DownloadIcon } from "./Icons";
import SocialLinks from "./SocialLinks";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="night-sky on-night relative overflow-hidden pb-20 pt-32 text-moon sm:pt-36"
    >
      {/* A distant streetlamp */}
      <div
        aria-hidden="true"
        className="lamp-glow pointer-events-none absolute -top-24 right-[8%] h-72 w-72 rounded-full bg-lamp/25 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center"
      >
        <div>
          <motion.div
            variants={item}
            className="relative h-48 w-48 overflow-hidden rounded-full ring-2 ring-lamp/70 ring-offset-4 ring-offset-night"
          >
            <Image
              src="/images/port_image.jpeg"
              alt="Portrait of Ayman Iktidar"
              fill
              sizes="96px"
              priority
              className="object-cover"
              style={{
                objectPosition: "50% 30%",
                transform: "scale(1.8)",
                transformOrigin: "50% 30%",
              }}
            />
          </motion.div>

         

          <motion.h1
            variants={item}
            className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl font-display text-2xl leading-snug text-moon/95 sm:text-[1.75rem]"
          >
            {profile.statement}
          </motion.p>

        

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.cv}
              className="inline-flex items-center gap-2 rounded-full bg-lamp px-6 py-3 font-medium text-night transition-colors hover:bg-moon"
            >
              <DownloadIcon width={18} height={18} />
              Download CV
            </a>
            <a
              href="#research"
              className="rounded-full border border-white/25 px-6 py-3 text-moon transition-colors hover:border-lamp hover:text-lamp"
            >
              Read the papers
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8">
            <SocialLinks />
          </motion.div>
        </div>

        {/* The ledger: every paper at a glance */}
        <motion.aside
          variants={item}
          aria-label="Publications at a glance"
          className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
        >
          <h2 className="font-display text-2xl text-moon">
            Research Highlights (2024 to 2026)
          </h2>
          <ol className="mt-5 divide-y divide-white/10">
            {publications.map((paper) => (
              <li key={paper.id}>
                <a
                  href={`#paper-${paper.id}`}
                  className="group flex items-baseline gap-4 py-3.5"
                >
                  <span className="w-10 shrink-0 text-sm tabular-nums text-lamp">
                    {paper.year}
                  </span>
                  <span className="flex-1">
                    <span className="block leading-snug text-moon transition-colors group-hover:text-lamp">
                      {paper.shortTitle}
                    </span>
                    <span className="mt-0.5 block text-sm text-haze">
                      {paper.venue.split(",")[0]}
                      {paper.award ? `, ${paper.award}` : ""}
                    </span>
                  </span>
                  {paper.role === "First author" && (
                    <span className="shrink-0 rounded-full bg-lamp/15 px-2.5 py-0.5 text-xs text-lamp">
                      First author
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ol>
        </motion.aside>
      </motion.div>
    </section>
  );
}
