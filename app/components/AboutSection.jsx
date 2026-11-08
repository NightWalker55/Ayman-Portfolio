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
          <h3 className="font-display text-2xl text-ink">Research interests</h3>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {about.interests.map((interest) => (
              <div
                key={interest.title}
                className="grid gap-1 py-5 sm:grid-cols-[13rem_1fr] sm:gap-6"
              >
                <dt className="font-medium text-ink">{interest.title}</dt>
                <dd className="leading-relaxed text-slate">{interest.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-slate">
            Also curious about: {about.alsoInterested}
          </p>
        </div>
      </div>
    </Section>
  );
}
