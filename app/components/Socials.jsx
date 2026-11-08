import { profile } from "../../data/portfolio";
import { DownloadIcon } from "./Icons";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="night-sky on-night relative overflow-hidden py-20 text-moon sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Looking for a research group to join in 2027
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-haze">
          If your lab works on healthcare AI, multimodal learning or low-resource
          language models, I would like to hear from you. Email is the best way to reach me.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-lamp px-6 py-3 font-medium text-night transition-colors hover:bg-moon"
          >
            {profile.email}
          </a>
          <a
            href={profile.cv}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-moon transition-colors hover:border-lamp hover:text-lamp"
          >
            <DownloadIcon width={18} height={18} />
            Download CV
          </a>
        </div>

        <SocialLinks className="mt-8" />

        <p className="mt-16 border-t border-white/10 pt-6 text-sm text-haze">
          {profile.name}, {profile.location}. {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
