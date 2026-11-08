import { about } from "../../data/portfolio";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div className="max-w-xl space-y-5 text-lg leading-relaxed text-ink/90">
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <div>
          <h3 className="font-display text-2xl text-ink">
            Research Interests
          </h3>

          <div className="mt-6 flex flex-wrap gap-3">
            {about.interests.map((interest) => (
              <span
                key={interest.title}
                className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {interest.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}