import { education, experience } from "../../data/portfolio";
import Section from "./Section";

function Timeline({ heading, entries }) {
  return (
    <div>
      <h3 className="font-display text-2xl text-ink">{heading}</h3>
      <ol className="mt-6 space-y-8 border-l border-line pl-6">
        {entries.map((entry) => (
          <li key={entry.title + entry.period} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.85rem] top-2 h-2.5 w-2.5 rounded-full bg-lamp ring-4 ring-paper"
            />
            <p className="text-sm text-slate">{entry.period}</p>
            <h4 className="mt-1 text-lg font-semibold leading-snug text-ink">
              {entry.title}
            </h4>
            <p className="text-ink/80">{entry.org}</p>
            <p className="mt-2 max-w-md leading-relaxed text-slate">{entry.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <div className="grid gap-14 lg:grid-cols-2">
        <Timeline heading="Teaching" entries={experience} />
        <Timeline heading="Education" entries={education} />
      </div>
    </Section>
  );
}
