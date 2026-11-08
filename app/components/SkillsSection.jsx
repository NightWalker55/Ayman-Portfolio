import { recognition, skills } from "../../data/portfolio";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" title="Skills and recognition">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h3 className="font-display text-2xl text-ink">Skills</h3>
          <dl className="mt-5 divide-y divide-line border-y border-line">
            {skills.map((group) => (
              <div
                key={group.title}
                className="grid gap-2 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6"
              >
                <dt className="font-medium text-ink">{group.title}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-sm text-ink ring-1 ring-line"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="font-display text-2xl text-ink">Recognition</h3>
          <ul className="mt-5 space-y-6">
            {recognition.map((entry) => (
              <li key={entry.title} className="border-l-2 border-lamp pl-4">
                <p className="font-semibold text-ink">{entry.title}</p>
                <p className="mt-1 leading-relaxed text-slate">{entry.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
