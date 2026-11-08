import { publications } from "../../data/portfolio";
import { ExternalIcon } from "./Icons";
import Section from "./Section";

const ME = "Ayman Iktidar";

function Authors({ authors }) {
  return (
    <p className="mt-3 text-slate">
      {authors.map((name, index) => (
        <span key={name}>
          {name === ME ? (
            <strong className="font-semibold text-ink">{name}</strong>
          ) : (
            name
          )}
          {index < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

function Paper({ paper }) {
  const wrapper = paper.featured
    ? "rounded-2xl border border-line bg-white px-6 py-8 shadow-sm sm:px-8"
    : "border-t border-line py-9";

  return (
    <article id={`paper-${paper.id}`} className={`grid gap-6 md:grid-cols-[7.5rem_1fr] ${wrapper}`}>
      <div>
        <p className="font-display text-4xl leading-none text-ink">{paper.year}</p>
        <p className="mt-2 text-sm text-slate">{paper.type}</p>
      </div>

      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ink px-3 py-1 text-xs text-white">
            {paper.role}
          </span>
          {paper.award && (
            <span className="rounded-full bg-lamp px-3 py-1 text-xs font-medium text-night">
              {paper.award}
            </span>
          )}
        </div>

        <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-[1.65rem]">
          {paper.title}
        </h3>
        <Authors authors={paper.authors} />
        <p className="mt-1 italic text-slate">{paper.venue}</p>

        <p className="mt-5 leading-relaxed text-ink/90">{paper.summary}</p>

        <ul className="mt-5 space-y-2 border-l-2 border-lamp pl-4 text-ink/90">
          {paper.results.map((result) => (
            <li key={result}>{result}</li>
          ))}
        </ul>

        {paper.link && (
          <a
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-medium text-signal underline decoration-signal/30 underline-offset-4 transition-colors hover:decoration-signal"
          >
            Read the paper
            <ExternalIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Research() {
  return (
    <Section
      id="research"
      tone="white"
      title="Research"
      intro="Five papers across healthcare AI, multimodal learning and Bangla NLP. Each entry says what the work found, in plain terms, and my role in it."
    >
      <div className="space-y-2">
        {publications.map((paper) => (
          <Paper key={paper.id} paper={paper} />
        ))}
      </div>
    </Section>
  );
}
